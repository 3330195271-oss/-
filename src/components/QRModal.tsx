import { motion, AnimatePresence } from 'framer-motion'

interface QRModalProps {
  open: boolean
  onClose: () => void
  qrImage: string
  productName: string
}

export default function QRModal({ open, onClose, qrImage, productName }: QRModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            className="relative bg-[var(--color-card)] rounded-[24px] p-8 sm:p-10 max-w-sm w-full text-center"
            style={{ boxShadow: 'var(--shadow-card-hover)' }}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-text)]/5 transition-colors cursor-pointer border-none bg-transparent text-lg"
            >
              ✕
            </button>

            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              {productName}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-6">
              请打开<strong>支付宝</strong>扫描下方二维码完成支付
            </p>

            <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden bg-[var(--color-bg)] flex items-center justify-center mb-4">
              <img
                src={qrImage}
                alt={`${productName} 支付宝二维码`}
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-xs text-[var(--color-text-secondary)]">
              下单后请联系客服确认订单
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
