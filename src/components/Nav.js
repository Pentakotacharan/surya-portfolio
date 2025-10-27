import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import Menu from './Menu';

const StyledHeader = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  transition: var(--transition);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;

const StyledLogo = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};

  a {
    color: var(--green);
    width: 42px;
    height: 42px;

    &:hover,
    &:focus {
      svg {
        fill: var(--green-tint);
      }
    }

    svg {
      fill: none;
      transition: var(--transition);
      user-select: none;
    }
  }
`;

const Nav = () => {
  const [scrollDirection, setScrollDirection] = useState('none');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < 5) {
        ticking = false;
        return;
      }

      setScrollDirection(scrollY > lastScrollY ? 'down' : 'up');
      setScrolledToTop(scrollY < 10);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDirection]);

  const navLinks = [
    { name: 'About', url: '/#about' },
    { name: 'Experience', url: '/#jobs' },
    { name: 'Work', url: '/#projects' },
    { name: 'Contact', url: '/#contact' },
  ];

  const fadeVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
  };

  return (
    <StyledHeader
      initial="hidden"
      animate="visible"
      variants={fadeVariants}
      style={{
        height: scrollDirection === 'down' && !scrolledToTop ? '70px' : '100px',
        transform: scrollDirection === 'down' && !scrolledToTop ? 'translateY(-70px)' : 'translateY(0)',
      }}
    >
      <StyledNav>
        <StyledLogo>
          <Link to="/" aria-label="home">
            <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <title>Logo</title>
              <g>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" 
                      fill="var(--green)" fontSize="50" fontFamily="var(--font-mono)">
                  S
                </text>
              </g>
            </svg>
          </Link>
        </StyledLogo>

        <StyledLinks>
          <ol>
            {navLinks.map(({ url, name }, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Link to={url}>{name}</Link>
              </motion.li>
            ))}
          </ol>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <a href="/resume.pdf" className="resume-button" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </motion.div>
        </StyledLinks>

        <Menu navLinks={navLinks} />
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;