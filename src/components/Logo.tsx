interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { primary: 'text-lg', secondary: 'text-[8px]' },
  md: { primary: 'text-xl', secondary: 'text-[9px]' },
  lg: { primary: 'text-[42px] sm:text-[52px]', secondary: 'text-[11px] sm:text-xs' },
}

export default function Logo({ size = 'md' }: LogoProps) {
  const s = sizes[size]
  return (
    <div className="flex flex-col items-start leading-none gap-0.5 select-none">
      <span
        className={`${s.primary} font-black tracking-[-0.04em] text-[var(--color-text)]`}
        style={{ letterSpacing: '-0.04em' }}
      >
        多米摄影
      </span>
      <span
        className={`${s.secondary} font-semibold tracking-[0.25em] text-[var(--color-text-secondary)]`}
      >
        DUOMI·DJI RENTAL
      </span>
    </div>
  )
}
