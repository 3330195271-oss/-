interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { w: 160, h: 56 },
  md: { w: 240, h: 84 },
  lg: { w: 360, h: 126 },
}

export default function Logo({ size = 'md' }: LogoProps) {
  const { w, h } = sizes[size]
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 400 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Top decorative line */}
      <line x1="140" y1="16" x2="260" y2="16" stroke="var(--color-text)" strokeWidth="0.3" opacity="0.25" />

      {/* Main text: 多米摄影 */}
      <text
        x="200"
        y="68"
        fontFamily="-apple-system, 'PingFang SC', 'Noto Serif SC', 'STSong', 'SimSun', 'Microsoft YaHei', serif"
        fontSize="44"
        fontWeight="200"
        fill="var(--color-text)"
        textAnchor="middle"
        letterSpacing="8"
      >
        多米摄影
      </text>

      {/* Bottom line */}
      <line x1="100" y1="84" x2="300" y2="84" stroke="var(--color-text)" strokeWidth="0.3" opacity="0.18" />

      {/* Subtitle */}
      <text
        x="200"
        y="108"
        fontFamily="-apple-system, 'PingFang SC', 'Helvetica Neue', 'Arial', sans-serif"
        fontSize="9"
        fontWeight="300"
        fill="var(--color-text-secondary)"
        textAnchor="middle"
        letterSpacing="5"
        opacity="0.6"
      >
        DUOMI_DJI_RENTAL
      </text>

      {/* Ornament dots */}
      <circle cx="370" cy="10" r="1" fill="var(--color-text)" opacity="0.18" />
      <circle cx="370" cy="18" r="0.6" fill="var(--color-text)" opacity="0.12" />
      <circle cx="370" cy="26" r="0.3" fill="var(--color-text)" opacity="0.08" />
    </svg>
  )
}
