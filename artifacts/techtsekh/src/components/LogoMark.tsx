import React from 'react';

interface LogoMarkProps {
  size?: number;
  squareColor?: string;
  markColor?: string;
  variant?: 'light' | 'dark';
  showText?: boolean;
  textSize?: string;
}

export function LogoIcon({
  size = 36,
  squareColor,
  markColor,
}: {
  size?: number;
  squareColor?: string;
  markColor?: string;
}) {
  const sq = squareColor ?? 'hsl(var(--accent-blue))';
  const mk = markColor ?? 'hsl(var(--accent-warm))';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer square */}
      <rect x="2" y="2" width="36" height="36" rx="5" stroke={sq} strokeWidth="2.5" fill="none" />
      {/* Inner mark: Γ-shape circuit connector (horizontal then vertical) */}
      <path
        d="M11 14 L26 14 L26 28"
        stroke={mk}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Dots at connector endpoints */}
      <circle cx="11" cy="14" r="2.5" fill={mk} />
      <circle cx="26" cy="28" r="2.5" fill={mk} />
    </svg>
  );
}

export function LogoMark({
  variant = 'light',
  size = 36,
  showText = true,
  textSize = 'text-xl',
}: LogoMarkProps) {
  const squareColor = variant === 'dark' ? '#ffffff' : 'hsl(var(--accent-blue))';
  const textColor = variant === 'dark' ? 'text-white' : 'text-[hsl(var(--accent-blue))]';

  return (
    <div className="flex items-center gap-2.5">
      <LogoIcon size={size} squareColor={squareColor} />
      {showText && (
        <span className={`font-heading font-bold tracking-tight ${textSize} ${textColor}`}>
          ТЕХЦЕХ
        </span>
      )}
    </div>
  );
}

export default LogoMark;
