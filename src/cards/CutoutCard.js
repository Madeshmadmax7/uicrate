import React from 'react';
import './CutoutCard.css';

const CutoutCard = () => {
return (
    <div className="cutout-gallery-container">
    <div className="cutout-card-grid">
        <div className="cutout-card" />
        <div className="cutout-card" />
        <div className="cutout-content">Hover me</div>
    </div>
    </div>
);
};

export default CutoutCard;
