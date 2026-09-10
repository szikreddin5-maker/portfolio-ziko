import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '600+', text: 'Yapay Zeka Kulübüm üye sayısı'},
  { number: '1.', text: 'Münazara Bölge Şampiyonu' },
  { number: '3.', text: 'İl Satranç Turnuvası Derecesi 2026' },
  { number: '117.263', text: 'YKS 2024 Analitik Başarı Sıralaması' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Kişisel Başarılar</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
