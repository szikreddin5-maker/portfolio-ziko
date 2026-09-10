import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,  } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Telefon</LinkTitle>
          <LinkItem href="tel:05052367825">0 505 236 7825</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-posta</LinkTitle>
          <LinkItem href="mailto:szikreddin5@gmail.com">
            szikreddin5@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Bir proje, bir sistem, bir adım ileri.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/szikreddin5-maker" target="_blank" rel="noreferrer">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/zikreddin%C5%9F%C4%B1k/" target="_blank" rel="noreferrer">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/zikreddin00/" target="_blank" rel="noreferrer">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
