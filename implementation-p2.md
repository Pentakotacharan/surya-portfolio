


## src/components/Social.js

```javascript

```

## src/components/Email.js

```javascript

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledEmailLink = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 40px;
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    right: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;

const Email = () => {
  return (
    <StyledEmailLink
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 1.2 }}
    >
      <a href="mailto:plsprakash2003@gmail.com">plsprakash2003@gmail.com</a>
    </StyledEmailLink>
  );
};

export default Email;
```

---

*Continued in next file with Hero, About, Jobs, Projects, Contact, and Footer components...*
