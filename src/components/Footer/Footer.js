import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import {
  CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList,
  LinkTitle, Slogan, SocialContainer, SocialIconsContainer, FooterSocialLink,
} from './FooterStyles';

const Footer = () => (
  <FooterWrapper id="contact">
    <LinkList>
      <LinkColumn>
        <LinkTitle>Get in touch</LinkTitle>
        <LinkItem href="mailto:szikreddin5@gmail.com">Email me</LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Building games, products, and communities.</Slogan>
      </CompanyContainer>
      <SocialContainer>
        <FooterSocialLink href="https://github.com/szikreddin5-maker" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <AiFillGithub size="3rem" />
        </FooterSocialLink>
        <FooterSocialLink href="https://www.linkedin.com/in/zikreddin%C5%9F%C4%B1k/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <AiFillLinkedin size="3rem" />
        </FooterSocialLink>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
);

export default Footer;
