import { useEffect, useRef } from "react";

const ACCENT = "61,214,140";

export default function AmbientBackground() {
  const cvRef = useRef(null);

  useEffect(() => {
    const cv = cvRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");

    let raf;
    let t = 0;
    let particles = [];

    const mkParticles = () =>
      Array.from({ length: 75 }, () => ({
        x:  Math.random() * cv.width,
        y:  Math.random() * cv.height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r:  Math.random() * 1.4 + 0.4,
        op: Math.random() * 0.35 + 0.08,
      }));

    const resize = () => {
      cv.width  = window.innerWidth;
      cv.height = window.innerHeight;
      particles = mkParticles();
    };
    resize();
    window.addEventListener("resize", resize);

    const waves = [
      { amp: 45, freq: 0.007, phOff: 0,   yFrac: 0.80, op: 0.10 },
      { amp: 28, freq: 0.011, phOff: 1.4, yFrac: 0.87, op: 0.07 },
      { amp: 55, freq: 0.005, phOff: 2.8, yFrac: 0.74, op: 0.05 },
    ];

    const loop = () => {
      raf = requestAnimationFrame(loop);
      t += 0.004;
      ctx.clearRect(0, 0, cv.width, cv.height);

      // Floating particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = cv.width;
        if (p.x > cv.width) p.x = 0;
        if (p.y < 0) p.y = cv.height;
        if (p.y > cv.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT},${p.op})`;
        ctx.fill();
      }

      // Animated wave lines at the bottom
      for (const w of waves) {
        const yBase = cv.height * w.yFrac;

        ctx.beginPath();
        for (let x = 0; x <= cv.width; x += 5) {
          const y = yBase + Math.sin(x * w.freq + t + w.phOff) * w.amp;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${ACCENT},${w.op})`;
        ctx.lineWidth   = 1.2;
        ctx.stroke();

        // Bright dots along each wave
        for (let x = 0; x <= cv.width; x += 48) {
          const y = yBase + Math.sin(x * w.freq + t + w.phOff) * w.amp;
          ctx.beginPath();
          ctx.arc(x, y, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${ACCENT},${w.op * 2.8})`;
          ctx.fill();
        }
      }
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={cvRef}
      style={{
        position:      "fixed",
        top:           0,
        left:          0,
        width:         "100%",
        height:        "100%",
        pointerEvents: "none",
        zIndex:        0,
      }}
    />
  );
}
