import React from "react";
import '../styles/Header.css';

function Header() {
    return (
        <header className="header-container">
            <h1 className="header-title">
                React components
            </h1>
            <p className="header-subtitle">
                A collection of ready-to-use interactive React components for your projects.
            </p>
        </header>
    );
}

export default Header;
