# Quick Start & Deployment Guide

## 🚀 Getting Started (Step-by-Step)

### Step 1: Set Up Your Project

```bash
# Create a new directory for your portfolio
mkdir surya-portfolio
cd surya-portfolio

# Initialize with Gatsby
npm install -g gatsby-cli
gatsby new . https://github.com/gatsbyjs/gatsby-starter-hello-world

# Or start from scratch
npm init -y
```

### Step 2: Install All Dependencies

```bash
npm install gatsby react react-dom
npm install styled-components gatsby-plugin-styled-components
npm install framer-motion
npm install react-icons
npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-transformer-sharp
npm install gatsby-plugin-manifest gatsby-plugin-react-helmet react-helmet
npm install --save-dev babel-plugin-styled-components
```

### Step 3: Create Project Structure

```bash
# Create all necessary directories
mkdir -p src/{components,styles,pages,images}
mkdir -p static
```

### Step 4: Copy All Code Files

Copy the code from the implementation files I provided:
- `implementation-p1.md` - Config, GlobalStyle, Theme
- `implementation-p2.md` - Layout, Nav, Menu, Social, Email
- `implementation-p3.md` - Hero, About, Jobs
- `implementation-p4.md` - Projects, Contact, Footer, Pages

### Step 5: Add Your Personal Assets

1. **Resume PDF**: Add your resume as `static/resume.pdf`
2. **Profile Photo**: Add your photo as `src/images/profile.jpg`
3. **Logo**: Create a simple logo as `src/images/logo.png`

### Step 6: Update Personal Information

Edit the following files with your actual information:

**src/components/Social.js**:
```javascript
const socialMedia = [
  {
    name: 'GitHub',
    url: 'https://github.com/YOUR_USERNAME', // Update this
    icon: <FiGithub />,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/YOUR_PROFILE', // Update this
    icon: <FiLinkedin />,
  },
  // ...
];
```

**src/components/Projects.js**:
Update all project GitHub and external links with your actual project URLs.

### Step 7: Run Development Server

```bash
# Start the development server
gatsby develop
# or
npm start

# Open http://localhost:8000 in your browser
```

### Step 8: Test and Verify

Check that all sections work:
- ✅ Navigation scrolls smoothly
- ✅ Mobile menu opens/closes
- ✅ All animations trigger on scroll
- ✅ Links work correctly
- ✅ Resume downloads
- ✅ Contact email opens

---

## 📦 Deployment Options

### Option 1: Deploy to Vercel (Recommended)

**Why Vercel?**
- Zero configuration
- Automatic HTTPS
- Global CDN
- GitHub integration
- Free tier available

**Steps:**

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Build your site**:
```bash
gatsby build
```

3. **Deploy**:
```bash
vercel
```

4. **Follow prompts**:
- Set up project name
- Select root directory
- Deploy!

5. **Connect to GitHub** (Optional but recommended):
- Go to vercel.com
- Import your GitHub repository
- Enable automatic deployments

**Custom Domain:**
```bash
vercel domains add yourdomain.com
```

### Option 2: Deploy to Netlify

**Steps:**

1. **Install Netlify CLI**:
```bash
npm install netlify-cli -g
```

2. **Build**:
```bash
gatsby build
```

3. **Deploy**:
```bash
netlify deploy --prod
```

4. **Or use Netlify Dashboard**:
- Go to netlify.com
- Drag and drop your `public` folder
- Or connect your Git repository

**netlify.toml** (Create this file in root):
```toml
[build]
  command = "gatsby build"
  publish = "public"

[[plugins]]
  package = "netlify-plugin-gatsby-cache"
```

### Option 3: Deploy to GitHub Pages

**Steps:**

1. **Install gh-pages**:
```bash
npm install gh-pages --save-dev
```

2. **Update package.json**:
```json
{
  "scripts": {
    "deploy": "gatsby build --prefix-paths && gh-pages -d public"
  },
  "homepage": "https://yourusername.github.io"
}
```

3. **Update gatsby-config.js**:
```javascript
module.exports = {
  pathPrefix: "/your-repo-name",
  // ... rest of config
}
```

4. **Deploy**:
```bash
npm run deploy
```

---

## 🎨 Customization Guide

### Change Color Scheme

Edit `src/styles/GlobalStyle.js` and `src/styles/theme.js`:

```javascript
// Change from blue-green to any other theme
:root {
  --navy: #1a1a2e;        // Dark background
  --green: #16213e;       // Accent color
  // ... update all colors
}
```

Popular color schemes:
- **Purple Theme**: `--green: #a78bfa` (Purple accent)
- **Orange Theme**: `--green: #fb923c` (Orange accent)
- **Pink Theme**: `--green: #ec4899` (Pink accent)

### Add More Sections

Create new component in `src/components/`:

```javascript
// src/components/NewSection.js
import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  // Your styles
`;

const NewSection = () => {
  return (
    <StyledSection id="new-section">
      <h2 className="numbered-heading">New Section</h2>
      {/* Your content */}
    </StyledSection>
  );
};

export default NewSection;
```

Then import in `src/pages/index.js`:
```javascript
import NewSection from '../components/NewSection';

// Add to JSX
<NewSection />
```

### Change Fonts

1. Add fonts to `src/styles/GlobalStyle.js`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
```

2. Update font variables:
```css
--font-sans: 'Inter', sans-serif;
```

---

## 🔧 Troubleshooting

### Issue: "Module not found" errors
**Solution**: 
```bash
rm -rf node_modules
npm install
```

### Issue: Gatsby build fails
**Solution**:
```bash
gatsby clean
gatsby build
```

### Issue: Images not loading
**Solution**: 
- Check file paths
- Ensure images are in `src/images/` or `static/`
- Use correct import syntax

### Issue: Styles not applying
**Solution**:
- Clear browser cache
- Check styled-components plugin is installed
- Verify GlobalStyle is imported in Layout

### Issue: Framer Motion animations not working
**Solution**:
```bash
npm install framer-motion@latest
gatsby clean
gatsby develop
```

---

## 🎯 Performance Optimization

### 1. Image Optimization

Use Gatsby Image for automatic optimization:

```javascript
import { StaticImage } from 'gatsby-plugin-image';

<StaticImage
  src="../images/profile.jpg"
  alt="Profile"
  placeholder="blurred"
  layout="fixed"
  width={500}
  height={500}
/>
```

### 2. Lazy Loading

Components load on scroll automatically with Framer Motion's `useInView`.

### 3. Code Splitting

Gatsby handles this automatically, but you can add:

```javascript
const Projects = React.lazy(() => import('../components/Projects'));
```

### 4. PWA Support

Already included via `gatsby-plugin-manifest`. Users can install your site!

---

## 📱 Responsive Testing

Test on these breakpoints:
- 📱 Mobile: 320px - 480px
- 📱 Tablet: 481px - 768px
- 💻 Desktop: 769px - 1080px
- 🖥️ Large: 1081px+

Use Chrome DevTools:
- Open DevTools (F12)
- Click device toggle (Ctrl+Shift+M)
- Test all device sizes

---

## ♿ Accessibility Checklist

- ✅ Semantic HTML
- ✅ Alt text for images
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ ARIA labels
- ✅ Color contrast (WCAG AA)
- ✅ Skip to content link
- ✅ Screen reader support

Test with:
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [Lighthouse in Chrome DevTools](https://developers.google.com/web/tools/lighthouse)

---

## 🚀 Post-Deployment Checklist

- [ ] Test all links (internal and external)
- [ ] Verify resume downloads correctly
- [ ] Check email links work
- [ ] Test on mobile devices
- [ ] Verify animations work smoothly
- [ ] Check page load speed
- [ ] Test on different browsers
- [ ] Set up custom domain
- [ ] Add to Google Search Console
- [ ] Share on LinkedIn/Twitter
- [ ] Update GitHub profile with portfolio link

---

## 📈 Analytics (Optional)

### Google Analytics

1. Get tracking ID from analytics.google.com
2. Install plugin:
```bash
npm install gatsby-plugin-google-gtag
```

3. Add to `gatsby-config.js`:
```javascript
{
  resolve: `gatsby-plugin-google-gtag`,
  options: {
    trackingIds: ["GA-TRACKING-ID"],
  },
}
```

---

## 🔄 Continuous Deployment

### GitHub Actions (Auto-deploy on push)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID}}
          vercel-project-id: ${{ secrets.PROJECT_ID}}
```

---

## 💡 Next Steps

1. ✅ Deploy your portfolio
2. 🔗 Add portfolio URL to your resume
3. 🔗 Update LinkedIn with portfolio link
4. 🔗 Add to GitHub profile README
5. 📧 Include in job applications
6. 🎨 Keep updating with new projects
7. 📊 Monitor with analytics
8. 🎯 Get feedback and iterate

---

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Search Gatsby documentation
3. Check Styled Components docs
4. Search Stack Overflow

---

## 📝 License

This implementation is based on Brittany Chiang's design. Please provide attribution as shown in the footer.

---

**Good luck with your portfolio! 🚀**
