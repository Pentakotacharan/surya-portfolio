
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