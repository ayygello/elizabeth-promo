import React from 'react';
import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.scss';

const Main = ({ children }) => {
  const cn = bem('Main');

  return <main className={cn()}>{children}</main>;
};

export default Main;
