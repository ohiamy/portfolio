import { motion } from 'motion/react';
import svgPaths from '../imports/svg-ngus7tki6t';

export function Blanket() {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: '50%',
        top: 'calc(50% - 80px)',
        transform: 'translate(-50%, -50%)',
        width: '160px',
        height: '120px',
        zIndex: 10,
        overflow: 'visible',
      }}
      initial={{ opacity: 0, y: -100, scale: 0.3 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: 1,
      }}
      exit={{ 
        opacity: 0, 
        y: -100,
        scale: 0.3,
      }}
      transition={{ 
        type: 'spring',
        stiffness: 300,
        damping: 15,
        duration: 0.6,
      }}
    >
      <motion.svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 136 89"
        style={{ overflow: 'visible' }}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <g clipPath="url(#clip0_128_14)" style={{ clipPath: 'none' }}>
          <path 
            d={svgPaths.p1c926200} 
            fill="#DB7664" 
            stroke="black" 
            strokeWidth="4" 
          />
          <path 
            d={svgPaths.p1b247e00} 
            fill="#F7C6C5" 
          />
          <path 
            d={svgPaths.p33b27e70} 
            fill="#F7C6C5" 
          />
          <path 
            d={svgPaths.p14e0a0c0} 
            stroke="black" 
            strokeLinecap="round" 
            strokeWidth="4" 
          />
        </g>
        <defs>
          <clipPath id="clip0_128_14">
            <rect fill="white" height="89" width="136" />
          </clipPath>
        </defs>
      </motion.svg>
    </motion.div>
  );
}