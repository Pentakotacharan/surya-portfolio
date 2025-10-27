import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const StyledSocialList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 40px;
  right: auto;
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: 20px;
    right: auto;
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

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;

    &:after {
      content: '';
      display: block;
      width: 1px;
      height: 90px;
      margin: 0 auto;
      background-color: var(--light-slate);
    }

    li {
      &:last-of-type {
        margin-bottom: 20px;
      }

      a {
        padding: 10px;

        &:hover,
        &:focus {
          transform: translateY(-3px);
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

const Social = () => {
  const socialMedia = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: <FiGithub />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yourprofile',
      icon: <FiLinkedin />,
    },
    {
      name: 'Email',
      url: 'mailto:plsprakash2003@gmail.com',
      icon: <FiMail />,
    },
  ];

  return (
    <StyledSocialList
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
    >
      <ul>
        {socialMedia.map(({ name, url, icon }, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
          >
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              {icon}
            </a>
          </motion.li>
        ))}
      </ul>
    </StyledSocialList>
  );
};

export default Social;