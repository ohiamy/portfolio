import { motion } from 'motion/react';
import Vector10 from '../imports/Vector10';
import Vector11 from '../imports/Vector11';
import Vector12 from '../imports/Vector12';

export function DecorativeStars() {
  // Define star positions and types - scattered all over the background
  const stars = [
    // Top area - more dense
    { type: 'star', x: '8%', y: '8%', size: 28, rotation: -15 },
    { type: 'plus1', x: '18%', y: '5%', size: 14, rotation: 0 },
    { type: 'plus2', x: '28%', y: '10%', size: 12, rotation: 25 },
    { type: 'star', x: '40%', y: '7%', size: 20, rotation: 25 },
    { type: 'plus1', x: '50%', y: '4%', size: 16, rotation: 15 },
    { type: 'plus2', x: '60%', y: '9%', size: 13, rotation: -10 },
    { type: 'star', x: '72%', y: '6%', size: 24, rotation: 10 },
    { type: 'plus1', x: '82%', y: '9%', size: 16, rotation: 45 },
    { type: 'plus2', x: '92%', y: '12%', size: 13, rotation: 15 },
    { type: 'plus1', x: '12%', y: '12%', size: 12, rotation: 20 },
    { type: 'star', x: '33%', y: '3%', size: 18, rotation: -25 },
    { type: 'plus2', x: '67%', y: '2%', size: 11, rotation: 35 },
    { type: 'plus1', x: '77%', y: '13%', size: 14, rotation: -5 },
    
    // Upper-middle area - around card
    { type: 'star', x: '5%', y: '20%', size: 26, rotation: -20 },
    { type: 'plus2', x: '15%', y: '22%', size: 12, rotation: 30 },
    { type: 'plus1', x: '25%', y: '18%', size: 14, rotation: 0 },
    { type: 'plus2', x: '32%', y: '24%', size: 13, rotation: 40 },
    { type: 'star', x: '40%', y: '20%', size: 22, rotation: -15 },
    { type: 'plus1', x: '48%', y: '17%', size: 15, rotation: 25 },
    { type: 'plus2', x: '55%', y: '22%', size: 11, rotation: -20 },
    { type: 'star', x: '63%', y: '19%', size: 20, rotation: 10 },
    { type: 'plus1', x: '70%', y: '24%', size: 13, rotation: 35 },
    { type: 'star', x: '75%', y: '19%', size: 22, rotation: 5 },
    { type: 'plus1', x: '85%', y: '23%', size: 15, rotation: 45 },
    { type: 'plus2', x: '95%', y: '21%', size: 13, rotation: -10 },
    { type: 'star', x: '2%', y: '26%', size: 18, rotation: 15 },
    { type: 'plus1', x: '98%', y: '27%', size: 12, rotation: -30 },
    
    // Middle area - dense around card
    { type: 'plus1', x: '3%', y: '35%', size: 16, rotation: 20 },
    { type: 'star', x: '12%', y: '38%', size: 24, rotation: -25 },
    { type: 'plus2', x: '22%', y: '33%', size: 14, rotation: 0 },
    { type: 'star', x: '30%', y: '40%', size: 20, rotation: 30 },
    { type: 'plus1', x: '38%', y: '36%', size: 13, rotation: -15 },
    { type: 'plus2', x: '45%', y: '42%', size: 12, rotation: 25 },
    { type: 'star', x: '52%', y: '37%', size: 18, rotation: -5 },
    { type: 'plus1', x: '60%', y: '43%', size: 14, rotation: 20 },
    { type: 'plus2', x: '68%', y: '39%', size: 11, rotation: -25 },
    { type: 'plus1', x: '78%', y: '36%', size: 13, rotation: 35 },
    { type: 'star', x: '88%', y: '32%', size: 26, rotation: 15 },
    { type: 'plus2', x: '97%', y: '39%', size: 12, rotation: -15 },
    { type: 'plus1', x: '1%', y: '42%', size: 14, rotation: 40 },
    { type: 'star', x: '18%', y: '45%', size: 22, rotation: 10 },
    { type: 'plus2', x: '35%', y: '47%', size: 13, rotation: -10 },
    { type: 'star', x: '64%', y: '48%', size: 20, rotation: 25 },
    { type: 'plus1', x: '72%', y: '44%', size: 12, rotation: -20 },
    { type: 'plus2', x: '92%', y: '46%', size: 15, rotation: 5 },
    
    // Lower-middle area - dense
    { type: 'star', x: '6%', y: '52%', size: 22, rotation: 10 },
    { type: 'plus1', x: '16%', y: '48%', size: 14, rotation: 45 },
    { type: 'plus2', x: '24%', y: '54%', size: 15, rotation: -20 },
    { type: 'star', x: '32%', y: '50%', size: 20, rotation: 15 },
    { type: 'plus1', x: '42%', y: '56%', size: 13, rotation: -10 },
    { type: 'plus2', x: '50%', y: '52%', size: 12, rotation: 30 },
    { type: 'star', x: '58%', y: '57%', size: 18, rotation: -25 },
    { type: 'plus1', x: '66%', y: '54%', size: 14, rotation: 20 },
    { type: 'star', x: '76%', y: '50%', size: 28, rotation: -10 },
    { type: 'plus2', x: '86%', y: '53%', size: 12, rotation: 25 },
    { type: 'plus1', x: '94%', y: '51%', size: 16, rotation: 0 },
    { type: 'plus2', x: '2%', y: '58%', size: 13, rotation: 35 },
    { type: 'star', x: '10%', y: '62%', size: 24, rotation: -15 },
    { type: 'plus1', x: '28%', y: '62%', size: 12, rotation: 40 },
    { type: 'plus2', x: '48%', y: '64%', size: 14, rotation: 10 },
    { type: 'star', x: '70%', y: '62%', size: 22, rotation: -30 },
    { type: 'plus1', x: '82%', y: '60%', size: 13, rotation: 15 },
    { type: 'plus2', x: '98%', y: '63%', size: 11, rotation: -5 },
    
    // Bottom area - dense
    { type: 'plus2', x: '4%', y: '68%', size: 13, rotation: 15 },
    { type: 'star', x: '14%', y: '65%', size: 24, rotation: -15 },
    { type: 'plus1', x: '20%', y: '70%', size: 14, rotation: 40 },
    { type: 'plus2', x: '30%', y: '68%', size: 12, rotation: -25 },
    { type: 'star', x: '38%', y: '72%', size: 20, rotation: 10 },
    { type: 'plus1', x: '47%', y: '69%', size: 13, rotation: 30 },
    { type: 'plus2', x: '56%', y: '74%', size: 11, rotation: -15 },
    { type: 'star', x: '65%', y: '71%', size: 18, rotation: 25 },
    { type: 'plus1', x: '73%', y: '68%', size: 14, rotation: -20 },
    { type: 'plus1', x: '80%', y: '67%', size: 15, rotation: -25 },
    { type: 'star', x: '88%', y: '72%', size: 26, rotation: 20 },
    { type: 'plus2', x: '96%', y: '69%', size: 12, rotation: 5 },
    { type: 'star', x: '6%', y: '76%', size: 22, rotation: -10 },
    { type: 'plus1', x: '25%', y: '78%', size: 13, rotation: 35 },
    { type: 'plus2', x: '42%', y: '80%', size: 14, rotation: -5 },
    { type: 'star', x: '60%', y: '79%', size: 20, rotation: 15 },
    { type: 'plus1', x: '78%', y: '77%', size: 12, rotation: -30 },
    { type: 'plus2', x: '92%', y: '80%', size: 13, rotation: 20 },
    
    // Very bottom area - dense
    { type: 'star', x: '7%', y: '82%', size: 22, rotation: 5 },
    { type: 'plus1', x: '17%', y: '85%', size: 16, rotation: 30 },
    { type: 'plus2', x: '26%', y: '88%', size: 13, rotation: -10 },
    { type: 'star', x: '34%', y: '84%', size: 18, rotation: 20 },
    { type: 'plus1', x: '44%', y: '90%', size: 12, rotation: -25 },
    { type: 'plus2', x: '52%', y: '86%', size: 14, rotation: 35 },
    { type: 'star', x: '62%', y: '92%', size: 20, rotation: -15 },
    { type: 'plus2', x: '74%', y: '84%', size: 14, rotation: 20 },
    { type: 'star', x: '83%', y: '87%', size: 24, rotation: -20 },
    { type: 'plus1', x: '93%', y: '90%', size: 15, rotation: 0 },
    { type: 'plus1', x: '12%', y: '94%', size: 13, rotation: 15 },
    { type: 'plus2', x: '30%', y: '96%', size: 11, rotation: -20 },
    { type: 'star', x: '48%', y: '95%', size: 22, rotation: 10 },
    { type: 'plus1', x: '68%', y: '97%', size: 14, rotation: 25 },
    { type: 'plus2', x: '88%', y: '95%', size: 12, rotation: -5 },
  ];

  return (
    <>
      {stars.map((star, index) => {
        // Create subtle variation in animation - different speeds and ranges for each star
        const animationDuration = 3 + (index % 5); // 3-7 seconds
        const rotationRange = 8 + (index % 7); // 8-14 degrees range
        const startRotation = star.rotation;
        
        return (
          <motion.div
            key={index}
            className="absolute pointer-events-none"
            style={{
              left: star.x,
              top: star.y,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              rotate: [
                startRotation - rotationRange,
                startRotation + rotationRange,
                startRotation - rotationRange,
              ],
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {star.type === 'star' ? (
              <Vector10 />
            ) : star.type === 'plus1' ? (
              <Vector11 />
            ) : (
              <Vector12 />
            )}
          </motion.div>
        );
      })}
    </>
  );
}
