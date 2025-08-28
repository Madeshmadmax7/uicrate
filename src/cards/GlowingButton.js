import React from "react";
import "./GlowingButton.css";

const GlowingButton = ({ children = "Button" }) => (
    <>
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
            <filter width="3000%" x="-1000%" height="3000%" y="-1000%" id="unopaq">
                <feColorMatrix
                    values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 3 0"
                ></feColorMatrix>
            </filter>
        </svg>
        <div className="backdrop"></div>
        <button className="button">
            <div className="a l"></div>
            <div className="a r"></div>
            <div className="a t"></div>
            <div className="a b"></div>
            <div className="text">{children}</div>
        </button>
    </>
);

export default GlowingButton;
