const GRID = [
  [1,1,1,1,1],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
];

export function PixelIcon({ cell = 10, gap = 2.5, color = '#4d8bff', dimColor = 'rgba(77,139,255,0.15)' }) {
  const step = cell + gap;
  const total = 5 * cell + 4 * gap;
  const r = cell * 0.18;

  return (
    <svg width={total} height={total} viewBox={`0 0 ${total} ${total}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {GRID.map((row, ri) =>
        row.map((filled, ci) => (
          <rect
            key={`${ri}-${ci}`}
            x={ci * step}
            y={ri * step}
            width={cell}
            height={cell}
            rx={r}
            fill={filled ? color : dimColor}
          />
        ))
      )}
    </svg>
  );
}

export default function Logo({ size = 1, dark = true, onClick }) {
  const cell   = 9 * size;
  const gap    = 2.2 * size;
  const fs     = 24 * size;
  const color  = dark ? '#4d8bff' : '#1b4fd8';
  const dim    = dark ? 'rgba(77,139,255,0.15)' : '#dce8ff';
  const tuCol  = dark ? '#ffffff'  : '#0d1117';
  const tiCol  = dark ? '#9ca3af'  : '#6b7280';

  return (
    <div
      onClick={onClick}
      style={{ display: 'flex', alignItems: 'center', gap: 13 * size, cursor: onClick ? 'pointer' : 'default' }}
    >
      <PixelIcon cell={cell} gap={gap} color={color} dimColor={dim} />
      <div style={{ lineHeight: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', fontFamily: "'Space Grotesk', sans-serif", fontSize: fs, letterSpacing: -0.5 }}>
          <span style={{ fontWeight: 700, color: tuCol }}>Tu</span>
          <span style={{ fontWeight: 300, color: tiCol }}>Tienda</span>
          <span style={{ fontWeight: 700, color }}>24</span>
        </div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 7.5 * size, color: '#334155', letterSpacing: 3, textTransform: 'uppercase', marginTop: 4 * size }}>
          Agencia Digital
        </div>
      </div>
    </div>
  );
}
