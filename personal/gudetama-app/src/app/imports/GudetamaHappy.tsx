import svgPaths from "./svg-7z458028np";

function EggWhite() {
  return (
    <div className="absolute h-[82.162px] left-0 top-[63.61px] w-[287.025px]" data-name="egg white">
      <div className="absolute inset-[-2.43%_-0.7%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 87">
          <g id="egg white">
            <path d={svgPaths.p1588e5f0} fill="var(--fill-0, white)" id="egg white_2" stroke="var(--stroke-0, black)" strokeWidth="4" />
            <path d={svgPaths.p5bb7d00} fill="var(--fill-0, #E8E8E8)" id="egg white shading" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function GudetamaHappy() {
  return (
    <div className="absolute h-[111.937px] left-[74px] top-0 w-[112.034px]" data-name="gudetama - happy">
      <div className="absolute inset-[-1.79%_-1.34%_-1.79%_-0.92%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 116">
          <g id="gudetama - happy">
            <path d={svgPaths.p368c9c00} fill="var(--fill-0, #FEB041)" id="body" stroke="var(--stroke-0, black)" strokeWidth="4" />
            <g id="left leg">
              <path d={svgPaths.p132e9780} fill="var(--fill-0, #FEB041)" id="left leg color" />
              <path d={svgPaths.p38167700} id="left leg outline" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4" />
            </g>
            <g id="right leg">
              <path d={svgPaths.p1f5e1200} fill="var(--fill-0, #FEB041)" id="left leg color_2" />
              <path d={svgPaths.p3b1f0d40} id="left leg outline_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4" />
            </g>
            <path d={svgPaths.p5425200} fill="var(--fill-0, #F7892F)" id="shading" />
            <g id="left arm">
              <path d={svgPaths.p1d7b3200} fill="var(--fill-0, #FEB041)" id="right arm color" />
              <path d={svgPaths.p3b858580} id="left arm outline" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="3" />
            </g>
            <g id="right arm">
              <path d={svgPaths.p24b1ff00} fill="var(--fill-0, #FEB041)" id="right arm color_2" />
              <path d={svgPaths.p1aa35f40} id="right arm outline" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="3" />
            </g>
            <path d={svgPaths.p1bf3900} fill="var(--fill-0, white)" id="highlight" />
            <g id="face">
              <path d={svgPaths.pc898c80} fill="var(--fill-0, #FFCBCB)" id="blush" />
              <path d={svgPaths.p2dd0b200} fill="var(--fill-0, white)" id="mouth" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="3" />
              <path d={svgPaths.p26a0bd60} fill="var(--fill-0, black)" id="eye" />
              <path d={svgPaths.p303faa40} fill="var(--fill-0, black)" id="eye_2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function GudetamaHappy1() {
  return (
    <div className="relative size-full" data-name="gudetama - happy">
      <EggWhite />
      <GudetamaHappy />
    </div>
  );
}