import React from 'react';
import ProjectStory from '../../components/CaseStudy/ProjectStory';

const project = {
  slug: 'trompet',
  title: 'TROMPET',
  category: 'Unity game development',
  stage: 'In development',
  description: 'A tabletop strategy card game developed as a team project, with a focus on clear 3D scene layout and interactive game presentation.',
  summary: 'Testing card rules and preparing a playable demo for a four-player strategy game.',
  tags: ['Unity', 'C#', 'Automated testing'],
  image: '/images/trompet.webp',
  role: 'Rule tests and playable demo acceptance criteria.',
  overview: 'TROMPET is a team-developed strategy card game. Four rabbit characters sit around a shared Unity tabletop, with three card areas planned for each player. The team has automated C# rule tests and bot simulations, and a 3D scene prototype.',
  contributions: [
    'Contributing test scenarios for card order and attack rules.',
    'Defining acceptance criteria for a playable Android demo with the team.',
  ],
  challenges: [
    'Checking that invalid moves leave the board and player turn intact.',
    'Verifying that a tabletop layout is readable when cards and players share the same scene.',
  ],
  lab: 'A portfolio-only SVG diagram derives player positions from uniform angular spacing and computes three card zones along each player’s tangent. This illustrates a presentation layout, not implemented gameplay logic. The 4 × 3 topology is validated with automated geometry tests.',
  next: 'Verify the position of each player’s card areas in Unity and complete a full match on an Android device.',
};

export default function TrompetPage() {
  return <ProjectStory project={project} />;
}
