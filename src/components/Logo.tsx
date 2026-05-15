interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { main: 'text-lg', sub: 'text-[10px]' },
  md: { main: 'text-xl', sub: 'text-[11px]' },
  lg: { main: 'text-3xl sm:text-4xl', sub: 'text-xs sm:text-sm' },
}

export default function Logo({ size = 'md' }: LogoProps) {
  const s = sizes[size]
  return (
    <div className="flex items-baseline gap-1.5 select-none" style={{ fontFamily: `-apple-system, "PingFang SC", "Microsoft YaHei", sans-serif` }}>
      <span className={`${s.main} font-extrabold tracking-[-0.03em] text-[var(--color-text)]`}>
        多米摄影
      </span>
      <span className={`${s.sub} font-semibold tracking-[0.15em] uppercase text-[var(--color-accent)] opacity-70`}>
        DJI
      </span>
    </div>
  )
}
