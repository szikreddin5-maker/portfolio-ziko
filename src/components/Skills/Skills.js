import React from 'react';
import { DiUnitySmall, DiReact } from 'react-icons/di';
import { SiCsharp, SiKotlin } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { SkillGrid, SkillCard, SkillIcon, SkillTitle, SkillText } from './SkillsStyles';

const skills = [
  { title: 'Unity & C#', text: 'Learning to develop gameplay systems while building and iterating on Unity scenes.', Icon: SiCsharp },
  { title: 'Scene & Interaction Design', text: '3D environment layout, camera framing and readable tabletop player areas.', Icon: DiUnitySmall },
  { title: 'Android & Kotlin', text: 'Product development experience through a mobile productivity project.', Icon: SiKotlin },
  { title: 'Web & Collaboration', text: 'React, Next.js, Git and component-based UI development.', Icon: DiReact },
];

const Skills = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Technical Skills</SectionTitle>
    <SectionText>A focused toolkit shaped by hands-on projects and ongoing learning.</SectionText>
    <SkillGrid>
      {skills.map(({ title, text, Icon }) => (
        <SkillCard key={title}>
          <SkillIcon><Icon size="3.2rem" aria-hidden="true" /></SkillIcon>
          <SkillTitle>{title}</SkillTitle>
          <SkillText>{text}</SkillText>
        </SkillCard>
      ))}
    </SkillGrid>
  </Section>
);

export default Skills;
