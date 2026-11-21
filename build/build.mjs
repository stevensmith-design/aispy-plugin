// Build the plugin-directory edition of AIspy from a tagged release of the full kit.
// Usage: node build/build.mjs [--aispy ../aispy] [--tag vX.Y.Z] [--out plugin] [--no-render]
//
// Reads the kit at the tag with `git archive` (never the working copy), and writes a plugin made
// only of Markdown, JSON and images:
//   - skills: every .md (tests, evals, scripts and fixtures left out); design-kit skills flattened
//     into skills/<name>/; script steps replaced by a pointer to plugin-mode.md
//   - templates: each .html/.css/.js becomes <file>.md with the exact source in one fenced block
//   - examples: each document's markup as <doc>.html.md (embedded images removed), plus one
//     screenshot per section (build/render.mjs, using the kit's own Playwright install)
//   - overlay/: files of this edition (plugin-mode.md, the checklist, README)
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const argv = process.argv.slice(2);
const opt = (k, d) => { const i = argv.indexOf(`--${k}`); return i >= 0 ? argv[i + 1] : d; };
const aispy = path.resolve(root, opt('aispy', '../aispy'));
const tag = opt('tag') || execFileSync('git', ['-C', aispy, 'tag', '--sort=-v:refname'], { encoding: 'utf8' }).split('\n')[0];
const out = path.resolve(root, opt('out', 'plugin'));
const commit = execFileSync('git', ['-C', aispy, 'rev-list', '-n', '1', tag], { encoding: 'utf8' }).trim();

// 1. The kit at the tag, in a temporary folder.
const src = fs.mkdtempSync(path.join(os.tmpdir(), 'aispy-src-'));
execFileSync('sh', ['-c', `git -C "${aispy}" archive "${tag}" | tar -x -C "${src}"`]);
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
const S = (...p) => path.join(src, ...p);
const O = (...p) => path.join(out, ...p);
const write = (p, s) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); };
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));

// A fence longer than any backtick run inside the content.
const fence = (s) => '`'.repeat(Math.max(3, ...[...s.matchAll(/`+/g)].map((m) => m[0].length + 1)));
const LANG = { '.html': 'html', '.css': 'css', '.js': 'js', '.json': 'json', '.tsv': 'tsv' };
const wrap = (title, note, body, ext) => { const f = fence(body); return `# ${title}\n\n${note}\n\n${f}${LANG[ext] || ''}\n${body.replace(/\n$/, '')}\n${f}\n`; };

// 2. Markdown from the kit, with script steps replaced.
const FULL = (what) => `> **Full kit only:** ${what}. In this edition, use the substitution in \`plugin-mode.md\` (product-review skill).`;
function inlineCmds(md) {
  return md.replace(/`(?:node|python3?|bash|sh|npx|npm|pnpm|pip3?)\s+([^`]*?)`/g, (m, rest) => {
    const file = (rest.match(/[\w./<>-]*?([\w-]+)\.(?:mjs|js|py|sh)\b/) || [])[1];
    return file ? `the full kit's \`${file}\` step (see \`plugin-mode.md\`)` : 'a full-kit command (see `plugin-mode.md`)';
  });
}
function transform(md) {
  // Fenced shell blocks run scripts this edition doesn't ship.
  md = md.replace(/^([ \t]*)(`{3,})(bash|sh|shell|console)\n[\s\S]*?\n\1\2[ \t]*$/gm, (m, ind) => `${ind}${FULL('this step runs a script that is not part of the plugin edition')}`);
  // Inline commands: `node scripts/build/x.mjs …` and the like.
  return inlineCmds(md);
}

const SKILLS = [
  ['skills/product-review', 'skills/product-review'],
  ['skills/review-scoping', 'skills/review-scoping'],
  ...fs.readdirSync(S('skills/design-kit'), { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => [`skills/design-kit/${e.name}`, `skills/${e.name}`]),
];
const SKIP_DIR = /\/(tests|evals|scripts|fixtures|node_modules)\//;
for (const [from, to] of SKILLS) {
  if (!fs.existsSync(S(from))) continue;
  for (const f of walk(S(from))) {
    const rel = path.relative(S(from), f);
    if (SKIP_DIR.test(`/${rel}`)) continue;
    const ext = path.extname(f);
    if (ext === '.md') { write(O(to, rel), transform(fs.readFileSync(f, 'utf8'))); continue; }
    if (from === 'skills/product-review' && rel.startsWith('templates/')) {
      const name = path.basename(f);
      write(O(to, `${rel}.md`), wrap(name, `The source of \`templates/${name}\` (script commands in its comments point to \`plugin-mode.md\`). Write the fenced block's contents, unchanged, to \`07-deliverables/src/${name}\`.`, inlineCmds(fs.readFileSync(f, 'utf8')), ext));
    }
  }
}
// The kit's running rules live in AGENTS.md, which a plugin doesn't load: carry them into
// plugin-mode.md (the bullets that are only about using the kit from a clone are left out).
const agents = fs.existsSync(S('AGENTS.md')) ? fs.readFileSync(S('AGENTS.md'), 'utf8') : '';
const runRules = ((agents.match(/## Running a review\n([\s\S]*?)(?=\n## |$)/) || [])[1] || '')
  .split(/\n(?=- )/).map((b) => b.trim()).filter((b) => b.startsWith('- ') && !/plugin-dir|Follow `skills\/product-review/.test(b));

// Design-kit licence and provenance.
for (const n of ['LICENSE', 'NOTICE', 'PROVENANCE.md']) {
  if (fs.existsSync(S('skills/design-kit', n))) write(O('notices', `design-kit-${n.replace(/\.md$/, '')}.md`), fs.readFileSync(S('skills/design-kit', n), 'utf8'));
}
fs.copyFileSync(S('LICENSE'), O('LICENSE'));

// 3. Examples: markup as Markdown; the folder's own .md and .json files as they are.
const examples = [];
for (const pkg of ['mareo', 'brolga']) {
  const dir = S('examples', pkg);
  if (!fs.existsSync(dir)) continue;
  for (const f of walk(dir)) {
    const rel = path.relative(dir, f);
    const ext = path.extname(f);
    if (rel.startsWith('site/')) continue; // the fictional store itself: not needed to judge a review
    if (ext === '.md' || ext === '.json') { write(O('examples', pkg, rel), fs.readFileSync(f, 'utf8')); continue; }
    if (ext === '.png' && rel.startsWith('screenshots/')) { fs.mkdirSync(path.dirname(O('examples', pkg, rel)), { recursive: true }); fs.copyFileSync(f, O('examples', pkg, rel)); continue; }
    if (ext !== '.html') continue;
    const html = fs.readFileSync(f, 'utf8')
      .replace(/data:[a-z]+\/[a-z0-9.+-]+;base64,[A-Za-z0-9+/=]+/gi, 'data:,')
      .replace(/<script>window\.__IMG=\{[\s\S]*?\};<\/script>/, '<!-- embedded images removed: see screens/ -->');
    write(O('examples', pkg, `${rel}.md`), wrap(rel, `The markup and text of \`examples/${pkg}/${rel}\`, with its embedded images removed. How it renders: \`screens/${path.basename(rel, '.html')}--*.jpg\`.`, html, ext));
    examples.push({ pkg, file: f, name: path.basename(rel, '.html') });
  }
}

// 4. Overlay, then the preamble and run rules into product-review.
for (const f of walk(path.join(root, 'overlay'))) {
  const rel = path.relative(path.join(root, 'overlay'), f);
  if (path.basename(rel).startsWith('_')) continue;
  write(O(rel), fs.readFileSync(f));
}
const skillPath = O('skills/product-review/SKILL.md');
const skill = fs.readFileSync(skillPath, 'utf8');
const pre = fs.readFileSync(path.join(root, 'overlay/skills/product-review/_preamble.md'), 'utf8');
write(skillPath, skill.replace(/^(---\n[\s\S]*?\n---\n)/, `$1${pre}`));
if (runRules.length) {
  fs.appendFileSync(O('skills/product-review/plugin-mode.md'), `\n## Run rules\n\nFrom the full kit's agent instructions, which a plugin doesn't load:\n\n${runRules.join('\n')}\n`);
}

// 5. plugin.json from the kit's, without fields this edition doesn't use.
const kit = JSON.parse(fs.readFileSync(S('.claude-plugin/plugin.json'), 'utf8'));
const manifest = { name: kit.name, version: kit.version, description: kit.description, author: kit.author, homepage: kit.homepage, repository: kit.repository, license: kit.license, keywords: kit.keywords };
if (fs.existsSync(path.join(root, 'assets/icon.png'))) { fs.copyFileSync(path.join(root, 'assets/icon.png'), O('.claude-plugin/icon.png')); }
write(O('.claude-plugin/plugin.json'), `${JSON.stringify(manifest, null, 2)}\n`);
write(O('BUILD.md'), `# Build\n\nBuilt from AIspy ${tag} (commit ${commit}) by the aispy-plugin build.\n`);

// 6. Example screens.
if (!argv.includes('--no-render')) {
  const { render } = await import('./render.mjs');
  await render({ aispy, examples, out: (pkg, name) => O('examples', pkg, 'screens', name) });
}
fs.rmSync(src, { recursive: true, force: true });
console.log(`Built ${path.relative(root, out)}/ from AIspy ${tag} (${commit.slice(0, 7)}): ${walk(out).length} files.`);
