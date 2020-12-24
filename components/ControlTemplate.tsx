import React from "react";
import Navbar from "../pages/navbar";
import * as Utils from "./utils";
import styles from "../pages/styles.module.css";

interface Props {
  children: JSX.Element
}

const ControlTemplate = (Props: Props): JSX.Element => {
  const appMobileStyle: React.CSSProperties = {
    textAlign: "center",
    display: "grid",
    gridTemplateColumns: "auto",
    gridTemplateRows: "9% auto",
  };

  const appStyle: React.CSSProperties = {
    textAlign: "center",
    display: "grid",
    gridTemplateColumns: "auto",
    gridTemplateRows: "7% auto",
  };

  let winDim: number = Utils.WindowDimension();
  let desired_style: React.CSSProperties =
    winDim <= 640 ? appMobileStyle : appStyle;

  function Main(Props: any): JSX.Element {
    const mobileBody: React.CSSProperties = {
      gridTemplateColumns: "10% auto 10%",
      gridTemplateRows: "5% 1fr",
      margin: "0px",
      padding: "0px",
    };

    const normBody: React.CSSProperties = {
      gridTemplateColumns: "10% auto 10%",
      gridTemplateRows: "5% auto 10% auto auto",
      margin: "0px",
      padding: "0px",
    };

    let winDim: number = Utils.WindowDimension();
    let typeBody: React.CSSProperties = winDim <= 640 ? mobileBody : normBody;

    let contentStyle: React.CSSProperties =
      winDim <= 640 ? { top: "8%" } : { top: "10%" };

    return (
      <div className={styles.Main} style={typeBody}>
        <div className={styles.Content} style={contentStyle}>
          {Props.children}
        </div>
      </div>
    );
  }
  return (
    <div className="Page" style={desired_style}>
      <Navbar></Navbar>
      <Main>{Props.children}</Main>
    </div>
  );
}

export default ControlTemplate;
