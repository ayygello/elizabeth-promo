import React from 'react';
import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.scss';

const MenuItem = ({ link }) => {
  const cn = bem('Header');

  return <span className={cn('link')}>{link}</span>;
};

export default MenuItem;
