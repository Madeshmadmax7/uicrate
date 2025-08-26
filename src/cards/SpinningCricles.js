import React from "react";
import "./SpinningCircles.css";

const COUNT = 16;
const SIZE = "300px";  // Reduced size
const COLOR = "#fff";
const SPEED = 12; // seconds

function getCircleStyle(n) {
    const stepPx = `calc(${SIZE} / ${COUNT})`;
    const sizePx = `calc(${SIZE} - (${stepPx} * ${n}))`;
    const offsetPx = `calc((${stepPx} * ${n}) / 2)`;
    const duration = SPEED / (n + 1);
    return {
        position: "absolute",
        background: "transparent",
        border: `2px solid ${COLOR}`,
        borderRadius: "50%",
        left: offsetPx,
        top: offsetPx,
        width: sizePx,
        height: sizePx,
        animation: `spin ${duration}s infinite linear`,
        boxSizing: "border-box",
        borderStyle: n % 2 === 0 ? "dashed" : "solid",
        borderColor: n % 2 === 0 ? "rgba(255,255,255,0.5)" : COLOR,
        display: n === COUNT - 1 ? "none" : "block",
    };
}

const SpinningCircles = () => (
    <div className="container">
        {Array.from({ length: COUNT }).map((_, n) => (
            <div
                key={n}
                className={`circle${n % 2 === 0 ? " even" : ""}`}
                data-index={n}
                style={getCircleStyle(n)}
            />
        ))}
    </div>
);

export default SpinningCircles;
