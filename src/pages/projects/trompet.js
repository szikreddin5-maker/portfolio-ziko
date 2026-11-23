import React from 'react';
import ProjectStory from '../../components/CaseStudy/ProjectStory';

const project = {
  slug: 'trompet',
  title: 'TROMPET',
  category: 'Unity game development',
  stage: 'In development',
  description: 'A tabletop strategy card game developed as a team project, with a focus on clear 3D scene layout and interactive game presentation.',
  summary: 'Designing a readable tabletop experience for a four-player strategic card game.',
  tags: ['Unity', 'C# project', '3D scene layout', 'Team collaboration'],
  image: '/images/trompet.webp',
  role: 'Unity scene design, character placement, camera framing and visual integration.',
  overview: 'TROMPET is a team-developed strategy card game centered on a shared table. The Unity scene uses four rabbit characters positioned around the play area. Each player has three distinct card areas, creating a layout challenge: the tabletop needs to look engaging without obscuring important information.',
  contributions: [
    'Working on the Unity 3D scene, table composition and four-player character arrangement.',
    'Iterating on camera positioning and visual clarity around the shared tabletop.',
    'Preparing the visual scene and assets for integration with the team’s gameplay code.',
    'Coordinating visual work with a teammate responsible for C# gameplay mechanics.',
  ],
  challenges: [
    'Balancing a distinctive tabletop scene with readable card and player positions.',
    'Keeping a clean separation between visual presentation and the gameplay implementation owned by other team members.',
    'Iterating in the editor and documenting scene setup to make teamwork easier.',
  ],
  lab: 'A portfolio-only SVG diagram derives player positions from uniform angular spacing and computes three card zones along each player’s tangent. This illustrates a presentation layout, not implemented gameplay logic. The 4 × 3 topology is validated with automated geometry tests.',
  next: 'Complete and validate the visual card areas for each player, integrate the scene with gameplay systems, and replace the current project artwork with real Unity screenshots and footage. Features that are still under development are not presented as finished.',
};

export default function TrompetPage() {
  return <ProjectStory project={project} />;
}
