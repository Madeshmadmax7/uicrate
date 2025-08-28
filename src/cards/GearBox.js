import React from "react";
import "./GearBox.css";

const GearBox = () => {
    return (
        <div className="gearbox">
            <div className="gear one">
                <div className="gear-inner">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            <div className="gear two">
                <div className="gear-inner">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    );
};

export default GearBox;
