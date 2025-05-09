import React, { useEffect, useRef } from "react";

const Rain = ({ containerRef }) => {
  const canvasRef = useRef(null);
  const drops = useRef([]);
  const xTiltRef = useRef(0); // useRef instead of useState

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");

    const setSize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    setSize();

    const handleMouseMove = (e) => {
      const screenCenter = window.innerWidth / 2;
      const rainX = e.clientX - screenCenter;
      const normalizedX = (rainX / screenCenter) * 5; // range -5 to +5
      xTiltRef.current = normalizedX;
    };

    window.addEventListener("mousemove", handleMouseMove);

    class Drop {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * (canvas.width + 20000) - 10000;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 20 + 10;
        this.speed = Math.random() * 4 + 4;
        this.opacity = Math.random() * 0.2 + 0.2;
      }

      fall() {
        const tilt = xTiltRef.current;
        this.y += this.speed;
        this.x += tilt;
        if (this.y > canvas.height) {
          this.y = -this.length;
          this.x = Math.random() * (canvas.width + 20000) - 10000;
        }
      }

      draw() {
        const tilt = xTiltRef.current;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + tilt, this.y + this.length);
        ctx.strokeStyle = `rgba(100, 100, 100, ${this.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }

    // Create drops once
    drops.current = Array.from({ length: 5000 }, () => new Drop());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drops.current.forEach((drop) => {
        drop.fall();
        drop.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    const resizeObserver = new ResizeObserver(setSize);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default Rain;
