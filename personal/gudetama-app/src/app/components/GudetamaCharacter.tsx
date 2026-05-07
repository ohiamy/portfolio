import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import svgPaths from '../imports/svg-hfzl0596cd';
import pokedPaths from '../imports/svg-sytj6jpn96';
import { SleepingZs } from './SleepingZs';
import { Blanket } from './Blanket';

interface GudetamaCharacterProps {
  mood: 'happy' | 'neutral' | 'sad' | 'dirty' | 'sleeping' | 'sleepingAndDirty';
  size?: number;
  onPoke?: (event: React.MouseEvent) => void;
}

export function GudetamaCharacter({ mood, size = 200, onPoke }: GudetamaCharacterProps) {
  const [isPoked, setIsPoked] = useState(false);

  const getFloatAnimation = () => {
    if (mood === 'sleeping' || mood === 'sleepingAndDirty') {
      return {
        y: [0, -3, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      };
    }
    return {
      y: [0, -5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    };
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsPoked(true);
    onPoke?.(event);
  };

  const handleMouseUp = () => {
    setIsPoked(false);
  };

  // Render poked neutral mood
  const renderPokedNeutral = () => (
    <>
      {/* Egg White */}
      <div className="[grid-area:1_/_1] h-[82.162px] ml-0 mt-[21.609px] relative w-[287.025px]">
        <div className="absolute inset-[-2.43%_-0.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 87">
            <g>
              <path d={pokedPaths.p1588e5f0} fill="white" stroke="black" strokeWidth="4" />
              <path d={pokedPaths.p5bb7d00} fill="#E8E8E8" />
            </g>
          </svg>
        </div>
      </div>

      {/* Gudetama Poked */}
      <div className="[grid-area:1_/_1] h-[70.247px] ml-[63.277px] mt-0 relative w-[144.955px]">
        <div className="absolute inset-[-2.85%_-1.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 75">
            <g>
              <path d={pokedPaths.p37c19000} fill="#FEB041" stroke="black" strokeWidth="4" />
              <path d={pokedPaths.p3ac66d80} fill="#FEB041" stroke="black" strokeWidth="4" />
              <g>
                <path d={pokedPaths.p3f5bee40} fill="#FEB041" />
                <path d={pokedPaths.p380ab1e0} stroke="black" strokeLinecap="round" strokeWidth="4" />
              </g>
              <path d={pokedPaths.p7acc900} fill="#FEB041" />
              <path d={pokedPaths.p1485bc80} stroke="black" strokeLinecap="round" strokeWidth="4" />
              <path d={pokedPaths.p16e6b780} fill="white" />
              <path d={pokedPaths.p13381b00} fill="#F7892F" />
              <g>
                <path d={pokedPaths.p37361ec0} fill="#FFCBCB" />
                <path d={pokedPaths.p1c06a100} fill="white" stroke="black" strokeLinecap="round" strokeWidth="3" />
                <path d={pokedPaths.p38e14700} fill="#D7603D" stroke="black" strokeWidth="3" />
                <path d={pokedPaths.p2c26100} fill="black" />
                <path d={pokedPaths.p8109a40} fill="black" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </>
  );

  // Render neutral mood
  const renderNeutral = () => (
    <>
      {/* Egg White */}
      <div className="[grid-area:1_/_1] h-[82.162px] ml-0 mt-[21.609px] relative w-[287.025px]">
        <div className="absolute inset-[-2.43%_-0.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 87">
            <g>
              <path d={svgPaths.p1588e5f0} fill="white" stroke="black" strokeWidth="4" />
              <path d={svgPaths.p16ff9ff0} fill="#E8E8E8" />
            </g>
          </svg>
        </div>
      </div>

      {/* Gudetama Neutral */}
      <div className="[grid-area:1_/_1] h-[70.247px] ml-[63.277px] mt-0 relative w-[144.955px]">
        <div className="absolute inset-[-2.85%_-1.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 75">
            <g>
              <path d={svgPaths.p37c19000} fill="#FEB041" stroke="black" strokeWidth="4" />
              <path d={svgPaths.p3ac66d80} fill="#FEB041" stroke="black" strokeWidth="4" />
              <g>
                <path d={svgPaths.p3f5bee40} fill="#FEB041" />
                <path d={svgPaths.p380ab1e0} stroke="black" strokeLinecap="round" strokeWidth="4" />
              </g>
              <g>
                <path d={svgPaths.p120bf7f0} fill="white" stroke="black" strokeLinecap="round" strokeWidth="3" />
                <path d={svgPaths.pbcb9c60} stroke="black" strokeLinecap="round" strokeWidth="3" />
                <path d={svgPaths.p11e96700} fill="black" />
                <path d={svgPaths.p3a2ef000} fill="black" />
              </g>
              <path d={svgPaths.p7acc900} fill="#FEB041" />
              <path d={svgPaths.p1485bc80} stroke="black" strokeLinecap="round" strokeWidth="4" />
              <path d={svgPaths.p16e6b780} fill="white" />
              <path d={svgPaths.p13381b00} fill="#F7892F" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );

  // Render poked happy mood
  const renderPokedHappy = () => (
    <>
      {/* Egg White */}
      <div className="[grid-area:1_/_1] h-[82.162px] ml-0 mt-[63.609px] relative w-[287.025px]">
        <div className="absolute inset-[-2.43%_-0.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 87">
            <g>
              <path d={pokedPaths.p1588e5f0} fill="white" stroke="black" strokeWidth="4" />
              <path d={pokedPaths.p1b8edb00} fill="#E8E8E8" />
            </g>
          </svg>
        </div>
      </div>

      {/* Gudetama Happy Poked */}
      <div className="[grid-area:1_/_1] h-[111.937px] ml-[88px] mt-0 relative w-[112.034px]">
        <div className="absolute inset-[-1.79%_-1.79%_-1.79%_-1.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 116">
            <g>
              <path d={pokedPaths.p368c9c00} fill="#FEB041" stroke="black" strokeWidth="4" />
              <g>
                <path d={pokedPaths.p132e9780} fill="#FEB041" />
                <path d={pokedPaths.p38167700} stroke="black" strokeLinecap="round" strokeWidth="4" />
              </g>
              <g>
                <path d={pokedPaths.p1f5e1200} fill="#FEB041" />
                <path d={pokedPaths.p3b1f0d40} stroke="black" strokeLinecap="round" strokeWidth="4" />
              </g>
              <path d={pokedPaths.p5425200} fill="#F7892F" />
              <g>
                <path d={pokedPaths.p1d7b3200} fill="#FEB041" />
                <path d={pokedPaths.p3b858580} stroke="black" strokeLinecap="round" strokeWidth="4" />
              </g>
              <g>
                <path d={pokedPaths.p24b1ff00} fill="#FEB041" />
                <path d={pokedPaths.p1aa35f40} stroke="black" strokeLinecap="round" strokeWidth="4" />
              </g>
              <path d={pokedPaths.p1bf3900} fill="white" />
              <g>
                <path d={pokedPaths.p324e800} fill="#FFCBCB" />
                <path d={pokedPaths.p6652500} fill="white" stroke="black" strokeLinecap="round" strokeWidth="3" />
                <path d={pokedPaths.p2a296e00} fill="#D7603D" stroke="black" strokeWidth="3" />
                <path d={pokedPaths.p2ed66780} fill="black" />
                <path d={pokedPaths.p213fab70} fill="black" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </>
  );

  // Render happy mood
  const renderHappy = () => (
    <>
      {/* Egg White */}
      <div className="[grid-area:1_/_1] h-[82.162px] ml-0 mt-[63.609px] relative w-[287.025px]">
        <div className="absolute inset-[-2.43%_-0.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 87">
            <g>
              <path d={svgPaths.p1588e5f0} fill="white" stroke="black" strokeWidth="4" />
              <path d={svgPaths.p5bb7d00} fill="#E8E8E8" />
            </g>
          </svg>
        </div>
      </div>

      {/* Gudetama Happy */}
      <div className="[grid-area:1_/_1] h-[111.937px] ml-[88px] mt-0 relative w-[112.034px]">
        <div className="absolute inset-[-1.79%_-1.79%_-1.79%_-1.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 116">
            <g>
              <path d={svgPaths.p368c9c00} fill="#FEB041" stroke="black" strokeWidth="4" />
              <g>
                <path d={svgPaths.p132e9780} fill="#FEB041" />
                <path d={svgPaths.p38167700} stroke="black" strokeLinecap="round" strokeWidth="4" />
              </g>
              <g>
                <path d={svgPaths.p1f5e1200} fill="#FEB041" />
                <path d={svgPaths.p3b1f0d40} stroke="black" strokeLinecap="round" strokeWidth="4" />
              </g>
              <path d={svgPaths.p5425200} fill="#F7892F" />
              <g>
                <path d={svgPaths.p1d7b3200} fill="#FEB041" />
                <path d={svgPaths.p3b858580} stroke="black" strokeLinecap="round" strokeWidth="4" />
              </g>
              <g>
                <path d={svgPaths.p24b1ff00} fill="#FEB041" />
                <path d={svgPaths.p1aa35f40} stroke="black" strokeLinecap="round" strokeWidth="4" />
              </g>
              <path d={svgPaths.p1bf3900} fill="white" />
              <g>
                <path d={svgPaths.pc898c80} fill="#FFCBCB" />
                <path d={svgPaths.p1591e400} fill="white" stroke="black" strokeWidth="3" />
                <path d={svgPaths.p26a0bd60} fill="black" />
                <path d={svgPaths.p303faa40} fill="black" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </>
  );

  // Render poked sad mood
  const renderPokedSad = () => (
    <>
      {/* Egg White */}
      <div className="[grid-area:1_/_1] h-[82.162px] ml-0 mt-[21.609px] relative w-[287.025px]">
        <div className="absolute inset-[-2.43%_-0.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 87">
            <g>
              <path d={pokedPaths.p1588e5f0} fill="white" stroke="black" strokeWidth="4" />
              <path d={pokedPaths.p1b8edb00} fill="#E8E8E8" />
            </g>
          </svg>
        </div>
      </div>

      {/* Gudetama Sad Poked */}
      <div className="[grid-area:1_/_1] h-[70.247px] ml-[63.277px] mt-0 relative w-[144.955px]">
        <div className="absolute inset-[-2.85%_-1.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 75">
            <g>
              <path d={pokedPaths.p1eb9a00} fill="#FEB041" stroke="black" strokeWidth="4" />
              <path d={pokedPaths.p3ac66d80} fill="#FEB041" stroke="black" strokeWidth="4" />
              <g>
                <path d={pokedPaths.pe459380} fill="black" />
                <path d={pokedPaths.p1793cc00} fill="black" />
                <path d={pokedPaths.p36bb8e00} fill="#FFCBCB" />
                <path d={pokedPaths.p65777b0} fill="#B9E4E7" />
                <path d={pokedPaths.p2b0e3a80} stroke="black" strokeLinecap="round" strokeWidth="2.5" />
                <path d={pokedPaths.p5decc80} fill="white" stroke="black" strokeLinecap="round" strokeWidth="3" />
                <path d={pokedPaths.pab0d400} fill="#D7603D" stroke="black" strokeWidth="3" />
              </g>
              <g>
                <path d={pokedPaths.p326f6e00} fill="#FEB041" />
                <path d={pokedPaths.p3c9fb00} stroke="black" strokeLinecap="round" strokeWidth="4" />
              </g>
              <path d={pokedPaths.p7acc900} fill="#FEB041" />
              <path d={pokedPaths.p1485bc80} stroke="black" strokeLinecap="round" strokeWidth="4" />
              <path d={pokedPaths.p16e6b780} fill="white" />
              <path d={pokedPaths.p13381b00} fill="#F7892F" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );

  // Render sad mood
  const renderSad = () => (
    <>
      {/* Egg White */}
      <div className="[grid-area:1_/_1] h-[82.162px] ml-0 mt-[21.609px] relative w-[287.025px]">
        <div className="absolute inset-[-2.43%_-0.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 87">
            <g>
              <path d={svgPaths.p1588e5f0} fill="white" stroke="black" strokeWidth="4" />
              <path d={svgPaths.p5bb7d00} fill="#E8E8E8" />
            </g>
          </svg>
        </div>
      </div>

      {/* Gudetama Sad */}
      <div className="[grid-area:1_/_1] h-[70.247px] ml-[63.277px] mt-0 relative w-[144.955px]">
        <div className="absolute inset-[-2.85%_-1.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 75">
            <g>
              <path d={svgPaths.p1eb9a00} fill="#FEB041" stroke="black" strokeWidth="4" />
              <path d={svgPaths.p3ac66d80} fill="#FEB041" stroke="black" strokeWidth="4" />
              <g>
                <path d={svgPaths.pe459380} fill="black" />
                <path d={svgPaths.p2e18e780} fill="black" />
                <path d={svgPaths.p34ede900} fill="#B9E4E7" />
                <g>
                  <path d={svgPaths.pd610d80} fill="white" />
                  <path d={svgPaths.p3d8cfc00} stroke="black" strokeLinecap="round" strokeWidth="2.5" />
                </g>
                <path d={svgPaths.p2b0e3a80} stroke="black" strokeLinecap="round" strokeWidth="2.5" />
              </g>
              <g>
                <path d={svgPaths.p326f6e00} fill="#FEB041" />
                <path d={svgPaths.p3c9fb00} stroke="black" strokeLinecap="round" strokeWidth="4" />
              </g>
              <path d={svgPaths.p7acc900} fill="#FEB041" />
              <path d={svgPaths.p1485bc80} stroke="black" strokeLinecap="round" strokeWidth="4" />
              <path d={svgPaths.p16e6b780} fill="white" />
              <path d={svgPaths.p13381b00} fill="#F7892F" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );

  // Render poked dirty mood
  const renderPokedDirty = () => (
    <>
      {/* Egg White - Dirty */}
      <div className="[grid-area:1_/_1] h-[82.162px] ml-0 mt-[21.609px] relative w-[287.025px]">
        <div className="absolute inset-[-2.43%_-0.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 87">
            <g>
              <path d={pokedPaths.p1588e5f0} fill="#E6E6E6" stroke="black" strokeWidth="4" />
              <path d={pokedPaths.p1264c40} fill="#CBCBCB" />
            </g>
          </svg>
        </div>
      </div>

      {/* Gudetama Dirty Poked */}
      <div className="[grid-area:1_/_1] h-[70.247px] ml-[63.277px] mt-0 relative w-[144.955px]">
        <div className="absolute inset-[-2.85%_-1.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 75">
            <g>
              <path d={pokedPaths.p1eb9a00} fill="#CE8D2F" stroke="black" strokeWidth="4" />
              <path d={pokedPaths.p3ac66d80} fill="#CE8D2F" stroke="black" strokeWidth="4" />
              <g>
                <path d={pokedPaths.pe459380} fill="black" />
                <path d={pokedPaths.p1793cc00} fill="black" />
                <path d={pokedPaths.p28d3fc00} fill="#FFCBCB" />
                <path d={pokedPaths.p65777b0} fill="#B9E4E7" />
                <path d={pokedPaths.p2b0e3a80} stroke="black" strokeLinecap="round" strokeWidth="2.5" />
                <path d={pokedPaths.p2636d800} fill="white" stroke="black" strokeLinecap="round" strokeWidth="3" />
                <path d={pokedPaths.p12af940} fill="#D7603D" stroke="black" strokeWidth="3" />
              </g>
              <g>
                <path d={pokedPaths.p326f6e00} fill="#CE8D2F" />
                <path d={pokedPaths.p3c9fb00} stroke="black" strokeLinecap="round" strokeWidth="4" />
              </g>
              <path d={pokedPaths.p7acc900} fill="#CE8D2F" />
              <path d={pokedPaths.p1485bc80} stroke="black" strokeLinecap="round" strokeWidth="4" />
              <path d={pokedPaths.p16e6b780} fill="white" />
              <path d={pokedPaths.p13381b00} fill="#A4612B" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );

  // Render dirty mood
  const renderDirty = () => (
    <>
      {/* Egg White - Dirty */}
      <div className="[grid-area:1_/_1] h-[82.162px] ml-0 mt-[21.609px] relative w-[287.025px]">
        <div className="absolute inset-[-2.43%_-0.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 87">
            <g>
              <path d={svgPaths.p1588e5f0} fill="#E6E6E6" stroke="black" strokeWidth="4" />
              <path d={svgPaths.p1b8edb00} fill="#CBCBCB" />
            </g>
          </svg>
        </div>
      </div>

      {/* Gudetama Dirty */}
      <div className="[grid-area:1_/_1] h-[70.247px] ml-[63.277px] mt-0 relative w-[144.955px]">
        <div className="absolute inset-[-2.85%_-1.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 75">
            <g>
              <path d={svgPaths.p1eb9a00} fill="#CE8D2F" stroke="black" strokeWidth="4" />
              <path d={svgPaths.p3ac66d80} fill="#CE8D2F" stroke="black" strokeWidth="4" />
              <g>
                <path d={svgPaths.pe459380} fill="black" />
                <path d={svgPaths.p2e18e780} fill="black" />
                <path d={svgPaths.p34ede900} fill="#B9E4E7" />
                <g>
                  <path d={svgPaths.pd610d80} fill="white" />
                  <path d={svgPaths.p3d8cfc00} stroke="black" strokeLinecap="round" strokeWidth="2.5" />
                </g>
                <path d={svgPaths.p2b0e3a80} stroke="black" strokeLinecap="round" strokeWidth="2.5" />
              </g>
              <g>
                <path d={svgPaths.p326f6e00} fill="#CE8D2F" />
                <path d={svgPaths.p3c9fb00} stroke="black" strokeLinecap="round" strokeWidth="4" />
              </g>
              <path d={svgPaths.p7acc900} fill="#CE8D2F" />
              <path d={svgPaths.p1485bc80} stroke="black" strokeLinecap="round" strokeWidth="4" />
              <path d={svgPaths.p16e6b780} fill="white" />
              <path d={svgPaths.p13381b00} fill="#A4612B" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );

  // Render poked sleeping mood
  const renderPokedSleeping = () => (
    <>
      {/* Egg White */}
      <div className="[grid-area:1_/_1] h-[82.162px] ml-0 mt-[21.609px] relative w-[287.025px]">
        <div className="absolute inset-[-2.43%_-0.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 87">
            <g>
              <path d={pokedPaths.p1588e5f0} fill="white" stroke="black" strokeWidth="4" />
              <path d={pokedPaths.p1264c40} fill="#E8E8E8" />
            </g>
          </svg>
        </div>
      </div>

      {/* Gudetama Sleeping Poked */}
      <div className="[grid-area:1_/_1] h-[70.247px] ml-[63.277px] mt-0 relative w-[144.955px]">
        <div className="absolute inset-[-2.85%_-1.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 75">
            <g>
              <path d={pokedPaths.p1eb9a00} fill="#FEB041" stroke="black" strokeWidth="4" />
              <path d={pokedPaths.p3ac66d80} fill="#FEB041" stroke="black" strokeWidth="4" />
              <g>
                <path d={pokedPaths.p120bf7f0} fill="white" stroke="black" strokeLinecap="round" strokeWidth="3" />
                <path d={pokedPaths.pa0ba480} fill="white" stroke="black" strokeLinecap="round" strokeWidth="3" />
                <path d={pokedPaths.p1e081420} fill="#D7603D" stroke="black" strokeWidth="3" />
                <path d={pokedPaths.pbcb9c60} stroke="black" strokeLinecap="round" strokeWidth="3" />
                <path d={pokedPaths.p11e96700} fill="black" />
                <path d={pokedPaths.p3a2ef000} fill="black" />
              </g>
              <g>
                <path d={pokedPaths.p326f6e00} fill="#FEB041" />
                <path d={pokedPaths.p3c9fb00} stroke="black" strokeLinecap="round" strokeWidth="4" />
              </g>
              <path d={pokedPaths.p7acc900} fill="#FEB041" />
              <path d={pokedPaths.p1485bc80} stroke="black" strokeLinecap="round" strokeWidth="4" />
              <path d={pokedPaths.p16e6b780} fill="white" />
              <path d={pokedPaths.p13381b00} fill="#F7892F" />
              <path d={pokedPaths.p2bf7380} fill="#B9E4E7" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );

  // Render sleeping mood
  const renderSleeping = () => (
    <>
      {/* Egg White */}
      <div className="[grid-area:1_/_1] h-[82.162px] ml-0 mt-[21.609px] relative w-[287.025px]">
        <div className="absolute inset-[-2.43%_-0.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 87">
            <g>
              <path d={svgPaths.p1588e5f0} fill="white" stroke="black" strokeWidth="4" />
              <path d={svgPaths.p1b8edb00} fill="#E8E8E8" />
            </g>
          </svg>
        </div>
      </div>

      {/* Gudetama Sleeping */}
      <div className="[grid-area:1_/_1] h-[70.247px] ml-[63.277px] mt-0 relative w-[144.955px]">
        <div className="absolute inset-[-2.85%_-1.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 75">
            <g>
              <path d={svgPaths.p1eb9a00} fill="#FEB041" stroke="black" strokeWidth="4" />
              <path d={svgPaths.p3ac66d80} fill="#FEB041" stroke="black" strokeWidth="4" />
              <g>
                <path d={svgPaths.p120bf7f0} fill="white" stroke="black" strokeLinecap="round" strokeWidth="3" />
                <path d={svgPaths.pbcb9c60} stroke="black" strokeLinecap="round" strokeWidth="3" />
                <path d={svgPaths.p11e96700} fill="black" />
                <path d={svgPaths.p3a2ef000} fill="black" />
              </g>
              <g>
                <path d={svgPaths.p326f6e00} fill="#FEB041" />
                <path d={svgPaths.p3c9fb00} stroke="black" strokeLinecap="round" strokeWidth="4" />
              </g>
              <path d={svgPaths.p7acc900} fill="#FEB041" />
              <path d={svgPaths.p1485bc80} stroke="black" strokeLinecap="round" strokeWidth="4" />
              <path d={svgPaths.p16e6b780} fill="white" />
              <path d={svgPaths.p13381b00} fill="#F7892F" />
              <motion.path 
                d={svgPaths.p2bf7380} 
                fill="#B9E4E7"
                animate={{ 
                  y: [0, 2, 0],
                  scaleY: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  );

  // Render poked sleeping AND dirty mood
  const renderPokedSleepingAndDirty = () => (
    <>
      {/* Egg White - Dirty */}
      <div className="[grid-area:1_/_1] h-[82.162px] ml-0 mt-[21.609px] relative w-[287.025px]">
        <div className="absolute inset-[-2.43%_-0.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 87">
            <g>
              <path d={pokedPaths.p1588e5f0} fill="#E6E6E6" stroke="black" strokeWidth="4" />
              <path d={pokedPaths.p17dd8780} fill="#CBCBCB" />
            </g>
          </svg>
        </div>
      </div>

      {/* Gudetama Sleeping AND Dirty Poked */}
      <div className="[grid-area:1_/_1] h-[70.247px] ml-[63.277px] mt-0 relative w-[144.955px]">
        <div className="absolute inset-[-2.85%_-1.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 75">
            <g>
              <path d={pokedPaths.p1eb9a00} fill="#CE8D2F" stroke="black" strokeWidth="4" />
              <path d={pokedPaths.p3ac66d80} fill="#CE8D2F" stroke="black" strokeWidth="4" />
              <g>
                <path d={pokedPaths.p120bf7f0} fill="white" stroke="black" strokeLinecap="round" strokeWidth="3" />
                <path d={pokedPaths.pa0ba480} fill="white" stroke="black" strokeLinecap="round" strokeWidth="3" />
                <path d={pokedPaths.p1e081420} fill="#D7603D" stroke="black" strokeWidth="3" />
                <path d={pokedPaths.pbcb9c60} stroke="black" strokeLinecap="round" strokeWidth="3" />
                <path d={pokedPaths.p11e96700} fill="black" />
                <path d={pokedPaths.p3a2ef000} fill="black" />
              </g>
              <g>
                <path d={pokedPaths.p326f6e00} fill="#CE8D2F" />
                <path d={pokedPaths.p3c9fb00} stroke="black" strokeLinecap="round" strokeWidth="4" />
              </g>
              <path d={pokedPaths.p7acc900} fill="#CE8D2F" />
              <path d={pokedPaths.p1485bc80} stroke="black" strokeLinecap="round" strokeWidth="4" />
              <path d={pokedPaths.p16e6b780} fill="white" />
              <path d={pokedPaths.p13381b00} fill="#A4612B" />
              <path d={pokedPaths.p2bf7380} fill="#B9E4E7" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );

  // Render sleeping AND dirty mood
  const renderSleepingAndDirty = () => (
    <>
      {/* Egg White - Dirty */}
      <div className="[grid-area:1_/_1] h-[82.162px] ml-0 mt-[21.609px] relative w-[287.025px]">
        <div className="absolute inset-[-2.43%_-0.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 87">
            <g>
              <path d={svgPaths.p1588e5f0} fill="#E6E6E6" stroke="black" strokeWidth="4" />
              <path d={svgPaths.p1264c40} fill="#CBCBCB" />
            </g>
          </svg>
        </div>
      </div>

      {/* Gudetama Sleeping AND Dirty */}
      <div className="[grid-area:1_/_1] h-[70.247px] ml-[63.277px] mt-0 relative w-[144.955px]">
        <div className="absolute inset-[-2.85%_-1.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 75">
            <g>
              <path d={svgPaths.p1eb9a00} fill="#CE8D2F" stroke="black" strokeWidth="4" />
              <path d={svgPaths.p3ac66d80} fill="#CE8D2F" stroke="black" strokeWidth="4" />
              <g>
                <path d={svgPaths.p120bf7f0} fill="white" stroke="black" strokeLinecap="round" strokeWidth="3" />
                <path d={svgPaths.pbcb9c60} stroke="black" strokeLinecap="round" strokeWidth="3" />
                <path d={svgPaths.p11e96700} fill="black" />
                <path d={svgPaths.p3a2ef000} fill="black" />
              </g>
              <g>
                <path d={svgPaths.p326f6e00} fill="#CE8D2F" />
                <path d={svgPaths.p3c9fb00} stroke="black" strokeLinecap="round" strokeWidth="4" />
              </g>
              <path d={svgPaths.p7acc900} fill="#CE8D2F" />
              <path d={svgPaths.p1485bc80} stroke="black" strokeLinecap="round" strokeWidth="4" />
              <path d={svgPaths.p16e6b780} fill="white" />
              <path d={svgPaths.p13381b00} fill="#A4612B" />
              <motion.path 
                d={svgPaths.p2bf7380} 
                fill="#B9E4E7"
                animate={{ 
                  y: [0, 2, 0],
                  scaleY: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  );

  const renderGudetama = () => {
    // If poked, show poked version
    if (isPoked) {
      switch (mood) {
        case 'happy':
          return renderPokedHappy();
        case 'sad':
          return renderPokedSad();
        case 'dirty':
          return renderPokedDirty();
        case 'sleeping':
          return renderPokedSleeping();
        case 'sleepingAndDirty':
          return renderPokedSleepingAndDirty();
        case 'neutral':
        default:
          return renderPokedNeutral();
      }
    }
    
    // Normal versions
    switch (mood) {
      case 'happy':
        return renderHappy();
      case 'sad':
        return renderSad();
      case 'dirty':
        return renderDirty();
      case 'sleeping':
        return renderSleeping();
      case 'sleepingAndDirty':
        return renderSleepingAndDirty();
      case 'neutral':
      default:
        return renderNeutral();
    }
  };

  // Calculate container dimensions - use consistent size for all moods
  const originalWidth = 287.025;
  const maxHeight = 145.772; // Happy state height (largest)
  const neutralHeight = 103.772; // Neutral/sad/dirty/sleeping height
  
  const scaleRatio = size / originalWidth;
  
  // Calculate vertical offset to center non-happy moods
  const getVerticalOffset = () => {
    if (mood === 'happy') {
      return 0;
    } else {
      return (maxHeight - neutralHeight) / 2;
    }
  };

  return (
    <motion.div
      animate={getFloatAnimation()}
      className="relative cursor-pointer mx-auto"
      style={{ 
        width: `${originalWidth * scaleRatio}px`, 
        height: `${maxHeight * scaleRatio}px` 
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      whileTap={{ 
        scaleX: 1.1,
        scaleY: 0.9,
        transition: { duration: 0.1 }
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          transformOrigin: 'center center',
        }}
      >
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `scale(${scaleRatio})`,
            transformOrigin: 'center center',
          }}
        >
          <div 
            className="relative grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start" 
            style={{ 
              width: `${originalWidth}px`, 
              height: `${maxHeight}px`,
              paddingTop: `${getVerticalOffset()}px`,
            }}
          >
            {renderGudetama()}
          </div>
        </div>
      </motion.div>

      {/* Sleeping Zs animation */}
      {(mood === 'sleeping' || mood === 'sleepingAndDirty') && <SleepingZs />}
      
      {/* Blanket overlay when sleeping */}
      <AnimatePresence>
        {(mood === 'sleeping' || mood === 'sleepingAndDirty') && <Blanket />}
      </AnimatePresence>
    </motion.div>
  );
}
