import React from 'react';
import './HeartBeatECG.css';

const HeartBeatECG = () => (
  <div className="heartbeat-ecg-container">
    <svg
      className="heartbeat-ecg-svg"
      viewBox="0 0 60 50"
      width="100"
      height="84"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="heartbeat-ecg-heart"
        d="M30 39.7l-.6-.5C16.5 28.7 13 25 13 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM22 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L30 17.1l-1.1-1.3C27.4 14.1 25.5 12 22 12z"
        fill="#fa4256"
      />
      <polyline
        className="heartbeat-ecg-line"
        points="2,28 10,28 15,23 22,42 30,12 38,42 45,18 50,28 58,28"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default HeartBeatECG;
