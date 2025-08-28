import React from 'react';
import { useNavigate } from 'react-router-dom';
import DotCard from '../cards/DotCard';
import '../styles/Gallery.css';
import '../styles/Animations.css'
import CutoutCard from '../cards/CutoutCard';
import NeonTrail from '../cards/NeonTrail';
import CornerPeel from '../cards/CornerPeel';
import OrigamiFold from '../cards/OrigamiFold';
import CrackCard from '../cards/CrackCard';
import AuroraGlow from '../cards/AuroraGlow';
import RainCard from '../cards/RainCard';
import TextUnderline from '../cards/TextUnderline';
import GlitchCard from '../cards/GlitchCard';
import MindRipple from '../cards/MindRipple';
import PulseGrid from '../cards/PulseGrid';
import HeartBeatECG from '../cards/HeartBeatECG';
import StarFieldCard from '../cards/StarFieldCard';
import LightsaberFightCard from '../cards/LightsaberFightCard';
import SpinningCircles from '../cards/SpinningCricles';
import GlowingButton from '../cards/GlowingButton';
import WeatherCard from '../cards/WeatherCard';
import GearBox from '../cards/GearBox';

const cardData = [
    {
        id: 1,
        title: 'Magnetic Card',
        reactCode: `import React, { useEffect, useRef } from 'react';
import './DotCard.css';

const DotCard = () => {
const canvasRef = useRef(null);
const dots = useRef([]);
const mouse = useRef(null);
const dotCount = 30;

const CANVAS_WIDTH = 180;
const CANVAS_HEIGHT = 240;

const initDots = () => {
    const canvas = canvasRef.current;
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
        <div className="dot-card-content">Hover Me</div>
    </div>
    </div>
);
};

export default DotCard;`,
        cssCode: `.outer-card {
    width: 180px;
    height: 240px;
    background: #000000;
    border-radius: 12px;
    padding: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.0);
    display: flex;
    align-items: center;
    justify-content: center;
}


.dot-card {
    position: relative;
    width: 100%;
    height: 100%;
    background: #000000;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.0);
}

.dot-card canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.dot-card-content {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 100;
    color: white;
    font-size: 20px;
}`,
        preview: <DotCard />
    }
    ,
    {
        id: 2,
        title: 'Cut Out Card',
        reactCode: `import React from 'react';
import './CutoutCard.css';

const CutoutCard = () => {
return (
    <div className="cutout-gallery-container">
    <div className="cutout-card-grid">
        <div className="cutout-card" />
        <div className="cutout-card" />
        <div className="cutout-content">Hover Me</div>
    </div>
    </div>
);
};

export default CutoutCard;`,
        cssCode: `.cutout-gallery-container {
    background-color: #000;
    padding: 40px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cutout-card-grid {
    position: relative;
    width: 140px;
    height: 180px;
    perspective: 1000px;
}

.cutout-card {
    position: absolute;
    width: 140px;
    height: 180px;
    border: 2px solid white;
    border-radius: 10px;
    background: transparent;
    transition: transform 0.4s ease;
}

.cutout-card:nth-child(1) {
    transform: rotate(30deg);
    z-index: 1;
}

.cutout-card:nth-child(2) {
    transform: rotate(0deg);
    z-index: 0;
}

.cutout-card-grid:hover .cutout-card {
    transform: rotate(0deg);
}

.cutout-content{
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 100;
    color: white;
    font-size: 20px;
    opacity: 1;
}
.cutout-content:hover{
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 100;
    color: white;
    font-size: 20px;
    opacity: 0;
}`,
        preview: <CutoutCard />
    },
    {
        id: 3,
        title: 'Peel Corner',
        reactCode: `import React from 'react';
import './CornerPeel.css';
const CornerPeel = () => {
    return <div className="corner-peel-box"></div>;
};

export default CornerPeel;`,
        cssCode: `.corner-peel-box {
    width: 200px;
    height: 300px;
    background-color: #1e1e1e;
    margin: 50px auto;
    position: relative;
    overflow: hidden;
    border: 2px solid #2c2c2c;
    border-radius: 10px;
    box-shadow: 0 0 10px #000;
}

.corner-peel-box:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-width: 0 25px 25px 0;
    border-style: solid;
    border-color: #424242 transparent;
    border-bottom-left-radius: 8px;
    box-shadow: 0 0 5px #000;
    transition: all 0.5s ease-in-out;
}

.corner-peel-box:hover:before {
    border-width: 0 80px 80px 0;
}`,
        preview: <CornerPeel />,
    },
    {
        id: 4,
        title: 'Crack Card',
        reactCode: `import React, { useState } from 'react';
import './CrackCard.css';

const pieces = [
    { id: 1, style: { top: 0, left: 0 } },
    { id: 2, style: { top: 0, left: '33.33%' } },
    { id: 3, style: { top: 0, left: '66.66%' } },
    { id: 4, style: { top: '33.33%', left: 0 } },
    { id: 5, style: { top: '33.33%', left: '33.33%' } },
    { id: 6, style: { top: '33.33%', left: '66.66%' } },
    { id: 7, style: { top: '66.66%', left: 0 } },
    { id: 8, style: { top: '66.66%', left: '33.33%' } },
    { id: 9, style: { top: '66.66%', left: '66.66%' } },
];

function CrackCard() {
    const [broken, setBroken] = useState(false);

    return (
    <div
        className="crack-card-container"
        onMouseEnter={() => setBroken(true)}
        onMouseLeave={() => setBroken(false)}
    >
    {pieces.map(({ id, style }) => (
        <div
        key={id}
        className={\`piece \${broken ? 'break' : ''}\`}
        style={style}
        />
    ))}
    <div className="card-content">Hover to Crack!</div>
    </div>
);
}

export default CrackCard;`,
        cssCode: `.crack-card-container {
    position: relative;
    width: 170px;
    height: 250px;
    background: #222;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    cursor: pointer;
}

.piece {
    position: absolute;
    width: 33.33%;
    height: 33.33%;
    background: #3498db;
    transition: transform 0.5s ease, opacity 0.5s ease;
    border: 1px solid #fff;
    box-sizing: border-box;
}

.piece.break:nth-child(1) { transform: translate(-20px, -20px) rotate(-10deg); }
.piece.break:nth-child(2) { transform: translate(0px, -30px) rotate(6deg); }
.piece.break:nth-child(3) { transform: translate(20px, -10px) rotate(12deg); }
.piece.break:nth-child(4) { transform: translate(-25px, 0px) rotate(-6deg); }
.piece.break:nth-child(5) { transform: scale(1.1) rotate(0deg); }
.piece.break:nth-child(6) { transform: translate(25px, 5px) rotate(5deg); }
.piece.break:nth-child(7) { transform: translate(-15px, 20px) rotate(8deg); }
.piece.break:nth-child(8) { transform: translate(0px, 25px) rotate(-4deg); }
.piece.break:nth-child(9) { transform: translate(20px, 20px) rotate(10deg); }

.card-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 20px;
    font-weight: bold;
    pointer-events: none;
}`,
        preview: <CrackCard />,
    },
    {
        id: 5,
        title: 'Neon Trail',
        reactCode: `import React from 'react';
import './NeonTrail.css';

function NeonTrail() {
return (
    <div className="neon-box1">
    <div className="neon-box2">
        <p className="neon-text">Hover me</p>
    </div>
    </div>
);
}

export default NeonTrail;

`,
        cssCode: `.neon-box1 {
    width: 160px;
    height: 210px;
    background-image: linear-gradient(163deg, #ff00ff 0%, #3700ff 100%);
    border-radius: 12px;
    text-align: center;
    transition: all 0.25s cubic-bezier(0, 0, 0, 1);
    margin: auto;
    padding: 0px;
    box-sizing: border-box;
}

.neon-box1:hover {
    box-shadow: 0 0 12px 5px rgba(204, 0, 255, 0.3);
}

.neon-box2 {
    width: 100%;
    height: 100%;
    background-color: #1d1724;
    border-radius: 10px;
    transition: all 0.25s cubic-bezier(0, 0, 0, 1);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.neon-box2:hover {
    transform: scale(0.985);
    border-radius: 11px;
}

.neon-text {
    color: white;
    font-size: 13px;
    margin: 0;
}`,
        preview: <NeonTrail />,
    },
    {
        id: 6,
        title: 'Origami Fold',
        reactCode: `import React from 'react';
import './OrigamiFold.css';

function OrigamiFold() {
return (
    <div className="origami">
    <div className="origami-box origami-box1"></div>
    <div className="origami-box origami-box2"></div>
    <div className="origami-box origami-box3"></div>
    <div className="origami-box origami-box4"></div>
    <div className="origami-content">
    </div>
    </div>
);
}

export default OrigamiFold;`,
        cssCode: `.origami {
    margin: 100px auto;
    width: 160px;
    height: 160px;
    position: relative;
    perspective: 800px;
}

.origami-box {
    width: 80px;
    height: 80px;
    position: absolute;
    transition: transform 0.6s ease;
    backface-visibility: hidden;
    border: 1px solid #333;
    box-sizing: border-box;
}

.origami-box1 {
    top: 0;
    left: 0;
    background: #e74c3c;
    transform-origin: right bottom;
}

.origami-box2 {
    top: 0;
    left: 80px;
    background: #3498db;
    transform-origin: left bottom;
}

.origami-box3 {
    top: 80px;
    left: 0;
    background: #27ae60;
    transform-origin: right top;
}

.origami-box4 {
    top: 80px;
    left: 80px;
    background: #f1c40f;
    transform-origin: left top;
}

.origami:hover .origami-box1 {
    transform: rotateX(-90deg);
}

.origami:hover .origami-box2 {
    transform: rotateY(90deg);
}

.origami:hover .origami-box3 {
    transform: rotateY(-90deg);
}

.origami:hover .origami-box4 {
    transform: rotateX(90deg);
}

.origami-content {
    position: absolute;
    top: 85px;
    left: 5px;
    width: 150px;
    color: #fff;
    font-size: 12px;
    font-family: Arial, sans-serif;
    pointer-events: none;
    user-select: none;
    text-align: center;
    z-index: 10;
}`,
        preview: <OrigamiFold />,
    },
    {
        id: 7,
        title: 'Rain Card',
        reactCode: `import React, { useEffect } from 'react';
import './RainCard.css';

const RainCard = () => {
    useEffect(() => {
        const makeItRain = () => {
        const frontRow = document.querySelector('.rain.front-row');
        const backRow = document.querySelector('.rain.back-row');
        if (!frontRow || !backRow) return;

        frontRow.innerHTML = '';
        backRow.innerHTML = '';

        let increment = 0;
        let drops = '';
        let backDrops = '';

        while (increment < 100) {
            const randoHundo = Math.floor(Math.random() * 98 + 1);
            const randoFiver = Math.floor(Math.random() * 4 + 2);
            increment += randoFiver;

            const drop = \`
            <div class="drop" style="left: \${increment}%; bottom: \${randoFiver * 2 - 1 + 100}%; animation-delay: 0.\${randoHundo}s; animation-duration: 0.5\${randoHundo}s;">
                <div class="stem" style="animation-delay: 0.\${randoHundo}s; animation-duration: 0.5\${randoHundo}s;"></div>
            </div>
            \`;

            const backDrop = \`
            <div class="drop" style="right: \${increment}%; bottom: \${randoFiver * 2 - 1 + 100}%; animation-delay: 0.\${randoHundo}s; animation-duration: 0.5\${randoHundo}s;">
                <div class="stem" style="animation-delay: 0.\${randoHundo}s; animation-duration: 0.5\${randoHundo}s;"></div>
            </div>
            \`;

            drops += drop;
            backDrops += backDrop;
        }

        frontRow.innerHTML = drops;
        backRow.innerHTML = backDrops;
        };

        makeItRain();
    }, []);

    return (
        <div className="rain-container">
        <div className="rain-card">
            <div className="rain front-row"></div>
            <div className="rain back-row"></div>
        </div>
        </div>
    );
};

export default RainCard;`,
        cssCode: `.rain-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.rain-card {
    position: relative;
    width: 170px;
    height: 220px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    overflow: hidden;
}

.rain {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.rain.back-row {
    opacity: 0.4;
    z-index: 1;
}

.rain.front-row {
    z-index: 2;
}

.drop {
    position: absolute;
    bottom: 100%;
    width: 15px;
    height: 120px;
    animation: drop 0.5s linear infinite;
}

.stem {
    width: 1px;
    height: 60%;
    margin-left: 7px;
    background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.3));
    animation: stem 0.5s linear infinite;
}

@keyframes drop {
    0% { transform: translateY(0vh); }
    75% { transform: translateY(90vh); }
    100% { transform: translateY(90vh); }
}

@keyframes stem {
    0%, 65% { opacity: 1; }
    75%, 100% { opacity: 0; }
}`,
        preview: <RainCard />
    }
    ,
    {
        id: 8,
        title: 'Aurora Glow',
        reactCode: `import React from 'react';
function AuroraGlow() {
    return <div className="aurora-glow">Hover Me</div>;
}
export default AuroraGlow;`,
        cssCode: `.aurora-glow {
    color: white;
    padding: 40px;
    text-align: center;
    border-radius: 12px;
    background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
    background-size: 200% 200%;
    animation: aurora 6s ease infinite;
}
@keyframes aurora {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}`,
        preview: <AuroraGlow />,
    },
    {
        id: 9,
        title: 'Dual Glide',
        reactCode: `import React from 'react';
import './TextUnderline.css';

const TextUnderline = () => {
    return (
        <div className="ui-hover">
            Hover me – UI Crate
        </div>
    );
};

export default TextUnderline;`,
        cssCode: `@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@500&display=swap');

.ui-hover {
    font-size: 2.5rem;
    color: white;
    position: relative;
    display: inline-block;
    letter-spacing: 1px;
    cursor: pointer;
    font-family: 'Exo 2', sans-serif;
}

.ui-hover::after,
.ui-hover::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #38bdf8, #2563eb);
    transform: scaleX(0);
    transition: transform 0.4s ease;
}

.ui-hover::after {
    bottom: -6px;
    left: 0;
    transform-origin: right;
}

.ui-hover::before {
    top: -6px;
    left: 0;
    transform-origin: left;
}

.ui-hover:hover::after,
.ui-hover:hover::before {
    transform: scaleX(1);
}
`,
        preview: <TextUnderline />,
    },
    {
        id: 10,
        title: 'Neuro-Glitch',
        reactCode: `import React, { useEffect, useRef } from 'react';
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
        el.style.setProperty('--drag-x', \`\${offsetX}px\`);
        el.style.setProperty('--drag-y', \`\${offsetY}px\`);
        };

        const reset = () => {
        el.style.setProperty('--drag-x', \`0px\`);
        el.style.setProperty('--drag-y', \`0px\`);
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

export default GlitchCard;`,
        cssCode: `@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@500&display=swap');

.glitch-wrapper {
    width: 220px;
    height: 220px;
    background-color: transparent;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
}

.glitch-text {
    font-size: 1.6rem;
    font-family: 'Exo 2', sans-serif;
    font-weight: 500;
    color: white;
    position: relative;
    z-index: 1;
    --drag-x: 0px;
    --drag-y: 0px;
}

.glitch-text::before,
.glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    pointer-events: none;
    transition: transform 0.2s ease;
}

.glitch-text::before {
    color: #ff005e;
    transform: translate(calc(var(--drag-x) * -1), calc(var(--drag-y) * -1));
    z-index: 2;
}

.glitch-text::after {
    color: #00d4ff;
    transform: translate(var(--drag-x), var(--drag-y));
    z-index: 2;
}
`,
        preview: <GlitchCard />,
    },
    {
        id: 11,
        title: 'Mind Ripple',
        reactCode: `import React from 'react';
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
`,
        cssCode: `.ripple-container {
    width: 180px;
    height: 180px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
}

.ripple-core {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #f8ae38;
    box-shadow: 0 0 20px rgba(248, 194, 56, 0.6);
    z-index: 2;
    animation: pulse-core 2s infinite ease-in-out;
}

.ripple-circle {
    position: absolute;
    width: 14px;
    height: 14px;
    border: 2px solid #f89838;
    border-radius: 50%;
    transform: scale(1);
    opacity: 0.7;
    animation: ripple-wave 2.5s infinite ease-out;
}

.ripple-delay-1 {
    animation-delay: 0s;
}
.ripple-delay-2 {
    animation-delay: 0.8s;
}
.ripple-delay-3 {
    animation-delay: 1.6s;
}

@keyframes pulse-core {
    0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 20px rgba(248, 200, 56, 0.6);
    }
    50% {
        transform: scale(1.2);
        box-shadow: 0 0 30px rgb(255, 182, 26);
    }
    }

@keyframes ripple-wave {
    0% {
        transform: scale(1);
        opacity: 0.6;
    }
    100% {
        transform: scale(8);
        opacity: 0;
    }
}
`,
        preview: <MindRipple />,
    },
    {
        id: 12,
        title: 'Pulse Grid',
        reactCode: `import React, { useEffect, useRef } from 'react';
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
        dot.style.transform = \`scale(\${scale})\`;
        dot.style.opacity = \`\${0.4 + (1 - dist / maxDist) * 0.6}\`;
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

export default PulseGrid;`,
        cssCode: `.pulse-card {
    width: 260px;
    height: 340px;
    background: transparent;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
}

.pulse-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    gap: 12px;
}

.grid-dot {
    width: 8px;
    height: 8px;
    background-color: #f83838;
    border-radius: 50%;
    opacity: 0.2;
    transform: scale(1);
    transition: transform 0.2s ease, opacity 0.2s ease;
    pointer-events: none;
}
`,
        preview: <PulseGrid />,
    },
    {
        id: 13,
        title: 'Heart Beat',
        reactCode: `import React from 'react';
import './HeartBeatECG.css';

const HeartBeatECG = () => (
    <div className="heartbeat-ecg-container">
    <svg
        className="heartbeat-ecg-svg"
        viewBox="0 0 60 50"
        width="100"
        height="84"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        className="heartbeat-ecg-heart"
        d="M30 39.7l-.6-.5C16.5 28.7 13 25 13 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM22 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L30 17.1l-1.1-1.3C27.4 14.1 25.5 12 22 12z"
        fill="#fa4256"
        />
        <polyline
        className="heartbeat-ecg-line"
        points="2,28 10,28 15,23 22,42 30,12 38,42 45,18 50,28 58,28"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinejoin="round"
        />
    </svg>
    </div>
);

export default HeartBeatECG;`,
        cssCode: `.heartbeat-ecg-container {
    width: 140px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.heartbeat-ecg-svg {
    width: 140px;
    height: 120px;
}

.heartbeat-ecg-heart {
    animation: heartBeatAnim 1.08s infinite;
    transform-origin: 30px 32px;
}

@keyframes heartBeatAnim {
    0%, 100% { transform: scale(1); }
    20% { transform: scale(1.08); }
    35% { transform: scale(1.16); }
    70% { transform: scale(0.96);}
    85% { transform: scale(1.08);}
}

.heartbeat-ecg-line {
    stroke-dasharray: 200; /* increased for smoothness */
    stroke-dashoffset: 200;
    animation: ecgAnim 1.08s linear infinite;
}

@keyframes ecgAnim {
    0%   { stroke-dashoffset: 200; }
    55%  { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -50; }
}`,
        preview: <HeartBeatECG />,
    },
    {
        id: 14,
        title: 'Spinny Loader',
        reactCode: `import React from "react";
import "./SpinningCircles.css";

const COUNT = 16;
const SIZE = "300px";
const COLOR = "#fff";
const SPEED = 12;

function getCircleStyle(n) {
    const stepPx = \`calc(\${SIZE} / \${COUNT})\`;
    const sizePx = \`calc(\${SIZE} - (\${stepPx} * \${n}))\`;
    const offsetPx = \`calc((\${stepPx} * \${n}) / 2)\`;
    const duration = SPEED / (n + 1);
    return {
        position: "absolute",
        background: "transparent",
        border: \`2px solid \${COLOR}\`,
        borderRadius: "50%",
        left: offsetPx,
        top: offsetPx,
        width: sizePx,
        height: sizePx,
        animation: \`spin \${duration}s infinite linear\`,
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
                className={\`circle\${n % 2 === 0 ? " even" : ""}\`}
                data-index={n}
                style={getCircleStyle(n)}
            />
        ))}
    </div>
);

export default SpinningCircles;`,
        cssCode: `.card {
    width: 480px;
    height: 480px;
    background: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    box-shadow: 0 4px 32px rgba(0, 0, 0, 0.3);
    margin: 32px auto;
    position: relative;
}

.container {
    position: relative;
    display: block;
    width: 300px;
    height: 300px;
    max-width: 100%;
    max-height: 100%;
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateY(45deg) rotateX(45deg);
    margin: 0 auto;
    background: transparent;
}

.circle {

}

@keyframes spin {
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg);
    }
}`,
        preview: <SpinningCircles />,
    }
    ,
    {
        id: 15,
        title: 'Star Field Night',
        reactCode: `import React, { useEffect, useRef , useState } from "react";
import "./StarFieldCard.css";

const StarFieldCard = () => {
    const canvasRef = useRef(null);
const [hovered, setHovered] = useState(false);

useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const w = canvas.width;
    const h = canvas.height;
    const centerX = w / 2;
    const centerY = h / 2;

    const starCount = 150;
    let baseSpeed = 2;

    class Star {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = (Math.random() - 0.5) * w;
        this.y = (Math.random() - 0.5) * h;
        this.z = Math.random() * w;
        this.prevX = null;
        this.prevY = null;
    }

    update(speed) {
        this.z -= speed;
        if (this.z <= 0) this.reset();
    }

    draw() {
        const sx = centerX + (this.x / this.z) * w;
        const sy = centerY + (this.y / this.z) * h;

        const dx = sx - centerX;
        const dy = sy - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 10) return;

        if (this.prevX !== null) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,255,255,0.9)";
        ctx.lineWidth = 1.5;
        ctx.moveTo(this.prevX, this.prevY);
        ctx.lineTo(sx, sy);
        ctx.stroke();
        }

        this.prevX = sx;
        this.prevY = sy;
    }
    }

    const stars = Array.from({ length: starCount }, () => new Star());

    function animate() {
    ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.fillRect(0, 0, w, h);

    const speed = hovered ? baseSpeed * 2 : baseSpeed;

    stars.forEach((star) => {
        star.update(speed);
        star.draw();
    });

    requestAnimationFrame(animate);
    }

    animate();
}, [hovered]);

return (
    <canvas
    ref={canvasRef}
    className="starfield-canvas"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    />
);
};

export default StarFieldCard;`,
        cssCode: `.starfield-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    cursor: crosshair;
}

`,
        preview: <StarFieldCard />,
    },
    {
        id: 16,
        title: 'Light Saber Fight',
        reactCode: `import React from "react";
import "./LightsaberFightCard.css";

const LightsaberFightCard = () => {
    return (
        <div className="card">
            <div id="loader">
                <div className="lightsaber ls-left ls-green"></div>
                <div className="lightsaber ls-right ls-red"></div>

                <div className="ls-particles ls-part-1"></div>
                <div className="ls-particles ls-part-2"></div>
                <div className="ls-particles ls-part-3"></div>
                <div className="ls-particles ls-part-4"></div>
                <div className="ls-particles ls-part-5"></div>
            </div>
        </div>
    );
};

export default LightsaberFightCard;`,
        cssCode: `.card {
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
}

#loader {
    width: 150px;
    height: 150px;
    position: relative;
}

.lightsaber {
    position: absolute;
    width: 10px;
    height: 30px;
    background-color: #666;
    border-radius: 2px;
    bottom: 0;
}

.lightsaber:before {
    content: '';
    position: absolute;
    width: 4px;
    height: 80px;
    left: 3px;
    top: -80px;
    border-radius: 2px;
    transform-origin: center bottom;
    transform: scaleY(0);
}

.lightsaber:after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    left: 3px;
    top: 5px;
    background-color: #fff;
    border-radius: 50%;
}

.lightsaber.ls-left {
    left: 0;
    animation: fightleft 2s ease-in-out infinite 1s;
}

.lightsaber.ls-right {
    right: 0;
    animation: fightright 2s ease-in-out infinite 1s;
}

.lightsaber.ls-green:before {
    background-color: #87c054;
    animation: showlightgreen 2s ease-in-out infinite 1s;
}

.lightsaber.ls-red:before {
    background-color: #f06363;
    animation: showlightred 2s ease-in-out infinite 1s;
}

@keyframes showlightgreen {

    0%,
    100% {
        transform: scaleY(0);
        box-shadow: 0 0 0 0 #87c054;
    }

    50% {
        transform: scaleY(1);
        box-shadow: 0 0 8px 3px #87c054;
    }
}

@keyframes showlightred {

    0%,
    100% {
        transform: scaleY(0);
        box-shadow: 0 0 0 0 #f06363;
    }

    50% {
        transform: scaleY(1);
        box-shadow: 0 0 8px 3px #f06363;
    }
}

@keyframes fightleft {

    0%,
    30% {
        transform: rotateZ(0deg);
        left: 0;
        bottom: 0;
    }

    40% {
        transform: rotateZ(45deg);
        bottom: 2px;
    }

    65% {
        transform: rotateZ(410deg);
        left: 40px;
        bottom: 15px;
    }

    95%,
    100% {
        transform: rotateZ(360deg);
        left: 0;
        bottom: 0;
    }
}

@keyframes fightright {

    0%,
    30% {
        transform: rotateZ(0deg);
        right: 0;
        bottom: 0;
    }

    45% {
        transform: rotateZ(-45deg);
        bottom: 2px;
    }

    68% {
        transform: rotateZ(-410deg);
        right: 35px;
        bottom: 15px;
    }

    95%,
    100% {
        transform: rotateZ(-360deg);
        right: 0;
        bottom: 0;
    }
}

.ls-particles {
    position: absolute;
    left: 70px;
    top: 40px;
    width: 3px;
    height: 6px;
    background-color: transparent;
    opacity: 0;
}

.ls-part-1 {
    animation: particles1 2s ease-out infinite 1s;
}

.ls-part-2 {
    animation: particles2 2s ease-out infinite 1s;
}

.ls-part-3 {
    animation: particles3 2s ease-out infinite 1s;
}

.ls-part-4 {
    animation: particles4 2s ease-out infinite 1s;
}

.ls-part-5 {
    animation: particles5 2s ease-out infinite 1s;
}

/* ================== Spark Particle Burst Animations ================== */
@keyframes particles1 {

    0%,
    60% {
        opacity: 0;
        transform: rotateZ(35deg) translateY(0);
    }

    64% {
        opacity: 1;
        background-color: #fff;
    }

    100% {
        opacity: 0;
        transform: rotateZ(35deg) translateY(-50px);
    }
}

@keyframes particles2 {

    0%,
    60% {
        opacity: 0;
        transform: rotateZ(-65deg) translateY(0);
    }

    64% {
        opacity: 1;
        background-color: #fff;
    }

    100% {
        opacity: 0;
        transform: rotateZ(-65deg) translateY(-60px);
    }
}

@keyframes particles3 {

    0%,
    60% {
        opacity: 0;
        transform: rotateZ(-75deg) translateY(0);
    }

    64% {
        opacity: 1;
        background-color: #fff;
    }

    100% {
        opacity: 0;
        transform: rotateZ(-75deg) translateY(-55px);
    }
}

@keyframes particles4 {

    0%,
    60% {
        opacity: 0;
        transform: rotateZ(-25deg) translateY(0);
    }

    64% {
        opacity: 1;
        background-color: #fff;
    }

    100% {
        opacity: 0;
        transform: rotateZ(-25deg) translateY(-45px);
    }
}

@keyframes particles5 {

    0%,
    60% {
        opacity: 0;
        transform: rotateZ(65deg) translateY(0);
    }

    64% {
        opacity: 1;
        background-color: #fff;
    }

    100% {
        opacity: 0;
        transform: rotateZ(65deg) translateY(-55px);
    }
}`,
        preview: <LightsaberFightCard />,
    },
    {
        id: 17,
        title: 'Light Saber Fight',
        reactCode: `import React from "react";
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
        `,
        cssCode: `.button {
    position: relative;
    cursor: pointer;
    border: none;
    width: 80px;
    height: 40px;
    background: #111;
    color: #fff;
}

.text {
    position: relative;
    z-index: 1;
}

.button::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0;
    background: radial-gradient(circle at 50% 50%,
        #0000 0,
        #0000 20%,
        #111111aa 50%),
        radial-gradient(ellipse 100% 100%, #fff, #fff0);
    background-size:
        3px 3px,
        auto auto;
    transition: 0.3s;
}

.button:hover::before {
    opacity: 0.3;
}

.a {
    pointer-events: none;
    position: absolute;
    --w: 2px;
    --t: -40px;
    --s: calc(var(--t) * -1);
    --e: calc(100% + var(--t));
    --g: #fff0, #fff3 var(--s), #fffa var(--s), #fff, #fffa var(--e),
        #fff3 var(--e), #fff0;
}

.a::before {
    content: "";
    position: absolute;
    inset: 0;
    background: inherit;
    filter: blur(4px) url(#unopaq);
    z-index: -2;
}

.a::after {
    content: "";
    position: absolute;
    inset: 0;
    background: inherit;
    filter: blur(10px) url(#unopaq);
    opacity: 0;
    z-index: -2;
    transition: 0.3s;
}

.button:hover .a::after {
    opacity: 1;
}

.l {
    left: -2px;
}

.r {
    right: -2px;
}

.l,
.r {
    background: linear-gradient(var(--g));
    top: var(--t);
    bottom: var(--t);
    width: var(--w);
}

.t {
    top: -2px;
}

.b {
    bottom: -2px;
}

.t,
.b {
    background: linear-gradient(90deg, var(--g));
    left: var(--t);
    right: var(--t);
    height: var(--w);
}

.backdrop {
    position: absolute;
    inset: -9900%;
    background: radial-gradient(circle at 50% 50%,
        #0000 0,
        #0000 20%,
        #111111aa 50%);
    background-size: 3px 3px;
    z-index: -1;
}`,
        preview: <GlowingButton />,
    },
    {
        id: 17,
        title: 'Light Saber Fight',
        reactCode: `import React from "react";
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
`,
        cssCode: `.weather-card {
    width: 250px;
    aspect-ratio: 16 / 9;
    background-color: transparent;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px auto;
}

.weather-card-inner {
    background-color: transparent;
    border-radius: 12px;
    width: 90%;
    padding: 1.5rem 1rem 1rem;
    color: #f3f4f6;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.weather-header {
    text-align: center;
    margin-bottom: 10px;
}

.weather-city {
    color: #ffd400;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
}

.weather-date {
    font-size: 0.9rem;
    color: #a1a1aa;
    margin: 0;
}

.weather-icon {
    width: 6rem;
    height: 6rem;
    fill: #ffd400;
    margin: 1rem 0 0.3rem 0;
    animation: weather-spin 5s linear infinite;
}

@keyframes weather-spin {
    to {
        transform: rotate(360deg);
    }
}

.pulse-fast {
    fill: #ffd400;
    opacity: 0.7;
    animation: weather-pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.pulse-slow {
    fill: #ffd400;
    opacity: 0.7;
    animation: weather-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes weather-pulse {
    0%, 100% {
        opacity: 0.45;
    }
    50% {
        opacity: 1;
    }
}

.weather-temp {
    font-size: 1.6rem;
    font-weight: 600;
    color: #ffd400;
    margin: 8px 0 4px;
}

.temp-divider {
    margin: 0 6px;
    font-weight: 400;
    color: #f3f4f6;
}

.weather-desc {
    font-size: 1rem;
    color: #a1a1aa;
    margin: 0;
}
`,
        preview: <WeatherCard />,
    },
    {
        id: 18,
        title: 'Light Saber Fight',
        reactCode: `import React from "react";
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

export default GearBox;`,
        cssCode: `@keyframes clockwise {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes counter-clockwise {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(-360deg);
    }
}

.gearbox {
    background: transparent;
    height: 150px;
    width: 200px;
    position: relative;
    border: none;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
}

.gear {
    position: absolute;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.gear.one {
    transform: translate(calc(-50% - 40px), calc(-50% - 10px));
}

.gear.two {
    transform: translate(calc(-50% + 30px), calc(-50% + 30px));
}

.gear:after {
    content: "";
    position: absolute;
    height: 36px;
    width: 36px;
    border-radius: 36px;
    background: #111;
    top: 50%;
    left: 50%;
    margin-left: -18px;
    margin-top: -18px;
    z-index: 3;
    box-shadow:
        0px 0px 10px rgba(255, 255, 255, 0.1),
        inset 0px 0px 10px rgba(0, 0, 0, 0.1),
        inset 0px 2px 0px 0px #090909;
}

.gear-inner {
    position: relative;
    height: 100%;
    width: 100%;
    background: #555;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.gear.one .gear-inner {
    animation: counter-clockwise 3s infinite linear;
}

.gear.two .gear-inner {
    animation: clockwise 3s infinite linear;
}

.gear-inner .bar {
    background: #555;
    height: 16px;
    width: 76px;
    position: absolute;
    left: 50%;
    margin-left: -38px;
    top: 50%;
    margin-top: -8px;
    border-radius: 2px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.gear-inner .bar:nth-child(2) {
    transform: rotate(60deg);
}

.gear-inner .bar:nth-child(3) {
    transform: rotate(120deg);
}`,
        preview: <GearBox />,
    },
];

function Gallery() {
    const navigate = useNavigate();

    return (
        <div className="gallery-container">
            <div className="card-grid">
                {cardData.map((card) => (
                    <div key={card.id} className="card-wrapper">
                        <div className="custom-card" onClick={() => navigate(`/gallery/${card.id}`)}>
                            <div className="card-inner">
                                {card.preview}
                            </div>
                        </div>
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-desc">Click to view code</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
export { cardData };
