import styled from 'styled-components';

export const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(11,19,33,.91);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(148,163,184,.14);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 32px;
  @media (max-width: 768px) { padding: 12px 24px; }
  @media (max-width: 640px) { padding: 11px 16px; gap: 10px; }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  @media (max-width: 640px) { gap: 9px; }
`;

export const LogoCrest = styled.button`
  flex: 0 0 50px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #142338;
  border: 1px solid rgba(103,232,249,.4);
  transition: border-color .2s ease, transform .2s ease;
  &:hover { border-color: #67e8f9; transform: translateY(-2px); }
  &:focus-visible { outline: 2px solid #67e8f9; outline-offset: 3px; }
  @media (max-width: 640px) { flex-basis: 42px; width: 42px; height: 42px; }
  @media (prefers-reduced-motion: reduce) { transition: none; &:hover { transform: none; } }
`;

export const LogoImg = styled.img`
  display: block;
  width: 36px;
  height: 36px;
  object-fit: contain;
  @media (max-width: 640px) { width: 30px; height: 30px; }
`;

export const LogoName = styled.a`
  font-size: 1.65rem;
  font-weight: 600;
  color: #f1f5f9;
  white-space: nowrap;
  &:hover { color: #67e8f9; }
  @media (max-width: 640px) { font-size: 1.4rem; }
`;

export const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(14px, 1.8vw, 28px);
  @media (max-width: 1060px) { display: none; }
`;

export const NavLink = styled.a`
  font-size: 1.45rem;
  color: #bfcbdb;
  white-space: nowrap;
  transition: color .2s ease;
  &:hover, &:focus-visible { color: #67e8f9; }
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
`;

export const SocialIcons = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  color: #e2e8f0;
  border-radius: 10px;
  transition: color .2s ease, background .2s ease;
  &:hover { color: #67e8f9; background: rgba(103,232,249,.1); }
  @media (max-width: 640px) { display: none; }
`;

export const CvButton = styled.a`
  margin-left: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  color: #67e8f9;
  border: 1px solid rgba(103,232,249,.4);
  border-radius: 9px;
  font-size: 1.35rem;
  font-weight: 600;
  white-space: nowrap;
  transition: background .2s ease;
  &:hover { background: rgba(103,232,249,.1); }
  @media (max-width: 640px) { display: none; }
`;

export const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  margin-left: 6px;
  color: #f8fafc;
  background: #17253b;
  border: 1px solid rgba(148,163,184,.3);
  border-radius: 10px;
  cursor: pointer;
  &:hover { border-color: #67e8f9; }
  @media (max-width: 1060px) { display: flex; }
`;

export const MobileMenu = styled.nav`
  display: none;
  @media (max-width: 1060px) {
    display: ${p => p.$open ? 'flex' : 'none'};
    flex-direction: column;
    gap: 2px;
    padding: 8px 24px 18px;
    background: rgba(11,19,33,.98);
    border-top: 1px solid rgba(148,163,184,.1);
  }
  @media (max-width: 640px) { padding: 8px 16px 18px; }
`;

export const MobileLink = styled.a`
  padding: 12px 8px;
  color: #d6e2ee;
  font-size: 1.55rem;
  border-bottom: 1px solid rgba(148,163,184,.11);
  &:hover, &:focus-visible { color: #67e8f9; }
`;
