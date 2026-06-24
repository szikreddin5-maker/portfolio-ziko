import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const RightSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 32px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 18rem; /* approx w-72 */
  height: 24rem; /* approx h-96 */
  border-radius: 1rem; /* rounded-2xl approx */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  &:hover{
    transform: translateY(-4px);
  }
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* object-cover */
  object-position: center; /* object-center */
  display: block;
`;

export const ImgOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.12);
  transition: opacity 0.35s ease, background 0.35s ease;
  opacity: 1;
  pointer-events: none;
  ${ImageWrapper}:hover &{
    background: rgba(0,0,0,0.02);
  }
`;
