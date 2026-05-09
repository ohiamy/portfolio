import { useState, useEffect } from 'react';
import { GudetamaCharacter } from './components/GudetamaCharacter';
import { StatBarWithButton } from './components/StatBarWithButton';
import { RainShower } from './components/RainShower';
import { DecorativeStars } from './components/DecorativeStars';
import { Card } from './components/ui/card';
import { Utensils, Gamepad2, Sparkles, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatePresence } from 'motion/react';
import gudetamaLogo from 'figma:asset/4e0f2c11022f3b704fb47689749ee4d2f7d4114f.png';

type Mood = 'happy' | 'neutral' | 'sad' | 'dirty' | 'sleeping' | 'sleepingAndDirty';

interface Stats {
  hunger: number;
  happiness: number;
  cleanliness: number;
  health: number;
}

function useCharacterSize() {
  const [size, setSize] = useState(() => Math.min(340, Math.round(window.innerHeight * 0.36)));
  useEffect(() => {
    const update = () => setSize(Math.min(340, Math.round(window.innerHeight * 0.36)));
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return size;
}

export default function App() {
  const characterSize = useCharacterSize();
  const [stats, setStats] = useState<Stats>({
    hunger: 80,
    happiness: 70,
    cleanliness: 90,
    health: 85,
  });

  const [mood, setMood] = useState<Mood>('neutral');
  const [message, setMessage] = useState('Gudetama is feeling lazy...');
  const [isAsleep, setIsAsleep] = useState(false);
  const [floatingText, setFloatingText] = useState<string | null>(null);
  const [isShowering, setIsShowering] = useState(false);
  const [pokeTexts, setPokeTexts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  // Calculate mood based on stats
  useEffect(() => {
    const avgStats = (stats.hunger + stats.happiness + stats.cleanliness) / 3;
    
    if (isAsleep && stats.cleanliness < 30) {
      setMood('sleepingAndDirty');
      setMessage('Zzz... needs a bath...');
    } else if (isAsleep) {
      setMood('sleeping');
      setMessage('Zzz... so tired...');
    } else if (stats.cleanliness < 30) {
      setMood('dirty');
      setMessage('Ugh... too dirty to care...');
    } else if (avgStats < 30) {
      setMood('sad');
      setMessage('Feeling unmotivated...');
    } else if (avgStats > 70) {
      setMood('happy');
      setMessage('');
    } else {
      setMood('neutral');
      setMessage('Meh... whatever...');
    }

    // Update health based on other stats
    const healthScore = Math.floor((stats.hunger + stats.happiness + stats.cleanliness) / 3);
    setStats(prev => ({ ...prev, health: healthScore }));
  }, [stats.hunger, stats.happiness, stats.cleanliness, isAsleep]);

  // Decay stats over time
  useEffect(() => {
    if (isAsleep) return;

    const interval = setInterval(() => {
      setStats(prev => ({
        hunger: Math.max(0, prev.hunger - 2),
        happiness: Math.max(0, prev.happiness - 1),
        cleanliness: Math.max(0, prev.cleanliness - 1),
        health: prev.health,
      }));
    }, 3000); // Decay every 3 seconds

    return () => clearInterval(interval);
  }, [isAsleep]);

  const showFloatingText = (text: string) => {
    setFloatingText(text);
    setTimeout(() => setFloatingText(null), 2000); // 2 wiggles (1s per wiggle cycle)
  };

  const feed = () => {
    if (isAsleep) {
      showFloatingText('Zzz...');
      return;
    }
    setStats(prev => ({ ...prev, hunger: Math.min(100, prev.hunger + 25) }));
    showFloatingText('Too lazy to chew...');
  };

  const play = () => {
    if (isAsleep) {
      showFloatingText('Zzz...');
      return;
    }
    setStats(prev => ({
      ...prev,
      happiness: Math.min(100, prev.happiness + 20),
      hunger: Math.max(0, prev.hunger - 5),
    }));
    showFloatingText('Can we stop now?');
  };

  const clean = () => {
    if (isAsleep) {
      showFloatingText('Zzz...');
      return;
    }
    setStats(prev => ({ ...prev, cleanliness: Math.min(100, prev.cleanliness + 30) }));
    showFloatingText('Do I have to?');
    
    // Trigger shower effect
    setIsShowering(true);
    setTimeout(() => setIsShowering(false), 3000); // 3 seconds of rain
  };

  const toggleSleep = () => {
    setIsAsleep(!isAsleep);
    if (!isAsleep) {
      showFloatingText('Finally...');
    } else {
      showFloatingText('Already...?');
    }
  };

  const handlePoke = (event: React.MouseEvent) => {
    const pokeMessages = [
      'What...?',
      'Stop poking...',
      'Too much effort...',
      'Leave me alone...',
      'Why though...',
      'Ugh...',
      'So annoying...',
      '...really?',
      'Not in the mood...',
      'Can\'t be bothered...',
    ];
    const randomMessage = pokeMessages[Math.floor(Math.random() * pokeMessages.length)];
    showFloatingText(randomMessage);
    
    // Add poke text at cursor position with slight random offset
    const randomOffsetX = (Math.random() - 0.5) * 20; // -10 to 10px
    const randomOffsetY = (Math.random() - 0.5) * 20; // -10 to 10px
    
    const newPokeText = {
      id: Date.now(),
      x: event.clientX + randomOffsetX,
      y: event.clientY + randomOffsetY,
    };
    
    setPokeTexts(prev => [...prev, newPokeText]);
    
    // Remove poke text after animation
    setTimeout(() => {
      setPokeTexts(prev => prev.filter(text => text.id !== newPokeText.id));
    }, 1000);
    
    // Small happiness boost from interaction, but gets a bit dirty
    setStats(prev => ({
      ...prev,
      happiness: Math.min(100, prev.happiness + 2),
      cleanliness: Math.max(0, prev.cleanliness - 1),
    }));
  };

  return (
    <div className="min-h-screen w-full overflow-y-auto flex items-start justify-center bg-gradient-to-br from-yellow-50 to-orange-50 p-4 relative">
      {/* Decorative stars scattered on outer background */}
      <DecorativeStars />
      
      {/* Poke texts at cursor positions */}
      <AnimatePresence>
        {pokeTexts.map(pokeText => (
          <motion.div
            key={pokeText.id}
            className="fixed pointer-events-none z-50"
            style={{
              left: pokeText.x,
              top: pokeText.y,
            }}
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 1, 1.2],
              y: -20,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex gap-[1px]">
              {'*poke*'.split('').map((char, i) => {
                const rotation = Math.sin(i * 123.456) * 5;
                return (
                  <span
                    key={i}
                    className="inline-block"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      color: '#000000',
                      fontFamily: 'Comic Sans MS, cursive, sans-serif',
                      fontSize: '14px',
                      fontWeight: '700',
                      textShadow: '0.5px 0.5px 0px rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      
      <Card
        className="w-full max-w-2xl relative overflow-visible"
        style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', padding: 'clamp(12px, 2vh, 24px) clamp(12px, 2vw, 24px) clamp(20px, 3vh, 40px)' }}
      >
        <div className="text-center -mb-2 relative z-10">
          <div className="mb-0 flex justify-center">
            <img
              src={gudetamaLogo}
              alt="Gudetama"
              style={{ height: 'clamp(64px, 10vh, 128px)' }}
            />
          </div>
        </div>

        {/* Character Display */}
        <div
          className="relative flex justify-center items-center bg-gradient-to-b from-amber-50 to-yellow-100 mx-auto w-[71.5%]"
          style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', padding: 'clamp(12px, 2vh, 24px)', height: `clamp(160px, 36vh, 281.6px)`, overflow: 'visible', marginBottom: 'clamp(20px, 4vh, 48px)' }}
        >
          <GudetamaCharacter mood={mood} size={characterSize} onPoke={handlePoke} />
          
          {/* Rain shower effect */}
          <RainShower isActive={isShowering} />
          
          {/* Floating text */}
          <AnimatePresence>
            {floatingText && (
              <motion.div
                className="absolute left-1/2 -top-2 -translate-x-1/2 pointer-events-none"
                initial={{ opacity: 0, y: -10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  rotate: [0, -2, 2, -2, 2, 0],
                }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ 
                  opacity: { duration: 0.3 },
                  y: { duration: 0.3 },
                  rotate: { 
                    duration: 0.5, 
                    repeat: Infinity, 
                    repeatDelay: 0.5,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="flex gap-[1px]">
                  {floatingText.split('').map((char, i) => {
                    // Generate a consistent random rotation for each character position
                    const rotation = Math.sin(i * 123.456) * 5; // Range: -5 to 5 degrees
                    
                    return (
                      <span
                        key={i}
                        className="inline-block"
                        style={{
                          transform: `rotate(${rotation}deg)`,
                          color: '#F7892F',
                          fontFamily: 'Comic Sans MS, cursive, sans-serif',
                          fontSize: '18px',
                          fontWeight: '700',
                          textShadow: '1px 1px 0px rgba(255, 255, 255, 0.5)',
                        }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Stats with Action Buttons */}
        <div className="content-stretch flex flex-col items-start w-[55%] mx-auto -mt-6" style={{ gap: 'clamp(14px, 3vh, 36px)' }}>
          <StatBarWithButton
            icon={Utensils}
            label="Hunger"
            value={stats.hunger}
            max={100}
            color="#ffbd4e"
            buttonText="Feed"
            onButtonClick={feed}
            showButton={!isAsleep}
          />
          <StatBarWithButton
            icon={Gamepad2}
            label="Happiness"
            value={stats.happiness}
            max={100}
            color="#ff66a8"
            buttonText="Play"
            onButtonClick={play}
            showButton={!isAsleep}
          />
          <StatBarWithButton
            icon={Sparkles}
            label="Cleanliness"
            value={stats.cleanliness}
            max={100}
            color="#77c3c9"
            buttonText="Clean"
            onButtonClick={clean}
            showButton={!isAsleep}
          />
          <StatBarWithButton
            icon={Heart}
            label="Health"
            value={stats.health}
            max={100}
            color="#ff8325"
            buttonText={isAsleep ? 'Wake' : 'Sleep'}
            onButtonClick={toggleSleep}
          />
        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground w-[35%] mx-auto">
          <p>Gudetama's stats naturally decay. Take care of your lazy egg!</p>
        </div>
      </Card>
    </div>
  );
}