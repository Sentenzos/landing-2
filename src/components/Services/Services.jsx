import React from 'react';
import "./Services.scss";
import ScrollableAnchor from 'react-scrollable-anchor';


const Services = (props) => {
  return (
    <ScrollableAnchor id={"services"}>
      <section className="services">
        <div className="services__content">
          <h1 className="services__title">Услуги предоставляемые сервисом Advogrand</h1>
          <div className="services__items">
            <div className="service">
              <div className="service__img-wrapper">
                <div className="service__img-1"/>
              </div>
              <div className="service__name">Устные<br/> консультации</div>
            </div>
            <div className="service">
              <div className="service__img-wrapper">
                <div className="service__img-2"/>
              </div>
              <div className="service__name">Звонок<br/> юриста</div>
            </div>
            <div className="service">
              <div className="service__img-wrapper">
                <div className="service__img-3"/>
              </div>
              <div className="service__name">Модели<br/> договора</div>
            </div>
            <div className="service">
              <div className="service__img-wrapper">
                <div className="service__img-4"/>
              </div>
              <div className="service__name">Устные<br/> бизнес-консультации</div>
            </div>
            <div className="service">
              <div className="service__img-wrapper">
                <div className="service__img-5"/>
              </div>
              <div className="service__name">Содействие<br/> в переговорах</div>
            </div>
            <div className="service">
              <div className="service__img-wrapper">
                <div className="service__img-6"/>
              </div>
              <div className="service__name">Обзор изменений<br/> в законодательстве</div>
            </div>
            <div className="service">
              <div className="service__img-wrapper">
                <div className="service__img-7"/>
              </div>
              <div className="service__name">Письменные<br/> консультации</div>
            </div>
            <div className="service">
              <div className="service__img-wrapper">
                <div className="service__img-8"/>
              </div>
              <div className="service__name">Консультации<br/> в отношении третьих лиц</div>
            </div>
            <div className="service">
              <div className="service__img-wrapper">
                <div className="service__img-9"/>
              </div>
              <div className="service__name">Все области<br/> права</div>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  )
};

export default Services;