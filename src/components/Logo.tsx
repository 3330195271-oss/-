interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { icon: 28, text: 'text-base' },
  md: { icon: 36, text: 'text-lg' },
  lg: { icon: 56, text: 'text-2xl' },
}

export default function Logo({ size = 'md' }: LogoProps) {
  const s = sizes[size]
  return (
    <div className="flex items-center gap-2.5" style={{ color: 'var(--color-accent)' }}>
      {/* Camera shutter icon */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer ring */}
        <circle
          cx="24" cy="24" r="21"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Shutter blades - 6 segments */}
        <path d="M24 6 L30 10 L24 24 Z" fill="currentColor" opacity="0.9" />
        <path d="M42 18 L38 24 L24 24 Z" fill="currentColor" opacity="0.75" />
        <path d="M42 30 L38 24 L24 24 Z" fill="currentColor" opacity="0.6" />
        <path d="M24 42 L18 38 L24 24 Z" fill="currentColor" opacity="0.45" />
        <path d="M6 30 L10 24 L24 24 Z" fill="currentColor" opacity="0.3" />
        <path d="M6 18 L10 24 L24 24 Z" fill="currentColor" opacity="0.15" />
        {/* Center dot */}
        <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.9" />
      </svg>
      <span className={`${s.text} font-bold tracking-[-0.02em] text-[var(--color-text)]`}>
        多米摄影
      </span>
    </div>
  )
}
