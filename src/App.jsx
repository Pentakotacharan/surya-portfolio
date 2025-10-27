import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

import Nav from './components/Nav';
import Social from './components/Social';
import Email from './components/Email';
import Hero from './components/Hero';
import About from './components/About';
import Jobs from './components/Jobs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
      <Social />
      <Email />
      <main className="fillHeight">
        <Hero />
        <About />
        <Jobs />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
