import React, {useRef, useState, useEffect} from 'react';
import "./Header.scss";


const Header = (props) => {

  // const [scroll, setScroll] = useState(0);
  // //Если true, то на месте элемента header-1 появится пустой элемент такой же высоты,
  // //чтобы избежать смещения других элементов.
  // const [blank, setBlank] = useState(false);
  //
  // const mainHeader = useRef(null);
  // const elemHeader1 = useRef(null);
  // const elemHeader2 = useRef(null);
  //
  // useEffect(() => {
  //   setScroll(window.pageYOffset);
  //   window.onscroll = () => {
  //     setScroll(window.pageYOffset);
  //   };
  // }, []);
  //
  // //открепляет элемент header-1
  // useEffect(() => {
  //   const mainHeaderHeight = parseInt(getComputedStyle(mainHeader.current).height);
  //
  //   if (mainHeaderHeight <= scroll) {
  //     elemHeader1.current.style.position = "fixed"
  //     setBlank(true);
  //   }
  // }, [scroll]);
  //
  // //прикрепляет элемент header-1
  // useEffect(() => {
  //   const header2Height = parseInt(getComputedStyle(elemHeader2.current).height);
  //
  //   if (header2Height > scroll) {
  //     elemHeader1.current.style.position = "";
  //     setBlank(false);
  //   }
  // }, [scroll]);

  return (
    <header>
      <div className="header-1">
        <ul className="header-1-menu">
          <li className="header-1-menu__number"><a href="tel:+7999999999">+7 999 99-99-99</a></li>
          <li className="header-1-menu__item"><a href="#">Как мы работаем</a></li>
          <li className="header-1-menu__item"><a href="#">Преимущества</a></li>
          <li className="header-1-menu__item"><a href="#">Отзывы</a></li>
          <li className="header-1-menu__item"><a href="#">Тарифы</a></li>
          <li className="header-1-menu__item"><a href="#">Партнеры</a></li>
          <li className="header-1-menu__item"><a href="#">Контакты</a></li>
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
              <div className="app-btn-1__img-1" />
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