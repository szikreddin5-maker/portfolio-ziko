import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

// Curated public achievements. Personal exam rankings are intentionally omitted.
const achievements = [
  { number: '600+', text: 'University AI club community members' },
  { number: '1st', text: 'Regional debate competition' },
  { number: '3rd', text: 'Provincial chess tournament, 2026' },
];

const Acomplishments = () => (
  <Section aria-labelledby="achievements-title">
    <SectionTitle id="achievements-title">Selected Achievements</SectionTitle>
    <Boxes>
      {achievements.map(({ number, text }) => (
        <Box key={text}>
          <BoxNum>{number}</BoxNum>
          <BoxText>{text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
