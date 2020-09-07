import React from 'react';
import Link from 'next/link';
import * as Utils from './utils';
import styles from './styles.module.css';
import { Menu, GitHub, Home } from 'react-feather';

function Navbar() {
  function changeBackground(e: any) {
    e.target.style.background = '#FABF40';
  }
  
  function revertBackground(e: any) {
    e.target.style.background = '#1C96DB';
  }

  const topNavMobileStyle: React.CSSProperties = {
    position: 'absolute',
    height: '9%',
    width: '100%',
    gridRow: 1,
    backgroundColor: '#1C96DB',
    gridArea: '1 / 1 / 1 / 1',
    display: 'grid',
    gridTemplateColumns: '1% auto auto auto 1%',
  }

  const mobileNavBar: JSX.Element = (<div style={topNavMobileStyle}> 
    <a className={styles.MobileNavItem} style={{gridColumn: 2}} href="">
      <Menu className="MobileNavItem"> </Menu> 
    </a>
    <a className={styles.MobileNavItem} style={{gridColumn: 3}} href="/">
      <Home className="MobileNavItem"> </Home> 
    </a>
    <a className={styles.MobileNavItem} style={{gridColumn: 4}} href="https://github.com/roblburris">
      <GitHub className="MobileNavItem"> </GitHub> 
    </a>
  </div>)
  
  const navBar: JSX.Element = (<div className={styles.topnav}>
    <Link href="/"> 
      <a className={styles.navbar} onMouseEnter={changeBackground} onMouseLeave={revertBackground} style={{gridColumn: 2}}> Home</a>
    </Link>
    <a className={styles.navbar} href="/resume.pdf" onMouseEnter={changeBackground} onMouseLeave={revertBackground}> Resume </a> 
    <a className={styles.navbar} href="/projects" onMouseEnter={changeBackground} onMouseLeave={revertBackground}> Projects </a> 
    <a className={styles.navbar} href="/blog" onMouseEnter={changeBackground} onMouseLeave={revertBackground}> Blog </a> 
    <a className={styles.navbar} href="/contact" onMouseEnter={changeBackground} onMouseLeave={revertBackground}> Contact </a> 
  </div>);

  var dispNavBar = Utils.WindowDimension() <= 640 ? mobileNavBar : navBar;
  return dispNavBar;
}

export default Navbar;
