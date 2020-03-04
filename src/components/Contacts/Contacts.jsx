import React from 'react';
import "./Contacts.scss";
import ScrollableAnchor from 'react-scrollable-anchor';


const Contacts = (props) => {
  return (
    <ScrollableAnchor id={"contacts"}>
      <section className="contacts">
        <div className="contacts__content-left">
          <form className="contacts__callback-form">
            <h5 className="callback-form__title">
              Напишите нам письмо или задайте<br/>
              свой вопрос
            </h5>
            <label className="callback-form__input-wrapper">
              Введите свое имя<br/>
              <input type="text" name="name"/>
            </label>
            <label className="callback-form__input-wrapper">
              Ваш номер телефона<br/>
              <input type="tel" name="phone"/>
            </label>
            <label className="callback-form__input-wrapper">
              Сообщение или вопрос<br/>
              <textarea name="message"/>
            </label>
            <label className="callback-form__btn-wrapper">
              Заказать звонок консультанта
              <button className="callback-form__btn"/>
            </label>
          </form>
        </div>
        <div className="contacts__content-right">
          <h1 className="contacts__title-2">Контакты</h1>
          <div className="contacts-block">
            <div className="contacts-block__title">Телефон для покупки карт:</div>
            <a className="contacts-block__number" href="tel:+7 999 999-99-99">+7 999 999-99-99</a>
          </div>
          <div className="contacts-block">
            <div className="contacts-block__title">Email:</div>
            <a className="contacts-block__email" href="mailto:mail@mail.com">mail@mail.com</a>
          </div>
          <div className="contacts-block">
            <div className="contacts-block__title">Время работы:</div>
            <div className="contacts-block__work-hours-1">
              С понедельника по пятницу:<br/>
              9:00 — 22:00
            </div>
            <div className="contacts-block__work-hours-2">
              В праздничные и выходные дни:<br/>
              только телефонные консультации<br/>
              10:00 — 20:00
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  )
};

export default Contacts;