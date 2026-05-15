import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import ThemeToggle from '../components/ThemeToggle'
import RentalCard from '../components/RentalCard'
import QRModal from '../components/QRModal'

const plans = [
  {
    title: '标准版',
    subtitle: '107GB 内置存储，全新升级专业创作利器',
    price: '¥20',
    features: [
      'DJI Pocket 4 主机 ×1',
      '107GB 内置存储',
      '充电/数据线 ×1',
      '保护壳 ×1',
      '全程使用指导',
    ],
    recommended: true,
  },
]

export default function Pocket4() {
  const { theme, toggleTheme } = useTheme()
  const [qrOpen, setQrOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')

  const handleRent = (planName: string) => {
    setSelectedPlan(planName)
    setQrOpen(true)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-nav-bg)] backdrop-blur-xl border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <Link to="/" className="text-sm text-[var(--color-accent)] hover:underline no-underline">
            ← 返回首页
          </Link>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </nav>

      <main className="pt-12">
        <section className="py-20 sm:py-28">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-[36px] sm:text-[48px] font-bold tracking-[-0.02em] text-[var(--color-text)] mb-4">
                DJI Pocket 4
              </h1>
              <p className="text-[17px] text-[var(--color-text-secondary)] mb-10 leading-relaxed max-w-xl mx-auto">
                1 英寸 CMOS · 4K/240fps · 智能跟随 7.0 · 107GB 内置存储
                <br />
                全新升级，专业创作利器
              </p>
            </motion.div>

            <motion.div
              className="w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-16 rounded-[28px] bg-gradient-to-br from-[#e3e8f0] to-[#cdd5e0] dark:from-[#1c2230] dark:to-[#141820] flex items-center justify-center overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/products/pocket4.jpg`}
                alt="DJI Pocket 4"
                className="w-full h-full object-contain"
                onError={e => {
                  (e.target as HTMLImageElement).style.display = 'none'
                }}
              />
              <span className="text-sm text-[var(--color-text-secondary)] absolute">Pocket 4</span>
            </motion.div>
          </div>
        </section>

        {/* Plans */}
        <section className="pb-20 sm:pb-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[28px] sm:text-[36px] font-semibold text-[var(--color-text)] mb-2">
                选择租赁套餐
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)]">
                以下为租期 30 天的日均价格，实际价格以扫码后为准
              </p>
            </motion.div>

            <div className="max-w-sm mx-auto">
              {plans.map(plan => (
                <RentalCard
                  key={plan.title}
                  {...plan}
                  onClick={() => handleRent(plan.title)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <QRModal
        open={qrOpen}
        onClose={() => setQrOpen(false)}
        qrImage={`${import.meta.env.BASE_URL}images/pocket4/order_qr.jpg`}
        productName={`DJI Pocket 4 ${selectedPlan}`}
      />
    </>
  )
}
