import React, { useState, useEffect } from 'react';
import diceIcon from "../assets/icon-dice.svg";
import desktopDivider from "../assets/pattern-divider-desktop.svg";
import mobileDivider from "../assets/pattern-divider-mobile.svg";

function AdviceContainer() {
  const [advice, setAdvice] = useState(null);

  let width = window.screen.width;
  console.log(width);

  const fetchAdvice = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      console.log(data);
      setAdvice(data.slip); 
    } catch (error) {
      console.error(error);
    }
  };

  
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <main>
      <div className='card'>
        <header>
          ADVICE #
          <span id='adviceId'>{advice ? advice.id : "Loading..."}</span>
        </header>
        <p id='advice'>{advice ? advice.advice : "Loading..."}</p>
        <div>
            <img src={width < 400? mobileDivider: desktopDivider} alt=''/>
        </div>
        <div className="footer-icon" id='button'>
            <img id='footer-icon' onClick={fetchAdvice} src={diceIcon} alt='' />
        </div>
      </div>
    </main>
  );
}

export default AdviceContainer;
