import React from 'react';
import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.scss';

const ProjectItem = ({ image }) => {
  const cn = bem('ProjectItem');

  return <img className={cn()} src={image} alt='photo' />;
};

export default ProjectItem;
