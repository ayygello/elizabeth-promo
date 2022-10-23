import React from 'react';
import About from '../../components/about';
import FlexSection from '../../components/flex-section';
import Header from '../../components/header';
import Layout from '../../components/layout';
import Main from '../../components/main';
import Where from '../../components/where-block';

const Home = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <FlexSection flex={'between'}>
          <Where />
        </FlexSection>
        <FlexSection flex={'between'}>
          <About />
        </FlexSection>
      </Main>
    </Layout>
  );
};

export default Home;
