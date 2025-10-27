import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useInView } from 'framer-motion';

const StyledJobsSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;

const StyledTabButton = styled.button`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--slate)')};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({ theme }) => theme.mixins.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

const Jobs = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const jobsData = [
    {
      company: 'Vertx',
      title: 'Product Manager',
      range: 'January 2025 - September 2025',
      url: '#',
      duties: [
        'Led cross-functional team of 5 developers (2 AI specialists, 3 MERN stack developers) for product development',
        'Integrated AI capabilities with MERN stack architecture for enhanced user experience',
        'Developed key features including Pitch Analysis and Mock Pitching AI models',
        'Drove product strategy and roadmap for investor matching platform',
      ],
    },
    {
      company: 'Distacart',
      title: 'Software Development Intern',
      range: 'January 2025 - March 2025',
      url: '#',
      duties: [
        'Customized Shopify Liquid themes to enhance e-commerce functionality and user experience',
        'Improved site performance through optimization of assets and code structure',
        'Implemented SEO optimizations for better search visibility and organic traffic',
        'Collaborated with design team to implement responsive layouts',
      ],
    },
    {
      company: 'ServzPe',
      title: 'Software Development Intern',
      range: 'April 2024 - September 2024',
      url: '#',
      duties: [
        'Built marketplace platform using React.js, Node.js, Express.js, and MongoDB',
        'Implemented user authentication system with JWT and secure password hashing',
        'Integrated subscription payment gateway for monetization',
        'Designed and developed RESTful APIs for seamless frontend-backend communication',
      ],
    },
    {
      company: 'Freelance',
      title: 'Full Stack Developer',
      range: '2023 - Present',
      url: '#',
      duties: [
        'Delivered 4+ freelance projects including MindVeda and ServzPe platforms',
        'Built complete full-stack solutions meeting diverse client requirements',
        'Managed end-to-end project lifecycle from requirement gathering to deployment',
        'Provided ongoing maintenance and feature enhancements for deployed applications',
      ],
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <StyledJobsSection id="jobs" ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls} 
        variants={variants}
      >
        <h2 className="numbered-heading">Where I've Worked</h2>
        <div className="inner">
          <StyledTabList role="tablist" aria-label="Job tabs">
            {jobsData.map((job, i) => (
              <li key={i}>
                <StyledTabButton
                  isActive={activeTabId === i}
                  onClick={() => setActiveTabId(i)}
                  role="tab"
                  aria-selected={activeTabId === i}
                  aria-controls={`panel-${i}`}
                  id={`tab-${i}`}
                >
                  <span>{job.company}</span>
                </StyledTabButton>
              </li>
            ))}
            <StyledHighlight activeTabId={activeTabId} />
          </StyledTabList>

          <StyledTabPanels>
            {jobsData.map((job, i) => (
              <StyledTabPanel
                key={i}
                isActive={activeTabId === i}
                id={`panel-${i}`}
                role="tabpanel"
                aria-labelledby={`tab-${i}`}
                tabIndex={activeTabId === i ? 0 : -1}
                hidden={activeTabId !== i}
              >
                <h3>
                  <span>{job.title}</span>
                  <span className="company">
                    &nbsp;@&nbsp;
                    <a href={job.url} className="inline-link">
                      {job.company}
                    </a>
                  </span>
                </h3>

                <p className="range">{job.range}</p>

                <div>
                  <ul>
                    {job.duties.map((duty, j) => (
                      <li key={j}>{duty}</li>
                    ))}
                  </ul>
                </div>
              </StyledTabPanel>
            ))}
          </StyledTabPanels>
        </div>
      </motion.div>
    </StyledJobsSection>
  );
};

export default Jobs;