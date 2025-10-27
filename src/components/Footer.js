import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const Footer = () => {
  const socialMedia = [
    {
      name: 'GitHub',
      url: 'https://github.com/Prakash9019',
      icon: <FiGithub />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/suryaprakashloka/',
      icon: <FiLinkedin />,
    },
    {
      name: 'Email',
      url: 'mailto:plsprakash2003@gmail.com',
      icon: <FiMail />,
    },
  ];

  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia.map(({ name, url, icon }, i) => (
            <li key={i}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </StyledSocialLinks>

      <StyledCredit tabIndex="-1">
         <div>
            <strong>Tech Stack:</strong> React, Gatsby, Styled Components, Framer Motion, Node.js, MongoDB, Vercel/Netlify
        </div>
        <a href="" target="_blank" rel="noreferrer">
          <div>Design inspired by Brittany Chiang</div>
        </a>

        <div>Built by Surya Prakash Pentakota</div>
      </StyledCredit>
    </StyledFooter>
  );
};

export default Footer;