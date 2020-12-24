import React, { useState } from "react";
import styles from "../pages/styles.module.css";
import { ChromePicker, BlockPicker, Color, ColorResult} from 'react-color';
import { ArrowRight, ArrowLeft, ArrowLeftCircle, ArrowRightCircle } from "react-feather";

const NUM_LEDS = 150;

const LEDControl: React.FC = () => {
  const generateDefaultColorArray = (size: number): string[] => {
    let defaultArray: string[] = [];
    for (let i = 0; i < size; i++) {
      defaultArray.push("#1c96db");
    }
    return defaultArray;
  }

  const [ledColors, setColor] = useState(generateDefaultColorArray(NUM_LEDS));
  const [isClicked, setClick] = useState([false, false, false, false, false]);
  const [pos, setPos] = useState(0);
  
  const generateAllLEDs = (): React.ReactNode  => {
    let leds = [];
    for (let i = 0; i < 5; i++) {
      leds.push(generateLED(i));
    }
    return leds;
  }

  const changeClickState = (i: number) => {
    let temp = [...isClicked];
    temp[i] = !temp[i];
    setClick(temp);
  }

  const updateColor = (i: number, c: ColorResult) => {
    let temp = [...ledColors];
    temp[i] = c.hex;
    setColor(temp);
  }

  const getColorPicker = (i: number): JSX.Element => {
    return (
        isClicked[i] ? <ChromePicker color={ledColors[i]} onChange={(color) => updateColor(i, color)} /> : <ChromePicker className={styles.ColorPickerHide} />
    );
  } 

  const generateLED = (position: number): JSX.Element => {
    return (
      <div className={styles.LEDContainer} style={{gridColumn: position + 2}} key={position.toString()}>
        <div className={styles.LED} onClick={() => changeClickState((pos + position) % NUM_LEDS)} style={{backgroundColor: ledColors[(pos + position) % NUM_LEDS]}}>
          LED {(pos + position) % NUM_LEDS + 1}
        </div>
        <div className={styles.RightArrow}>
          {position != 4 ? <ArrowRight size={"50%"} /> : null}
        </div>
        <div className={styles.ColorPickerContainer} >
          {getColorPicker((pos + position) % NUM_LEDS)}
        </div>
      </div>
    )
  }
  return (
    <div className={styles.LEDControl}>
      <div className={styles.NavArrows}>
        <ArrowLeftCircle size={"50%"} className={styles.NavArrowLeft} onClick={() => (pos < 5 ? setPos(NUM_LEDS - 5) : setPos(pos - 5))} />
      </div>
      {generateAllLEDs()}
      <div className={styles.NavArrows} style={{gridColumn: 7}}>
        <ArrowRightCircle size={"50%"} className={styles.NavArrowRight} onClick={() => (setPos(pos + 5))} />
      </div>
    </div>
  );
}

export default LEDControl;
