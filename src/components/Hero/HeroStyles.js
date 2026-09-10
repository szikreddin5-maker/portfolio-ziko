import styled, { keyframes } from 'styled-components';

export const HeroWrap = styled.section`
  position: relative;
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  padding: 48px 48px 24px;
  box-sizing: content-box;
  overflow: visible;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 32px 48px 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 16px 8px;
    width: calc(100vw - 32px);
  }
`;

export const BgLayer = styled.div`
  position: absolute;
  top: -20px;
  right: -40px;
  width: min(520px, 48%);
  opacity: 0.55;
  pointer-events: none;
  z-index: 0;

  svg {
    width: 100%;
    height: auto;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 280px;
    right: -16px;
    opacity: 0.28;
  }
`;

export const HeroGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  gap: 48px;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  min-width: 0;
`;

export const RightSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-width: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    order: -1;
  }
`;

export const Badge = styled.p`
  font-family: 'JetBrains Mono', 'Space Grotesk', monospace;
  font-size: 1.4rem;
  color: #67e8f9;
  margin-bottom: 18px;
  letter-spacing: 0.01em;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 40px;
  line-height: 1.25;
  color: #fff;
  margin-bottom: 16px;
  max-width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 26px;
  }
`;

export const NameLine = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.3;
  color: #fff;
  margin-bottom: 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 22px;
  }
`;

export const NameAccent = styled.span`
  background: linear-gradient(90deg, #22d3ee 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Lead = styled.p`
  max-width: 620px;
  font-size: 20px;
  line-height: 34px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.62);
  padding-bottom: 28px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 18px;
    line-height: 30px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 26px;
    padding-bottom: 20px;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(270deg, #13ADC7 0%, #3b82f6 100%);
  transition: transform 0.25s ease, opacity 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.92;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    font-size: 14px;
    padding: 12px 18px;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  color: #e0f2fe;
  border: 1px solid rgba(34, 211, 238, 0.4);
  background: transparent;
  transition: 0.25s ease;

  &:hover {
    background: rgba(34, 211, 238, 0.1);
    border-color: #22d3ee;
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    font-size: 14px;
    padding: 12px 18px;
  }
`;

export const PhotoCard = styled.button`
  position: relative;
  width: min(320px, 100%);
  padding: 10px;
  border-radius: 24px;
  border: 1px solid rgba(6, 182, 212, 0.3);
  background: rgba(15, 23, 42, 0.45);
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.08);
  cursor: pointer;
  appearance: none;
  font: inherit;
  color: inherit;
  text-align: left;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 18% 8% auto 8%;
    height: 70%;
    background: radial-gradient(circle, rgba(34, 211, 238, 0.45) 0%, rgba(59, 130, 246, 0.18) 42%, transparent 72%);
    filter: blur(28px);
    z-index: 0;
    pointer-events: none;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-3px);
    border-color: rgba(34, 211, 238, 0.7);
    box-shadow: 0 0 24px rgba(6, 182, 212, 0.18);
    outline: none;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 16px;
  overflow: hidden;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.4s ease, filter 0.35s ease;

  ${PhotoCard}:hover & {
    transform: scale(1.03);
    filter: brightness(1.1);
  }
`;

export const PhotoOverlay = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  padding: 48px 14px 14px;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.35) 58%, transparent 100%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const TypeBadge = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #67e8f9;
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(34, 211, 238, 0.35);
  border-radius: 999px;
  padding: 5px 10px;
`;

export const PhotoHint = styled.span`
  font-size: 1.2rem;
  color: rgba(226, 232, 240, 0.86);
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(2, 6, 23, 0.8);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  cursor: pointer;
`;

const quoteIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const QuoteBox = styled.div`
  width: min(512px, 100%);
  padding: 40px 40px 32px;
  text-align: center;
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(6, 182, 212, 0.3);
  border-radius: 16px;
  box-shadow: 0 0 40px rgba(6, 182, 212, 0.15);
  backdrop-filter: blur(18px);
  animation: ${quoteIn} 0.45s ease;
`;

export const QuoteText = styled.p`
  margin: 0;
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 1.65;
  color: #e2e8f0;
`;

export const QuoteSign = styled.cite`
  display: block;
  margin-top: 24px;
  text-align: right;
  font-family: 'JetBrains Mono', monospace;
  font-style: normal;
  font-size: 1.3rem;
  color: rgba(34, 211, 238, 0.8);
`;

export const ModalCard = styled.div`
  position: relative;
  width: min(520px, 100%);
  max-height: min(86vh, 720px);
  overflow: auto;
  background: #0f172a;
  border: 1px solid rgba(34, 211, 238, 0.22);
  border-radius: 20px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
`;

export const ModalBanner = styled.div`
  position: relative;
  height: 168px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 40%;
    display: block;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, #0f172a 0%, rgba(15, 23, 42, 0.2) 55%, transparent 100%);
  }
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.72);
  color: #e2e8f0;
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;

  &:hover {
    border-color: #22d3ee;
    color: #67e8f9;
  }
`;

export const ModalBody = styled.div`
  padding: 8px 24px 24px;
`;

export const ModalKicker = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.2rem;
  letter-spacing: 0.14em;
  color: #67e8f9;
  margin-bottom: 6px;
`;

export const ModalTitle = styled.h2`
  font-size: 2.6rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 14px;
`;

export const TraitRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Trait = styled.span`
  font-size: 1.2rem;
  color: #cbd5e1;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(30, 41, 59, 0.6);
  border-radius: 999px;
  padding: 5px 10px;
`;

export const ModalText = styled.p`
  font-size: 1.5rem;
  line-height: 1.65;
  color: rgba(226, 232, 240, 0.78);
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Terminal = styled.div`
  width: min(360px, 100%);
  background: #0b1220;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
`;

export const TerminalBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: #111827;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;

export const TerminalTitle = styled.span`
  margin-left: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.45);
`;

export const TerminalBody = styled.div`
  position: relative;
  margin: 0;
  padding: 16px 18px 18px;
  font-family: 'JetBrains Mono', 'Space Grotesk', monospace;
  font-size: 1.2rem;
  line-height: 1.7;
  color: #e2e8f0;
  overflow-x: auto;
`;

export const CodeSizer = styled.pre`
  margin: 0;
  font: inherit;
  white-space: pre;
  visibility: hidden;
  pointer-events: none;
`;

export const CodeTyped = styled.pre`
  margin: 0;
  position: absolute;
  top: 16px;
  right: 18px;
  bottom: 18px;
  left: 18px;
  font: inherit;
  white-space: pre;
  overflow: hidden;
`;

const pulse = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

export const Cursor = styled.span`
  display: inline;
  color: #67e8f9;
  font-weight: 500;
  animation: ${pulse} 1s step-end infinite;
`;

export const Kw = styled.span` color: #c084fc; `;
export const Key = styled.span` color: #67e8f9; `;
export const Str = styled.span` color: #86efac; `;
export const Punct = styled.span` color: #94a3b8; `;
export const Plain = styled.span` color: #e2e8f0; `;
