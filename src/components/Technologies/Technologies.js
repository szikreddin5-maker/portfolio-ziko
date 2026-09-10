import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {
  HobbyGrid,
  HobbyCard,
  HobbyMedia,
  HobbyImage,
  HobbyMask,
  HobbyBody,
  HobbyTitle,
  HobbyDescription,
} from './TechnologiesStyles';
import { hobbies } from '../../constants/constants';

const Technologies = () => (
  <Section id="hobbies" style={{ overflow: 'visible' }}>
    <SectionDivider divider />
    <SectionTitle>Hobiler</SectionTitle>
    <SectionText>
      Disiplin, strateji ve hareket. Bu alanlar mühendislik refleksimi ve liderlik duruşumu besliyor.
    </SectionText>
    <HobbyGrid>
      {hobbies.map((hobby) => (
        <HobbyCard key={hobby.id}>
          <HobbyMedia>
            <HobbyImage src={hobby.image} alt={hobby.title} />
            <HobbyMask />
          </HobbyMedia>
          <HobbyBody>
            <HobbyTitle>{hobby.title}</HobbyTitle>
            <HobbyDescription>{hobby.description}</HobbyDescription>
          </HobbyBody>
        </HobbyCard>
      ))}
    </HobbyGrid>
  </Section>
);

export default Technologies;
