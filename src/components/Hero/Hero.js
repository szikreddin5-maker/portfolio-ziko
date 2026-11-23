import React from 'react';
import {
  HeroWrap, HeroGrid, LeftSection, RightSection, Badge, Title, NameAccent,
  Lead, ButtonRow, PrimaryButton, SecondaryButton, PreviewLink, PreviewImage,
  PreviewContent, PreviewEyebrow, PreviewTitle, PreviewMeta, Availability,
} from './HeroStyles';

const Hero = () => (
  <HeroWrap id="top" aria-labelledby="hero-title">
    <HeroGrid>
      <LeftSection>
        <Badge>COMPUTER ENGINEERING STUDENT</Badge>
        <Title id="hero-title">
          <NameAccent>Zikreddin Şık</NameAccent>
        </Title>
        <Lead>
          I'm a second-year Computer Engineering student and president of the AI Club at Karabük University.
          I work on TROMPET, a Unity card game, and DİSİPLİN, an Android focus app.
          I'm looking for a software development internship.
        </Lead>
        <ButtonRow>
          <PrimaryButton href="#projects">Explore my work <span aria-hidden="true">↗</span></PrimaryButton>
          <SecondaryButton href="#contact">Get in touch</SecondaryButton>
        </ButtonRow>
      </LeftSection>
      <RightSection>
        <PreviewLink href="/projects/trompet" aria-label="Explore TROMPET, an in-development card game">
          <PreviewImage src="/images/trompet.webp" alt="TROMPET strategic card game project artwork" />
          <PreviewContent>
            <PreviewEyebrow>FEATURED GAME PROJECT</PreviewEyebrow>
            <PreviewTitle>TROMPET</PreviewTitle>
            <PreviewMeta>Unity · C# · Team project</PreviewMeta>
            <Availability>In development <span aria-hidden="true">↗</span></Availability>
          </PreviewContent>
        </PreviewLink>
      </RightSection>
    </HeroGrid>
  </HeroWrap>
);

export default Hero;
