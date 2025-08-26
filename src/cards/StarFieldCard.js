import React, { useEffect, useRef , useState } from "react";
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

        // circular mask (10px radius)
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
      // lower alpha = longer tails
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

export default StarFieldCard;
