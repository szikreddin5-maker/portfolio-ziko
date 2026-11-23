import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: min(1120px, calc(100% - 64px));
  margin: 72px auto 0;
  padding: 32px 0 48px;
  border-top: 1px solid rgba(148,163,184,.16);
  @media (max-width: 640px) { width: calc(100% - 32px); margin-top: 30px; }
`;
export const LinkList = styled.div`
  display: flex;
  gap: 28px;
  margin-bottom: 26px;
`;
export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const LinkTitle = styled.h4`
  color: #9fafc3;
  text-transform: uppercase;
  letter-spacing: .12em;
  font-size: 1.1rem;
  font-weight: 600;
`;
export const LinkItem = styled.a`
  color: #f8fafc;
  font-size: 1.6rem;
  &:hover { color: #67e8f9; }
`;
export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
`;
export const CompanyContainer = styled.div` min-width: 0; `;
export const Slogan = styled.p` color: #aebed2; font-size: 1.4rem; `;
export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
