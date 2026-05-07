import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import Vector7 from '../imports/Vector7';
import Vector8 from '../imports/Vector8';
import Vector9 from '../imports/Vector9';

interface ZAnimation {
  id: number;
  x: number;
  rotation: number;
  delay: number;
  component: 'z1' | 'z2' | 'z3';
}

export function SleepingZs() {
  const [zs, setZs] = useState<ZAnimation[]>([]);

  useEffect(() => {
    // Generate initial Zs
    const initialZs: ZAnimation[] = [];
    for (let i = 0; i < 3; i++) {
      initialZs.push({
        id: Date.now() + i,
        x: 10 + Math.random() * 12, // Position them to the left of Gudetama
        rotation: -30 + Math.random() * 60, // Random rotation between -30 and 30 degrees
        delay: i * 0.8,
        component: ['z1', 'z2', 'z3'][Math.floor(Math.random() * 3)] as 'z1' | 'z2' | 'z3',
      });
    }
    setZs(initialZs);

    // Add new Zs periodically
    const interval = setInterval(() => {
      setZs((prev) => {
        const newZ: ZAnimation = {
          id: Date.now(),
          x: 10 + Math.random() * 12,
          rotation: -30 + Math.random() * 60,
          delay: 0,
          component: ['z1', 'z2', 'z3'][Math.floor(Math.random() * 3)] as 'z1' | 'z2' | 'z3',
        };
        // Keep only the last 4 Zs
        return [...prev.slice(-3), newZ];
      });
    }, 2400); // New Z every 2.4 seconds

    return () => clearInterval(interval);
  }, []);

  const renderZ = (component: 'z1' | 'z2' | 'z3') => {
    switch (component) {
      case 'z1':
        return <Vector7 />;
      case 'z2':
        return <Vector8 />;
      case 'z3':
        return <Vector9 />;
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      <AnimatePresence>
        {zs.map((z) => (
          <motion.div
            key={z.id}
            className="absolute w-[14px] h-[14px]"
            style={{
              left: `${z.x}%`,
              top: '30%',
              rotate: `${z.rotation}deg`,
            }}
            initial={{ opacity: 0, y: 0, scale: 0.4 }}
            animate={{ opacity: [0, 1, 1, 0], y: -60, scale: [0.4, 0.8, 0.8, 1] }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2.5,
              delay: z.delay,
              ease: 'easeOut',
            }}
          >
            {renderZ(z.component)}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
