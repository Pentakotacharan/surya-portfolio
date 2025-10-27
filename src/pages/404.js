import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const StyledMainContainer = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;

const StyledSubtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`;

const StyledHomeButton = styled.a`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 40px;
`;

const NotFoundPage = () => (
  <Layout>
    <Helmet title="Page Not Found" />
    <StyledMainContainer className="fillHeight">
      <StyledTitle>404</StyledTitle>
      <StyledSubtitle>Page Not Found</StyledSubtitle>
      <StyledHomeButton href="/">Go Home</StyledHomeButton>
    </StyledMainContainer>
  </Layout>
);

export default NotFoundPage;