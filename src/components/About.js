import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useInView } from 'framer-motion';
import profilePic from './profile.jpeg';
const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React.js',
    'Node.js',
    'Next.js',
    'Express.js',
    'MongoDB',
    'React Native',
    'Python',
    'TailwindCSS',
    'AWS',
    'AI Integration',
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <StyledAboutSection id="about" >
      <motion.div 
      ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <h2 className="numbered-heading">About Me</h2>

        <div className="inner">
          <StyledText>
            <div>
              <p>
                Hello! I'm Surya Prakash, a passionate Product Manager and Full Stack Developer 
                currently pursuing my B.Tech in Computer Science at{' '}
                <a href="https://www.vignan.ac.in/" target="_blank" rel="noreferrer">
                  Vignan's Institute Of Information Technology
                </a>{' '}
                with an impressive 8.9 CGPA.
              </p>

              <p>
                I've had the privilege of leading cross-functional teams at{' '}
                <a href="#" target="_blank" rel="noreferrer">Vertx</a>, developing marketplace 
                platforms at <a href="#" target="_blank" rel="noreferrer">ServzPe</a>, and 
                optimizing e-commerce sites at{' '}
                <a href="#" target="_blank" rel="noreferrer">Distacart</a>. My main focus is 
                building AI-powered applications that solve real-world problems.
              </p>

              <p>
                I'm also a competitive programmer with 350+ problems solved on LeetCode (Rating: 1633) 
                and a 3-star CodeChef rating (1672). I've won multiple hackathons including Best Use 
                of MongoDB at MLH Frostfest and was a Top 10 Finalist at Sus-Hack 2023.
              </p>

              <p>Here are a few technologies I've been working with recently:</p>
            </div>

            <ul className="skills-list">
              {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </StyledText>

          <StyledPic>
            <div className="wrapper">
              <img
                className="img"
                src={profilePic}
                width={300}
                height={350}
                alt="Profile"
              />
            </div>
          </StyledPic>
        </div>
      </motion.div>
    </StyledAboutSection>
  );
};

export default About;