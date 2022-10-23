import React, { useState } from 'react';
import FlexSection from '../../components/flex-section';
import Header from '../../components/header';
import Layout from '../../components/layout';
import Main from '../../components/main';
import ProjectList from '../../components/project-list';
import ToolBar from '../../components/toolbar';
import { initialValues } from '../../initial-values';

const PortFolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [photos, setPhotos] = useState(initialValues);

  const handleOnSelectFilter = (event) => {
    const newSelectedFilter = event.target.textContent;
    setSelectedFilter(() => newSelectedFilter);

    if (newSelectedFilter !== 'All') {
      const filteredPhotos = initialValues.filter(
        (el) => el.category === newSelectedFilter
      );
      setPhotos(filteredPhotos);
    } else {
      setPhotos(initialValues);
    }
  };

  return (
    <Layout>
      <Header />
      <Main>
        <FlexSection>
          <ToolBar
            filters={['All', 'Love Story', 'Wedding Day', 'Individual']}
            selected={selectedFilter}
            onSelect={(filter) => handleOnSelectFilter(filter)}
          />
        </FlexSection>
        <FlexSection>
          <ProjectList photos={photos} />
        </FlexSection>
      </Main>
    </Layout>
  );
};

export default PortFolio;
