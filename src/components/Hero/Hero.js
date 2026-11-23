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
        <Badge>SOFTWARE DEVELOPMENT · UNITY &amp; ANDROID</Badge>
        <Title id="hero-title">
          <NameAccent>Zikreddin Şık</NameAccent>
        </Title>
        <Lead>
          I build Unity games and Android apps. I contribute to rule testing for TROMPET, a strategy
          card game, and release preparation for DİSİPLİN, an Android focus app.
          I also lead the AI Club at Karabük University.
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
