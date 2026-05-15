import { motion } from 'framer-motion'

interface RentalCardProps {
  title: string
  subtitle: string
  price: string
  features: string[]
  recommended?: boolean
  onClick: () => void
}

export default function RentalCard({ title, subtitle, price, features, recommended, onClick }: RentalCardProps) {
  return (
    <motion.div
      className={`relative rounded-[20px] p-8 sm:p-10 flex flex-col cursor-pointer group border-2 transition-all duration-300 ${
        recommended
          ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/3'
          : 'border-transparent bg-[var(--color-card)]'
      }`}
      style={{ boxShadow: 'var(--shadow-card)' }}
      whileHover={{ scale: 1.02, boxShadow: 'var(--shadow-card-hover)' }}
      onClick={onClick}
    >
      {recommended && (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)] text-white">
          推荐
        </span>
      )}

      <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">
        {title}
      </h3>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        {subtitle}
      </p>

      <div className="mb-6">
        <span className="text-[28px] font-bold text-[var(--color-text)]">{price}</span>
        <span className="text-sm text-[var(--color-text-secondary)]"> /天</span>
      </div>

      <ul className="flex-1 space-y-3 mb-8">
        {features.map(f => (
          <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
            <span className="text-[var(--color-accent)] mt-0.5 flex-shrink-0">✓</span>
            {f}
          </li>
        ))}
      </ul>

      <button
        className={`w-full h-12 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer border-none ${
          recommended
            ? 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]'
            : 'bg-[var(--color-text)]/5 text-[var(--color-text)] hover:bg-[var(--color-text)]/10'
        }`}
      >
        立即租赁
      </button>
    </motion.div>
  )
}
