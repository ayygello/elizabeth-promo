import React from 'react';
import FlexSection from '../../components/flex-section';
import Header from '../../components/header';
import Layout from '../../components/layout';
import Main from '../../components/main';
import PriceVariations from '../../components/price-variations';

const Price = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <FlexSection>
          <PriceVariations />
        </FlexSection>
      </Main>
    </Layout>
  );
};

export default Price;
