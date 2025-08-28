import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({
    city = "New York",
    date = "August 27",
    tempHigh = 27,
    tempLow = 19,
    weatherDesc = "Sunny",
}) => {
    return (
        <div className="weather-card">
            <div className="weather-card-inner">
                <div className="weather-header">
                    <h2 className="weather-city">{city}</h2>
                    <p className="weather-date">{date}</p>
                </div>

                <svg
                    className="weather-icon"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Weather Icon"
                    role="img"
                >
                    <path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z" />
                    <rect className="pulse-fast" y="16" x="240" height="48" width="32" />
                    <rect className="pulse-slow" y="448" x="240" height="48" width="32" />
                    <rect className="pulse-fast" y="240" x="448" height="32" width="48" />
                    <rect className="pulse-slow" y="240" x="16" height="32" width="48" />
                    <rect
                        className="pulse-fast"
                        transform="rotate(-45 416 416)"
                        y="393.373"
                        x="400"
                        height="45.255"
                        width="32"
                    />
                    <rect
                        className="pulse-slow"
                        transform="rotate(-45 96 96)"
                        y="73.373"
                        x="80"
                        height="45.255"
                        width="32.001"
                    />
                    <rect
                        className="pulse-fast"
                        transform="rotate(-45.001 96.002 416.003)"
                        y="400"
                        x="73.373"
                        height="32"
                        width="45.255"
                    />
                    <rect
                        className="pulse-slow"
                        transform="rotate(-45 416 96)"
                        y="80"
                        x="393.373"
                        height="32.001"
                        width="45.255"
                    />
                </svg>

                <div className="weather-temp">
                    {tempHigh}° <span className="temp-divider">/</span> {tempLow}°
                </div>
                <p className="weather-desc">{weatherDesc}</p>
            </div>
        </div>
    );
};

export default WeatherCard;
