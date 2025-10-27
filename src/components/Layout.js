import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import Nav from './Nav';
import Social from './Social';
import Email from './Email';
import Footer from './Footer';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <a className="skip-to-content" href="#content">
          Skip to Content
        </a>

        <StyledContent>
          <Nav />
          <Social />
          <Email />

          <div id="content">
            {children}
            <Footer />
          </div>
        </StyledContent>
      </ThemeProvider>
    </div>
  );
};

export default Layout;