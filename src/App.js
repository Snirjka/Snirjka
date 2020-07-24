import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import SkillsContextProvider from './contexts/SkillsContext';
import Layout from './containers/Layout';

const App = () => {
  return (
    <>
      <Router>
        <SkillsContextProvider>
          <Layout />
        </SkillsContextProvider>
      </Router>
    </>
  );
}

export default App;
