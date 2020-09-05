import { useState, useEffect } from 'react';

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
      return() => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimension!;
}