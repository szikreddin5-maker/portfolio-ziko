import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Layout } from '../../layout/Layout';

const Wrapper = styled.article`
  width: min(1120px, 100%);
  margin: 0 auto;
  padding: clamp(32px, 6vw, 76px) 32px 96px;
  @media (max-width: 640px) { padding: 32px 16px 70px; }
`;
const Back = styled.a`
  display: inline-flex;
  align-items: center;
  color: #85e5f2;
  font-size: 1.4rem;
  margin-bottom: 38px;
  &:hover { color: #fff; }
  &:focus-visible { outline: 2px solid #67e8f9; outline-offset: 5px; }
`;
const Eyebrow = styled.p`
  color: #67e8f9;
  font: 600 1.2rem 'JetBrains Mono', monospace;
  letter-spacing: .12em;
  text-transform: uppercase;
  margin-bottom: 15px;
`;
const Title = styled.h1`
  color: #f8fafc;
  font-size: clamp(4.2rem, 7vw, 7rem);
  line-height: 1.1;
  letter-spacing: -.05em;
  margin: 0 0 20px;
`;
const Summary = styled.p`
  color: #bac9dc;
  font-size: clamp(1.8rem, 2.4vw, 2.3rem);
  line-height: 1.6;
  max-width: 800px;
`;
const Meta = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin: 24px 0 40px;
`;
const Pill = styled.span`
  font-size: 1.3rem;
  color: #d5e4f0;
  border: 1px solid #334459;
  border-radius: 999px;
  padding: 7px 12px;
`;
const Cover = styled.figure`
  margin: 0 0 46px;
  background: #111e30;
  border: 1px solid rgba(148,163,184,.2);
  border-radius: 18px;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    max-height: 490px;
    object-fit: cover;
  }
  figcaption {
    color: #aebed2;
    font-size: 1.2rem;
    padding: 13px 20px;
  }
`;
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(220px, 1fr);
  gap: 50px;
  align-items: start;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 24px; }
`;
const Section = styled.section`
  margin-bottom: 40px;
  h2 { color: #f8fafc; font-size: 2.5rem; margin-bottom: 16px; }
  p, li { color: #b7c6d8; font-size: 1.6rem; line-height: 1.8; }
  ul { list-style: none; padding: 0; margin-top: 10px; }
  li { margin: 0 0 12px; padding-left: 21px; position: relative; }
  ul li::before { content: '—'; color: #67e8f9; position: absolute; left: 0; }
  ol { margin: 0; padding-left: 24px; }
  ol li { padding-left: 6px; }
  ol li::marker { color: #67e8f9; }
`;
const Aside = styled.aside`
  padding: 24px;
  border-radius: 14px;
  border: 1px solid #334459;
  background: rgba(15,23,42,.55);
  h2 { font-size: 1.6rem; color: #f8fafc; margin-bottom: 14px; }
  p { color: #b7c6d8; font-size: 1.4rem; line-height: 1.7; }
  a { color: #67e8f9; overflow-wrap: anywhere; }
  a:focus-visible { outline: 2px solid #67e8f9; }
`;
const EndLink = styled.a`
  display: inline-block;
  color: #071321;
  background: #67e8f9;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 14px 22px;
  border-radius: 10px;
  margin-top: 16px;
  &:hover { background: #a5f3fc; }
  &:focus-visible { outline: 2px solid white; outline-offset: 4px; }
`;

const ProjectStory = ({ project }) => (
  <Layout>
    <Head>
      <title>{project.title} — Case Study | Zikreddin Şık</title>
      <meta name="description" content={project.description} />
      <meta property="og:title" content={project.title + ' — Case Study'} />
      <meta property="og:description" content={project.description} />
      <link rel="canonical" href={"https://portfolio-ziko-00.vercel.app/projects/" + project.slug} />
    </Head>
    <Wrapper>
      <Back href="/#projects">← All projects</Back>
      <header>
        <Eyebrow>{project.category} · {project.stage}</Eyebrow>
        <Title>{project.title}</Title>
        <Summary>{project.summary}</Summary>
        <Meta>
          {project.tags.map(tag => <Pill key={tag}>{tag}</Pill>)}
        </Meta>
      </header>
      <Cover>
        <img src={project.image} alt={project.title + ' project artwork'} />
        <figcaption>Project artwork. Real product captures and demo footage will be added as they are ready.</figcaption>
      </Cover>
      <ContentGrid>
        <div>
          <Section>
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </Section>
          <Section>
            <h2>My contributions</h2>
            <ul>{project.contributions.map(item => <li key={item}>{item}</li>)}</ul>
          </Section>
          <Section>
            <h2>Challenges & lessons</h2>
            <ul>{project.challenges.map(item => <li key={item}>{item}</li>)}</ul>
          </Section>
          {project.example && (
            <Section id={project.example.id}>
              <h2>{project.example.title}</h2>
              <ol>
                {project.example.steps.map(step => <li key={step}>{step}</li>)}
              </ol>
            </Section>
          )}
          {project.lab && (
            <Section>
              <h2>Technical design note</h2>
              <p>{project.lab}</p>
              <p style={{ marginTop: 16 }}>
                <a style={{ color: '#67e8f9' }} href="/#board-lab">Explore the interactive 4 × 3 layout study ↗</a>
              </p>
            </Section>
          )}
          <Section>
            <h2>What's next</h2>
            <p>{project.next}</p>
          </Section>
          <EndLink href="/#contact">Discuss this project ↗</EndLink>
        </div>
        <Aside>
          <h2>Project details</h2>
          <p><strong>Type:</strong> {project.category}</p>
          <p><strong>Status:</strong> {project.stage}</p>
          <p><strong>My focus:</strong> {project.role}</p>
          {project.external && <p><a href={project.external.url} rel="noopener noreferrer" target="_blank">{project.external.label} ↗</a></p>}
        </Aside>
      </ContentGrid>
    </Wrapper>
  </Layout>
);

export default ProjectStory;
