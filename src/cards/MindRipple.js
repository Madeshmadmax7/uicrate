import React from 'react';
import './MindRipple.css';

const MindRipple = () => {
    return (
        <div className="ripple-container">
        <div className="ripple-core"></div>
        <div className="ripple-circle ripple-delay-1"></div>
        <div className="ripple-circle ripple-delay-2"></div>
        <div className="ripple-circle ripple-delay-3"></div>
        </div>
    );
};

export default MindRipple;
