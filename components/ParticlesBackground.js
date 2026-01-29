import { useCallback, useEffect, useRef } from "react";

const ICONS = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    alt: "HTML5",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    alt: "CSS3",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    alt: "Next.js",
  },
];

export default function ParticlesBackground() {
  const canvasRef = useRef(null);
  const iconImages = useRef([]);
  const animationRef = useRef();

  // Preload icons
  useEffect(() => {
    iconImages.current = ICONS.map((icon) => {
      const img = new window.Image();
      img.src = icon.src;
      img.alt = icon.alt;
      return img;
    });
  }, []);

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    const numParticles = 12; // Minimal count
    const particles = [];
    for (let i = 0; i < numParticles; i++) {
      const iconIdx = Math.floor(Math.random() * ICONS.length);
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 18 + 18, // 18-36px, smaller
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        iconIdx,
        angle: Math.random() * Math.PI * 2,
        dAngle: (Math.random() - 0.5) * 0.008,
      });
    }
    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles) {
        const img = iconImages.current[p.iconIdx];
        if (img && img.complete) {
          ctx.save();
          ctx.globalAlpha = 0.18; // Lower opacity for minimalism
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          ctx.drawImage(img, -p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
        p.x += p.dx;
        p.y += p.dy;
        p.angle += p.dAngle;
        if (p.x < -p.size) p.x = width + p.size;
        if (p.x > width + p.size) p.x = -p.size;
        if (p.y < -p.size) p.y = height + p.size;
        if (p.y > height + p.size) p.y = -p.size;
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  useEffect(() => {
    drawParticles();
    window.addEventListener("resize", drawParticles);
    return () => {
      window.removeEventListener("resize", drawParticles);
      cancelAnimationFrame(animationRef.current);
    };
  }, [drawParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh" }}
      aria-hidden="true"
    />
  );
}
