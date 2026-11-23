import styled from 'styled-components';
export const VisionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin: 2.8rem 0 5rem;
  @media ${p => p.theme.breakpoints.md} { grid-template-columns: 1fr; }
`;
export const VisionCard = styled.article`
  padding: 28px;
  border-radius: 14px;
  border: 1px solid rgba(148,163,184,.18);
  background: rgba(17,28,45,.58);
`;
export const VisionIcon = styled.div` color: #67e8f9; margin-bottom: 14px; `;
export const VisionTitle = styled.h3` color: #f8fafc; font-size: 2rem; margin-bottom: 12px; `;
export const VisionText = styled.p` color: #b7c6d8; font-size: 1.55rem; line-height: 1.75; `;
