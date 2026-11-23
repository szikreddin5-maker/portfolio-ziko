// Public-facing project data. Keep personal details and unverified claims out of this file.
export const projects = [
  {
    id: 'trompet',
    title: 'TROMPET',
    intro: 'Tabletop strategy card game · Team project',
    description: 'A four-player card game with a 3D Unity tabletop. I contributed test scenarios for card order and attacks, and helped define how we will verify the playable demo.',
    image: '/images/trompet.webp',
    imagePosition: 'center 40%',
    tags: ['Unity', 'C#', 'Automated testing'],
    role: 'Rule tests & demo acceptance criteria',
    stage: 'In development',
    caseStudy: '/projects/trompet',
    actions: [{ label: 'View project story', type: 'primary', href: '/projects/trompet' }],
  },
  {
    id: 'disiplin',
    title: 'DİSİPLİN',
    intro: 'Android focus & productivity application',
    description: 'An Android app for setting aside time to focus and tracking routines. I contributed to Google Play test release preparation.',
    image: '/images/disiplin.png',
    tags: ['Kotlin', 'Android', 'Room', 'Firebase'],
    role: 'Android release preparation',
    stage: 'Closed testing',
    caseStudy: '/projects/disiplin',
    actions: [
      { label: 'View project story', type: 'primary', href: '/projects/disiplin' },
      { label: 'Google Play test', type: 'secondary', href: 'https://play.google.com/apps/testing/com.disiplin.app' },
    ],
  },
];

export const hobbies = [
  { id: 'music', title: 'Classical music & violin', description: 'Patience, consistent practice and deep focus.', image: '/images/keman.webp' },
  { id: 'chess', title: 'Chess', description: 'Strategic thinking and learning from each move.', image: '/images/santranc.webp' },
  { id: 'debate', title: 'Debate', description: 'Clear arguments, listening and effective communication.', image: '/images/munazara.webp' },
];
