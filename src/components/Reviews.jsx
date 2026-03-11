import { motion } from 'framer-motion'
import { FaStar, FaGoogle } from 'react-icons/fa'
import siteConfig from '../siteConfig'

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 + 0.2, type: 'spring', stiffness: 300 }}
        >
          <FaStar
            size={16}
            className={i < count ? 'text-[#F5A623]' : 'text-gray-300'}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="resenas" className="py-20 bg-[#6B3A1F] relative overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?w=1200&q=80)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#F5A623]/20 border border-[#F5A623]/40 text-[#F5A623] text-sm font-bold px-4 py-1 rounded-full mb-4">
            Lo que dicen nuestros clientes
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white leading-tight"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            La gente habla,{' '}
            <span className="text-[#F5A623]">el pan enamora</span>
          </h2>

          {/* Google rating badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-6 py-3 rounded-2xl mt-6">
            <FaGoogle className="text-white" size={20} />
            <div>
              <div className="flex items-center gap-2">
                <span
                  className="text-2xl font-black text-[#F5A623]"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  4.5
                </span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={14}
                      className={i < 4 ? 'text-[#F5A623]' : 'text-gray-400'}
                    />
                  ))}
                </div>
              </div>
              <p className="text-white/60 text-xs">Calificación en Google Reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {siteConfig.resenas.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 hover:bg-white/15 transition-all hover:-translate-y-1 duration-300"
            >
              {/* Stars */}
              <Stars count={r.estrellas} />

              {/* Quote */}
              <blockquote className="mt-4 text-white/85 text-sm leading-relaxed italic">
                "{r.texto}"
              </blockquote>

              {/* Reviewer */}
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F5A623] flex items-center justify-center text-[#3E1C00] font-black text-sm" style={{ fontFamily: 'Fraunces, serif' }}>
                  {r.nombre.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{r.nombre}</p>
                  {r.badge && (
                    <span className="text-[#F5A623] text-xs">{r.badge}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
