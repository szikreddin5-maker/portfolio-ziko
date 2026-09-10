import styled from 'styled-components';

export const ImageFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  background: #020617;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${({ $position }) => $position || 'center'};
  display: block;
`;

export const ImageMask = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(to top, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.18) 42%, transparent 68%),
    radial-gradient(ellipse at 50% 40%, transparent 42%, rgba(2, 6, 23, 0.35) 100%);
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  padding: 3rem 0;
  column-gap: 2.4rem;
  row-gap: 3rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    padding: 2rem 0 0;
  }
`;

export const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  text-align: center;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(148, 163, 184, 0.12);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 86%;
  margin: 0 auto;
  color: #dce3e7;
  font-size: 14px;
  font-style: italic;
  line-height: 22px;
`;


export const CardInfo = styled.p`
  width: 100%;
  flex: 1;
  padding: 0 28px;
  color: #e4e6e7;
  font-size: 1.5rem;
  line-height: 26px;
  text-align: left;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px;
  }
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 1.6rem 1.6rem 2.4rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: auto;
`;

export const ExternalLinks = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  max-width: 100%;
  color: ${({ primary }) => (primary ? '#041016' : '#d4e8ef')};
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.2;
  padding: 1rem 1.6rem;
  background: ${({ primary }) => (primary ? 'linear-gradient(270deg, #13ADC7 0%, #3b82f6 100%)' : '#2a3a52')};
  border-radius: 15px;
  white-space: nowrap;
  transition: 0.4s;

  &:hover {
    transform: translateY(-2px);
    background: ${({ primary }) => (primary ? 'linear-gradient(270deg, #22d3ee 0%, #60a5fa 100%)' : '#334866')};
  }
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  max-width: 100%;
  color: rgba(255, 255, 255, 0.55);
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.2;
  padding: 1rem 1.6rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  padding: 1.6rem 1.4rem 0;
`;

export const Tag = styled.li`
  flex: 0 0 auto;
  color: #b8d4e0;
  font-size: 1.3rem;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(34, 211, 238, 0.2);
  background: rgba(34, 211, 238, 0.06);
  white-space: nowrap;
`;