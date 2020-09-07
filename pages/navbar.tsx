import React, { useState } from 'react';
import Link from 'next/link';
import * as Utils from './utils';
import styles from './styles.module.css';
import { Menu, GitHub, Home, X } from 'react-feather';

function Navbar() {
  const [clickedMenu, setClick] = useState(false);

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
    backgroundColor: '#1C96DB',
    display: 'grid',
    gridTemplateColumns: '1% auto auto auto 1%',
  }

  const mobileNavBar: JSX.Element = (
    <div style={topNavMobileStyle}> 
      <Menu className={styles.MobileNavItem}  style={{gridColumn: 2, justifySelf: 'center'}} onClick={() => setClick(true)}> </Menu> 
      
      <a className={styles.MobileNavItem} style={{gridColumn: 3}} href="/">
        <Home className="MobileNavItem"> </Home> 
      </a>
    
      <a className={styles.MobileNavItem} style={{gridColumn: 4}}
      href="https://github.com/roblburris">
        <GitHub className="MobileNavItem"> </GitHub> 
      </a>
    </div>
  )
  
  const navBar: JSX.Element = (
    <div className={styles.topnav}>
      <Link href="/"> 
        <a className={styles.navbar} onMouseEnter={changeBackground}
        onMouseLeave={revertBackground} style={{gridColumn: 2}}> Home</a>
      </Link>
      <a className={styles.navbar} href="/resume.pdf"
      onMouseEnter={changeBackground} onMouseLeave={revertBackground}> Resume </a>
      
      <a className={styles.navbar} href="/projects" onMouseEnter={changeBackground}
      onMouseLeave={revertBackground}> Projects </a>
      
      <a className={styles.navbar} href="/blog" onMouseEnter={changeBackground}
      onMouseLeave={revertBackground}> Blog </a>
      
      <a className={styles.navbar} href="/contact" onMouseEnter={changeBackground}
      onMouseLeave={revertBackground}> Contact </a>
    </div>
  );

  const openMobileNav: JSX.Element = (
    <div> 
      <div style={topNavMobileStyle}>
        <X className={styles.MobileNavItem}  style={{gridColumn: 2, justifySelf: 'center', border: 'solid', borderBottom: 'solid', borderColor: 'white', borderWidth: '2px'}} onClick={() => setClick(false)} />
        
        <div className={styles.MobileNavItem} style={{gridColumn: 3}}>
          <Home style={{color: '#1C96DB'}} className="MobileNavItem" />
        </div>
      
        <div className={styles.MobileNavItem} style={{gridColumn: 4}}>
          <GitHub style={{color: '#1C96DB'}} className="MobileNavItem" /> 
        </div>
      </div>

      <div style={{position: 'absolute', top: '9%', height: '91%', backgroundColor: 'black', width: '100%', zIndex: 1}}>
        <div style={{position: 'absolute', height: '100%', backgroundColor: '#1C96DB', width: '100%', zIndex: -1, display: 'grid', gridTemplateRows: 'auto auto auto auto auto 9%', color: 'white', fontFamily: 'Poppins', alignItems: 'center', gridTemplateColumns: '1% auto auto auto 1%'}}>
          <div style={{gridRow: 1, gridColumn: 3, border: 'solid', borderBottom: 'solid', borderColor: 'white', borderWidth: '1px'}}>
            <a style={{textDecoration: 'none', color: 'white'}} href='/'>Home</a>
          </div>

          <div style={{gridRow: 2, gridColumn: 3, border: 'solid', borderBottom: 'solid', borderColor: 'white', borderWidth: '1px'}}>
            <a style={{textDecoration: 'none', color: 'white'}} href='/resume.pdf'>Resume</a>
          </div>

          <div style={{gridRow: 3, gridColumn: 3, border: 'solid', borderBottom: 'solid', borderColor: 'white', borderWidth: '1px'}}>
            <a style={{textDecoration: 'none', color: 'white'}} href='/projects'>Projects</a>
          </div>          

          <div style={{gridRow: 4, gridColumn: 3, border: 'solid', borderBottom: 'solid', borderColor: 'white', borderWidth: '1px'}}>
            <a style={{textDecoration: 'none', color: 'white'}} href='/blog'>Blog</a>
          </div>


          <div style={{gridRow: 5, gridColumn: 3, border: 'solid', borderBottom: 'solid', borderColor: 'white', borderWidth: '1px'}}>
            <a style={{textDecoration: 'none', color: 'white'}} href='/contact'>Contact</a>
          </div>    
        </div>
      </div>
    </div>
  )

  var dispNavBar = Utils.WindowDimension() <= 640 ? (clickedMenu ? openMobileNav : mobileNavBar) : navBar;
  return dispNavBar;
}

export default Navbar;
