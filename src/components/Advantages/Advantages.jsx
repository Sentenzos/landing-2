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
            <div className="advantage-table__row">......</div>
            <div className="advantage-table__row">Одна консультация</div>
            <div className="advantage-table__row">Дополнительные услуги</div>
            <div className="advantage-table__row">Решение вопроса</div>
            <div className="advantage-table__row">Время работы</div>
            <div className="advantage-table__row">Оплата</div>
          </div>
          <div className="advantage-table__column-2">
            <div className="advantage-table__row">Advogrand</div>
            <div className="advantage-table__row">От 120 руб</div>
            <div className="advantage-table__row">Входят в абонимент</div>
            <div className="advantage-table__row">По телефону</div>
            <div className="advantage-table__row">Круглосуточно</div>
            <div className="advantage-table__row">Всего 1 раз в год</div>
          </div>
          <div className="advantage-table__column-3">
            <div className="advantage-table__row">Юридические компании</div>
            <div className="advantage-table__row">Более 1000 рублей</div>
            <div className="advantage-table__row">Оплачиваются отдельно</div>
            <div className="advantage-table__row">В офисе</div>
            <div className="advantage-table__row">С 9:00 до 18:00</div>
            <div className="advantage-table__row">Каждый раз при обращении</div>
          </div>
          <div className="advantage-table__column-4">
            <div className="advantage-table__row">Нашими услугами уже пользуются:</div>
            <div className="advantage-table__row">
              <div className="advantage-table__img-wrapper">
                <div className="advantage-table__img-1"/>
              </div>
              <span className="advantage-table__bold">208 000</span>&nbsp;- мужчин
            </div>
            <div className="advantage-table__row">
              <div className="advantage-table__img-wrapper">
                <div className="advantage-table__img-2"/>
              </div>
              <span className="advantage-table__bold">137 000</span>&nbsp;- женщин
            </div>
            <div className="advantage-table__row">
              <div className="advantage-table__img-wrapper">
                <div className="advantage-table__img-3"/>
              </div>
              <span className="advantage-table__bold">63 000</span>&nbsp;- семейных пар
            </div>
            <div className="advantage-table__row">
              <div className="advantage-table__img-wrapper">
                <div className="advantage-table__img-4"/>
              </div>
              <span className="advantage-table__bold">13 500</span>&nbsp;- предпринимателей
            </div>
            <div  className="advantage-table__btn">Узнать больше!</div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Advantages;