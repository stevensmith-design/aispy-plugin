// Local pre-check of the plugin folder against the plugin directory's rules for an unverified
// publisher, as the validator reported them. It catches the mechanical ones before submitting;
// the directory's validator is still the authority.
// Usage: node build/preflight.mjs [plugin]
import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve(process.argv[2] || 'plugin');
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const files = walk(dir);
const TEXT = new Set(['.md', '.txt', '.json', '.yaml', '.yml']);
const IMG = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico']);
const ALLOWED_NOEXT = new Set(['LICENSE', '.gitignore']);
const BAN_NAMES = /^(package(-lock)?\.json|pnpm-(lock|workspace)\.yaml|yarn\.lock|requirements.*\.txt|Pipfile.*|hooks\.json|\.mcp\.json|\.lsp\.json|monitors\.json)$/;
// Lines a community plugin must not carry: install or run commands, registry changes.
const CMD = [
  /\b(npm|pnpm|yarn|bun)\s+(install|i|add|ci|exec|dlx|x)\b/,
  /\bnpx\s+\S/,
  /\bpip3?\s+install\b/, /\bbrew\s+install\b/, /\b(curl|wget)\s+\S*https?:/,
  /\bgit\s+clone\b/,
  /(^|`|\$\s*)(node|python3?|bash|sh|deno|bun)\s+[\w./<>-]+\.(mjs|cjs|js|ts|py|sh)\b/,
  /\bregistry\s*=|--registry\b|index-url/,
];
const PLUGIN_FIELDS = new Set(['name', 'version', 'description', 'author', 'homepage', 'repository', 'license', 'keywords', 'icon', 'skills', 'commands', 'agents', 'supportUrl', 'documentationUrl', 'privacyPolicyUrl', 'termsOfServiceUrl']);

let errors = 0; let warnings = 0;
const err = (m) => { console.log(`✗ ${m}`); errors++; };
const warn = (m) => { console.log(`! ${m}`); warnings++; };
const rel = (f) => path.relative(dir, f);

if (files.length > 512) err(`${files.length} files: the limit is 512`);
for (const f of files) {
  const r = rel(f); const base = path.basename(f); const ext = path.extname(f).toLowerCase();
  if (!/^[A-Za-z0-9._\-/@]+$/.test(r)) err(`${r}: path has a character not every computer keeps`);
  if (BAN_NAMES.test(base)) { err(`${r}: package-manager or tool config file`); continue; }
  if (r.startsWith('.claude/') || (r.includes('.claude-plugin/') && !r.startsWith('.claude-plugin/'))) err(`${r}: nested .claude or .claude-plugin folder`);
  if (ext === '.svg') { err(`${r}: SVG not accepted (use PNG)`); continue; }
  const buf = fs.readFileSync(f);
  if (IMG.has(ext)) {
    if (ext === '.ico') warn(`${r}: .ico can't be read in full by the validator`);
    if (buf.includes(Buffer.from('PK\x03\x04', 'binary'))) err(`${r}: image looks like it holds a zip archive`);
    if (buf.length > 2 * 1024 * 1024) warn(`${r}: image over 2 MB`);
    continue;
  }
  if (!TEXT.has(ext) && !ALLOWED_NOEXT.has(base)) { err(`${r}: file type not accepted (Markdown, text, JSON, YAML or PNG/JPEG/GIF/WebP only)`); continue; }
  if (buf.includes(0)) err(`${r}: NUL byte`);
  const s = buf.toString('utf8');
  if (Buffer.from(s, 'utf8').length !== buf.length) err(`${r}: not valid UTF-8`);
  if (s.startsWith('#!')) err(`${r}: starts with #!`);
  if (buf.length > 256 * 1024) err(`${r}: ${Math.round(buf.length / 1024)} KB: text over 256 KB isn't read in full`);
  s.split('\n').forEach((line, i) => { for (const re of CMD) if (re.test(line)) { warn(`${r}:${i + 1}: command line: ${line.trim().slice(0, 120)}`); break; } });
}

const mf = path.join(dir, '.claude-plugin/plugin.json');
if (!fs.existsSync(mf)) err('.claude-plugin/plugin.json missing');
else {
  const m = JSON.parse(fs.readFileSync(mf, 'utf8'));
  for (const k of Object.keys(m)) if (!PLUGIN_FIELDS.has(k)) err(`plugin.json: field "${k}" not on the allowed list`);
  const others = fs.readdirSync(path.join(dir, '.claude-plugin')).filter((n) => n !== 'plugin.json' && !/\.(png|jpe?g)$/i.test(n));
  if (others.length) err(`.claude-plugin/ holds ${others.join(', ')}`);
}
const icon = path.join(dir, '.claude-plugin/icon.png');
if (!fs.existsSync(icon)) warn('no .claude-plugin/icon.png (square PNG, 512–2048 px, under 2 MB; the first one submitted becomes the listing icon for good)');
else {
  const b = fs.readFileSync(icon); const w = b.readUInt32BE(16); const h = b.readUInt32BE(20);
  if (w !== h || w < 512 || w > 2048) err(`icon.png is ${w}×${h}: needs square, 512–2048 px`);
  if (b.length > 2 * 1024 * 1024) err('icon.png over 2 MB');
}
if (fs.existsSync(path.join(dir, 'CLAUDE.md'))) warn('CLAUDE.md at the plugin root is not loaded: move what it says into a skill');
if (!fs.existsSync(path.join(dir, 'skills'))) err('no skills/ folder');

console.log(`\n${files.length} files · ${errors} error(s) · ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);
