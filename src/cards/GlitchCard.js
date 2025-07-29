import React, { useEffect, useRef } from 'react';
import './GlitchCard.css';

const GlitchCard = () => {
const containerRef = useRef(null);
const textRef = useRef(null);

useEffect(() => {
    const container = containerRef.current;
    const el = textRef.current;

    const handleMove = (e) => {
    const bounds = container.getBoundingClientRect();
    const offsetX = ((e.clientX - bounds.left) / bounds.width - 0.5) * 12;
    const offsetY = ((e.clientY - bounds.top) / bounds.height - 0.5) * 12;
    el.style.setProperty('--drag-x', `${offsetX}px`);
    el.style.setProperty('--drag-y', `${offsetY}px`);
    };

    const reset = () => {
    el.style.setProperty('--drag-x', `0px`);
    el.style.setProperty('--drag-y', `0px`);
    };

    container.addEventListener('mousemove', handleMove);
    container.addEventListener('mouseleave', reset);

    return () => {
    container.removeEventListener('mousemove', handleMove);
    container.removeEventListener('mouseleave', reset);
    };
}, []);

return (
    <div className="glitch-wrapper" ref={containerRef}>
    <div className="glitch-text" ref={textRef} data-text="Hover me">
        Hover me
    </div>
    </div>
);
};

export default GlitchCard;
