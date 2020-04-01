import React, {useState} from 'react';
import styles from "./CustomSelect.module.css";
import {ReactComponent as Arrow} from "./assets/arrow-bottom.svg";
import {Transition} from "react-transition-group";


const CustomSelect = (props) => {

  const {options} = props;
  const [optionsState, setOptionsState] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const height = (options.length - 1)  * 2 + "rem";

  const selectControl = () => {
    setOptionsState((state) => {
      return !state
    });
  };

  const optionControl = (e) => {
    setSelected(e.target.innerHTML);
  };

  const defaultStyles = {
    transition: `height 300ms, opacity 300ms, margin-top 300ms`
  };

  const transitionStyles = {
    entering: {
      height: 0,
      //устраняет подергивание при встраивании элемента
      marginTop: "-0.1rem",
      opacity: 0
    },
    entered: {
      height: height,
      marginTop: "0.3rem",
      opacity: 1
    },
    exiting: {
      height: 0,
      opacity: 0
    },
    exited: {
      height: 0,
      opacity: 0
    },
  };

  return (
    <div className={`${styles.select} ${props.className}`}>
      <div className={styles.button} onClick={selectControl}>
        <div className={styles.chosenOption}>
          {selected}
        </div>
        <div className={styles.arrowContainer}>
          <span className={styles.delimiter}/>
          <Arrow className={styles.arrow}/>
        </div>
      </div>

      <Transition in={optionsState} timeout={{
        //в библиотеке баг из-за которого есть делей при воспроизведении анимации появления,
        // а нулевой тайминг почему-то фиксит это дело
        enter: 0,
        exit: 300
      }} unmountOnExit={true}>
        {
          state => {
            return (
              <div className={styles.options} style={{
                ...defaultStyles,
                ...transitionStyles[state]
              }}>
                {
                  options.map((opt, i) => {
                    return (
                      <div key={i} className={styles.option + " " + (opt === selected && styles.selected)} onClick={optionControl}>
                        {opt}
                      </div>
                    )
                  })
                }
              </div>
            )
          }
        }
      </Transition>
    </div>
  )
};

export default CustomSelect