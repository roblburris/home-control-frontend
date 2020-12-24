import React, { useState } from "react";
import * as Utils from "../components/utils";
import styles from "./styles.module.css";
import { Menu, GitHub, Home, X } from "react-feather";

const Navbar: React.FC = () => {
  const [clickedMenu, setClick] = useState(false);

  const changeBackground = (e: React.SyntheticEvent<HTMLElement>) => {
    e.currentTarget.style.background = "#FABF40";
  }

  const revertBackground = (e: React.SyntheticEvent<HTMLElement>) => {
    e.currentTarget.style.background = "#1C96DB";
  }

  const topNavMobileStyle: React.CSSProperties = {
    position: "absolute",
    height: "9%",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#1C96DB",
    display: "grid",
    gridTemplateColumns: "1% auto auto auto 1%",
  };

  const mobileNavBar: JSX.Element = (
    <div style={topNavMobileStyle}>
      <Menu
        className={styles.MobileNavItem}
        style={{ gridColumn: 2, justifySelf: "center" }}
        onClick={() => setClick(true)}
      >
        {" "}
      </Menu>

      <a className={styles.MobileNavItem} style={{ gridColumn: 3 }} href="/">
        <Home className="MobileNavItem"> </Home>
      </a>

      <a
        className={styles.MobileNavItem}
        style={{ gridColumn: 4 }}
        href="https://github.com/roblburris"
      >
        <GitHub className="MobileNavItem"> </GitHub>
      </a>
    </div>
  );

  const navBar: JSX.Element = (
    <div className={styles.topnav}>
      <a
          className={styles.navbar}
          onMouseEnter={changeBackground}
          onMouseLeave={revertBackground}
          style={{ gridColumn: 2 }}
          href="/"
        >
          {" "}
          Home
        </a>

      <a
        className={styles.navbar}
        href="/control"
        onMouseEnter={changeBackground}
        onMouseLeave={revertBackground}
      >
        {" "}
        Control{" "}
      </a>

      <a
        className={styles.navbar}
        href="/info"
        onMouseEnter={changeBackground}
        onMouseLeave={revertBackground}
      >
        {" "}
        Project Info{" "}
      </a>
    </div>
  );

  const openMobileNav: JSX.Element = (
    <div>
      <div style={topNavMobileStyle}>
        <X
          className={styles.MobileNavItem}
          style={{
            gridColumn: 2,
            justifySelf: "center",
            border: "solid",
            borderBottom: "solid",
            borderColor: "white",
            borderWidth: "2px",
          }}
          onClick={() => setClick(false)}
        />

        <div className={styles.MobileNavItem} style={{ gridColumn: 3 }}>
          <Home style={{ color: "#1C96DB" }} className="MobileNavItem" />
        </div>

        <div className={styles.MobileNavItem} style={{ gridColumn: 4 }}>
          <GitHub style={{ color: "#1C96DB" }} className="MobileNavItem" />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "9%",
          left: 0,
          height: "91%",
          backgroundColor: "black",
          width: "100%",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            backgroundColor: "#1C96DB",
            width: "100%",
            zIndex: -1,
            display: "grid",
            gridTemplateRows: "auto auto auto auto auto 9%",
            color: "white",
            fontFamily: "Poppins",
            alignItems: "center",
            gridTemplateColumns: "1% auto auto auto 1%",
          }}
        >
          <div
            style={{
              gridRow: 1,
              gridColumn: 3,
              border: "solid",
              borderBottom: "solid",
              borderColor: "white",
              borderWidth: "1px",
            }}
          >
            <a style={{ textDecoration: "none", color: "white" }} href="/">
              Home
            </a>
          </div>

          <div
            style={{
              gridRow: 2,
              gridColumn: 3,
              border: "solid",
              borderBottom: "solid",
              borderColor: "white",
              borderWidth: "1px",
            }}
          >
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="/resume.pdf"
            >
              Resume
            </a>
          </div>

          <div
            style={{
              gridRow: 3,
              gridColumn: 3,
              border: "solid",
              borderBottom: "solid",
              borderColor: "white",
              borderWidth: "1px",
            }}
          >
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="/projects"
            >
              Projects
            </a>
          </div>

          <div
            style={{
              gridRow: 4,
              gridColumn: 3,
              border: "solid",
              borderBottom: "solid",
              borderColor: "white",
              borderWidth: "1px",
            }}
          >
            <a style={{ textDecoration: "none", color: "white" }} href="/blog">
              Blog
            </a>
          </div>

          <div
            style={{
              gridRow: 5,
              gridColumn: 3,
              border: "solid",
              borderBottom: "solid",
              borderColor: "white",
              borderWidth: "1px",
            }}
          >
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="/contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  var dispNavBar =
    Utils.WindowDimension() <= 640
      ? clickedMenu
        ? openMobileNav
        : mobileNavBar
      : navBar;
  return dispNavBar;
}

export default Navbar;
