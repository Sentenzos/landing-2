import React from 'react';
import "./Header.scss";


const Header = (props) => {

  return (
    <header>
      <div className="header-1">
        <ul className="header-1-menu">
          <li className="header-1-menu__number"><a href="tel:+7999999999">+7 999 99-99-99</a></li>
          <li className="header-1-menu__item"><a href="#services">Как мы работаем</a></li>
          <li className="header-1-menu__item"><a href="#advantages">Преимущества</a></li>
          <li className="header-1-menu__item"><a href="#reviews">Отзывы</a></li>
          <li className="header-1-menu__item"><a href="#tariff">Тарифы</a></li>
          <li className="header-1-menu__item"><a href="#partners">Партнеры</a></li>
          <li className="header-1-menu__item"><a href="#contacts">Контакты</a></li>
          <li className="header-1-menu__callback"><a href="tel:+7999999999">Перезвоните мне</a></li>
        </ul>
      </div>
      <div className="header-blank"/>
      <div className="header-2">
        <ul className="header-2-menu">
          <li className="header-2-menu__logotypes">
            <div className="header-2-menu__logo-1"/>
            <div className="header-2-menu__logo-2"/>
          </li>
          <li className="header-2-menu__message">Ваш юрист всегда на связи</li>
          <li className="header-2-menu__right">
            <div className="header-2-menu__number"><a href="tel:+7999999999">+7 999 99-99-99</a></div>
            <div className="header-2-menu__app-btn-1">
              <div className="app-btn-1__img-1"/>
            </div>
            <div className="header-2-menu__app-btn-2">
              <div className="app-btn-1__img-2"/>
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
};

export default Header;