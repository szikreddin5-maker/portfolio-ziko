import styled from 'styled-components';

export const HobbyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin: 3rem 0;

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

export const HobbyCard = styled.div`
  background: linear-gradient(135deg, rgba(79, 108, 176, 0.15) 0%, rgba(79, 108, 176, 0.05) 100%);
  border: 1px solid rgba(79, 108, 176, 0.3);
  border-radius: 12px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(79, 108, 176, 0.6);
    background: linear-gradient(135deg, rgba(79, 108, 176, 0.25) 0%, rgba(79, 108, 176, 0.1) 100%);
  }

  @media ${props => props.theme.breakpoints.md} {
    padding: 24px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 20px;
  }
`;

export const HobbyImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
  mix-blend-mode: multiply;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  filter: contrast(1.1);

  ${HobbyCard}:hover & {
    opacity: 1;
  }

  @media ${props => props.theme.breakpoints.md} {
    width: 70px;
    height: 70px;
    margin-bottom: 12px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }
`;

export const HobbyTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 12px;

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
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.8);

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
