import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-16 bg-[var(--color-card)] border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Contact */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
              联系我们
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-1">
              📞 电话：18096403625
            </p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              💬 微信扫码添加好友，咨询租赁详情
            </p>
          </motion.div>

          {/* WeChat QR */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="w-36 h-36 rounded-2xl overflow-hidden bg-[var(--color-bg)] flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}images/ewm/wechat_qr.jpg`}
                alt="微信二维码"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-[var(--color-text-secondary)]">
              扫码添加微信
            </span>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)] text-center">
          <p className="text-xs text-[var(--color-text-secondary)]">
            &copy; {new Date().getFullYear()} 多米摄影. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
