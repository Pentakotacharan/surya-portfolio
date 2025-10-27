# Portfolio Website - Brittany Chiang V4 Style Implementation

## Overview
This is a complete production-ready portfolio website inspired by Brittany Chiang's v4 design, customized with your resume information. The site features smooth animations, responsive design, and modern web development practices.

## Tech Stack

- **Frontend**: React 18+ with Gatsby.js
- **Styling**: Styled Components
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel/Netlify
- **Language**: JavaScript (ES6+) or TypeScript

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Nav.js
│   │   ├── Menu.js
│   │   ├── Side.js
│   │   ├── Social.js
│   │   ├── Email.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Jobs.js
│   │   ├── Featured.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── styles/
│   │   ├── GlobalStyle.js
│   │   ├── theme.js
│   │   ├── mixins.js
│   │   └── fonts.js
│   ├── content/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── jobs/
│   │   ├── projects/
│   │   └── contact/
│   ├── images/
│   ├── hooks/
│   │   ├── useScrollDirection.js
│   │   └── usePrefersReducedMotion.js
│   └── utils/
│       └── sr.js (ScrollReveal config)
├── static/
│   ├── resume.pdf
│   └── favicon.ico
├── gatsby-config.js
├── gatsby-node.js
└── package.json
```

## Key Features & Animations

### 1. **Navigation**
- Fixed header with fade-in/fade-out on scroll
- Numbered navigation items (01-04)
- Mobile hamburger menu with slide-in animation
- Resume button with hover effect
- Active section highlighting

### 2. **Hero Section**
- Staggered fade-in animations for text lines
- Green "Hi, my name is" intro text
- Large name display
- Subtitle with typing effect
- CTA button with border animation

### 3. **About Section**
- Fade-in on scroll
- Profile image with green border overlay
- Skills list with checkmark bullets
- Two-column layout (text | image)

### 4. **Experience Section**
- Tabbed interface for different roles
- Vertical tab navigation on desktop
- Horizontal tabs on mobile
- Fade-in content transitions
- Bullet points with green arrows

### 5. **Projects**
- Featured projects with image overlays
- Hover effects revealing full-color images
- Project cards with tech stack tags
- GitHub and external link icons
- Grid layout for other projects
- "Show More" button to reveal additional projects

### 6. **Contact Section**
- Centered layout
- Call-to-action button
- Email link with hover effect

### 7. **Side Elements**
- Fixed social icons (left side) with vertical line
- Fixed email (right side) with vertical line
- Fade-in on page load
- Hover animations on icons

### 8. **Scroll Animations**
- Fade-in from bottom
- Stagger delays for list items
- Reduced motion support for accessibility

## Color Palette

```javascript
const colors = {
  navy: '#0a192f',
  lightNavy: '#112240',
  lightestNavy: '#233554',
  slate: '#8892b0',
  lightSlate: '#a8b2d1',
  lightestSlate: '#ccd6f6',
  white: '#e6f1ff',
  green: '#64ffda',
};
```

## Your Content Integration

### Personal Information
- **Name**: Loka Surya Prakash Pentakota
- **Title**: Product Manager & Full Stack Developer
- **Email**: plsprakash2003@gmail.com
- **Phone**: +91-6301750186
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

### Professional Summary
Computer Science student with 8.9 CGPA and product management experience leading cross-functional teams. Proven expertise in AI-MERN stack integration and full-stack development.

### Work Experience

1. **Product Manager - Vertx** (Jan 2025 – Sep 2025)
   - Led cross-functional team of 5 developers
   - Integrated AI capabilities with MERN stack
   - Developed Pitch Analysis and Mock Pitching AI models

2. **Software Development Intern - Distacart** (Jan 2025 – Mar 2025)
   - Customized Shopify Liquid themes
   - Implemented SEO optimizations

3. **Software Development Intern - ServzPe** (Apr 2024 – Sep 2024)
   - Built marketplace platform using MERN stack
   - Implemented authentication and payment gateway
   - Designed RESTful APIs

4. **Freelance Full Stack Developer** (2023 – Present)
   - Delivered 4+ freelance projects
   - Built complete full-stack solutions

### Featured Projects

1. **Vertx Start - Investor Matching Platform**
   - React, Node.js, MongoDB, Real-time Chat
   - Intelligent co-founder matching algorithms
   - Equity cap table calculations
   - [GitHub] | [Live Site]

2. **GeoInsight - Public Service Platform**
   - React Native, Express.js, Node.js, MongoDB
   - Google Maps API integration
   - Real-time problem reporting
   - Admin dashboard
   - [GitHub]

### Skills

**Programming Languages**: C/C++, Python, JavaScript, TypeScript, HTML, CSS

**Frameworks & Libraries**: React.js, Next.js, Node.js, Express.js, React Native, TailwindCSS

**Databases & Cloud**: MongoDB, MySQL, Redis, AWS

**Tools**: Git, GitHub, Shopify Liquid, RESTful APIs, AI Integration

### Achievements
- Top 10 Finalist - Sus-Hack 2023
- Best Use Of MongoDB Award - MLH Frostfest
- 350+ LeetCode Problems (Rating: 1633)
- CodeChef 3-Star Rating (1672)

### Education
**Vignan's Institute Of Information Technology** (2021 – 2025)
- B.Tech in Computer Science
- CGPA: 8.9/10.0

**Kendriya Vidyalaya** (2019 – 2021)
- Higher Secondary Certificate (PCM)
- Percentage: 96%

## Installation & Setup

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Git

### Step 1: Install Gatsby CLI
```bash
npm install -g gatsby-cli
```

### Step 2: Create Project
```bash
gatsby new portfolio-site
cd portfolio-site
```

### Step 3: Install Dependencies
```bash
npm install styled-components framer-motion react-icons
npm install gatsby-plugin-styled-components
npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-transformer-sharp
npm install gatsby-plugin-manifest gatsby-plugin-offline
```

### Step 4: Start Development Server
```bash
npm start
# or
gatsby develop
```

Visit `http://localhost:8000`

### Step 5: Build for Production
```bash
gatsby build
```

### Step 6: Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Component Implementation Guide

### 1. Nav Component
- Sticky header with scroll behavior
- Logo on left
- Navigation links with numbers
- Resume button
- Hamburger menu for mobile

### 2. Hero Component
- Full viewport height
- Animated text reveal
- Name in large font
- Tagline
- CTA button

### 3. About Component
- Grid layout (60/40 split)
- Profile image with overlay
- Bio text
- Skills grid

### 4. Jobs Component
- Tab panel for switching jobs
- Company buttons on left
- Job details on right
- Bullet points for responsibilities

### 5. Featured Component
- Alternating left/right image layout
- Project image with overlay
- Tech stack tags
- External links

### 6. Projects Component
- CSS Grid (3 columns)
- Project cards
- Show more functionality

### 7. Contact Component
- Centered layout
- Simple message
- Email button

## Animation Implementation

### Framer Motion Examples

```javascript
// Fade in from bottom
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Stagger children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

### CSS Transitions
```css
transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
```

## Responsive Breakpoints

```javascript
const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '1024px',
  lg: '1280px',
  xl: '1440px',
};
```

## Performance Optimizations

1. **Image Optimization**: Use Gatsby Image for automatic optimization
2. **Code Splitting**: Lazy load components
3. **Font Loading**: Preload critical fonts
4. **Minification**: CSS and JS minification in production
5. **PWA**: Service worker for offline support

## Accessibility Features

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus indicators
- Reduced motion support
- Alt text for images
- Proper heading hierarchy

## SEO Configuration

```javascript
// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: 'Loka Surya Prakash Pentakota',
    description: 'Product Manager & Full Stack Developer',
    siteUrl: 'https://yourdomain.com',
    image: '/og-image.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    // ... other plugins
  ],
};
```

## Deployment Checklist

- [ ] Update all personal information
- [ ] Add your projects with correct links
- [ ] Upload resume PDF to /static folder
- [ ] Add favicon and OG image
- [ ] Test on multiple devices
- [ ] Verify all links work
- [ ] Check accessibility
- [ ] Test loading speed
- [ ] Configure custom domain
- [ ] Set up analytics (optional)

## Next Steps

1. Clone/fork the base structure
2. Install all dependencies
3. Replace content with your information
4. Customize colors/fonts if desired
5. Test locally
6. Deploy to Vercel/Netlify
7. Connect custom domain

## Resources

- **Gatsby Docs**: https://www.gatsbyjs.com/docs/
- **Styled Components**: https://styled-components.com/
- **Framer Motion**: https://www.framer.com/motion/
- **React Icons**: https://react-icons.github.io/react-icons/

## License

MIT License - Feel free to use this for your portfolio with proper attribution.

---

**Note**: This portfolio design is inspired by Brittany Chiang's v4 portfolio. Original design credits go to Brittany Chiang. This implementation is created from scratch with your custom content and should include proper attribution.
