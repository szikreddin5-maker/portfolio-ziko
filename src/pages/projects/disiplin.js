import React from 'react';
import ProjectStory from '../../components/CaseStudy/ProjectStory';

const project = {
  title: 'DİSİPLİN',
  category: 'Android product development',
  stage: 'Closed testing',
  description: 'An Android productivity project exploring how daily routines, focus and community coordination can fit into one thoughtful mobile experience.',
  summary: 'Exploring a focused mobile experience for daily routines, reflection and community coordination.',
  tags: ['Android', 'Kotlin', 'Room', 'Firebase', 'AI integration'],
  image: '/images/disiplin.png',
  role: 'Product planning, interface direction and collaborative development.',
  overview: 'DİSİPLİN is a mobile productivity project focused on personal routines and team organization. The project explores how a coherent user experience can connect everyday progress with community activity. Its described Android stack includes Kotlin, Room and Firebase, with AI-powered features under development.',
  contributions: [
    'Developing the product direction and prioritizing an experience focused on useful daily actions.',
    'Working across interface decisions, feature planning and coordination within the project.',
    'Evaluating how the Android stack supports local data, cloud-connected features and future integrations.',
  ],
  challenges: [
    'Reducing feature overload while making the primary daily journey understandable.',
    'Distinguishing planned capabilities from working features during product iteration.',
    'Preparing a meaningful, public-facing showcase while the app remains in closed testing.',
  ],
  next: 'Prepare verified application screenshots, document the current working features, and publish a short demonstration that visitors can watch without joining the closed-testing program.',
  external: {
    label: 'Google Play closed testing',
    url: 'https://play.google.com/apps/testing/com.disiplin.app',
  },
};

export default function DisiplinPage() {
  return <ProjectStory project={project} />;
}
