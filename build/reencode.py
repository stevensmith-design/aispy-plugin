"""Re-encode images the directory's scanner flagged (random bytes that look like a shell pattern).
Usage: python3 build/reencode.py <path inside plugin/examples/>...
Writes the re-encoded copy to renders/ (which build.mjs copies over examples/), without metadata.
A JPEG is saved one quality step lower each time; a PNG is re-compressed."""
import os, sys
from PIL import Image
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
for rel in sys.argv[1:]:
    rel = rel.split('examples/', 1)[-1]
    src = os.path.join(root, 'renders', rel)
    if not os.path.exists(src):
        src = os.path.join(root, 'plugin', 'examples', rel)
    im = Image.open(src)
    clean = Image.new(im.mode, im.size)
    clean.paste(im)
    out = os.path.join(root, 'renders', rel)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    if rel.lower().endswith(('.jpg', '.jpeg')):
        q = int(open(out + '.q').read()) - 2 if os.path.exists(out + '.q') else 78
        clean.convert('RGB').save(out, quality=q, optimize=True)
        open(out + '.q', 'w').write(str(q))
    else:
        clean.save(out, optimize=True, compress_level=6)
    print(f'{rel}: re-encoded')
