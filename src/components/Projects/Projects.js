import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Intro,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ImageFrame,
  ImageMask,
  StatusBadge,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projeler</SectionTitle>
    <GridContainer>
      {projects.map((p) => (
        <BlogCard key={p.id}>
          <ImageFrame>
            <Img src={p.image} alt={p.title} $position={p.imagePosition} />
            <ImageMask />
          </ImageFrame>
          <TitleContent>
            <HeaderThree title>{p.title}</HeaderThree>
            <Intro>{p.intro}</Intro>
            <Hr />
          </TitleContent>
          <CardInfo>{p.description}</CardInfo>
          <div>
            <TitleContent>Yığın</TitleContent>
            <TagList>
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {p.actions.map((action) => {
              if (action.type === 'badge') {
                return <StatusBadge key={action.label}>{action.label}</StatusBadge>;
              }

              return (
                <ExternalLinks
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  primary={action.type === 'primary'}
                >
                  {action.label}
                </ExternalLinks>
              );
            })}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
