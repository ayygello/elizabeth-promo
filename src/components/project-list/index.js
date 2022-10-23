import React from 'react';
import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.scss';
import ProjectItem from '../project-item';

const ProjectList = ({ photos }) => {
  const cn = bem('ProjectList');

  return (
    <div className={cn()}>
      {photos.map((photo, index) => (
        <ProjectItem key={index} image={photo.img} />
      ))}
    </div>
  );
};

export default ProjectList;
