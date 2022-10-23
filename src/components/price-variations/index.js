import React from 'react';
import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.scss';

const PriceVariations = () => {
  const cn = bem('PriceVariations');

  return (
    <div className={cn()}>
      <h1 className={cn('header')}>Вариации работы со мной</h1>
      <div className={cn('variant')}>
        <p className={cn('text')}>Индивидуальная съемка</p>
        <ul>
          <li>• 1 час работы - 4000 рублей</li>
          <li>• от 100 фотографий в цветокоррекции</li>
          <li>• 10 фотографий в ретуши на ваш выбор</li>
          <li>• Отдача материала 7 дней</li>
          <li>• Фотографии загружаются на ресурс облачного хранения</li>
        </ul>
      </div>
      <div className={cn('variant')}>
        <p className={cn('text')}>Lovestory</p>
        <ul>
          <li>• 1,5 часа работы - 5000 рублей</li>
          <li>• от 100 фотографий в цветокоррекции</li>
          <li>• 10 фотографий в ретуши на ваш выбор</li>
          <li>• Отдача материала 7 дней</li>
          <li>• Фотографии загружаются на ресурс облачного хранения</li>
        </ul>
      </div>
      <div className={cn('variant')}>
        <p className={cn('text')}>Wedding Day</p>
        <ul>
          <li>• 1,5 часа работы прогулка после ЗАГСа - 6000 рублей</li>
          <li>• от 100 фотографий в цветокоррекции</li>
          <li>• 15 фотографий в ретуши на ваш выбор</li>
          <li>• Отдача материала 7 дней</li>
          <li>• Фотографии загружаются на ресурс облачного хранения</li>
        </ul>
      </div>
      <div className={cn('cert')}>
        <h1 className={cn('header')}>Подарочные сертификаты</h1>
        <p className={cn('text')}>
          У меня Вы можете приобрести сертификаты на любую сумму и съемку, как
          для себя, так и в подарок!
        </p>
        <img
          src='https://i.ibb.co/NsJYHxv/photo-2022-10-16-14-10-47.jpg'
          alt='cerificate'
        />
      </div>
    </div>
  );
};

export default PriceVariations;
