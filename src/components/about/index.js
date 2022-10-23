import React from 'react';
import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.scss';

const About = () => {
  const cn = bem('About');

  return (
    <>
      <img
        src='https://i.ibb.co/gJGxm13/Photo-2022-10-16-14-06-18.jpg'
        alt='#'
        className={cn('photo')}
      />
      <div className={cn('info')}>
        <h2 className={cn('header')}>Обо мне</h2>
        <p className={cn('text')}>
          Привет! Меня зовут Лиза и я держу камеру в руках с двух лет.
          <br />
          Занимаюсь фотографией на протяжении всей жизни,
          <br />а профессионально около 5 лет. <br />
          Помогаю людям раскрыться перед камерой и чувствовать себя уютно и
          комфортно:)
        </p>
        <p className={cn('text')}>
          Я фотографирую в трех направлениях:
          <ul>
            <li>- Индивидуальная фотосъемка</li>
            <li>- Lovestory</li>
            <li>- Свадьбы</li>
            <li>- И немного репортажек :)</li>
          </ul>
        </p>
        <p className={cn('text')}>
          Вы можете написать мне с другими идеями и мы обязательно их обсудим!
        </p>
      </div>
    </>
  );
};

export default About;
