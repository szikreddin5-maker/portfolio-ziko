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
        <Badge>UNITY / C# · GAME DEVELOPMENT</Badge>
        <Title id="hero-title">
          Building interactive experiences, <NameAccent>one system at a time.</NameAccent>
        </Title>
        <Lead>
          I'm Zikreddin, a Computer Engineering student focused on Unity game
          development, thoughtful interactions, and collaborative projects.
          I also build digital products and lead a university technology community.
        </Lead>
        <ButtonRow>
          <PrimaryButton href="#projects">Explore my work <span aria-hidden="true">↗</span></PrimaryButton>
          <SecondaryButton href="#contact">Get in touch</SecondaryButton>
        </ButtonRow>
      </LeftSection>
      <RightSection>
        <PreviewLink href="#projects" aria-label="Explore TROMPET, an in-development card game">
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
