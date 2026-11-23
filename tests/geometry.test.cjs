const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  PLAYER_COUNT, ZONES_PER_PLAYER, CX, CY, positions, createBoardGeometry,
} = require('../src/lib/boardGeometry');

const close = (actual, expected, tolerance = 1e-8) =>
  assert.ok(Math.abs(actual - expected) <= tolerance, actual + ' != ' + expected);

test('the presentation topology has exactly four players and twelve distinct card zones', () => {
  assert.equal(PLAYER_COUNT, 4);
  assert.equal(ZONES_PER_PLAYER, 3);
  assert.equal(positions.length, 4);
  assert.equal(positions.reduce((n, player) => n + player.zones.length, 0), 12);
  const keys = positions.flatMap(player => player.zones.map(zone => zone.key));
  assert.equal(new Set(keys).size, 12);
});

test('the four player avatars are symmetrically placed around a shared center', () => {
  const [north, east, south, west] = positions;
  close(north.avatar.x, CX);
  close(north.avatar.y, CY - 174);
  close(east.avatar.x, CX + 186);
  close(east.avatar.y, CY);
  close(south.avatar.x, CX);
  close(south.avatar.y, CY + 174);
  close(west.avatar.x, CX - 186);
  close(west.avatar.y, CY);
});

test('each player has three separate equally spaced card zones', () => {
  for (const player of positions) {
    const [first, middle, last] = player.zones;
    close((first.x + last.x) / 2, middle.x);
    close((first.y + last.y) / 2, middle.y);
    const gap = Math.hypot(first.x - middle.x, first.y - middle.y);
    close(gap, 42);
    close(Math.hypot(last.x - middle.x, last.y - middle.y), gap);
    for (const zone of player.zones) {
      assert.ok(Number.isFinite(zone.rotation));
      assert.ok(zone.x >= 0 && zone.x <= 500);
      assert.ok(zone.y >= 0 && zone.y <= 428);
    }
  }
});

test('the visualization is deterministic and supports valid parameter variations', () => {
  assert.deepEqual(createBoardGeometry(), positions);
  const other = createBoardGeometry(6, 2);
  assert.equal(other.length, 6);
  assert.equal(other.reduce((sum, player) => sum + player.zones.length, 0), 12);
});

test('invalid geometry parameters are rejected', () => {
  for (const [players, zones] of [[0, 3], [4, 0], [1.5, 3], [4, 2.5], [13, 3], [4, 9]]) {
    assert.throws(() => createBoardGeometry(players, zones), RangeError);
  }
});
