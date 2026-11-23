const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const output = path.join(root, 'out');
const homepage = fs.readFileSync(path.join(output, 'index.html'), 'utf8');

test('homepage JavaScript stays within an explicit uncompressed asset budget', () => {
  // This is a regression guard, not an empirical network or Lighthouse measurement.
  const scriptUrls = [...homepage.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["']/g)]
    .map(match => match[1].split('?')[0])
    .filter(src => src.startsWith('/_next/static/'));
  const uniqueUrls = [...new Set(scriptUrls)];
  assert.ok(uniqueUrls.length > 0, 'Expected Next.js script assets');

  const bytes = uniqueUrls.reduce((sum, assetUrl) => {
    const filepath = path.join(output, assetUrl.replace(/^\//, ''));
    assert.ok(fs.existsSync(filepath), 'Missing script asset: ' + assetUrl);
    return sum + fs.statSync(filepath).size;
  }, 0);

  const MAX_RAW_JS_BYTES = 200 * 1024;
  assert.ok(bytes <= MAX_RAW_JS_BYTES,
    'Homepage raw JS exceeded 200 KiB: ' + bytes + ' bytes');
});

test('hero artwork is optimized and no heavyweight media is required at startup', () => {
  const cover = path.join(output, 'images', 'trompet.webp');
  assert.ok(fs.existsSync(cover));
  assert.ok(fs.statSync(cover).size <= 200 * 1024,
    'Featured hero artwork exceeds the 200 KiB file budget');
  assert.doesNotMatch(homepage, /<video[^>]*autoplay/i);
});

test('semantic and accessible homepage structure is present', () => {
  assert.equal((homepage.match(/<h1\b/g) || []).length, 1);
  assert.match(homepage, /<main\b/);
  assert.match(homepage, /aria-label=["']Select a player["']/);
  assert.match(homepage, /aria-pressed=["']true["']/);
});

test('basic security response headers and search discovery are defined', () => {
  const vercel = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
  const headers = vercel.headers.flatMap(rule => rule.headers);
  for (const key of ['X-Content-Type-Options', 'Referrer-Policy', 'X-Frame-Options', 'Permissions-Policy']) {
    assert.ok(headers.some(item => item.key === key), 'Missing response header: ' + key);
  }
  assert.ok(fs.existsSync(path.join(output, 'robots.txt')));
  assert.ok(fs.existsSync(path.join(output, 'sitemap.xml')));
});
