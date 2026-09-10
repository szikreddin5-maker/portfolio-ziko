import React from 'react';
import { AiOutlineTeam, AiOutlineAppstore, AiOutlineThunderbolt } from 'react-icons/ai';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { VisionGrid, VisionCard, VisionIcon, VisionTitle, VisionText } from './TimeLineStyles';

const visionCards = [
  {
    title: 'Topluluk & Liderlik',
    Icon: AiOutlineTeam,
    text: "Karabük Üniversitesi Yapay Zeka Kulübü Başkanı olarak 500'den fazla üyenin yer aldığı bir teknoloji ekosistemine liderlik ediyorum. Hackathonlar, teknik atölyeler ve ÜNİDES destekli projeler koordine ederek genç geliştiricilerin sahaya inmesini sağlıyorum.",
  },
  {
    title: 'Ürün & Sistem Tasarımı',
    Icon: AiOutlineAppstore,
    text: 'Kod yazmayı salt bir görev değil, gerçek hayattaki problemleri çözen ürünler tasarlamak olarak görüyorum. DİSİPLİN uygulamasında topluluk koordinasyonunu, TROMPET projesinde ise insan zihninin karar alma dinamiklerini merkeze alıyorum.',
  },
  {
    title: 'Mühendislik & Problem Çözme',
    Icon: AiOutlineThunderbolt,
    text: 'Bilgisayar Mühendisliği formasyonumu C, C#, Kotlin ve modern web teknolojileriyle birleştiriyorum. Performans odaklı, sürdürülebilir ve yaşayan yazılım mimarileri kurmaya odaklanıyorum.',
  },
];

const Timeline = () => (
  <Section id="about">
    <SectionTitle>Mühendislik Refleksi, Topluluk Vizyonu</SectionTitle>
    <VisionGrid>
      {visionCards.map(({ title, Icon, text }) => (
        <VisionCard key={title}>
          <VisionIcon>
            <Icon size="3.2rem" />
          </VisionIcon>
          <VisionTitle>{title}</VisionTitle>
          <VisionText>{text}</VisionText>
        </VisionCard>
      ))}
    </VisionGrid>
    <SectionDivider />
  </Section>
);

export default Timeline;
