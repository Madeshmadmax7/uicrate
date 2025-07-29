import React, { useEffect, useRef } from 'react';
import './PulseGrid.css';

const GRID_SIZE = 8;

const PulseGrid = () => {
const containerRef = useRef(null);

useEffect(() => {
    const dots = containerRef.current.querySelectorAll('.grid-dot');

    const handleMove = (e) => {


    dots.forEach(dot => {
        const rect = dot.getBoundingClientRect();
        const dx = rect.left + rect.width / 2 - e.clientX;
        const dy = rect.top + rect.height / 2 - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 80;
        if (dist < maxDist) {
        const scale = 1.4 - dist / maxDist;
        dot.style.transform = `scale(${scale})`;
        dot.style.opacity = `${0.4 + (1 - dist / maxDist) * 0.6}`;
        } else {
        dot.style.transform = 'scale(1)';
        dot.style.opacity = '0.2';
        }
    });
    };


    const reset = () => {
    dots.forEach(dot => {
        dot.style.transform = 'scale(1)';
        dot.style.opacity = '0.2';
    });
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMove);
    container.addEventListener('mouseleave', reset);

    return () => {
    container.removeEventListener('mousemove', handleMove);
    container.removeEventListener('mouseleave', reset);
    };
}, []);

return (
    <div className="pulse-card">
    <div className="pulse-grid" ref={containerRef}>
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
        <div key={i} className="grid-dot" />
        ))}
    </div>
    </div>
);
};

export default PulseGrid;
