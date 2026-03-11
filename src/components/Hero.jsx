import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import siteConfig from '../siteConfig'

const panDelDia = [
  'Pan de queso',
  'Pan de mantequilla',
  'Empanada colombiana',
  'Croissant dorado',
  'Pan artesanal',
  'Pandebono',
]

export default function Hero() {
  const [panIndex, setPanIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPanIndex((prev) => (prev + 1) % panDelDia.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden isolate"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80)',
        }}
      />
      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3E1C00]/85 via-[#3E1C00]/70 to-[#3E1C00]/90" />

      {/* Decorative diagonal golden bar */}
      <div
        className="absolute top-0 right-0 w-64 h-full opacity-10"
        style={{
          background:
            'linear-gradient(135deg, transparent 40%, #F5A623 40%, #F5A623 60%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#F5A623]/20 border border-[#F5A623]/50 text-[#F5A623] text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
        >
          ⭐ 4.5 en Google · Betania, Panamá
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white leading-tight mb-3"
          style={{ fontFamily: 'Fraunces, serif' }}
        >
          Pan fresco,{' '}
          <span className="text-[#F5A623]">todos los días.</span>
        </motion.h1>

        {/* Rotating pan del día */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="text-white/60 text-lg">Hoy te recomendamos:</span>
          <div className="relative overflow-hidden h-8">
            <motion.span
              key={panIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="block text-lg font-bold text-[#F5A623]"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              🍞 {panDelDia[panIndex]}
            </motion.span>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Panadería auténtica en el corazón de Betania. Pan artesanal, dulces frescos, productos colombianos y café — desde el amanecer.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#2ECC71] hover:bg-[#27AE60] text-white font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-900/30"
          >
            <FaWhatsapp size={20} />
            Escríbenos ahora
          </a>
          <a
            href="#ubicacion"
            className="flex items-center gap-2 border-2 border-[#F5A623] text-[#F5A623] font-bold text-lg px-8 py-4 rounded-full hover:bg-[#F5A623] hover:text-[#3E1C00] transition-all"
          >
            <FaMapMarkerAlt size={18} />
            Cómo llegar
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/50 text-sm"
        >
          <span>✅ Abre desde el amanecer</span>
          <span>✅ Precios económicos</span>
          <span>✅ Productos colombianos</span>
          <span>✅ Estacionamiento gratis</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-[#F5A623]/50 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-2 bg-[#F5A623]/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
