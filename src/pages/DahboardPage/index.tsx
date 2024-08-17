// src/pages/DashboardPage.tsx
import React from 'react';
import DashboardContainer from '../../containers/DashboardContainer';
import Navbar from '../../components/shared/Navbar';
import { GlobalStyle } from '../../components/shared/AppStyle';

const DashboardPage: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <DashboardContainer />
    </>
  );
};

export default DashboardPage;
