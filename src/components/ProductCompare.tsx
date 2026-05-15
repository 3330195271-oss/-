import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const products = [
  {
    id: 'pocket3',
    name: 'DJI Pocket 3',
    tagline: '经典全能，入门首选',
    specs: ['1英寸 CMOS', '4K/120fps', '三轴云台', '2英寸旋转屏'],
    price: '¥8 起/天',
    gradient: 'from-[#e8e8ed] to-[#d2d2d7] dark:from-[#2a2a2d] dark:to-[#1c1c1f]',
    route: '/pocket3',
    color: '#c8c8d0',
  },
  {
    id: 'pocket4',
    name: 'DJI Pocket 4',
    tagline: '全新升级，专业创作',
    specs: ['1英寸 CMOS', '4K/240fps', '智能跟随 7.0', '107GB 内置存储'],
    price: '¥20 起/天',
    gradient: 'from-[#e3e8f0] to-[#cdd5e0] dark:from-[#1c2230] dark:to-[#141820]',
    route: '/pocket4',
    color: '#bcc8d8',
  },
]

function ProductIllustration({ variant }: { variant: 'pocket3' | 'pocket4' }) {
  const is3 = variant === 'pocket3'
  return (
    <div className="relative w-16 h-28 mx-auto">
      {/* Body */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-24 rounded-xl bg-gradient-to-b ${is3 ? 'from-[#c0c0c8] to-[#a0a0a8]' : 'from-[#b0b8c8] to-[#8890a8]'} dark:${is3 ? 'from-[#4a4a50] to-[#3a3a40]' : 'from-[#3a4050] to-[#2a3040]'}`}>
        {/* Screen */}
        <div className={`absolute top-3 left-1/2 -translate-x-1/2 w-8 h-12 rounded-md bg-[#1a1a1f] flex items-center justify-center`}>
          <div className="w-6 h-9 rounded-sm bg-[#0a0a0f] flex items-center justify-center">
            <span className="text-[6px] text-white/30">P{is3 ? '3' : '4'}</span>
          </div>
        </div>
        {/* Lens */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#1a1a1f] flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-[#3a3a50] dark:bg-[#5a5a70]" />
        </div>
      </div>
    </div>
  )
}

export default function ProductCompare() {
  const navigate = useNavigate()

  return (
    <section id="products" className="py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.02em] text-[var(--color-text)] mb-3">
            选择你的 Pocket
          </h2>
          <p className="text-[17px] text-[var(--color-text-secondary)]">
            两款专业云台相机，总有一款适合你
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {products.map((product, i) => (
            <motion.button
              key={product.id}
              onClick={() => navigate(product.route)}
              className={`group relative overflow-hidden rounded-[20px] bg-gradient-to-br ${product.gradient} p-8 sm:p-10 text-left cursor-pointer border-none w-full transition-all duration-500 hover:scale-[1.02]`}
              style={{
                boxShadow: 'var(--shadow-card)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ boxShadow: 'var(--shadow-card-hover)' }}
            >
              {/* Product illustration */}
              <div className="mb-8 flex justify-center py-4">
                <ProductIllustration variant={product.id as 'pocket3' | 'pocket4'} />
              </div>

              <h3 className="text-xl font-semibold text-[var(--color-text)] mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                {product.tagline}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {product.specs.map(spec => (
                  <span
                    key={spec}
                    className="inline-block px-3 py-1 text-xs rounded-full bg-white/40 dark:bg-white/5 text-[var(--color-text-secondary)]"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-[var(--color-accent)]">
                  {product.price}
                </span>
                <span className="text-sm text-[var(--color-text-secondary)] group-hover:translate-x-1 transition-transform duration-300">
                  了解详情 →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
