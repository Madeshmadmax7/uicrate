import React, { useEffect, useRef } from 'react';
import './DotCard.css';

const DotCard = () => {
const canvasRef = useRef(null);
const dots = useRef([]);
const mouse = useRef(null);
const dotCount = 30;

const CANVAS_WIDTH = 180;
const CANVAS_HEIGHT = 240;

const initDots = () => {
    // const canvas = canvasRef.current;
    dots.current = Array.from({ length: dotCount }, () => {
    const x = Math.random() * CANVAS_WIDTH;
    const y = Math.random() * CANVAS_HEIGHT;
    return { x, y, vx: 0, vy: 0, ox: x, oy: y };
    });
};

const drawDots = (ctx) => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    dots.current.forEach(dot => {
    if (mouse.current) {
        const dx = mouse.current.x - dot.x;
        const dy = mouse.current.y - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
        const force = (120 - dist) / 14000;
        dot.vx += dx * force;
        dot.vy += dy * force;
        }
    } else {
        const dx = dot.ox - dot.x;
        const dy = dot.oy - dot.y;
        dot.vx += dx * 0.002;
        dot.vy += dy * 0.002;
    }

    dot.x += dot.vx;
    dot.y += dot.vy;
    dot.vx *= 0.9;
    dot.vy *= 0.9;

    ctx.beginPath();
    ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = 'gray';
    ctx.fill();
    });
};

useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set fixed size once
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    initDots();

    const animate = () => {
    drawDots(ctx);
    requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = e => {
    const rect = canvas.getBoundingClientRect();
    mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
    };
    };

    const handleMouseLeave = () => {
    mouse.current = null;
    };

    const container = canvas.parentElement;
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
    container.removeEventListener('mousemove', handleMouseMove);
    container.removeEventListener('mouseleave', handleMouseLeave);
    };
}, []);

return (
    <div className="outer-card">
    <div className="dot-card">
        <canvas ref={canvasRef} />
        <div className="dot-card-content">Hover me</div>
    </div>
    </div>
);
};

export default DotCard;
