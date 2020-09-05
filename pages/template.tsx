import React, { ReactNode } from 'react';
import Navbar from './navbar';
import * as Utils from './utils';
import styles from './styles.module.css';

type Props = {
    children: ReactNode
}

function Template(Props: any) {
    const appMobileStyle: React.CSSProperties = {
      textAlign: 'center',
      display: 'grid',
      gridTemplateColumns: 'auto',
      gridTemplateRows: '5% auto',
    };

    
    const appStyle: React.CSSProperties = {
      textAlign: 'center',
      display: 'grid',
      gridTemplateColumns: 'auto',
      gridTemplateRows: '9% auto',
    };

    let winDim: number = Utils.WindowDimension();
    let desired_style: React.CSSProperties = winDim <= 640 ? appMobileStyle : appStyle;
    
    function Main(Props: any): JSX.Element {
        const mobileBody: React.CSSProperties = {
            gridTemplateColumns: '10% auto 10%',
            gridTemplateRows: '0.02fr 1fr',
        }
    
        const normBody: React.CSSProperties = {
            gridTemplateColumns: '10% auto 10%',
            gridTemplateRows: '0.05fr 1fr',
        }
    
        let winDim: number = Utils.WindowDimension();
     
        let typeBody: React.CSSProperties =  winDim <= 640 ? mobileBody : normBody;
    
        return (
            <div className={styles.Main} style={typeBody}>
              <style jsx global>{`
                body {
                  margin: 0px;
                  padding: 0px;
                }
              `}</style>
              <div className={styles.Content}> 
                  {Props.children}

                  <div className={styles.Footer} style={{gridRow: 4, gridColumn: 2, textAlign: "center", alignItems: 'center', fontSize: "calc(7px + 1vmin)"}}>
                      Made by Robert Burris. Programmed in React using TypeScript. Last updated September 2020.
                  </div> 
              </div>
            </div>
        )
    }
    return (
      <div className="Page" style={desired_style}>
        <Navbar></Navbar>
        <Main>
            {Props.children}
        </Main>
      </div>
    );
  }



export default Template;
