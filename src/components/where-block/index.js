import React from 'react';
import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.scss';

const Where = () => {
  const cn = bem('Where');

  return (
    <>
      <div className={cn('info')}>
        <h1 className={cn('header')}>Красиво быть счастливыми людьми</h1>
        <p className={cn('text')}>
          Фотограф
          <br />
          Елизавета Добровлянская
        </p>
        <a href='https://t.me/elizaveq' target='blank' className={cn('btn')}>
          Связаться со мной
        </a>
      </div>
      <div className={cn('photos')}>
        <img
          src='https://i.ibb.co/hLxDb49/Photo-2022-10-16-13-32-37.jpg'
          alt='#'
        />
        <img
          src='https://i.ibb.co/Rc3WzN8/Photo-2022-10-16-13-29-03.jpg'
          alt='#'
        />
        <img src='https://i.ibb.co/mFTLGNP/IMG-9793.jpg' alt='#' />
      </div>
    </>
  );
};

export default Where;
