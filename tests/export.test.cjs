const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const output = path.join(__dirname, '..', 'out');
const html = name => fs.readFileSync(path.join(output, name), 'utf8');

test('the static export provides homepage and project case studies', () => {
  const index = html('index.html');
  const trompet = html('projects/trompet.html');
  const disiplin = html('projects/disiplin.html');
  const notFound = html('404.html');

  assert.match(index, /Building interactive experiences/);
  assert.match(index, /Twelve zones/);
  assert.match(index, /Player 4/);
  assert.match(index, /Selected Work/);
  assert.match(trompet, /My contributions/);
  assert.match(trompet, /Three|three/);
  assert.match(disiplin, /Closed testing/);
  assert.match(notFound, /404/);
});

test('privacy: published static output does not include the superseded CV or phone links', () => {
  const index = html('index.html');
  assert.equal(fs.existsSync(path.join(output, 'cv.pdf')), false);
  assert.doesNotMatch(index, /href=["']tel:/i);
  assert.doesNotMatch(index, /href=["']\/cv\.pdf/i);
  assert.doesNotMatch(index, /YKS\s|exam ranking/i);
  assert.match(index, /mailto:/);
});

test('the static homepage advertises an English-language identity and keyboard controls', () => {
  const index = html('index.html');
  assert.match(index, /lang=["']en["']/);
  assert.match(index, /aria-pressed=["']true["']/);
  assert.match(index, /aria-pressed=["']false["']/);
  assert.match(index, /href=["']\/#projects["']/);
});
