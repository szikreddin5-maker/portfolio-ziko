import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

/**
 * An interactive presentation schematic, not a playable game.
 *
 * Four players are evenly distributed using angles θᵢ = -π/2 + iπ/2.
 * Each player owns three independent card zones: offsets -1, 0, +1
 * along the tangent of the player's angle. The positions are derived
 * rather than manually hard-coded, so the topology is always 4 × 3.
 */
const PLAYER_COUNT = 4;
const ZONES_PER_PLAYER = 3;
const CX = 250;
const CY = 214;
const playerColors = ['#67e8f9', '#b2a6ff', '#8fe3c2', '#ffcf99'];

const positions = Array.from({ length: PLAYER_COUNT }, (_, index) => {
  const angle = -Math.PI / 2 + index * 2 * Math.PI / PLAYER_COUNT;
  const normal = { x: Math.cos(angle), y: Math.sin(angle) };
  const tangent = { x: -normal.y, y: normal.x };
  return {
    index,
    color: playerColors[index],
    avatar: { x: CX + normal.x * 186, y: CY + normal.y * 174 },
    zones: Array.from({ length: ZONES_PER_PLAYER }, (_, slot) => {
      const offset = (slot - 1) * 42;
      return {
        key: index + '-' + slot,
        x: CX + normal.x * 123 + tangent.x * offset,
        y: CY + normal.y * 119 + tangent.y * offset,
        rotation: (angle * 180 / Math.PI) + 90,
      };
    }),
  };
});

const glow = keyframes`
  0%, 100% { opacity: .32; }
  50% { opacity: .62; }
`;

const Shell = styled.section`
  width: min(1120px, calc(100% - 64px));
  margin: 10px auto 90px;
  padding: 27px;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, .17);
  border-radius: 22px;
  background: linear-gradient(135deg, #122339 0%, #0b1627 53%, #0b1421 100%);
  box-shadow: 0 24px 90px rgba(2, 6, 23, .15);
  @media (max-width: 768px) { width: calc(100% - 48px); padding: 22px; }
  @media (max-width: 640px) { width: calc(100% - 32px); margin-bottom: 65px; padding: 16px; }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;

const Eyebrow = styled.p`
  color: #67e8f9;
  font: 600 1.1rem 'JetBrains Mono', monospace;
  letter-spacing: .16em;
  text-transform: uppercase;
  margin: 0 0 10px;
`;

const Title = styled.h2`
  color: #f8fafc;
  font-size: clamp(2.7rem, 3.4vw, 3.8rem);
  line-height: 1.15;
  letter-spacing: -.04em;
  margin: 0 0 14px;
`;

const Summary = styled.p`
  color: #b8c9dc;
  font-size: 1.45rem;
  line-height: 1.7;
  max-width: 560px;
`;

const Metrics = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  padding-top: 6px;
`;

const Metric = styled.div`
  min-width: 68px;
  strong { display: block; color: #f8fafc; font: 600 2.3rem 'Space Grotesk',sans-serif; line-height: 1.2; }
  span { color: #9db1c7; font-size: 1.15rem; }
`;

const LabGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(228px, .6fr);
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const BoardFrame = styled.div`
  position: relative;
  min-width: 0;
  border-radius: 16px;
  border: 1px solid rgba(103,232,249,.13);
  background:
    radial-gradient(ellipse at 50% 48%, rgba(38,73,96,.3), transparent 65%),
    #081320;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    opacity: .24;
    background-image: linear-gradient(rgba(148,163,184,.1) 1px,transparent 1px), linear-gradient(90deg,rgba(148,163,184,.1) 1px,transparent 1px);
    background-size: 26px 26px;
  }
`;

const Diagram = styled.svg`
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
  .slot { transition: opacity .3s ease, stroke .3s ease, fill .3s ease; }
  .selected-ring { animation: ${glow} 3s ease-in-out infinite; }
  @media (prefers-reduced-motion: reduce) {
    .slot { transition: none; }
    .selected-ring { animation: none; opacity: .45; }
  }
`;

const Controls = styled.div`
  padding: 16px 6px;
  h3 { color: #f8fafc; font-size: 2rem; margin: 0 0 12px; }
  p { color: #b8c9dc; font-size: 1.4rem; line-height: 1.65; margin-bottom: 16px; }
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  gap: 9px;
  margin-bottom: 20px;
`;

const PlayerButton = styled.button`
  appearance: none;
  display: flex;
  gap: 9px;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  min-height: 46px;
  padding: 10px 12px;
  background: ${p => p.$active ? '#233b50' : 'rgba(148,163,184,.06)'};
  color: #f8fafc;
  border: 1px solid ${p => p.$active ? 'rgba(103,232,249,.65)' : 'rgba(148,163,184,.16)'};
  border-radius: 10px;
  font: 600 1.35rem 'Space Grotesk',sans-serif;
  transition: border-color .2s ease, transform .2s ease;
  &:hover { border-color: rgba(103,232,249,.6); transform: translateY(-2px); }
  &:focus-visible { outline: 2px solid #67e8f9; outline-offset: 3px; }
  @media (prefers-reduced-motion: reduce) { transition: none; &:hover { transform: none; } }
`;

const Dot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${p => p.$color};
  box-shadow: 0 0 12px ${p => p.$color}66;
`;

const Inspector = styled.div`
  border-top: 1px solid rgba(148,163,184,.14);
  padding-top: 16px;
  .label { color: #67e8f9; font: 600 1.05rem 'JetBrains Mono', monospace; letter-spacing: .11em; }
  strong { display: block; color: #f1f5f9; font-size: 1.6rem; margin: 7px 0; }
  p { color: #aebfd2; font-size: 1.35rem; margin: 0; }
`;

const Footnote = styled.p`
  margin: 22px 0 0;
  color: #8299b3;
  font-size: 1.18rem;
  line-height: 1.6;
`;

export default function BoardLab() {
  const [active, setActive] = useState(0);
  const selected = positions[active];

  return (
    <Shell aria-labelledby="board-lab-title">
      <Header>
        <div>
          <Eyebrow>THE DESIGN PROCESS / 01</Eyebrow>
          <Title id="board-lab-title">Twelve zones. Four perspectives.</Title>
          <Summary>
            An interactive layout study from TROMPET: four rabbit players surrounding
            a shared table, each with three separate card zones. Select a player
            to inspect their space.
          </Summary>
        </div>
        <Metrics aria-label="Scene topology">
          <Metric><strong>04</strong><span>players</span></Metric>
          <Metric><strong>12</strong><span>card zones</span></Metric>
          <Metric><strong>01</strong><span>table</span></Metric>
        </Metrics>
      </Header>
      <LabGrid>
        <BoardFrame>
          <Diagram viewBox="0 0 500 428" role="img" aria-label={'Concept diagram of four players around a shared table. Player ' + (active + 1) + ' and their three distinct card zones are highlighted.'}>
            <defs>
              <radialGradient id="boardSurface" cx="50%" cy="45%" r="68%">
                <stop offset="0%" stopColor="#25465a"/>
                <stop offset="75%" stopColor="#14283c"/>
                <stop offset="100%" stopColor="#0e1c2e"/>
              </radialGradient>
              <linearGradient id="tableRim" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#52778d"/>
                <stop offset="55%" stopColor="#273d55"/>
                <stop offset="100%" stopColor="#607d8e"/>
              </linearGradient>
              <filter id="zoneGlow" x="-70%" y="-70%" width="240%" height="240%">
                <feGaussianBlur stdDeviation="6"/>
              </filter>
            </defs>
            <ellipse cx={CX} cy={CY + 13} rx="201" ry="158" fill="#020713" opacity=".85"/>
            <ellipse cx={CX} cy={CY} rx="196" ry="151" fill="url(#tableRim)"/>
            <ellipse cx={CX} cy={CY} rx="187" ry="142" fill="url(#boardSurface)"/>
            <ellipse cx={CX} cy={CY} rx="155" ry="112" fill="none" stroke="#718da0" strokeOpacity=".14" strokeDasharray="3 9"/>
            <circle cx={CX} cy={CY} r="62" fill="#061221" fillOpacity=".62" stroke="#8ebcd3" strokeOpacity=".22"/>
            <circle cx={CX} cy={CY} r="51" fill="none" stroke="#67e8f9" strokeOpacity=".2" strokeDasharray="4 7"/>
            <text x={CX} y={CY - 7} fontFamily="Space Grotesk, sans-serif" textAnchor="middle" fill="#d7e8f5" fontSize="19" fontWeight="700" letterSpacing="3">TROMPET</text>
            <text x={CX} y={CY + 13} fontFamily="JetBrains Mono, monospace" textAnchor="middle" fill="#9bb5c8" fontSize="8" letterSpacing="1.8">TABLE CONCEPT</text>

            {positions.map((player) => (
              <g key={player.index}>
                {player.zones.map((zone, slot) => (
                  <g key={zone.key} transform={'translate(' + zone.x + ' ' + zone.y + ') rotate(' + zone.rotation + ')'}>
                    {active === player.index && <rect className="selected-ring" x="-18" y="-27" width="36" height="54" rx="6" fill={player.color} opacity=".28" filter="url(#zoneGlow)" />}
                    <rect className="slot" x="-17" y="-26" width="34" height="52" rx="6"
                      fill={active === player.index ? '#284557' : '#152a3b'}
                      fillOpacity={active === player.index ? 1 : .74}
                      stroke={player.color}
                      strokeOpacity={active === player.index ? .92 : .32}
                      strokeWidth={active === player.index ? 1.8 : .85}
                    />
                    <rect x="-12" y="-21" width="24" height="42" rx="3" fill="none" stroke="#ecf7ff" strokeOpacity=".12"/>
                    <path d="M -8 -14 L 8 -14 M -8 14 L 8 14" fill="none" stroke={player.color} strokeOpacity={active === player.index ? .65 : .18} strokeWidth="1"/>
                    <text x="0" y="4" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace"
                      fill={active === player.index ? '#f8fafc' : '#90a5b9'}
                      transform={zone.rotation === 180 ? 'rotate(180)' : 'rotate(0)'}>
                      {slot + 1}
                    </text>
                  </g>
                ))}
                <circle cx={player.avatar.x} cy={player.avatar.y} r={active === player.index ? 24 : 21}
                  fill="#081725" stroke={player.color} strokeWidth={active === player.index ? 2.3 : 1.1}
                  strokeOpacity={active === player.index ? .95 : .48}
                />
                <text x={player.avatar.x} y={player.avatar.y + 5} textAnchor="middle"
                  fontSize="14" fontFamily="Space Grotesk, sans-serif"
                  fill={active === player.index ? '#fff' : '#afc1d1'}
                  fontWeight="600">
                  {'P' + (player.index + 1)}
                </text>
              </g>
            ))}
          </Diagram>
        </BoardFrame>
        <Controls>
          <h3>Explore the layout</h3>
          <p>Each player keeps a separate hand and three individual card zones. This is a visual design concept, not a playable game or a simulation of its rules.</p>
          <Buttons role="group" aria-label="Select a player">
            {positions.map((player) => (
              <PlayerButton key={player.index} type="button" $active={active === player.index}
                aria-pressed={active === player.index}
                onClick={() => setActive(player.index)}>
                <Dot $color={player.color}/>{'Player ' + (player.index + 1)}
              </PlayerButton>
            ))}
          </Buttons>
          <Inspector aria-live="polite">
            <span className="label">SCENE INSPECTOR</span>
            <strong>{'Player ' + (active + 1) + ' · 3 card zones'}</strong>
            <p>{'Zones ' + (active * ZONES_PER_PLAYER + 1) + '–' + ((active + 1) * ZONES_PER_PLAYER) + ' of 12 are highlighted. Interaction is for presentation only.'}</p>
          </Inspector>
        </Controls>
      </LabGrid>
      <Footnote>
        Built as a lightweight SVG with deterministic radial geometry. No animation engine,
        tracking script or canvas render loop is required.
      </Footnote>
    </Shell>
  );
}
