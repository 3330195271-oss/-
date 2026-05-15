import { motion } from 'framer-motion'

const steps = [
  {
    step: '01',
    title: '选择产品与套餐',
    desc: '挑选 Pocket 3 或 Pocket 4，对比标准版和全能版，选择最适合你的租赁方案',
    icon: '📋',
  },
  {
    step: '02',
    title: '扫码下单支付',
    desc: '打开支付宝扫描对应商品二维码，完成支付，方便快捷',
    icon: '📱',
  },
  {
    step: '03',
    title: '极速发货',
    desc: '支付确认后当天顺丰发货，包装严实，全程物流可追踪',
    icon: '📦',
  },
  {
    step: '04',
    title: '收货开拍',
    desc: '到手即用！我们提供全程使用指导，任何问题随时联系',
    icon: '🎬',
  },
]

export default function RentalSteps() {
  return (
    <section id="steps" className="py-28 sm:py-36 bg-[var(--color-card)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.02em] text-[var(--color-text)] mb-3">
            租赁流程
          </h2>
          <p className="text-[17px] text-[var(--color-text-secondary)]">
            四步到手，简单快捷
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              className="text-center p-8 rounded-[20px] bg-[var(--color-bg)] relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <span className="absolute top-4 left-6 text-[12px] font-bold text-[var(--color-accent)]/30 tracking-widest">
                {s.step}
              </span>
              <div className="text-4xl mb-4 mt-4">{s.icon}</div>
              <h3 className="text-base font-semibold text-[var(--color-text)] mb-2">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
