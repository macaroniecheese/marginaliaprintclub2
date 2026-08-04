type Props = {
  size?: number;
  color?: string;
  sprigColor?: string;
  veinColor?: string;
  className?: string;
};

export default function Seal({
  size = 112,
  color = '#9C3427',
  sprigColor = '#4A5A34',
  veinColor = '#F1E8D6',
  className = '',
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="80" cy="80" r="70" fill="none" stroke={color} strokeWidth="2" />
      <circle cx="80" cy="80" r="60" fill="none" stroke={color} strokeWidth="1" />
      <path id="sealArc" d="M 80,20 A 60,60 0 1 1 79.9,20" fill="none" />
      <text
        fontFamily="Courier Prime, monospace"
        fontSize="7.6"
        letterSpacing="1.8"
        fill={color}
      >
        <textPath href="#sealArc" startOffset="1%">
          MARGINALIA · NOTES FROM THE MARGIN ·
        </textPath>
      </text>
      <NeemSprig fill={sprigColor} veinColor={veinColor} />
      <circle cx="82.8" cy="117" r="2" fill="#9C3427" />
    </svg>
  );
}

function NeemSprig({ fill, veinColor }: { fill: string; veinColor: string }) {
  const anchors = [
    { x: 2.6, y: 26 },
    { x: 1.6, y: 15 },
    { x: -0.6, y: 3 },
    { x: -2.2, y: -9 },
    { x: -1.6, y: -21 },
    { x: -0.4, y: -31 },
  ];
  const scales = [1.0, 0.92, 0.84, 0.74, 0.62, 0.5];

  return (
    <g transform="translate(80,84)">
      <path
        d="M0,34 C4,12 -3,-10 0,-38"
        fill="none"
        stroke={fill}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {anchors.map((a, i) => (
        <g key={i}>
          <Leaflet x={a.x} y={a.y} angleDeg={-52} scale={scales[i]} mirror={false} fill={fill} veinColor={veinColor} />
          <Leaflet x={a.x} y={a.y} angleDeg={52} scale={scales[i]} mirror={true} fill={fill} veinColor={veinColor} />
        </g>
      ))}
      {/* tip leaflet */}
      <g transform="translate(0,-38) scale(0.55)">
        <path d="M0,0 C4,-9 6,-19 2,-29 C-2,-20 -3,-9 -1,-1 Z" fill={fill} />
        <path d="M-0.3,-2 C1,-11 2,-20 1,-27" fill="none" stroke={veinColor} strokeWidth="0.7" />
      </g>
    </g>
  );
}

function Leaflet({
  x,
  y,
  angleDeg,
  scale,
  mirror,
  fill,
  veinColor,
}: {
  x: number;
  y: number;
  angleDeg: number;
  scale: number;
  mirror: boolean;
  fill: string;
  veinColor: string;
}) {
  return (
    <g transform={`translate(${x},${y}) rotate(${angleDeg}) scale(${scale * (mirror ? -1 : 1)},${scale})`}>
      <path d="M0,0 C4,-9 6,-19 2,-29 C-2,-20 -3,-9 -1,-1 Z" fill={fill} />
      <path d="M-0.3,-2 C1,-11 2,-20 1,-27" fill="none" stroke={veinColor} strokeWidth="0.7" />
    </g>
  );
}
