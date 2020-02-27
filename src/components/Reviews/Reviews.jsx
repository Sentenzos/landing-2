import React, {useState} from 'react';
import "./Reviews.scss";


const Reviews = (props) => {

  const [active, setActive] = useState(null);
  const [prevEvent, setPrevEvent] = useState(null);

  const topics = ["ЗДРАВООХРАНЕНИЕ", "БИЗНЕС", "СЕМЬЯ"
    , "ЖКХ", "НЕДВИЖИМОСТЬ", "ВСЕ"];

  const changePadding = {
    getPadding: (e) => {
      return parseFloat(getComputedStyle(e.target).padding);
    },
    decrease(e) {
      const padding = this.getPadding(e);
      return e.target.style.padding = padding - 2 + "px";
    },
    increase(e) {
      const padding = this.getPadding(e);
      return e.target.style.padding = padding + 2 + "px";
    }
  };


  const activateButton = (e, i) => {
    if (prevEvent) {
      changePadding.increase(prevEvent);
    }
    changePadding.decrease(e);
    setPrevEvent(e);
    setActive(i);
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
                          onClick={(e)=>activateButton(e, i)}>{t}
              </div>
            })
          }
        </div>
      </div>
    </section>
  )
};

export default Reviews;