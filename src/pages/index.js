import Head from 'next/head';
import Reveal from '../components/Reveal/Reveal';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import BoardLab from '../components/BoardLab/BoardLab';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';

const Home = () => (
  <Layout>
    <Head>
      <title>Zikreddin Şık | Software Development Portfolio</title>
      <meta name="description" content="Unity and Android projects by Zikreddin Şık, president of the AI Club at Karabük University." />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Zikreddin Şık | Software Development Portfolio" />
      <meta property="og:description" content="Explore TROMPET, a Unity strategy card game, and DİSİPLİN, an Android focus app." />
      <link rel="canonical" href="https://portfolio-ziko-00.vercel.app/" />
      <meta property="og:url" content="https://portfolio-ziko-00.vercel.app/" />
      <meta name="robots" content="index, follow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Zikreddin Şık',
          url: 'https://portfolio-ziko-00.vercel.app/',
          description: 'Works on Unity games and Android apps and leads the AI Club at Karabük University.',
          sameAs: [
            'https://github.com/szikreddin5-maker',
            'https://www.linkedin.com/in/zikreddin%C5%9F%C4%B1k/',
          ],
          knowsAbout: ['Unity', 'C#', 'Game Development', 'Android', 'Software Engineering'],
        }).replace(/</g, '\\u003c') }}
      />
    </Head>
    <Hero />
    <Reveal><Projects /></Reveal>
    <Reveal><BoardLab /></Reveal>
    <Reveal><Skills /></Reveal>
    <Reveal><Timeline /></Reveal>
    <Reveal><Acomplishments /></Reveal>
    <Reveal><Technologies /></Reveal>
  </Layout>
);
export default Home;
