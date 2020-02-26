import React from 'react';
import "./Advantages.scss";


const Advantages = (props) => {
  return (
    <section className="advantages">
      <div className="advantages__content">
        <h1 className="advantages__title">
          Преимущество сервиса Advogrand<br/>
          по сравнению с другими юридическими компаниями
        </h1>
        <div className="advantage-table">
          <div className="advantage-table__column-1">
            <div className="advantage-table__row-1">......</div>
            <div className="advantage-table__row-2">Одна консультация</div>
            <div className="advantage-table__row-3">Дополнительные услуги</div>
            <div className="advantage-table__row-4">Решение вопроса</div>
            <div className="advantage-table__row-5">Время работы</div>
            <div className="advantage-table__row-6">Оплата</div>
          </div>
          <div className="advantage-table__column-2">
            <div className="advantage-table__row-1">Advogrand</div>
            <div className="advantage-table__row-2">От 120 руб</div>
            <div className="advantage-table__row-3">Входят в абонимент</div>
            <div className="advantage-table__row-4">По телефону</div>
            <div className="advantage-table__row-5">Круглосуточно</div>
            <div className="advantage-table__row-6">Всего 1 раз в год</div>
          </div>
          <div className="advantage-table__column-3">
            <div className="advantage-table__row-1">Юридические компании</div>
            <div className="advantage-table__row-2">Более 1000 рублей</div>
            <div className="advantage-table__row-3">Оплачиваются отдельно</div>
            <div className="advantage-table__row-4">В офисе</div>
            <div className="advantage-table__row-5">С 9:00 до 18:00</div>
            <div className="advantage-table__row-6">Каждый раз при обращении</div>
          </div>
          <div className="advantage-table__column-4">

          </div>
        </div>
      </div>
    </section>
  )
};

export default Advantages;