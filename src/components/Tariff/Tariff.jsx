import React, {useState, useRef, useEffect} from 'react';
import "./Tariff.scss";
import card1 from "../../assets/images/card-1.png";
import card2 from "../../assets/images/card-2.png"
import card3 from "../../assets/images/card-3.png"
import ScrollableAnchor from 'react-scrollable-anchor';


const Tariff = (props) => {

  const [activeButton, setButton] = useState(1);

  const btns = ["СРАВНИТЬ ТАРИФЫ", "ТАРИФЫ"];

  return (
    <ScrollableAnchor id={"tariff"}>
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
            <TariffColumn name="Персональная карта"
                          nameBold="для Вас"
                          cardImg={card1}
                          rows={[{
                            service:"Устные консультации", term: "2 в месяц"},
                            {service:"Консультации в отношении 3-х лиц", term: "2 в год"},
                            {service:"Письменные консультации", term: "2 в квартал"},
                            {service:"Звонок юриста", term: "1 в год"},
                            {service:"Содействие в переговорах", term: "1 в месяц"}
                          ]}
                          style={{background: "linear-gradient(#ff4c25, #ff2e00)"}}

            />
            <TariffColumn name="Карта"
                          nameBold="для всей семьи"
                          cardImg={card2}
                          rows={[
                            {service:"Устные консультации", term: "2 в месяц"},
                            {service:"Консультации в отношении 3-х лиц", term: "2 в год"},
                            {service:"Письменные консультации", term: "2 в квартал"},
                            {service:"Звонок юриста", term: "1 в год"},
                            {service:"Содействие в переговорах", term: "1 в месяц"}
                          ]}
                          style={{background: "linear-gradient(#00a300, #008e00)"}}

                          rowsAddition={[{service: "Сервис для всей семьи"}]}
            />
            <TariffColumn name="Карта"
                          nameBold="для бизнеса"
                          cardImg={card3}
                          rows={[
                            {service:"Устные консультации", term: "2 в месяц"},
                            {service:"Консультации в отношении 3-х лиц", term: "2 в год"},
                            {service:"Письменные консультации", term: "2 в квартал"},
                            {service:"Звонок юриста", term: "1 в год"},
                            {service:"Содействие в переговорах", term: "1 в месяц"}
                          ]}
                          style={{background: "linear-gradient(#02388f, #001c67)"}}

                          rowsAddition={[
                            {service: "Бизнес-косультации"},
                            {service: "Рекомендуемая модель договора"},
                            {service: "Обзор изменения в законодательстве"}
                          ]}
            />
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  )
};



const TariffColumn = (props) => {

  const imgElem = useRef(null);

  useEffect(()=> {
    imgElem.current.style.backgroundImage = `url(${props.cardImg})`
  }, []);

  return (
    <div className="tariff-table__column">
      <div className="tariff-table__column-top">
        <div className="tariff-table__column-name">
          {props.name}<br/>
          <span className="tariff-table__column-name-bold">{props.nameBold}</span>
        </div>
        <div className="tariff-table__column-img" ref={imgElem}/>
        {
          props.rows.map((r, i)=> {
            return (
              <div className="tariff-table__row" key={i}>
                <div className="tariff-table__service">{r.service}</div>
                <div className="tariff-table__service-term">{r.term}</div>
              </div>
            )
          })
        }
        { props.rowsAddition &&
          props.rowsAddition.map((r, i)=> {
            return (
              <div className="tariff-table__row-addition" key={i}>
                <div className="tariff-table__service">{r.service}</div>
              </div>
            )
          })
        }
      </div>
      <div className="tariff-table__column-bottom">
        Цена:
        <div className="column-bottom__price">65$ за год</div>
        <div className="column-bottom__consultation" style={props.style}>Консультация</div>
        <div className="column-bottom__buy">Купить</div>
      </div>
    </div>
  )

};






export default Tariff;