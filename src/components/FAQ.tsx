import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: '需要押金吗？',
    a: '信用分达标即可享受免押金租赁。具体请添加客服微信，我们根据您的信用情况评估。',
  },
  {
    q: '发货用什么快递？多久能到？',
    a: '默认顺丰包邮发货，当天 16:00 前下单当天发出。全国大部分地区 1-2 天送达。',
  },
  {
    q: '设备损坏了怎么办？',
    a: '小磕碰正常使用痕迹无需赔付。如遇严重损坏，我们提供官方维修渠道，按实际维修费用协商处理，不会有天价赔偿。',
  },
  {
    q: '收到设备后不会用怎么办？',
    a: '我们提供一对一的线上使用指导，从开机、基础操作到拍摄技巧，全程帮你快速上手。',
  },
  {
    q: '租赁时间怎么算？',
    a: '按自然日计算，发货当天不算，从您签收当天开始计算租期。归还以快递揽收时间为准。',
  },
  {
    q: '可以续租吗？',
    a: '当然可以。只需联系客服确认设备档期，续租按原价计算，灵活方便。',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.02em] text-[var(--color-text)] mb-3">
            常见问题
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-[16px] bg-[var(--color-card)] overflow-hidden"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer border-none bg-transparent"
              >
                <span className="text-[15px] font-medium text-[var(--color-text)] pr-4">
                  {faq.q}
                </span>
                <motion.span
                  className="text-[var(--color-text-secondary)] text-lg flex-shrink-0"
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
