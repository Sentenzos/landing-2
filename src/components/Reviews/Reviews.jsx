import React, {useState} from 'react';
import "./Reviews.scss";
import useScroller from "../../common/useScroller";
import ScrollableAnchor from 'react-scrollable-anchor';
import Select from "react-select";


const Reviews = (props) => {

  const [activeTopic, setTopic] = useState(0);
  const {containerElem, rightArrow, leftArrow, scrollToRight, scrollToLeft} = useScroller();

  const topics = ["ВСЕ", "ЗДРАВООХРАНЕНИЕ", "БИЗНЕС", "СЕМЬЯ"
    , "ЖКХ", "НЕДВИЖИМОСТЬ"];

  const options = topics.map(val => {
    return { value: val, label: val }
  });

  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <ScrollableAnchor id={"reviews"}>
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
          <CustomSelect options={options}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
          />
          <div className="reviews-videos-wrapper">
            <div className="reviews-videos__left-btn" ref={leftArrow} onMouseDown={scrollToLeft} onTouchStart={scrollToLeft}/>
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
            <div className="reviews-videos__right-btn" ref={rightArrow} onMouseDown={scrollToRight} onTouchStart={scrollToRight}/>
          </div>
        </div>
      </section>
    </ScrollableAnchor>

  )
};


function CustomSelect(props) {

  const handleChange = selectedOption => {
    props.setSelectedOption(selectedOption);
  };

  return (
    <Select
      value={props.selectedOption}
      onChange={handleChange}
      options={props.options}
      className="reviews__topics-mobile"
      menuColor="red"
    />
  );

}

export default Reviews;