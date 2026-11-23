import styled, { keyframes } from 'styled-components';

const reveal = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const HeroWrap = styled.section`
  position: relative;
  max-width: 1136px;
  margin: 0 auto;
  padding: clamp(64px, 9vw, 136px) 48px 86px;
  @media ${p => p.theme.breakpoints.sm} { padding: 48px 16px 56px; }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(310px, .9fr);
  gap: clamp(28px, 5vw, 78px);
  align-items: center;
  @media ${p => p.theme.breakpoints.md} { grid-template-columns: 1fr; }
`;

export const LeftSection = styled.div`
  min-width: 0;
  animation: ${reveal} .7s ease both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

export const RightSection = styled.div`
  min-width: 0;
  animation: ${reveal} .8s ease .12s both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

export const Badge = styled.p`
  color: #67e8f9;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: .11em;
  margin-bottom: 26px;
`;

export const Title = styled.h1`
  font-size: clamp(3.6rem, 4.2vw, 6rem);
  line-height: 1.12;
  letter-spacing: -.045em;
  font-weight: 700;
  color: #f8fafc;
  margin: 0 0 26px;
  max-width: 720px;
  @media ${p => p.theme.breakpoints.sm} { font-size: clamp(3.25rem, 9vw, 4.6rem); }
`;

export const NameAccent = styled.span`
  background: linear-gradient(95deg, #67e8f9 5%, #60a5fa 90%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const Lead = styled.p`
  max-width: 570px;
  color: #b7c6d8;
  font-size: 1.75rem;
  line-height: 1.8;
  margin-bottom: 32px;
  @media ${p => p.theme.breakpoints.sm} { font-size: 1.55rem; }
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const ButtonBase = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 1.45rem;
  font-weight: 600;
  padding: 14px 22px;
  border-radius: 10px;
  transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
  &:hover { transform: translateY(-2px); }
  &:focus-visible { outline: 2px solid #67e8f9; outline-offset: 4px; }
  @media (prefers-reduced-motion: reduce) { transition: none; &:hover { transform: none; } }
  @media ${p => p.theme.breakpoints.sm} { flex: 1 1 180px; }
`;
export const PrimaryButton = styled(ButtonBase)`
  color: #06121e;
  background: #67e8f9;
  &:hover { box-shadow: 0 8px 30px rgba(103,232,249,.2); }
`;
export const SecondaryButton = styled(ButtonBase)`
  color: #e2e8f0;
  border: 1px solid #4c6079;
  background: rgba(15,23,42,.4);
  &:hover { border-color: #67e8f9; }
`;

export const PreviewLink = styled.a`
  position: relative;
  display: block;
  min-height: 460px;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid rgba(148,163,184,.25);
  background: radial-gradient(circle at 60% 16%, #273851 0%, #0b1321 65%);
  box-shadow: 0 32px 64px rgba(2,6,23,.4);
  transition: border-color .3s ease, transform .3s ease, box-shadow .3s ease;
  &:hover { transform: translateY(-6px); border-color: #67e8f9; box-shadow: 0 38px 68px rgba(2,6,23,.5); }
  &:focus-visible { outline: 2px solid #67e8f9; outline-offset: 4px; }
  @media ${p => p.theme.breakpoints.sm} { min-height: 350px; }
  @media (prefers-reduced-motion: reduce) { transition: none; &:hover { transform: none; } }
`;

export const PreviewImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: .88;
  transition: transform .6s ease;
  ${PreviewLink}:hover & { transform: scale(1.035); }
  @media (prefers-reduced-motion: reduce) { transition: none; ${PreviewLink}:hover & { transform: none; } }
`;

export const PreviewContent = styled.div`
  position: absolute;
  inset: auto 0 0;
  padding: 92px 28px 28px;
  color: #f8fafc;
  background: linear-gradient(0deg, rgba(4,9,20,.99), rgba(4,9,20,.85) 56%, transparent);
`;

export const PreviewEyebrow = styled.p`
  color: #67e8f9;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.1rem;
  letter-spacing: .12em;
  margin-bottom: 12px;
`;

export const PreviewTitle = styled.h2`
  color: #fff;
  font-size: 3.4rem;
  letter-spacing: .05em;
  margin-bottom: 7px;
`;

export const PreviewMeta = styled.p`
  color: #cbd5e1;
  font-size: 1.4rem;
  margin-bottom: 18px;
`;

export const Availability = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #67e8f9;
  font-size: 1.35rem;
  font-weight: 600;
`;
