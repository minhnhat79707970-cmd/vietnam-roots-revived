// Hoa văn trống đồng SVG — dùng cho divider, decoration
export const DrumOrnament = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 20" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <line x1="0" y1="10" x2="60" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <circle cx="70" cy="10" r="2" stroke="currentColor" strokeWidth="0.7" />
    <path d="M75 10 L85 5 L85 15 Z" stroke="currentColor" strokeWidth="0.7" />
    <circle cx="100" cy="10" r="4" stroke="currentColor" strokeWidth="0.7" />
    <circle cx="100" cy="10" r="1.5" fill="currentColor" />
    <path d="M115 10 L125 5 L125 15 Z" stroke="currentColor" strokeWidth="0.7" />
    <circle cx="130" cy="10" r="2" stroke="currentColor" strokeWidth="0.7" />
    <line x1="140" y1="10" x2="200" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
  </svg>
);

export const SunStar = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <g stroke="currentColor" strokeWidth="0.8">
      {Array.from({ length: 14 }).map((_, i) => {
        const angle = (i * 360) / 14;
        const rad = (angle * Math.PI) / 180;
        const x1 = 50 + Math.cos(rad) * 12;
        const y1 = 50 + Math.sin(rad) * 12;
        const x2 = 50 + Math.cos(rad) * 38;
        const y2 = 50 + Math.sin(rad) * 38;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
      <circle cx="50" cy="50" r="10" fill="currentColor" />
      <circle cx="50" cy="50" r="44" />
      <circle cx="50" cy="50" r="48" opacity="0.4" />
    </g>
  </svg>
);
