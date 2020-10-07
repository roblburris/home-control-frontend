import { useState, useEffect } from "react";

export function WindowDimension(): number {
  const [windowDimension, setWindowDimension] = useState<number>();

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimension!;
}

/* For later, div that stores code for a tag for labeling blog posts
import Archive from 'react-feather';
import styles from '../styles.module.css';

const BlogTag: JSX.Element = (
  <div className={styles.BlogItem}>
    <a className={styles.BlogItem} href='/' style={{textDecoration: 'none'}}>
        <Archive size={16} style={{gridColumn: 1, gridRow: 1}} />
        <p style={{gridColumn: 2, gridRow: 1}}> Projects </p>
    </a>
  </div>)
*/

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height,
//   };
// }

// export default function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return windowDimensions;
// }
