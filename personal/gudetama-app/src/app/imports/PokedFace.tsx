import svgPaths from "./svg-c9ziitbt0r";

export default function PokedFace() {
  return (
    <div className="relative size-full" data-name="poked face">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 20">
        <g clipPath="url(#clip0_55_18)" id="poked face">
          <path d={svgPaths.p24d01080} fill="var(--fill-0, #FFCBCB)" id="blush" />
          <path d={svgPaths.p13030b40} fill="var(--fill-0, white)" id="mouth" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="3" />
          <path d={svgPaths.p16982700} fill="var(--fill-0, #D7603D)" id="tongue" stroke="var(--stroke-0, black)" strokeWidth="3" />
          <path d={svgPaths.p3197c2c0} fill="var(--fill-0, black)" id="eye" />
          <path d={svgPaths.p3d3d0400} fill="var(--fill-0, black)" id="eye_2" />
        </g>
        <defs>
          <clipPath id="clip0_55_18">
            <rect fill="white" height="19.7011" width="59.8704" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}