import React from 'react';
import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.scss';

const FlexSection = ({ children, flex }) => {
  const cn = bem('FlexSection');

  return <section className={cn({ flex })}>{children}</section>;
};

export default FlexSection;
