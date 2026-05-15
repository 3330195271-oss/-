import { motion } from 'framer-motion'
import Logo from './Logo'

const BASE = import.meta.env.BASE_URL

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-[90vh] flex items-center pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="mb-6 flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Logo size="lg" />
            </motion.div>
            <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.12] font-bold tracking-[-0.03em] text-[var(--color-text)] mb-5">
              随手记录，轻松创作
            </h1>
            <p className="text-[17px] sm:text-[19px] leading-relaxed text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto lg:mx-0">
              DJI Pocket 3 & Pocket 4 租赁
              <br />
              正品保障 · 免押金 · 全程指导 · 极速发货
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo('#products')}
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium hover:brightness-110 transition-all duration-200 cursor-pointer border-none"
              >
                查看套餐
              </button>
              <button
                onClick={() => scrollTo('#products')}
                className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)] text-sm font-medium hover:bg-[var(--color-accent)] hover:text-white transition-all duration-200 cursor-pointer bg-transparent"
              >
                立即租赁
              </button>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative w-[280px] h-[300px] sm:w-[340px] sm:h-[380px]">
              <motion.div
                className="absolute left-0 top-6 w-[170px] h-[220px] sm:w-[200px] sm:h-[260px] rounded-[24px] bg-[var(--color-card)] flex items-center justify-center overflow-hidden z-20 p-3"
                style={{ boxShadow: 'var(--shadow-card-hover)' }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src={`${BASE}images/products/pocket3.jpg`}
                  alt="DJI Pocket 3"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                className="absolute right-0 bottom-6 w-[170px] h-[220px] sm:w-[200px] sm:h-[260px] rounded-[24px] bg-[var(--color-card)] flex items-center justify-center overflow-hidden z-10 p-3"
                style={{ boxShadow: 'var(--shadow-card)' }}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <img
                  src={`${BASE}images/products/pocket4.jpg`}
                  alt="DJI Pocket 4"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
