import Head from 'next/head';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
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
    <Projects />
    <Skills />
    <Timeline />
    <Acomplishments />
    <Technologies />
  </Layout>
);
export default Home;
