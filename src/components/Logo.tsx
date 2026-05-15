interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { icon: 22, primary: 'text-lg', secondary: 'text-[8px]', gap: 'gap-2' },
  md: { icon: 28, primary: 'text-xl', secondary: 'text-[9px]', gap: 'gap-2.5' },
  lg: { icon: 44, primary: 'text-[42px] sm:text-[52px]', secondary: 'text-[11px] sm:text-xs', gap: 'gap-3' },
}

function ApertureIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className="flex-shrink-0"
      style={{ color: 'var(--color-accent)' }}
    >
      {/* Outer ring */}
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      {/* Inner ring */}
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
      {/* Aperture blades */}
      <path d="M20 4 L26 8 L20 20 Z" fill="currentColor" opacity="0.55" />
      <path d="M36 14 L32 18 L20 20 Z" fill="currentColor" opacity="0.45" />
      <path d="M36 26 L32 22 L20 20 Z" fill="currentColor" opacity="0.35" />
      <path d="M20 36 L14 32 L20 20 Z" fill="currentColor" opacity="0.25" />
      <path d="M4 26 L8 22 L20 20 Z" fill="currentColor" opacity="0.15" />
      <path d="M4 14 L8 18 L20 20 Z" fill="currentColor" opacity="0.08" />
      {/* Center dot */}
      <circle cx="20" cy="20" r="2.5" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

export default function Logo({ size = 'md' }: LogoProps) {
  const s = sizes[size]
  return (
    <div className={`flex items-center ${s.gap} select-none`}>
      <ApertureIcon size={s.icon} />
      <div className="flex flex-col leading-none gap-0.5">
        <span className={`${s.primary} font-black tracking-[-0.04em] text-[var(--color-text)]`}>
          多米摄影
        </span>
        <span className={`${s.secondary} font-semibold tracking-[0.25em] text-[var(--color-text-secondary)]`}>
          DUOMI·DJI RENTAL
        </span>
      </div>
    </div>
  )
}
