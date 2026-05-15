import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const BASE = import.meta.env.BASE_URL

const products = [
  {
    id: 'pocket3',
    name: 'DJI Pocket 3',
    tagline: '经典全能，入门首选',
    specs: ['1英寸 CMOS', '4K/120fps', '三轴云台', '2英寸旋转屏'],
    price: '¥8 起/天',
    route: '/pocket3',
    img: `${BASE}images/products/pocket3.png`,
  },
  {
    id: 'pocket4',
    name: 'DJI Pocket 4',
    tagline: '全新升级，专业创作',
    specs: ['1英寸 CMOS', '4K/240fps', '智能跟随 7.0', '107GB 内置存储'],
    price: '¥20 起/天',
    route: '/pocket4',
    img: `${BASE}images/products/pocket4.png`,
  },
]

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
              className="group relative overflow-hidden rounded-[20px] bg-[var(--color-card)] p-8 sm:p-10 text-left cursor-pointer border-none w-full transition-all duration-500 hover:scale-[1.02]"
              style={{
                boxShadow: 'var(--shadow-card)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ boxShadow: 'var(--shadow-card-hover)' }}
            >
              {/* Product image */}
              <div className="mb-8 flex justify-center py-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-40 h-40 sm:w-48 sm:h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                />
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
                    className="inline-block px-3 py-1 text-xs rounded-full bg-[var(--color-text)]/5 text-[var(--color-text-secondary)]"
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
