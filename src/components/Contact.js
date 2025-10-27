import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useInView } from 'framer-motion';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <StyledContactSection id="contact" ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <h2 className="numbered-heading overline">What's Next?</h2>

        <h2 className="title">Get In Touch</h2>

        <p>
          I'm currently looking for new opportunities and my inbox is always open. Whether you have 
          a question, want to collaborate on a project, or just want to say hi, I'll try my best to 
          get back to you! Feel free to reach out if you're interested in AI-powered applications, 
          MERN stack development, or product management.
        </p>

<a className="email-link" href="mailto:plsprakash2003@gmail.com">
  Say Hello
</a>

      </motion.div>
    </StyledContactSection>
  );
};

export default Contact;