import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;

const StyledProject = styled(motion.li)`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
  }

  .project-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 35px;

    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 5px 7px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    color: var(--light-slate);
    font-size: 17px;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const projectsData = [
    {
      title: 'Vertx Start - Investor Matching Platform',
      description:
        'Full-stack platform connecting founders with investors through intelligent co-founder matching algorithms. Features startup financial tools including equity cap table calculations, valuation models, and convertible notes management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Real-time Chat', 'Express.js'],
      github: 'https://github.com/yourusername/vertx-start',
      external: 'https://vertx-start.com',
    },
    {
      title: 'GeoInsight - Public Service Platform',
      description:
        'React Native platform addressing public service challenges with Google Maps API integration. Features real-time problem reporting and admin dashboard for issue tracking and resolution.',
      tech: ['React Native', 'Express.js', 'Node.js', 'MongoDB', 'Google Maps API'],
      github: 'https://github.com/yourusername/geoinsight',
      external: '',
    },
    {
      title: 'MindVeda - Mental Health Platform',
      description:
        'Comprehensive mental health platform providing resources, therapy booking, and mental wellness tracking. Built with MERN stack with focus on user privacy and accessibility.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      github: 'https://github.com/yourusername/mindveda',
      external: '',
    },
    {
      title: 'ServzPe Marketplace',
      description:
        'Service marketplace platform connecting service providers with customers. Features user authentication, subscription management, and integrated payment gateway.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
      github: '',
      external: 'https://servzpe.com',
    },
    {
      title: 'Cricket Quiz & Learning App',
      description:
        'Gamified cricket quiz application with unique user ID generation, MongoDB integration, and comprehensive result tracking system. Features JWT authentication and CORS-enabled API.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      github: 'https://github.com/yourusername/cricket-quiz',
      external: '',
    },
    {
      title: 'NutriFusion - Nutrition Tracker',
      description:
        'Web application for tracking nutrition and creating personalized meal plans. Integrates with nutrition APIs for comprehensive food database.',
      tech: ['React', 'Node.js', 'MongoDB', 'Nutrition API', 'Chart.js'],
      github: 'https://github.com/yourusername/nutrifusion',
      external: 'https://nutrifusion.vercel.app',
    },
  ];

  const GRID_LIMIT = 6;
  const projects = showMore ? projectsData : projectsData.slice(0, GRID_LIMIT);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <StyledProjectsSection id="projects" ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <h2>Some Things I've Built</h2>

        <ul className="projects-grid">
          {projects.map((project, i) => (
            <StyledProject
              key={i}
              custom={i}
              initial="hidden"
              animate={controls}
              variants={projectVariants}
            >
              <div className="project-inner">
                <header>
                  <div className="project-top">
                    <div className="folder">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                          d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          aria-label="GitHub Link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiGithub />
                        </a>
                      )}
                      {project.external && (
                        <a
                          href={project.external}
                          aria-label="External Link"
                          className="external"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiExternalLink />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="project-title">
                    <a href={project.external || project.github} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  </h3>

                  <div className="project-description">
                    <p>{project.description}</p>
                  </div>
                </header>

                <footer>
                  {project.tech && (
                    <ul className="project-tech-list">
                      {project.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  )}
                </footer>
              </div>
            </StyledProject>
          ))}
        </ul>

        {projectsData.length > GRID_LIMIT && (
          <button className="more-button" onClick={() => setShowMore(!showMore)}>
            Show {showMore ? 'Less' : 'More'}
          </button>
        )}
      </motion.div>
    </StyledProjectsSection>
  );
};

export default Projects;