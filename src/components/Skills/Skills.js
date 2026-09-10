import React from 'react';
import { DiUnitySmall, DiPython, DiReact, DiCssdeck } from 'react-icons/di';
import { SiCsharp, SiNextDotJs } from 'react-icons/si';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { SkillGrid, SkillCard, SkillIcon, SkillTitle, SkillText } from './SkillsStyles';

const skills = [
  {
    title: 'Unity & C#',
    text: 'Oyun sistemleri, durum makineleri ve strateji mekanikleri.',
    Icon: SiCsharp,
  },
  {
    title: 'Game Dev',
    text: '2D kart oyunları, asenkron animasyon ve oyun teorisi.',
    Icon: DiUnitySmall,
  },
  {
    title: 'Next.js',
    text: 'Modern web uygulamaları ve performans odaklı arayüzler.',
    Icon: SiNextDotJs,
  },
  {
    title: 'React',
    text: 'Bileşen mimarisi, durum yönetimi ve etkileşimli UI.',
    Icon: DiReact,
  },
  {
    title: 'Python & AI',
    text: 'Yapay zeka entegrasyonu, ajanlar ve veri odaklı çözümler.',
    Icon: DiPython,
  },
  {
    title: 'C & Sistem',
    text: 'Algoritma temelleri ve düşük seviyeli problem çözme.',
    Icon: DiCssdeck,
  },
];

const Skills = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Yetenekler</SectionTitle>
    <SectionText>
      Oyun sistemlerinden web ve yapay zeka entegrasyonuna kadar, projelerimde kullandığım temel yığın.
    </SectionText>
    <SkillGrid>
      {skills.map(({ title, text, Icon }) => (
        <SkillCard key={title}>
          <SkillIcon>
            <Icon size="3.2rem" />
          </SkillIcon>
          <SkillTitle>{title}</SkillTitle>
          <SkillText>{text}</SkillText>
        </SkillCard>
      ))}
    </SkillGrid>
  </Section>
);

export default Skills;
