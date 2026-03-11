import { motion } from 'framer-motion'
import siteConfig from '../siteConfig'

export default function Services() {
  return (
    <section id="productos" className="py-20 bg-[#3E1C00]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#F5A623]/20 border border-[#F5A623]/40 text-[#F5A623] text-sm font-bold px-4 py-1 rounded-full mb-4">
            Lo que ofrecemos
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white leading-tight"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Todo lo que necesitas,{' '}
            <span className="text-[#F5A623]">recién hecho</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Desde el pan más clásico hasta productos colombianos importados — todo fresco, todo a buen precio.
          </p>
        </motion.div>

        {/* Dynamic grid — alternating card sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.servicios.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative rounded-3xl overflow-hidden cursor-default ${
                i === 0 || i === 5 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Photo */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={s.imagen}
                  alt={s.nombre}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E1C00] via-[#3E1C00]/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{s.emoji}</span>
                  <h3
                    className="text-xl font-black text-white"
                    style={{ fontFamily: 'Fraunces, serif' }}
                  >
                    {s.nombre}
                  </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{s.descripcion}</p>
              </div>

              {/* Hover accent */}
              <div className="absolute top-4 right-4 bg-[#F5A623] text-[#3E1C00] text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                Ver más
              </div>
            </motion.div>
          ))}
        </div>

        {/* Colombian products highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 relative rounded-3xl overflow-hidden isolate"
          style={{ WebkitTransform: 'translateZ(0)' }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=1200&q=80)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#C0392B]/90 to-[#3E1C00]/90" />
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-6">
            <span className="text-7xl">🇨🇴</span>
            <div>
              <h3
                className="text-3xl font-black text-white mb-2"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Productos colombianos auténticos
              </h3>
              <p className="text-white/80 max-w-2xl">
                Somos uno de los pocos lugares en Betania donde encontrarás productos importados directamente de Colombia. Pandebono, buñuelos, obleas y mucho más — el sabor de Colombia en Panamá.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
