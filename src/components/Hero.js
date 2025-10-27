import styled from 'styled-components';
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useRef, useEffect } from 'react';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const one = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const two = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const three = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const four = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const five = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
   const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });
const controls = useAnimation();
  return (
    <StyledHeroSection>
      <motion.h1
        ref={ref}
  initial="hidden"
  animate={controls}
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  }}      >
        Hi, my name is
      </motion.h1>

      <motion.h2
        className="big-heading"
        initial="hidden"
        animate="visible"
        variants={two}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        Loka Surya Prakash 
      </motion.h2>

      <motion.h3
        className="big-heading"
        initial="hidden"
        animate="visible"
        variants={three}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        I build things for the web.
      </motion.h3>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={four}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        I'm a Product Manager and Full Stack Developer specializing in building exceptional digital 
        experiences. Currently, I'm focused on building AI-powered MERN stack applications that 
        connect startups with investors and solve real-world problems. With 8.9 CGPA and experience 
        leading cross-functional teams, I deliver production-ready applications with a focus on 
        user experience.
      </motion.p>

      <motion.a
        className="email-link"
        href="mailto:plsprakash2003@gmail.com"
        target="_blank"
        rel="noreferrer"
        initial="hidden"
        animate="visible"
        variants={five}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        Get In Touch
      </motion.a>
    </StyledHeroSection>
  );
};

export default Hero;