import React from 'react';
import { AiOutlineTeam, AiOutlineAppstore } from 'react-icons/ai';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { VisionGrid, VisionCard, VisionIcon, VisionTitle, VisionText } from './TimeLineStyles';

const experience = [
  {
    title: 'University AI Club',
    Icon: AiOutlineTeam,
    text: 'President of the Karabük University Artificial Intelligence Club. I support community coordination, technical events and collaboration among students interested in technology.',
  },
  {
    title: 'Collaborative Product Work',
    Icon: AiOutlineAppstore,
    text: 'Working with teammates on TROMPET and DİSİPLİN has helped me connect design decisions, technical implementation and iterative feedback.',
  },
];

const Timeline = () => (
  <Section id="leadership">
    <SectionDivider divider />
    <SectionTitle>Leadership & Collaboration</SectionTitle>
    <VisionGrid>
      {experience.map(({ title, Icon, text }) => (
        <VisionCard key={title}>
          <VisionIcon><Icon size="3.2rem" aria-hidden="true" /></VisionIcon>
          <VisionTitle>{title}</VisionTitle>
          <VisionText>{text}</VisionText>
        </VisionCard>
      ))}
    </VisionGrid>
  </Section>
);
export default Timeline;
