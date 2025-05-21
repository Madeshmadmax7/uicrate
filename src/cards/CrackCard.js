import React, { useState } from 'react';
import './CrackCard.css';

const pieces = [
  { id: 1, style: { top: 0, left: 0 } },
  { id: 2, style: { top: 0, left: '33.33%' } },
  { id: 3, style: { top: 0, left: '66.66%' } },
  { id: 4, style: { top: '33.33%', left: 0 } },
  { id: 5, style: { top: '33.33%', left: '33.33%' } },
  { id: 6, style: { top: '33.33%', left: '66.66%' } },
  { id: 7, style: { top: '66.66%', left: 0 } },
  { id: 8, style: { top: '66.66%', left: '33.33%' } },
  { id: 9, style: { top: '66.66%', left: '66.66%' } },
];

function CrackCard() {
  const [broken, setBroken] = useState(false);

  return (
    <div
      className="crack-card-container"
      onMouseEnter={() => setBroken(true)}
      onMouseLeave={() => setBroken(false)}
    >
      {pieces.map(({ id, style }) => (
        <div
          key={id}
          className={`piece ${broken ? 'break' : ''}`}
          style={style}
        />
      ))}
      <div className="card-content"></div>
    </div>
  );
}

export default CrackCard;
