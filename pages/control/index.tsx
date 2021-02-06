import React from "react";
import ControlTemplate from "../../components/ControlTemplate";
import LEDControl from "../../components/LEDControl";
import styles from "../styles.module.css";

const Control: React.FC = () => {
  return (
    <ControlTemplate>
      <div>
        <h1>Control</h1>
        <LEDControl />
      </div>
    </ControlTemplate>
  );
};

export default Control;
