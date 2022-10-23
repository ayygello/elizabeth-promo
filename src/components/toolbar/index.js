import React from 'react';
import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.scss';

const ToolBar = ({ filters, selected, onSelect }) => {
  const cn = bem('Toolbar');

  const buttons = filters.map((filter, index) =>
    filter === selected ? (
      <button className={cn('button', { selected: true })} key={index}>
        {selected}
      </button>
    ) : (
      <button key={index} className={cn('button')} onClick={onSelect}>
        {filter}
      </button>
    )
  );

  return <div className={cn()}>{buttons}</div>;
};

export default ToolBar;
