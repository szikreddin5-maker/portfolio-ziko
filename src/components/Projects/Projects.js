import React from 'react';
import {
  BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Intro,
  Tag, TagList, TitleContent, UtilityList, Img, ImageFrame, ImageMask, StatusBadge,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Selected Work</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <ImageFrame>
            <Img src={project.image} alt={project.title + ' project artwork'} $position={project.imagePosition} loading="lazy" />
            <ImageMask />
          </ImageFrame>
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Intro>{project.intro}</Intro>
            <Hr />
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <CardInfo as="p"><strong>My focus:</strong> {project.role}</CardInfo>
          <TagList aria-label="Technologies and areas">
            {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </TagList>
          <UtilityList>
            <li><StatusBadge>{project.stage}</StatusBadge></li>
            {project.actions.map((action) => (
              <li key={action.label}>
                <ExternalLinks
                  href={action.href}
                  target={action.href.startsWith('https://') ? '_blank' : undefined}
                  rel={action.href.startsWith('https://') ? 'noopener noreferrer' : undefined}
                  primary={action.type === 'primary'}
                >
                  {action.label}
                </ExternalLinks>
              </li>
            ))}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);
export default Projects;
