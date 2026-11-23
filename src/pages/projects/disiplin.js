import React from 'react';
import ProjectStory from '../../components/CaseStudy/ProjectStory';

const project = {
  slug: 'disiplin',
  title: 'DİSİPLİN',
  category: 'Android product development',
  stage: 'Closed testing',
  description: 'An Android productivity project exploring how daily routines, focus and community coordination can fit into one thoughtful mobile experience.',
  summary: 'An Android app for setting aside time to focus and keeping track of routines.',
  tags: ['Android', 'Kotlin', 'Room', 'Firebase', 'AI integration'],
  image: '/images/disiplin.png',
  role: 'Android release preparation.',
  overview: 'DİSİPLİN brings timed focus sessions and routines into one Android app. The Android project is written in Kotlin and uses Room and Firebase. Google Play access is through closed testing.',
  contributions: [
    'Contributing to Google Play test release preparation and updating Android build versions.',
  ],
  challenges: [
    'Reducing feature overload while making the primary daily journey understandable.',
    'Distinguishing planned capabilities from working features during product iteration.',
    'Preparing a meaningful, public-facing showcase while the app remains in closed testing.',
  ],
  example: {
    title: 'A focus session',
    description: 'Choose a duration and start the countdown. The session completes when the timer expires. Leaving the app while the countdown is active interrupts the session.',
  },
  next: 'Record a focus session from the Android test build so visitors can inspect the flow without a Google Play test account.',
  external: {
    label: 'Google Play closed testing',
    url: 'https://play.google.com/apps/testing/com.disiplin.app',
  },
};

export default function DisiplinPage() {
  return <ProjectStory project={project} />;
}
