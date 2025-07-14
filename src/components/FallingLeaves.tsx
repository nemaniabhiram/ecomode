import React from 'react';
import { useEcoMode } from '../contexts/EcoModeContext';
import { Leaf } from 'lucide-react';

interface FallingLeavesProps {
  /** Amount of leaves to render */
  count?: number;
}

/**
 * Animated falling leaves that automatically inherit the active theme colours.
 *
 * It relies solely on CSS custom properties (e.g. `--color-accent`, `--color-primary`)
 * so when eco-mode is active the leaves immediately adopt the green palette.
 */
const FallingLeaves: React.FC<FallingLeavesProps> = ({ count = 20 }) => {
  const { isEcoMode } = useEcoMode();
  // Use different colour sets per theme so the switch is obvious
  const colourClasses = isEcoMode
    ? ['text-primary', 'text-primary/80', 'text-primary/60']
    : ['text-accent', 'text-primary', 'text-secondary'];


  /**
   * Build an array the length of `count` so we can map over it to render leaves.
   */
  const leaves = Array.from({ length: count });

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
      {leaves.map((_, i) => {
        // Randomise horizontal start position, delay & duration for a more natural feel
        const left = Math.random() * 100; // 0-100 viewport-width
        const delay = Math.random() * 10; // seconds
        const duration = 8 + Math.random() * 12; // 8-20 seconds
        const colourClass = colourClasses[i % colourClasses.length];

        return (
          <Leaf
            key={i}
            className={`leaf-anim w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 ${colourClass}`}
            style={{
              left: `${left}vw`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              
            }}
          />
        );
      })}
    </div>
  );
};

export default FallingLeaves;
