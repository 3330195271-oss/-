import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BASE = import.meta.env.BASE_URL

const images = [
  { src: `${BASE}images/gallery/DJI_20260515131141_0061_D.JPG`, alt: 'Pocket 实拍样片 1' },
  { src: `${BASE}images/gallery/DJI_20260515131302_0063_D.JPG`, alt: 'Pocket 实拍样片 2' },
  { src: `${BASE}images/gallery/DJI_20260515131355_0064_D.JPG`, alt: 'Pocket 实拍样片 3' },
  { src: `${BASE}images/gallery/wechat_01.jpg`, alt: '朋友圈宣传图 1' },
  { src: `${BASE}images/gallery/wechat_02.jpg`, alt: '朋友圈宣传图 2' },
  { src: `${BASE}images/gallery/wechat_03.jpg`, alt: '朋友圈宣传图 3' },
]

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.02em] text-[var(--color-text)] mb-3">
            样片展示
          </h2>
          <p className="text-[17px] text-[var(--color-text-secondary)]">
            用 Pocket 记录精彩瞬间
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              onClick={() => setSelected(i)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border-none p-0 group bg-[var(--color-text-secondary)]/5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white text-lg hover:bg-white/20 transition-colors cursor-pointer border-none z-10"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <motion.img
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[80vh] rounded-2xl object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            />
            <p className="mt-4 text-sm text-white/60">
              {images[selected].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
