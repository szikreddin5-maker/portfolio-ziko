import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, ImageWrapper, ProfileImg, ImgOverlay } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Zikreddin Şık - Kişisel Sayfasına Hoşgeldiniz
        </SectionTitle>
        <SectionText>
        Karabük Üniversitesi Bilgisayar Mühendisliği öğrencisi ve Yapay Zeka Kulübü Başkanı olarak çalışmalarımı sürdürmekteyim. Yazılım geliştirme süreçlerinde C, C#, Python ve Next.js/Tailwind CSS teknolojilerine odaklanırken; oyun geliştirme alanında Unity 2D ile projeler üretiyorum. Teknolojinin yanı sıra felsefe, psikoloji, satranç ve münazara gibi entelektüel alanlarla ilgileniyor, teorik birikimi pratik inovasyonla buluşturmayı hedefliyorum.
        </SectionText>
        <Button onClick={props.handleClick}>Daha Fazlası..</Button>
      </LeftSection>
      <RightSection>
        <ImageWrapper>
          <ProfileImg src="/profile.webp" alt="profile" />
          <ImgOverlay />
        </ImageWrapper>
      </RightSection>
    </Section>
  </>
);

export default Hero;