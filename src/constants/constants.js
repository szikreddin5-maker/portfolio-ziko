export const hobbies = [
  {
    title: 'Klasik Müzik & Keman',
    description: "Notaların matematiğini ve kas hafızasını birleştiren bir disiplin. Keman pratikleri, yazılım geliştirirken ihtiyaç duyduğum 'deep work' (derin odaklanma) süremi uzatırken, bana sabrı öğretiyor.",
    image: '/images/keman.webp',
    id: 0,
  },
  {
    title: 'Satranç & Taktiksel Analiz',
    description: 'Satranç tahtasındaki oyun teorisi ve hamle hesaplamaları, yazılım mimarisinde birkaç adım sonrasını planlama ve kriz anlarında soğukkanlı kalma refleksimi doğrudan besliyor.',
    image: '/images/santranc.webp',
    id: 1,
  },
  {
    title: 'Münazara & Analitik İletişim',
    description: 'Kompleks argümanları hızlıca sentezleme, çürütme ve kitleye aktarma yeteneği; benim için kod yazmak kadar, doğru iletişimin ve liderliğin de vazgeçilmez bir parçası.',
    image: '/images/munazara.webp',
    id: 2,
  },
  {
    title: 'Mekanik & Sürüş Disiplini',
    description: 'Tamamen kendi çabamla yola çıkardığım Kuba Superlight 200 motosikletim. Rotayı planlamak ve makinenin dinamiğini anlamak; özgürlüğün ve mekanik tutkunun somut bir karşılığı.',
    image: '/images/motor.webp',
    id: 3,
  },
];

export const projects = [
  {
    title: 'TROMPET',
    intro: 'Şansa Karşı Saf Zekâ | 2D Stratejik Kart Oyunu',
    description: 'Unity (C#) ile geliştirilen, Durum Makinesi (State Machine) mimarisiyle kart etkileşimlerini ve asenkron animasyon kuyruklarını yöneten hibrit bir strateji simülasyonu.',
    image: '/images/trompet.webp',
    imagePosition: 'center 40%',
    tags: ['Unity (C#)', 'Game Theory', 'State Pattern'],
    actions: [
      { label: 'Geliştirme Aşamasında', type: 'badge' },
    ],
    id: 0,
  },
  {
    title: 'DİSİPLİN',
    intro: 'Kişisel Odaklanma & Topluluk Verimlilik Ekosistemi',
    description: 'Yönettiğim yapay zeka kulübü ekosisteminde görevleri ve rutinleri koordine etmek için tasarladığım hibrit yönetim platformu. Room DB, Firebase ve yapay zekâ entegrasyonlu Android motoru.',
    image: '/images/disiplin.png',
    tags: ['Android (Kotlin)', 'Firebase', 'Gemini AI', 'Room DB'],
    actions: [
      { label: 'Google Play (Kapalı Test)', type: 'primary', href: 'https://play.google.com/apps/testing/com.disiplin.app' },
    ],
    id: 1,
  },
];

export const TimeLineData = [
  { year: 2008, text: 'KTU Elk. Elk. Muh mezun oldum', },
  { year: 2009, text: 'Türk Telekom Uzman yardımcısı olarak işe başladım', },
  { year: 2013, text: 'Türk Telekom DC Enerji Uzmanı', },
  { year: 2016, text: 'Türk Telekom DC Enerji Yönetici', },
  { year: 2017, text: 'Türk Telekom ESS Müdürü', },
];