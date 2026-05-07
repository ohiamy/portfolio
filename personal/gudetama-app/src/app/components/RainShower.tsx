import { motion } from 'motion/react';

interface RainShowerProps {
  isActive: boolean;
}

export function RainShower({ isActive }: RainShowerProps) {
  if (!isActive) return null;

  // Generate random raindrops
  const raindrops = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 0.5 + Math.random() * 0.5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
      {raindrops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute w-0.5 h-3 bg-gradient-to-b from-blue-400 to-blue-200 rounded-full"
          style={{
            left: `${drop.x}%`,
            top: '-12px',
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, 280],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
      
      {/* Splash effects at the bottom */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`splash-${i}`}
          className="absolute bottom-4"
          style={{
            left: `${12 + i * 12}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 0.6,
            delay: i * 0.3,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        >
          <div className="w-2 h-2 rounded-full bg-blue-300/50" />
        </motion.div>
      ))}
    </div>
  );
}
