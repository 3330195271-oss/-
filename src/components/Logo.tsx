const BASE = import.meta.env.BASE_URL

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'h-7',
  md: 'h-9',
  lg: 'h-14 sm:h-16',
}

export default function Logo({ size = 'md' }: LogoProps) {
  const h = sizes[size]
  return (
    <img
      src={`${BASE}logo.svg`}
      alt="多米摄影"
      className={`${h} w-auto`}
    />
  )
}
