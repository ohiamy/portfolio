import svgPaths from "./svg-6s41midap4";

function EggWhite() {
  return (
    <div className="absolute h-[82.162px] left-0 top-[21.61px] w-[287.025px]" data-name="egg white">
      <div className="absolute inset-[-2.43%_-0.7%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 87">
          <g id="egg white">
            <path d={svgPaths.p1588e5f0} fill="var(--fill-0, white)" id="egg white_2" stroke="var(--stroke-0, black)" strokeWidth="4" />
            <path d={svgPaths.p16ff9ff0} fill="var(--fill-0, #E8E8E8)" id="egg white shading" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Gudetama() {
  return (
    <div className="absolute h-[70.247px] left-[63.28px] top-0 w-[144.955px]" data-name="gudetama">
      <div className="absolute inset-[-2.85%_-1.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 75">
          <g id="gudetama">
            <path d={svgPaths.p37c19000} fill="var(--fill-0, #FEB041)" id="back arm" stroke="var(--stroke-0, black)" strokeWidth="4" />
            <path d={svgPaths.p3ac66d80} fill="var(--fill-0, #FEB041)" id="body" stroke="var(--stroke-0, black)" strokeWidth="4" />
            <path d={svgPaths.p120bf7f0} fill="var(--fill-0, white)" id="mouth" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="3" />
            <path d={svgPaths.pbcb9c60} id="cheek" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="3" />
            <g id="front arm">
              <path d={svgPaths.p3f5bee40} fill="var(--fill-0, #FEB041)" id="front arm color" />
              <path d={svgPaths.p380ab1e0} id="front arm outline" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4" />
            </g>
            <path d={svgPaths.p11e96700} fill="var(--fill-0, black)" id="eye" />
            <path d={svgPaths.p3a2ef000} fill="var(--fill-0, black)" id="eye_2" />
            <path d={svgPaths.p7acc900} fill="var(--fill-0, #FEB041)" id="leg color" />
            <path d={svgPaths.p1485bc80} id="leg outline" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4" />
            <path d={svgPaths.p16e6b780} fill="var(--fill-0, white)" id="shine" />
            <path d={svgPaths.p13381b00} fill="var(--fill-0, #F7892F)" id="shadow" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function GudetamaNeutral() {
  return (
    <div className="relative size-full" data-name="gudetama - neutral">
      <EggWhite />
      <Gudetama />
    </div>
  );
}