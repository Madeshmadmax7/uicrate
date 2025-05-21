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
    preview: <CutoutCard/>
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
    preview: <CornerPeel/>,
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
    preview: <CrackCard/>,
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
    preview: <NeonTrail/>,
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
    preview: <OrigamiFold/>,
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
    preview: <AuroraGlow/>,
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
