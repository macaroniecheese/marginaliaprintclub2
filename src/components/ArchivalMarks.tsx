/**
 * ArchivalMarks — sparse, intentional notebook details
 * for a museum-catalogue / artist's-notebook aesthetic.
 *
 * All marks are small, monochrome, and positioned to feel like
 * real catalog annotations — not decoration.
 */

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

/* ── Registration mark (crosshair circle) ── */
export function RegistrationMark({
  className = '',
  size = 14,
  color = 'currentColor',
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      className={className}
      style={{ color }}
      fill="none"
    >
      <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="0.7" />
      <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="0.5" />
      <line x1="0" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

/* ── Crop mark (corner bracket) ── */
export function CropMark({
  position = 'top-left',
  size = 16,
  color = 'rgba(26,26,26,0.3)',
}: {
  position?: Position;
  size?: number;
  color?: string;
}) {
  const rotations: Record<Position, string> = {
    'top-left': 'rotate(0deg)',
    'top-right': 'rotate(90deg)',
    'bottom-right': 'rotate(180deg)',
    'bottom-left': 'rotate(270deg)',
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      style={{ transform: rotations[position], color }}
    >
      <path d="M0,8 L4,8 M8,0 L8,4" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
}

/* ── Catalog label (tiny monospace number) ── */
export function CatalogLabel({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-[10px] tracking-[0.08em] uppercase text-ink-faint ${className}`}
    >
      {children}
    </span>
  );
}

/* ── Date stamp ── */
export function DateStamp({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-[10px] tracking-[0.06em] text-ink-faint ${className}`}
    >
      {children}
    </span>
  );
}

/* ── Margin note (handwritten annotation) ── */
export function MarginNote({
  children,
  className = '',
  rotate = -2,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <span
      className={`font-script text-lg text-accent leading-tight inline-block ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}

/* ── Corner marks (four crop marks around a container) ── */
export function CornerMarks({ color = 'rgba(26,26,26,0.25)' }: { color?: string }) {
  return (
    <>
      <div className="absolute top-2 left-2 pointer-events-none">
        <CropMark position="top-left" color={color} />
      </div>
      <div className="absolute top-2 right-2 pointer-events-none">
        <CropMark position="top-right" color={color} />
      </div>
      <div className="absolute bottom-2 left-2 pointer-events-none">
        <CropMark position="bottom-left" color={color} />
      </div>
      <div className="absolute bottom-2 right-2 pointer-events-none">
        <CropMark position="bottom-right" color={color} />
      </div>
    </>
  );
}

/* ── Section number (oversized faded numeral) ── */
export function SectionNumber({
  num,
  className = '',
}: {
  num: string;
  className?: string;
}) {
  return (
    <span
      className={`font-display italic font-light text-[8rem] md:text-[12rem] leading-none text-ink/[0.06] select-none pointer-events-none ${className}`}
    >
      {num}
    </span>
  );
}
