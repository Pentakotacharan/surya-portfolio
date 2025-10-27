
## src/pages/index.js

```javascript
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
```

## src/pages/404.js

```javascript

```

---

## Additional Files Needed

### static/resume.pdf
Place your PDF resume in the `static` folder with the name `resume.pdf`

### src/images/logo.png
Create or add your logo image (for favicon)

### src/images/profile.jpg
Add your profile photo for the About section

### .gitignore
```
# dependencies
node_modules/
.pnp
.pnp.js

# testing
/coverage

# production
/build
/public

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
.cache/

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

### README.md
```markdown
# Surya Prakash Portfolio

Personal portfolio website built with Gatsby, React, and Styled Components.

## 🚀 Quick Start

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Start development server:
   \`\`\`bash
   npm start
   \`\`\`

3. Build for production:
   \`\`\`bash
   npm run build
   \`\`\`

## 🎨 Design Credits

Design inspired by [Brittany Chiang](https://brittanychiang.com)

## 📝 License

MIT
```

This completes all the main component files! You now have a fully functional portfolio website.
