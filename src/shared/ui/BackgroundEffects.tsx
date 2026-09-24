import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

interface Orb {
  className: string;
  background: string;
  filter: string;
  animate: { x: [number, number, number]; y: [number, number, number] };
  duration: number;
}

const CONNECTION_DISTANCE = 120;
const ORBS: Orb[] = [
  {
    className: 'absolute top-1/4 -left-32 w-96 h-96 rounded-full',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
    filter: 'blur(60px)',
    animate: { x: [0, 50, 0], y: [0, -30, 0] },
    duration: 15,
  },
  {
    className: 'absolute top-1/2 right-0 w-80 h-80 rounded-full',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
    filter: 'blur(50px)',
    animate: { x: [0, -40, 0], y: [0, 40, 0] },
    duration: 12,
  },
  {
    className: 'absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full',
    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
    filter: 'blur(50px)',
    animate: { x: [0, 30, 0], y: [0, -50, 0] },
    duration: 18,
  },
];

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    particlesRef.current = Array.from(
      { length: Math.min(30, Math.floor(window.innerWidth / 50)) },
      () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
      }),
    );

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particlesRef.current) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = 'rgba(99, 102, 241, 0.4)';
        context.fill();
      }

      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const { x: ax, y: ay } = particles[i];
          const { x: bx, y: by } = particles[j];
          const distance = Math.hypot(ax - bx, ay - by);

          if (distance < CONNECTION_DISTANCE) {
            context.beginPath();
            context.moveTo(ax, ay);
            context.lineTo(bx, by);
            context.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - distance / CONNECTION_DISTANCE)})`;
            context.lineWidth = 0.5;
            context.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-grid opacity-50" />

      {ORBS.map((orb) => (
        <motion.div
          key={orb.className}
          className={orb.className}
          style={{ background: orb.background, filter: orb.filter }}
          animate={orb.animate}
          transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.6 }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(5, 5, 7, 0.4) 100%)',
        }}
      />
    </div>
  );
}