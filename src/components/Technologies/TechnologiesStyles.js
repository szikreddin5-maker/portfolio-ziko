import styled from 'styled-components';

export const HobbyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin: 3rem 0;
  padding: 4px 2px 12px;

  @media ${props => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const HobbyCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: rgba(15, 23, 42, 0.4);
  border: 1px solid #1e293b;
  border-radius: 16px;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(6, 182, 212, 0.3);
    box-shadow: 0 0 20px rgba(6, 182, 212, 0.1);
  }
`;

export const HobbyMedia = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 50% 38%, rgba(34, 211, 238, 0.1) 0%, transparent 64%),
    #0f172a;
`;

export const HobbyImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  padding: 18px 28px 40px;
  box-sizing: border-box;
  object-fit: contain;
  object-position: center 20%;
  opacity: 0.86;
  mix-blend-mode: multiply;
  filter: contrast(1.14) saturate(1.1) drop-shadow(0 10px 24px rgba(6, 182, 212, 0.12));
  transform: scale(1.12);
  transform-origin: center 30%;
  transition: opacity 0.3s ease, transform 0.35s ease;

  ${HobbyCard}:hover & {
    opacity: 1;
    transform: scale(1.2);
  }
`;

export const HobbyMask = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(to top, #0f172a 0%, rgba(15, 23, 42, 0.6) 42%, transparent 100%);
`;

export const HobbyBody = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  margin-top: -52px;
  padding: 0 24px 28px;
`;

export const HobbyTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #e2e8f0;
  margin-bottom: 12px;
  transition: color 0.3s ease;

  ${HobbyCard}:hover & {
    color: #22d3ee;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 10px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 8px;
  }
`;

export const HobbyDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #94a3b8;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 13px;
    line-height: 20px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 12px;
    line-height: 18px;
  }
`;

// Keeping legacy styles for backward compatibility
export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`
