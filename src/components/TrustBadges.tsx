import { motion } from 'framer-motion'

const badges = [
  {
    icon: '🛡️',
    title: '正品保障',
    desc: '全部设备均为大疆官方正品，支持序列号查验，品质有保证',
  },
  {
    icon: '💳',
    title: '免押金',
    desc: '信用分达标即可享受免押金租赁，降低使用门槛，轻松上手',
  },
  {
    icon: '🎓',
    title: '全程指导',
    desc: '从开机设置到拍摄技巧，一对一线上指导，新手也能拍出大片',
  },
  {
    icon: '🚚',
    title: '极速发货',
    desc: '下单后当天发货，顺丰包邮，让你最快速度拿到设备开始创作',
  },
]

export default function TrustBadges() {
  return (
    <section className="py-28 sm:py-36 bg-[var(--color-card)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.02em] text-[var(--color-text)] mb-3">
            为什么选择我们
          </h2>
          <p className="text-[17px] text-[var(--color-text-secondary)]">
            用心服务每一位创作者
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              className="text-center p-8 rounded-[20px] bg-[var(--color-bg)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl mb-4">{badge.icon}</div>
              <h3 className="text-base font-semibold text-[var(--color-text)] mb-2">
                {badge.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {badge.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
