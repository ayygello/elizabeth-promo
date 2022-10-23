import React from 'react';
import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.scss';
import MenuItem from '../menu-item';
import { Link } from 'react-router-dom';

const Header = ({
  links = [
    { name: 'Главная', to: '/' },
    { name: 'Цены', to: '/price' },
    { name: 'Портфолио', to: '/portfolio' },
  ],
}) => {
  const cn = bem('Header');

  return (
    <header className={cn()}>
      <div className={cn('container')}>
        <div className={cn('logo')}>
          <img
            src='https://i.ibb.co/T4zRSK7/photo-2022-10-23-13-41-01.jpg'
            alt='logo'
          />
        </div>
        <nav className={cn('menu')}>
          {links.map((link, index) => (
            <Link to={link.to} className={cn('link')}>
              <MenuItem link={link.name} key={index} />
            </Link>
          ))}
        </nav>
        <a href='https://t.me/elizaveq' target='blank' className={cn('btn')}>
          Telegram
        </a>
      </div>
    </header>
  );
};

export default Header;
