import React, {useState} from 'react';
import "./Reviews.scss";
import useScroller from "../../common/useScroller";


const Reviews = (props) => {

  const [activeTopic, setTopic] = useState(0);
  const {containerElem, rightArrow, leftArrow, scrollToRight, scrollToLeft} = useScroller();
  const topics = ["ЗДРАВООХРАНЕНИЕ", "БИЗНЕС", "СЕМЬЯ"
    , "ЖКХ", "НЕДВИЖИМОСТЬ", "ВСЕ"];


  return (
    <section className="reviews">
      <div className="reviews__content">
        <h1 className="reviews__title">Отзывы</h1>
        <div className="reviews__topics">
          {
            topics.map((t, i) => {
              return <div className={"reviews__topic" + (activeTopic === i ? " reviews__topic--active" : "")}
                          key={i}
                          onClick={() => setTopic(i)}>{t}
              </div>
            })
          }
        </div>
        <div className="reviews-videos-wrapper">
          <div className="reviews-videos__left-btn" ref={leftArrow} onMouseDown={scrollToLeft}/>
          <div className="reviews-videos" ref={containerElem}>
            <div className="reviews-video-wrapper">
              <div className="reviews-video"/>
              <div className="reviews-video__name">Длинное название видеоролика в две строки просто длинное</div>
            </div>
            <div className="reviews-video-wrapper">
              <div className="reviews-video"/>
              <div className="reviews-video__name">Название видеоролика</div>
            </div>
            <div className="reviews-video-wrapper">
              <div className="reviews-video"/>
              <div className="reviews-video__name">Длинное название видеоролика в две строки просто длинное</div>
            </div>
            <div className="reviews-video-wrapper">
              <div className="reviews-video"/>
              <div className="reviews-video__name">Длинное название видеоролика в две строки просто длинное</div>
            </div>
            <div className="reviews-video-wrapper">
              <div className="reviews-video"/>
              <div className="reviews-video__name">Название видеоролика</div>
            </div>
            <div className="reviews-video-wrapper">
              <div className="reviews-video"/>
              <div className="reviews-video__name">Длинное название видеоролика в две строки просто длинное</div>
            </div>
            <div className="reviews-video-wrapper">
              <div className="reviews-video"/>
              <div className="reviews-video__name">Длинное название видеоролика в две строки просто длинное</div>
            </div>
            <div className="reviews-video-wrapper">
              <div className="reviews-video"/>
              <div className="reviews-video__name">Название видеоролика</div>
            </div>
            <div className="reviews-video-wrapper">
              <div className="reviews-video"/>
              <div className="reviews-video__name">Длинное название видеоролика в две строки просто длинное</div>
            </div>
          </div>
          <div className="reviews-videos__right-btn" ref={rightArrow} onMouseDown={scrollToRight}/>
        </div>
      </div>
    </section>
  )
};

export default Reviews;