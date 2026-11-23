// Public-facing project data. Keep personal details and unverified claims out of this file.
export const projects = [
  {
    id: 'trompet',
    title: 'TROMPET',
    intro: 'Tabletop strategy card game · Team project',
    description: 'A strategic card game developed with Unity. My current work focuses on the 3D tabletop scene, player and character placement, camera framing, and the visual presentation of card areas.',
    image: '/images/trompet.webp',
    imagePosition: 'center 40%',
    tags: ['Unity', 'C# ecosystem', '3D Scene Design', 'Teamwork'],
    role: 'Unity scene & visual presentation',
    stage: 'In development',
    caseStudy: '/projects/trompet',
    actions: [{ label: 'View project story', type: 'primary', href: '/projects/trompet' }],
  },
  {
    id: 'disiplin',
    title: 'DİSİPLİN',
    intro: 'Android focus & productivity application',
    description: 'A mobile product exploring focus, routines and community coordination. Its Android technology stack includes Kotlin, local persistence, Firebase and AI integration.',
    image: '/images/disiplin.png',
    tags: ['Kotlin', 'Android', 'Room', 'Firebase'],
    role: 'Product development & collaboration',
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
