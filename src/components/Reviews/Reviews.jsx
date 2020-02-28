import React, {useEffect, useRef, useState} from 'react';
import "./Reviews.scss";
import leftArrowActiveImg from "../../assets/images/left-arrow-active.png";
import rightArrowActiveImg from "../../assets/images/right-arrow-active.png";
import leftArrowInactiveImg from "../../assets/images/left-arrow-inactive.png";
import rightArrowInactiveImg from "../../assets/images/right-arrow-inactive.png";


const Reviews = (props) => {

  const [active, setActive] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [allowRight, setAllowRight] = useState(false);
  const [allowLeft, setAllowLeft] = useState(false);


  const topics = ["ЗДРАВООХРАНЕНИЕ", "БИЗНЕС", "СЕМЬЯ"
    , "ЖКХ", "НЕДВИЖИМОСТЬ", "ВСЕ"];

  const videosElem = useRef(null);
  const videoElem = useRef(null);
  const rightArrow = useRef(null);
  const leftArrow = useRef(null);

  const getLeftScroll = (elem) => {
    const scrollWidth = elem.scrollWidth;
    const scrollLeft = elem.scrollLeft;
    const clientWidth = elem.clientWidth;

    return scrollWidth - (scrollLeft + clientWidth);
  };

  useEffect(() => {
    videosElem.current.addEventListener('scroll', (e) => {
      setScroll(e.target.scrollLeft);
    })
  }, []);

  //Следит за скроллом и меняет состояние кнопок
  useEffect(() => {
    const leftScroll = getLeftScroll(videosElem.current);
    const scrollLeft = videosElem.current.scrollLeft;

    if (leftScroll) {
      setAllowRight(true);
    } else {
      setAllowRight(false);
    }

    if (scrollLeft) {
      setAllowLeft(true);
    } else {
      setAllowLeft(false);
    }
  }, [scroll]);


  //в зависимости от состояния кнопок меняет их цвет
  useEffect(() => {
    if (allowRight) {
      rightArrow.current.style.backgroundImage = `url(${rightArrowActiveImg})`;
    } else {
      rightArrow.current.style.backgroundImage = `url(${rightArrowInactiveImg})`;
    }

    if (allowLeft) {
      leftArrow.current.style.backgroundImage = `url(${leftArrowActiveImg})`;
    } else {
      leftArrow.current.style.backgroundImage = `url(${leftArrowInactiveImg})`;
    }
  }, [allowRight, allowLeft]);


  const scrollToUnited = (func, ref) => {
    let int = setInterval(() => {
      func();
    }, 0);

    const clear = () => {
      clearInterval(int);
      window.removeEventListener('mouseup', clear);
      ref.current.removeEventListener('mouseout', clear)
    };

    window.addEventListener('mouseup', clear);
    ref.current.addEventListener('mouseout', clear);
  };

  const scrollToRight = () => {
    scrollToUnited(() => {
      if (getLeftScroll(videosElem.current)) {
        videosElem.current.scrollLeft += 4;
      }
    }, rightArrow);
  };

  const scrollToLeft = () => {
    scrollToUnited(() => {
      if (videosElem.current.scrollLeft) {
        videosElem.current.scrollLeft -= 4;
      }
    }, leftArrow);
  };


  return (
    <section className="reviews">
      <div className="reviews__content">
        <h1 className="reviews__title">Отзывы</h1>
        <div className="reviews__topics">
          {
            topics.map((t, i) => {
              return <div className={"reviews__topic" + (active === i ? " reviews__topic--active" : "")}
                          key={i}
                          onClick={() => setActive(i)}>{t}
              </div>
            })
          }
        </div>
        <div className="reviews-videos-wrapper">
          <div className="reviews-videos__left-btn" ref={leftArrow} onMouseDown={scrollToLeft}/>
          <div className="reviews-videos" ref={videosElem}>
            <div className="reviews-video-wrapper" ref={videoElem}>
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
              <div className="reviews-video__name">Название видеоролика</div>
            </div>
            <div className="reviews-video-wrapper">
              <div className="reviews-video"/>
              <div className="reviews-video__name">Название видеоролика</div>
            </div>
            <div className="reviews-video-wrapper">
              <div className="reviews-video"/>
              <div className="reviews-video__name">Название видеоролика</div>
            </div>
            <div className="reviews-video-wrapper">
              <div className="reviews-video"/>
              <div className="reviews-video__name">Название видеоролика</div>
            </div>
            <div className="reviews-video-wrapper">
              <div className="reviews-video"/>
              <div className="reviews-video__name">Название видеоролика</div>
            </div>
            <div className="reviews-video-wrapper">
              <div className="reviews-video"/>
              <div className="reviews-video__name">Название видеоролика</div>
            </div>
            <div className="reviews-video-wrapper">
              <div className="reviews-video"/>
              <div className="reviews-video__name">Название видеоролика</div>
            </div>
            <div className="reviews-video-wrapper">
              <div className="reviews-video"/>
              <div className="reviews-video__name">Название видеоролика</div>
            </div>
            <div className="reviews-video-wrapper">
              <div className="reviews-video"/>
              <div className="reviews-video__name">Название видеоролика</div>
            </div>
            <div className="reviews-video-wrapper">
              <div className="reviews-video"/>
              <div className="reviews-video__name">Название видеоролика</div>
            </div>


          </div>
          <div className="reviews-videos__right-btn" ref={rightArrow} onMouseDown={scrollToRight}/>
        </div>
      </div>
    </section>
  )
};

export default Reviews;