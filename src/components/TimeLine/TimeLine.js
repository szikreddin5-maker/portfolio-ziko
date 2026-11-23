import React, { useEffect, useRef } from 'react';
import { AiOutlineTeam, AiOutlineCode, AiOutlineCompass } from 'react-icons/ai';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { VisionGrid, VisionCard, VisionIcon, VisionTitle, VisionText } from './TimeLineStyles';

const visionCards = [
  {
    title: 'Kulüp çalışmaları',
    Icon: AiOutlineTeam,
    text: 'Kulüpte teknik atölyeler, hackathonlar ve ÜNİDES destekli projeler düzenliyoruz. Ben hazırlıkları ve ekipler arasındaki koordinasyonu yürütüyorum.',
  },
  {
    title: 'Yazılım geliştirme',
    Icon: AiOutlineCode,
    text: 'TROMPET’te oyun kuralları için test senaryoları hazırlıyorum. DİSİPLİN’de Android test sürümünün hazırlanmasına katkı veriyorum.',
  },
  {
    title: 'Yazılım dışında',
    Icon: AiOutlineCompass,
    text: 'Keman çalıyorum, satranç oynuyorum ve münazarayla ilgileniyorum. Kendi çabamla yola çıkardığım Kuba Superlight 200’ün de burada ayrı bir yeri var.',
  },
];

const Timeline = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!window.IntersectionObserver ||
        !Element.prototype.animate ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const cards = Array.from(gridRef.current.children);
    const animations = [];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return;
        observer.unobserve(target);
        animations.push(target.animate(
          [
            { opacity: 0.35, transform: 'translateY(12px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          { duration: 480, delay: cards.indexOf(target) * 75, easing: 'ease-out', fill: 'backwards' }
        ));
      });
    }, { threshold: 0.12 });

    cards.forEach(card => observer.observe(card));
    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
    };
  }, []);

  return (
    <Section id="about" aria-labelledby="about-title">
      <SectionTitle id="about-title">Hakkımda</SectionTitle>
      <VisionGrid ref={gridRef}>
        {visionCards.map(({ title, Icon, text }) => (
          <VisionCard key={title}>
            <VisionIcon aria-hidden="true">
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
};

export default Timeline;
