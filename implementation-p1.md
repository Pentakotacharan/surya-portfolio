# Complete Portfolio Implementation Code

This document contains all the source code files for your portfolio website.

## Package.json

```json
{
  "name": "surya-prakash-portfolio",
  "version": "1.0.0",
  "description": "Personal portfolio website",
  "main": "index.js",
  "scripts": {
    "develop": "gatsby develop",
    "start": "gatsby develop",
    "build": "gatsby build",
    "serve": "gatsby serve",
    "clean": "gatsby clean"
  },
  "dependencies": {
    "gatsby": "^5.12.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "styled-components": "^6.1.0",
    "framer-motion": "^10.16.0",
    "react-icons": "^4.11.0",
    "gatsby-plugin-styled-components": "^6.12.0",
    "gatsby-plugin-image": "^3.12.0",
    "gatsby-plugin-sharp": "^5.12.0",
    "gatsby-transformer-sharp": "^5.12.0",
    "gatsby-plugin-manifest": "^5.12.0",
    "gatsby-plugin-react-helmet": "^6.12.0",
    "react-helmet": "^6.1.0"
  },
  "devDependencies": {
    "babel-plugin-styled-components": "^2.1.4"
  }
}
```

## gatsby-config.js

```javascript

module.exports = {
  siteMetadata: {
    title: 'Loka Surya Prakash Pentakota',
    description: 'Product Manager & Full Stack Developer with expertise in AI-MERN stack integration',
    siteUrl: 'https://yourdomain.com',
    image: '/og-image.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Surya Prakash Portfolio',
        short_name: 'SP Portfolio',
        start_url: '/',
        background_color: '#0a192f',
        theme_color: '#64ffda',
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
```

## src/styles/GlobalStyle.js

```javascript

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);
    
    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    
    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;
    
    --tab-height: 42px;
    --tab-width: 120px;
    
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    
    --hamburger-width: 30px;
    
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--navy);
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }

    &.blur {
      overflow: hidden;
      
      header {
        background-color: transparent;
      }
      
      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillHeight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--lightest-slate);
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;

    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--lightest-navy);

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus {
      color: var(--green);
    }

    &.inline-link {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;

    &:last-child,
    &:last-of-type {
      margin: 0;
    }

    & > a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    & > code {
      background-color: var(--light-navy);
      color: var(--white);
      font-size: var(--fz-sm);
      border-radius: var(--border-radius);
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: var(--fz-lg);
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--green);
        }
      }
    }
  }

  blockquote {
    border-left-color: var(--green);
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 24px;
    }
  }

  hr {
    background-color: var(--lightest-navy);
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }

  .skip-to-content {
    ${({ theme }) => theme.mixins.button};
    position: absolute;
    top: auto;
    left: -999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -99;

    &:focus,
    &:active {
      background-color: var(--green);
      color: var(--navy);
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      overflow: auto;
      z-index: 99;
    }
  }

  #logo {
    color: var(--green);
  }

  .overline {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
  }

  .subtitle {
    color: var(--green);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1.5;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: var(--green);

    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      font-weight: 600;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }
`;

export default GlobalStyle;
```

## src/styles/theme.js

```javascript

const theme = {
  colors: {
    navy: '#0a192f',
    lightNavy: '#112240',
    lightestNavy: '#233554',
    slate: '#8892b0',
    lightSlate: '#a8b2d1',
    lightestSlate: '#ccd6f6',
    white: '#e6f1ff',
    green: '#64ffda',
    greenTint: 'rgba(100, 255, 218, 0.1)',
  },

  fonts: {
    sans: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif",
    mono: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",
  },

  fontSizes: {
    xxs: '12px',
    xs: '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    heading: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '4px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,

  mixins: {
    flexCenter: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,

    flexBetween: `
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,

    link: `
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      color: inherit;
      position: relative;
      transition: var(--transition);
      &:hover,
      &:focus,
      &:active {
        color: var(--green);
        outline: 0;
      }
    `,

    inlineLink: `
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      position: relative;
      transition: var(--transition);
      color: var(--green);
      &:hover,
      &:focus,
      &:active {
        color: var(--green);
        outline: 0;
        &:after {
          width: 100%;
        }
        & > * {
          color: var(--green) !important;
          transition: var(--transition);
        }
      }
      &:after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        position: relative;
        bottom: 0.37em;
        background-color: var(--green);
        transition: var(--transition);
        opacity: 0.5;
      }
    `,

    button: `
      color: var(--green);
      background-color: transparent;
      border: 1px solid var(--green);
      border-radius: var(--border-radius);
      font-size: var(--fz-xs);
      font-family: var(--font-mono);
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      transition: var(--transition);
      padding: 1.25rem 1.75rem;

      &:hover,
      &:focus,
      &:active {
        background-color: var(--green-tint);
        outline: none;
      }
      &:after {
        display: none !important;
      }
    `,

    smallButton: `
      color: var(--green);
      background-color: transparent;
      border: 1px solid var(--green);
      border-radius: var(--border-radius);
      padding: 0.75rem 1rem;
      font-size: var(--fz-xs);
      font-family: var(--font-mono);
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      transition: var(--transition);
      &:hover,
      &:focus,
      &:active {
        background-color: var(--green-tint);
        outline: none;
      }
      &:after {
        display: none !important;
      }
    `,

    bigButton: `
      color: var(--green);
      background-color: transparent;
      border: 1px solid var(--green);
      border-radius: var(--border-radius);
      padding: 1.25rem 1.75rem;
      font-size: var(--fz-sm);
      font-family: var(--font-mono);
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      transition: var(--transition);
      &:hover,
      &:focus,
      &:active {
        background-color: var(--green-tint);
      }
      &:after {
        display: none !important;
      }
    `,

    boxShadow: `
      box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
      transition: var(--transition);

      &:hover,
      &:focus {
        box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
      }
    `,

    fancyList: `
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: var(--fz-lg);
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--green);
        }
      }
    `,
  },
};

export default theme;
```

---

*Note: Due to length limitations, I'm providing the core structure and styling. The next file will contain the React components.*
