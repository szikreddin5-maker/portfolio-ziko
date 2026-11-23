import styled from 'styled-components';

export const HobbyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin: 1rem 0 5rem;
  @media ${p => p.theme.breakpoints.md} { grid-template-columns: 1fr; }
`;
export const HobbyCard = styled.article`
  border: 1px solid rgba(148,163,184,.15);
  background: rgba(17,28,45,.5);
  border-radius: 14px;
  overflow: hidden;
  transition: border-color .25s ease, transform .25s ease;
  &:hover { border-color: rgba(103,232,249,.4); transform: translateY(-3px); }
  @media (prefers-reduced-motion: reduce) { transition: none; &:hover { transform: none; } }
`;
export const HobbyMedia = styled.div`
  height: 130px;
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, #1c3450, #0e1726 75%);
`;
export const HobbyImage = styled.img`
  width: 100%; height: 100%; object-fit: contain; padding: 18px;
  opacity: .88; filter: brightness(1.4);
`;
export const HobbyMask = styled.div` display: none; `;
export const HobbyBody = styled.div` padding: 20px; `;
export const HobbyTitle = styled.h3` color: #f8fafc; font-size: 1.65rem; margin-bottom: 8px; `;
export const HobbyDescription = styled.p` color: #a9b9ce; font-size: 1.4rem; line-height: 1.6; `;
