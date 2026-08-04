type Props = {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
};

export default function Caret({
  className = '',
  color = '#9C3427',
  width = 30,
  height = 52,
}: Props) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 30 52"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', marginBottom: '-0.14em' }}
    >
      <path
        d="M4,48 L15,20 L26,48"
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="rotate(7 15 34)"
      />
    </svg>
  );
}
