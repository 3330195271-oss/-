interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { primary: 'text-lg', mark: 8, secondary: 'text-[8px]' },
  md: { primary: 'text-xl', mark: 10, secondary: 'text-[9px]' },
  lg: { primary: 'text-[42px] sm:text-[52px]', mark: 18, secondary: 'text-[11px] sm:text-xs' },
}

function FocusMark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className="inline-block flex-shrink-0"
      style={{ color: 'var(--color-accent)', verticalAlign: 'baseline' }}
    >
      {/* Crosshair / AF point */}
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <line x1="8" y1="2" x2="8" y2="5" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
      <line x1="8" y1="11" x2="8" y2="14" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
      <line x1="2" y1="8" x2="5" y2="8" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
      <line x1="11" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.2" opacity="0.9" />
    </svg>
  )
}

export default function Logo({ size = 'md' }: LogoProps) {
  const s = sizes[size]
  return (
    <div className="flex flex-col leading-none gap-0.5 select-none items-start">
      <span className={`${s.primary} font-black tracking-[-0.04em] text-[var(--color-text)] inline-flex items-center gap-1`}>
        多米摄影
        <span className="inline-flex items-center -mt-1">
          <FocusMark size={s.mark} />
        </span>
      </span>
      <span className={`${s.secondary} font-semibold tracking-[0.25em] text-[var(--color-text-secondary)]`}>
        DUOMI·DJI RENTAL
      </span>
    </div>
  )
}
