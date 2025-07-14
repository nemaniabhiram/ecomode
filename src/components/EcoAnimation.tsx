import React, { useEffect, useState } from 'react';
import { useEcoMode } from '../contexts/EcoModeContext';

interface Leaf {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  speed: number;
  swaySpeed: number;
  swayAmount: number;
  opacity: number;
  color: string;
  rotationSpeed: number;
  initialX: number;
  time: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

const leafColors = [
  'text-green-500',
  'text-green-600',
  'text-emerald-500',
  'text-emerald-600',
  'text-teal-500',
  'text-green-400',
  'text-lime-500',
  'text-emerald-400',
];

const createLeaf = (id: number): Leaf => ({
  id,
  x: Math.random() * 100,
  y: -15,
  rotation: Math.random() * 360,
  scale: 0.6 + Math.random() * 0.8,
  speed: 0.15 + Math.random() * 0.3, // slower fall
  swaySpeed: 0.015 + Math.random() * 0.015,
  swayAmount: 8 + Math.random() * 15,
  opacity: 0.8 + Math.random() * 0.2,
  color: leafColors[Math.floor(Math.random() * leafColors.length)],
  rotationSpeed: 0.5 + Math.random() * 2,
  initialX: Math.random() * 100,
  time: 0,
});

const createParticle = (x: number, y: number): Particle => ({
  id: Date.now() + Math.random(),
  x,
  y,
  vx: (Math.random() - 0.5) * 4,
  vy: (Math.random() - 0.5) * 4,
  life: 60,
  maxLife: 60,
  color: leafColors[Math.floor(Math.random() * leafColors.length)],
  size: 2 + Math.random() * 4,
});

/**
 * EcoAnimation renders a full-screen overlay of falling leaves and sparkle
 * particles when Eco Mode is first enabled. The animation automatically
 * stops after the leaves/particles fade out, keeping runtime costs low.
 */
const EcoAnimation: React.FC = () => {
  const { isEcoMode } = useEcoMode();
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [animationId, setAnimationId] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);

  // Animation step
  const tick = () => {
    setLeaves((prev) =>
      prev
        .map((leaf) => {
          const newTime = leaf.time + 0.016;
          const swayOffset = Math.sin(newTime * leaf.swaySpeed) * leaf.swayAmount;
          const verticalSway = Math.cos(newTime * leaf.swaySpeed * 0.7) * 2;
          return {
            ...leaf,
            y: leaf.y + leaf.speed + verticalSway * 0.1,
            x: leaf.initialX + swayOffset,
            rotation: leaf.rotation + leaf.rotationSpeed,
            opacity: leaf.y > 85 ? Math.max(0, leaf.opacity - 0.015) : leaf.opacity,
            time: newTime,
          };
        })
        .filter((leaf) => leaf.y < 130 && leaf.opacity > 0)
    );

    setParticles((prev) =>
      prev
        .map((p) => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vx: p.vx * 0.98,
          vy: p.vy * 0.98,
          life: p.life - 1,
        }))
        .filter((p) => p.life > 0)
    );

    // stop if nothing left after 8s
    if (startTime && Date.now() - startTime > 8000 && leaves.length === 0 && particles.length === 0) {
      if (animationId) cancelAnimationFrame(animationId);
      setAnimationId(null);
      setLeaves([]); // clear any remaining leaves
      setParticles([]); // clear any remaining particles
      return;
    }

    setAnimationId(requestAnimationFrame(tick));
  };

  // Trigger on eco mode enable
  useEffect(() => {
    if (isEcoMode) {
      // Always reset before starting a new burst
      if (animationId) cancelAnimationFrame(animationId);
      setLeaves([]);
      setParticles([]);
      // fresh burst
      const initialLeaves = Array.from({ length: 25 }, (_, i) => ({
        ...createLeaf(i),
        y: -20 - Math.random() * 30,
        x: 20 + Math.random() * 60,
      }));
      setLeaves(initialLeaves);
      const initialParticles = Array.from({ length: 15 }, () =>
        createParticle(50 + (Math.random() - 0.5) * 30, 50 + (Math.random() - 0.5) * 20)
      );
      setParticles(initialParticles);
      setStartTime(Date.now());

      const id = requestAnimationFrame(tick);
      setAnimationId(id);
    }
    // cleanup when eco mode off
    else {
      if (animationId) cancelAnimationFrame(animationId);
      setAnimationId(null);
      setLeaves([]);
      setParticles([]);
    }
    // cleanup on unmount
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEcoMode]);

  if (!isEcoMode && leaves.length === 0 && particles.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-50">
      {/* Sparkles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.life / p.maxLife,
            transform: `scale(${p.size / 6})`,
          }}
        >
          <div className={`w-2 h-2 ${p.color} animate-ping`}></div>
        </div>
      ))}

      {/* Leaves */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            transform: `rotate(${leaf.rotation}deg) scale(${leaf.scale})`,
            opacity: leaf.opacity,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
          }}
        >
          <div className={`w-6 h-6 ${leaf.color}`}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EcoAnimation;
