/**
 * TROMPET scene-diagram geometry.
 *
 * This is a visual layout helper, not an implementation of gameplay rules.
 *
 * Each player i has an angle θᵢ = -π/2 + i·2π/P, an outward unit normal
 * nᵢ = (cos θᵢ, sin θᵢ), and tangent tᵢ = (-sin θᵢ, cos θᵢ).
 *
 * For zone j, qᵢⱼ = center + radius·nᵢ + (j - (Z-1)/2)·gap·tᵢ.
 * Time complexity is Θ(PZ); memory complexity is Θ(PZ).
 */
const PLAYER_COUNT = 4;
const ZONES_PER_PLAYER = 3;
const CX = 250;
const CY = 214;
const COLORS = ['#67e8f9', '#b2a6ff', '#8fe3c2', '#ffcf99'];

function createBoardGeometry(playerCount = PLAYER_COUNT, zonesPerPlayer = ZONES_PER_PLAYER) {
  if (!Number.isInteger(playerCount) || playerCount < 2 || playerCount > 12 ||
      !Number.isInteger(zonesPerPlayer) || zonesPerPlayer < 1 || zonesPerPlayer > 8) {
    throw new RangeError('Invalid player or zone count');
  }

  return Array.from({ length: playerCount }, (_, index) => {
    const angle = -Math.PI / 2 + index * 2 * Math.PI / playerCount;
    const normal = { x: Math.cos(angle), y: Math.sin(angle) };
    const tangent = { x: -normal.y, y: normal.x };

    return {
      index,
      color: COLORS[index % COLORS.length],
      avatar: { x: CX + normal.x * 186, y: CY + normal.y * 174 },
      zones: Array.from({ length: zonesPerPlayer }, (_, slot) => {
        const offset = (slot - (zonesPerPlayer - 1) / 2) * 42;
        return {
          key: index + '-' + slot,
          x: CX + normal.x * 123 + tangent.x * offset,
          y: CY + normal.y * 119 + tangent.y * offset,
          rotation: angle * 180 / Math.PI + 90,
        };
      }),
    };
  });
}

const positions = createBoardGeometry();

module.exports = { PLAYER_COUNT, ZONES_PER_PLAYER, CX, CY, positions, createBoardGeometry };
