import React from 'react';
import "./Partners.scss";
import useScroller from "../../common/useScroller";


const Partners = (props) => {

  const {containerElem, rightArrow, leftArrow, scrollToRight, scrollToLeft} = useScroller();

  return (
    <section className="partners">
      <div className="partners__content">
        <h1 className="partners__title">
          Партнеры Advogrand
        </h1>
        <div className="partners-firms-wrapper">
          <div className="partners-firms__left-btn" ref={leftArrow} onMouseDown={scrollToLeft}/>
          <div className="partners-firms" ref={containerElem}>
            <div className="partners-firm-wrapper">
              <div className="partners-firm__img"/>
              <div className="partners-firm__description">
                «Глобэкс» — российский коммерческий банк. Основан в 1992 году.
                В 2012 году банк «Глобэкс» вошёл в ежегодный рейтинг надёжности Forbes.
                Банк попал в группу «Высокая надёжность», заняв 30-е место с рейтингом 4 балла из 5-ти
              </div>
            </div>
            <div className="partners-firm-wrapper">
              <div className="partners-firm__img"/>
              <div className="partners-firm__description">
                «Глобэкс» — российский коммерческий банк. Основан в 1992 году.
                В 2012 году банк «Глобэкс» вошёл в ежегодный рейтинг надёжности Forbes.
                Банк попал в группу «Высокая надёжность», заняв 30-е место с рейтингом 4 балла из 5-ти
              </div>
            </div>
            <div className="partners-firm-wrapper">
              <div className="partners-firm__img"/>
              <div className="partners-firm__description">
                «Глобэкс» — российский коммерческий банк. Основан в 1992 году.
                В 2012 году банк «Глобэкс» вошёл в ежегодный рейтинг надёжности Forbes.
                Банк попал в группу «Высокая надёжность», заняв 30-е место с рейтингом 4 балла из 5-ти
              </div>
            </div>
            <div className="partners-firm-wrapper">
              <div className="partners-firm__img"/>
              <div className="partners-firm__description">
                «Глобэкс» — российский коммерческий банк. Основан в 1992 году.
                В 2012 году банк «Глобэкс» вошёл в ежегодный рейтинг надёжности Forbes.
                Банк попал в группу «Высокая надёжность», заняв 30-е место с рейтингом 4 балла из 5-ти
              </div>
            </div>
            <div className="partners-firm-wrapper">
              <div className="partners-firm__img"/>
              <div className="partners-firm__description">
                «Глобэкс» — российский коммерческий банк. Основан в 1992 году.
                В 2012 году банк «Глобэкс» вошёл в ежегодный рейтинг надёжности Forbes.
                Банк попал в группу «Высокая надёжность», заняв 30-е место с рейтингом 4 балла из 5-ти
              </div>
            </div>
            <div className="partners-firm-wrapper">
              <div className="partners-firm__img"/>
              <div className="partners-firm__description">
                «Глобэкс» — российский коммерческий банк. Основан в 1992 году.
                В 2012 году банк «Глобэкс» вошёл в ежегодный рейтинг надёжности Forbes.
                Банк попал в группу «Высокая надёжность», заняв 30-е место с рейтингом 4 балла из 5-ти
              </div>
            </div>
            <div className="partners-firm-wrapper">
              <div className="partners-firm__img"/>
              <div className="partners-firm__description">
                «Глобэкс» — российский коммерческий банк. Основан в 1992 году.
                В 2012 году банк «Глобэкс» вошёл в ежегодный рейтинг надёжности Forbes.
                Банк попал в группу «Высокая надёжность», заняв 30-е место с рейтингом 4 балла из 5-ти
              </div>
            </div>
            <div className="partners-firm-wrapper">
              <div className="partners-firm__img"/>
              <div className="partners-firm__description">
                «Глобэкс» — российский коммерческий банк. Основан в 1992 году.
                В 2012 году банк «Глобэкс» вошёл в ежегодный рейтинг надёжности Forbes.
                Банк попал в группу «Высокая надёжность», заняв 30-е место с рейтингом 4 балла из 5-ти
              </div>
            </div>
          </div>
          <div className="partners-firms__right-btn" ref={rightArrow} onMouseDown={scrollToRight}/>
        </div>
      </div>
    </section>
  )
};

export default Partners;