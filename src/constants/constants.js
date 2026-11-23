// Public-facing project data. Keep personal details and unverified claims out of this file.
export const projects = [
  {
    id: 'trompet',
    title: 'TROMPET',
    intro: 'Tabletop strategy card game · Team project',
    description: 'A four-player strategy card game set around a shared 3D table.',
    image: '/images/trompet.webp',
    imagePosition: 'center 40%',
    tags: ['Unity', 'C#', 'Automated testing'],
    role: 'Rule tests & demo acceptance criteria',
    stage: 'In development',
    actions: [
      { label: 'TROMPET case study', type: 'primary', href: '/projects/trompet' },
      { label: 'Explore the tabletop layout', type: 'secondary', href: '#board-lab' },
    ],
  },
  {
    id: 'disiplin',
    title: 'DİSİPLİN',
    intro: 'Android focus & productivity application',
    description: 'An Android app for setting aside time to focus and keeping track of routines.',
    image: '/images/disiplin.png',
    tags: ['Kotlin', 'Android', 'Room', 'Firebase'],
    role: 'Android release preparation',
    stage: 'Closed testing',
    actions: [
      { label: 'DİSİPLİN case study', type: 'primary', href: '/projects/disiplin' },
      { label: 'See a focus session', type: 'secondary', href: '/projects/disiplin#focus-session' },
    ],
  },
];

export const hobbies = [
  { id: 'music', title: 'Classical music & violin', description: 'Patience, consistent practice and deep focus.', image: '/images/keman.webp' },
  { id: 'chess', title: 'Chess', description: 'Strategic thinking and learning from each move.', image: '/images/santranc.webp' },
  { id: 'debate', title: 'Debate', description: 'Clear arguments, listening and effective communication.', image: '/images/munazara.webp' },
];
