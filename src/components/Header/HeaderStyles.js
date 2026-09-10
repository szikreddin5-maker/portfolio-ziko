import styled, { keyframes } from 'styled-components';

export const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(16px);
  background: rgba(15, 22, 36, 0.92);
  border-bottom: 1px solid rgba(148, 163, 184, 0.14);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.4rem 3.2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 1.2rem 2.4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.2rem 1.6rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-shrink: 0;
`;

export const LogoCrest = styled.button`
  position: relative;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  appearance: none;
  cursor: pointer;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, #1e293b 0%, #0f172a 72%);
  border: 1px solid rgba(34, 211, 238, 0.38);
  box-shadow:
    0 0 0 3px rgba(15, 22, 36, 0.95),
    0 0 0 4px rgba(34, 211, 238, 0.22),
    0 0 16px rgba(34, 211, 238, 0.16);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    border: 1px solid rgba(148, 163, 184, 0.16);
    pointer-events: none;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    border-color: rgba(34, 211, 238, 0.7);
    box-shadow:
      0 0 0 3px rgba(15, 22, 36, 0.95),
      0 0 0 4px rgba(34, 211, 238, 0.4),
      0 0 20px rgba(34, 211, 238, 0.28);
    outline: none;
  }
`;

export const LogoImg = styled.img`
  width: 38px;
  height: 38px;
  object-fit: contain;
  display: block;
  position: relative;
  z-index: 1;
  image-rendering: auto;
`;

export const LogoName = styled.a`
  font-size: 1.7rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: #e2e8f0;
  white-space: nowrap;
  transition: color 0.3s ease;

  &:hover {
    color: #67e8f9;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

export const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: rgba(255, 255, 255, 0.75);
  transition: color 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: #fff;
  }
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const SocialIcons = styled.a`
  color: white;
  border-radius: 50px;
  padding: 8px;
  display: flex;
  align-items: center;
  transition: 0.3s ease;

  &:hover {
    background-color: #212d45;
    transform: scale(1.12);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const CvButton = styled.a`
  margin-left: 0.8rem;
  padding: 0.7rem 1.4rem;
  border: 1px solid rgba(34, 211, 238, 0.45);
  border-radius: 999px;
  color: #67e8f9;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  white-space: nowrap;
  transition: 0.3s ease;

  &:hover {
    background: rgba(34, 211, 238, 0.12);
    border-color: #22d3ee;
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    padding: 0.6rem 1rem;
  }
`;

export const MenuButton = styled.button`
  display: none;
  margin-left: 0.8rem;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  color: #fff;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex;
  }
`;

export const MobileMenu = styled.nav`
  display: none;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    gap: 0.4rem;
    padding: 0.8rem 2.4rem 1.6rem;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    background: rgba(15, 22, 36, 0.96);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.8rem 1.6rem 1.6rem;
  }
`;

export const MobileLink = styled.a`
  font-size: 1.7rem;
  color: rgba(255, 255, 255, 0.82);
  padding: 1.1rem 0.4rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  &:hover {
    color: #67e8f9;
  }
`;

const overlayIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const QuoteOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 220;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  background: rgba(2, 6, 23, 0.82);
  backdrop-filter: blur(14px);
  cursor: pointer;
  animation: ${overlayIn} 0.35s ease;
`;

const quoteIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.985);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const portraitReveal = keyframes`
  from {
    opacity: 0;
    transform: scale(1.08);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
`;

const quoteCopyIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const QuoteBox = styled.div`
  position: relative;
  width: min(820px, 100%);
  display: grid;
  grid-template-columns: minmax(250px, 46%) 1fr;
  overflow: hidden;
  cursor: default;
  background: rgba(8, 15, 28, 0.94);
  border: 1px solid rgba(6, 182, 212, 0.28);
  border-radius: 20px;
  box-shadow:
    0 28px 80px rgba(2, 6, 23, 0.55),
    0 0 48px rgba(6, 182, 212, 0.12);
  animation: ${quoteIn} 0.5s ease;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

export const QuotePortraitWrap = styled.div`
  position: relative;
  min-height: 380px;
  overflow: hidden;
  background: #0b1220;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      rgba(8, 15, 28, 0) 18%,
      rgba(8, 15, 28, 0.18) 48%,
      rgba(8, 15, 28, 0.72) 78%,
      rgba(8, 15, 28, 0.98) 100%
    );
  }

  @media ${(props) => props.theme.breakpoints.md} {
    min-height: 240px;
    max-height: 280px;

    &::after {
      background: linear-gradient(
        180deg,
        rgba(8, 15, 28, 0) 28%,
        rgba(8, 15, 28, 0.4) 68%,
        rgba(8, 15, 28, 0.98) 100%
      );
    }
  }
`;

export const QuotePortrait = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 62% 10%;
  animation: ${portraitReveal} 1.2s ease forwards;
`;

export const QuoteContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
  margin-left: -36px;
  padding: 40px 40px 36px 20px;
  animation: ${quoteCopyIn} 0.7s ease 0.32s both;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 0;
    padding: 8px 24px 28px;
    text-align: center;
  }
`;

export const QuoteClose = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 3;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.72);
  color: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    border-color: #22d3ee;
    color: #67e8f9;
    outline: none;
  }
`;

export const QuoteText = styled.p`
  margin: 0;
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 1.65;
  color: #e2e8f0;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
  }
`;

export const QuoteSign = styled.cite`
  display: block;
  margin-top: 24px;
  text-align: right;
  font-family: 'JetBrains Mono', monospace;
  font-style: normal;
  font-size: 1.3rem;
  color: rgba(34, 211, 238, 0.8);

  @media ${(props) => props.theme.breakpoints.md} {
    text-align: center;
  }
`;
