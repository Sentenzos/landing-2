import {useEffect, useRef, useState} from "react";
import rightArrowActiveImg from "../assets/images/right-arrow-active.png";
import rightArrowInactiveImg from "../assets/images/right-arrow-inactive.png";
import leftArrowActiveImg from "../assets/images/left-arrow-active.png";
import leftArrowInactiveImg from "../assets/images/left-arrow-inactive.png";


const useScroller = () => {

  const [scroll, setScroll] = useState(0);
  const [allowRight, setAllowRight] = useState(false);
  const [allowLeft, setAllowLeft] = useState(false);

  const containerElem = useRef(null);
  const rightArrow = useRef(null);
  const leftArrow = useRef(null);

  const getRemainingScroll = (elem) => {
    const scrollWidth = elem.scrollWidth;
    const scrollLeft = elem.scrollLeft;
    const clientWidth = elem.clientWidth;

    return scrollWidth - (scrollLeft + clientWidth);
  };

  useEffect(() => {
    containerElem.current.addEventListener('scroll', (e) => {
      setScroll(e.target.scrollLeft);
    })
  }, []);


  //Следит за текущим скроллом и меняет состояние кнопок
  useEffect(() => {
    const leftScroll = getRemainingScroll(containerElem.current);
    const scrollLeft = containerElem.current.scrollLeft;

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
      if (getRemainingScroll(containerElem.current)) {
        containerElem.current.scrollLeft += 4;
      }
    }, rightArrow);
  };

  const scrollToLeft = () => {
    scrollToUnited(() => {
      if (containerElem.current.scrollLeft) {
        containerElem.current.scrollLeft -= 4;
      }
    }, leftArrow);
  };

  return {
    containerElem,
    rightArrow,
    leftArrow,
    scrollToRight,
    scrollToLeft
  }

};

export default useScroller;