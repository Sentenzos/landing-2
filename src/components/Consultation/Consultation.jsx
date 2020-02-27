import React from 'react';
import "./Consultation.scss";


const Consultation = (props) => {
  return (
    <section className="consultation">
      <div className="consultation__content">
        <div className="consultation__left">
          <h1 className="consultation__title">Хотите получить бесплатную<br/>
            юридическую консультацию?</h1>
          <div className="consultation__items">
            <div className="consultation__item">
              <span className="consultation__item-number">1.</span>
              Скачайте наше&nbsp;<span className="consultation__item-underline">приложение Reworld</span>&nbsp;для iOS или Android
            </div>
            <div className="consultation__item">
              <span className="consultation__item-number">2.</span>
              Посмотрите один из 150  познавательных видеороликов.
            </div>
            <div className="consultation__item">
              <span className="consultation__item-number">3.</span>
              Введите Ваш номер телефона и с Вами свяжется юрист<br/>
              для консультации
            </div>
          </div>
        </div>
        <div className="consultation__apps">
          <a href="#"><div className="consultation_app-1"/></a>
          <a href="#"><div className="consultation_app-2"/></a>
        </div>
      </div>
    </section>
  )
};

export default Consultation;