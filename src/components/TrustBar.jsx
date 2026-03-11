import { motion } from 'framer-motion'

const stats = [
  { valor: '4.5', unidad: '/ 5', label: 'Google Reviews', icon: '⭐' },
  { valor: 'Desde', unidad: 'las 6am', label: 'Abrimos todos los días', icon: '🌅' },
  { valor: '100%', unidad: '', label: 'Productos frescos', icon: '🍞' },
  { valor: 'Precios', unidad: '', label: 'Económicos y accesibles', icon: '💰' },
]

export default function TrustBar() {
  return (
    <section className="bg-[#F5A623] py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-3xl mb-1">{s.icon}</span>
            <div className="flex items-baseline gap-1">
              <span
                className="text-2xl font-black text-[#3E1C00]"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                {s.valor}
              </span>
              {s.unidad && (
                <span className="text-sm font-bold text-[#3E1C00]/70">{s.unidad}</span>
              )}
            </div>
            <p className="text-xs font-semibold text-[#3E1C00]/80 mt-0.5">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
