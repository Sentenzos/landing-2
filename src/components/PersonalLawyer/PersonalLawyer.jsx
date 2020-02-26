import React from 'react';
import "./PersonalLawyer.scss";


const PersonalLawyer = (props) => {
  return (
    <section className="personal-lawyer">
      <div className="personal-lawyer__content">
        <h1 className="personal-lawyer__title">Годовой абонимент на услуги<br/>
          <span className="personal-lawyer__title-bold">«ЛИЧНОГО ЮРИСТА»</span>
        </h1>
        <div className="personal-lawyer__text">
          24 часа в сутки Ваш личный юрист <br/>
          – <span className="personal-lawyer__text-bold">Advogrand</span> на связи<br/>
          всего за <span className="personal-lawyer__text-bold">12 рублей в день</span>
        </div>
        <div className="personal-lawyer__button">Хочу «личного юриста»</div>
      </div>
    </section>
  )
};

export default PersonalLawyer;