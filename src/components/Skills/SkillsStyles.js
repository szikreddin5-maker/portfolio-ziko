import styled from 'styled-components';

export const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin: 2.5rem 0 4rem;
  @media ${p => p.theme.breakpoints.sm} { grid-template-columns: 1fr; gap: 12px; }
`;

export const SkillCard = styled.article`
  padding: 28px;
  border-radius: 14px;
  border: 1px solid rgba(148,163,184,.18);
  background: rgba(17,28,45,.65);
  transition: transform .25s ease, border-color .25s ease, background .25s ease;
  &:hover { transform: translateY(-3px); border-color: rgba(103,232,249,.48); background: rgba(20,39,58,.75); }
  @media (prefers-reduced-motion: reduce) { transition: none; &:hover { transform: none; } }
`;

export const SkillIcon = styled.div` color: #67e8f9; margin-bottom: 16px; `;
export const SkillTitle = styled.h3` color: #f8fafc; font-size: 2rem; margin-bottom: 8px; `;
export const SkillText = styled.p` color: #b7c6d8; font-size: 1.5rem; line-height: 1.65; `;
