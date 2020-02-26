import React from 'react';
import "./How.scss";


const How = (props) => {
  return (
    <section className="how-it-works">
      <div className="how-it-works__content">
        <h1 className="how-it-works__title">Как оказывается услуга</h1>
        <div className="how-it-works__explanations">
          <div className="explanation">
            <div className="explanation__img-wrapper">
              <div className="explanation__img-1"/>
            </div>
            <div className="explanation__description">
              Появился вопрос -<br/>
              звоните по бесплатному номеру
            </div>
          </div>
          <div className="explanation">
            <div className="explanation__img-wrapper">
              <div className="explanation__img-2"/>
            </div>
            <div className="explanation__description">
              Описываете ситуацию -<br/>
              получаете ответ в течении 15 минут
            </div>
          </div>
          <div className="explanation">
            <div className="explanation__img-wrapper">
              <div className="explanation__img-3"/>
            </div>
            <div className="explanation__description">
              Вопрос решен!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default How;