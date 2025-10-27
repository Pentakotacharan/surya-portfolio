import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { Helmet } from 'react-helmet';

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Helmet>
        <title>Surya Prakash Pentakota - Product Manager & Full Stack Developer</title>
        <meta 
          name="description" 
          content="Product Manager and Full Stack Developer specializing in AI-powered MERN stack applications. Experience leading cross-functional teams and building scalable web solutions." 
        />
        <meta property="og:title" content="Surya Prakash Pentakota - Product Manager & Developer" />
        <meta 
          property="og:description" 
          content="Product Manager and Full Stack Developer specializing in AI-powered MERN stack applications." 
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="fillHeight">
        <Hero />
        <About />
        <Jobs />
        <Projects />
        <Contact />
      </main>
    </Layout>
  );
};

export default IndexPage;