interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { w: 160, h: 64 },
  md: { w: 240, h: 96 },
  lg: { w: 360, h: 144 },
}

export default function Logo({ size = 'md' }: LogoProps) {
  const { w, h } = sizes[size]
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 400 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Black background */}
      <rect width="400" height="160" fill="#000000" />

      {/* Top decorative line */}
      <line x1="140" y1="26" x2="260" y2="26" stroke="white" strokeWidth="0.3" opacity="0.3" />

      {/* Main text: 多米摄影 */}
      <text
        x="200"
        y="82"
        fontFamily="-apple-system, 'PingFang SC', 'Noto Serif SC', 'STSong', 'SimSun', 'Microsoft YaHei', serif"
        fontSize="44"
        fontWeight="200"
        fill="white"
        textAnchor="middle"
        letterSpacing="8"
      >
        多米摄影
      </text>

      {/* Bottom line */}
      <line x1="100" y1="100" x2="300" y2="100" stroke="white" strokeWidth="0.3" opacity="0.2" />

      {/* Subtitle */}
      <text
        x="200"
        y="124"
        fontFamily="-apple-system, 'PingFang SC', 'Helvetica Neue', 'Arial', sans-serif"
        fontSize="9"
        fontWeight="300"
        fill="white"
        textAnchor="middle"
        letterSpacing="5"
        opacity="0.6"
      >
        DUOMI_DJI_RENTAL
      </text>

      {/* Ornament dots - right side */}
      <circle cx="370" cy="20" r="1" fill="white" opacity="0.2" />
      <circle cx="370" cy="30" r="0.6" fill="white" opacity="0.15" />
      <circle cx="370" cy="40" r="0.3" fill="white" opacity="0.1" />
    </svg>
  )
}
