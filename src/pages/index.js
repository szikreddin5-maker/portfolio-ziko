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
      <title>Zikreddin Şık | Unity & C# Game Developer</title>
      <meta name="description" content="Game development, selected projects, product experience and community leadership. Explore the work of Zikreddin Şık." />
      <meta property="og:type" content="website" />
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
