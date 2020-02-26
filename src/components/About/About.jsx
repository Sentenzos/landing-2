import React from 'react';
import "./About.scss";


const About = (props) => {
  return (
    <section className="about-us">
      <div className="about-us__content">
        <h1 className="about-us__title">О сервисе Advogrand</h1>
        <p className="about-us__description-1">
          В составе нашей команды трудятся профессионалы, имеющий огромный опыт реальной юридической практики.<br/>
          Благодрая этому мы всегда можем найти юридически верное решение, защищающее интересы, сглаживающее<br/>
          конфликтные ситуации
        </p>
        <p className="about-us__description-2">
          Наше обонентское обслуживание позволяет сохранить нашим клиентам время, деньги и душевное спокойствие,<br/>
          ведь ваши интересы находятся под круглосуточной защитой «личного адвоката».
        </p>
        <div className="about-us__statistics">
          <div className="statistics__item">
            <div className="statistics-item__number">9</div>
            <div className="statistics-item__name">лет на российском<br/>рынке</div>
          </div>
          <div className="statistics__item">
            <div className="statistics-item__number">289</div>
            <div className="statistics-item__name">квалифицированных<br/>специалистов</div>
          </div>
          <div className="statistics__item">
            <div className="statistics-item__number">2,5<span> млн.</span></div>
            <div className="statistics-item__name">решенных вопросов</div>
          </div>
          <div className="statistics__item">
            <div className="statistics-item__number">3</div>
            <div className="statistics-item__name">работаем<br/>в 3-х странах мира</div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;