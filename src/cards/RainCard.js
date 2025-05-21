import React, { useEffect } from 'react';
import './RainCard.css';

const RainCard = () => {
  useEffect(() => {
    const makeItRain = () => {
      const frontRow = document.querySelector('.rain.front-row');
      const backRow = document.querySelector('.rain.back-row');
      if (!frontRow || !backRow) return;

      frontRow.innerHTML = '';
      backRow.innerHTML = '';

      let increment = 0;
      let drops = '';
      let backDrops = '';

      while (increment < 100) {
        const randoHundo = Math.floor(Math.random() * 98 + 1);
        const randoFiver = Math.floor(Math.random() * 4 + 2);
        increment += randoFiver;

        const drop = `
          <div class="drop" style="left: ${increment}%; bottom: ${randoFiver * 2 - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
            <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
          </div>
        `;

        const backDrop = `
          <div class="drop" style="right: ${increment}%; bottom: ${randoFiver * 2 - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
            <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
          </div>
        `;

        drops += drop;
        backDrops += backDrop;
      }

      frontRow.innerHTML = drops;
      backRow.innerHTML = backDrops;
    };

    makeItRain();
  }, []);

  return (
    <div className="rain-container">
      <div className="rain-card">
        <div className="rain front-row"></div>
        <div className="rain back-row"></div>
      </div>
    </div>
  );
};

export default RainCard;
