import React, {useState} from 'react';
import "./Tariff.scss";


const Tariff = (props) => {

  const [activeButton, setButton] = useState(1);

  const btns = ["СРАВНИТЬ ТАРИФЫ", "ТАРИФЫ"];

  return (
    <section className="tariff">
      <div className="tariff__content">
        <h1 className="tariff__title-1">Выберите тариф</h1>
        <h5 className="tariff__title-2">Вы можете оформить карту и начать пользоваться услугами уже сейчас!<br/>
          Оформление займёт всего 10 минут
        </h5>
        <div className="tariff__choose-card">
          Выберите годовую карту, которая Вам подходит:
          <div className="choose-card__btns">
            {
              btns.map((b, i) => {
                return <div className={"choose-card__btn" + (activeButton === i ? " choose-card__btn--active" : "")}
                            key={i}
                            onClick={() => setButton(i)}>{b}</div>
              })
            }
          </div>
        </div>
        <div className="tariff-table">
          <div className="tariff-table__column">
            <div className="tariff-table__column-top">
              <div className="tariff-table__column-name">
                Персональная карта<br/>
                <span className="tariff-table__column-name-bold">для Вас</span>
              </div>
              <div className="tariff-table__column-img"/>
              <div className="tariff-table__row">
                <div className="tariff-table__service">Устные консультации</div>
                <div className="tariff-table__service-term">2 в месяц</div>
              </div>
              <div className="tariff-table__row">
                <div className="tariff-table__service">Консультации в отношении 3-х лиц</div>
                <div className="tariff-table__service-term">2 в месяц</div>
              </div>
              <div className="tariff-table__row">
                <div className="tariff-table__service">Письменные консультации</div>
                <div className="tariff-table__service-term">2 в квартал</div>
              </div>
              <div className="tariff-table__row">
                <div className="tariff-table__service">Звонок юриста</div>
                <div className="tariff-table__service-term">1 в год</div>
              </div>
              <div className="tariff-table__row">
                <div className="tariff-table__service">Содействие в переговорах</div>
                <div className="tariff-table__service-term">1 в месяц</div>
              </div>
            </div>
            <div className="tariff-table__column-bottom">
              Цена:
              <div className="column-bottom__price">65$ за год</div>
              <div className="column-bottom__consultation">Консультация</div>
              <div className="column-bottom__buy">Купить</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Tariff;