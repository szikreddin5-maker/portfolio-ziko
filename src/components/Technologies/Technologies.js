import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { HobbyGrid, HobbyCard, HobbyImage, HobbyTitle, HobbyDescription } from './TechnologiesStyles';
import { hobbies } from '../../constants/constants';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Hobiler & Yetkinlikler</SectionTitle>
    <SectionText>
      Hobilerimin her biri, beni mühendis, stratejist ve insan olarak forja eden birer ustası. Müzik, strateji, münazara ve azimle yaşamı tasarlıyorum.
    </SectionText>
    <HobbyGrid>
      {hobbies.map((hobby) => (
        <HobbyCard key={hobby.id}>
          <HobbyImage src={hobby.image} alt={hobby.title} />
          <HobbyTitle>{hobby.title}</HobbyTitle>
          <HobbyDescription>{hobby.description}</HobbyDescription>
        </HobbyCard>
      ))}
    </HobbyGrid>
  </Section>
);

export default Technologies;

