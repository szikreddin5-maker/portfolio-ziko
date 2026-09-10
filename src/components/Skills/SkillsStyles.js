import styled from 'styled-components';

export const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin: 3rem 0 4rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const SkillCard = styled.article`
  padding: 24px 22px;
  border-radius: 14px;
  border: 1px solid rgba(34, 211, 238, 0.18);
  background: linear-gradient(160deg, rgba(34, 211, 238, 0.08), rgba(15, 22, 36, 0.4));
  transition: border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: rgba(34, 211, 238, 0.45);
    transform: translateY(-3px);
  }
`;

export const SkillIcon = styled.div`
  color: #67e8f9;
  margin-bottom: 12px;
`;

export const SkillTitle = styled.h3`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 8px;
`;

export const SkillText = styled.p`
  color: rgba(255, 255, 255, 0.62);
  font-size: 1.5rem;
  line-height: 2.4rem;
`;
