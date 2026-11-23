import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { HobbyGrid, HobbyCard, HobbyMedia, HobbyImage, HobbyMask, HobbyBody, HobbyTitle, HobbyDescription } from './TechnologiesStyles';
import { hobbies } from '../../constants/constants';

const Technologies = () => (
  <Section id="about">
    <SectionDivider divider />
    <SectionTitle>Beyond the Code</SectionTitle>
    <SectionText>
      Outside development, these interests help me stay creative and disciplined.
    </SectionText>
    <HobbyGrid>
      {hobbies.map(({ id, title, description, image }) => (
        <HobbyCard key={id}>
          <HobbyMedia>
            <HobbyImage src={image} alt="" loading="lazy" />
            <HobbyMask />
          </HobbyMedia>
          <HobbyBody>
            <HobbyTitle>{title}</HobbyTitle>
            <HobbyDescription>{description}</HobbyDescription>
          </HobbyBody>
        </HobbyCard>
      ))}
    </HobbyGrid>
  </Section>
);
export default Technologies;
