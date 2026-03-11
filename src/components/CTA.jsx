import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import siteConfig from '../siteConfig'

export default function CTA() {
  return (
    <section className="py-20 bg-[#F5A623] relative overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      {/* Background bread image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?w=1200&q=80)',
        }}
      />

      {/* Decorative circles */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#3E1C00]/20 rounded-full" />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-[#3E1C00]/15 rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-5xl mb-4 block">🍞</span>
          <h2
            className="text-4xl md:text-5xl font-black text-[#3E1C00] leading-tight mb-4"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            ¿Ya sabes lo que vas a pedir hoy?
          </h2>
          <p className="text-[#3E1C00]/75 text-xl mb-10 max-w-2xl mx-auto">
            Escríbenos por WhatsApp o simplemente visítanos. Te esperamos con el pan más fresco de Betania.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#3E1C00] hover:bg-[#2a1200] text-white font-bold text-xl px-10 py-5 rounded-full transition-all hover:scale-105 shadow-xl"
            >
              <FaWhatsapp size={24} />
              Escríbenos ahora
            </a>
            <a
              href="#ubicacion"
              className="flex items-center gap-2 border-3 border-[#3E1C00] text-[#3E1C00] font-bold text-xl px-10 py-5 rounded-full hover:bg-[#3E1C00] hover:text-[#F5A623] transition-all"
            >
              📍 Cómo llegar
            </a>
          </div>

          <p className="mt-8 text-[#3E1C00]/60 text-sm">
            C. 74 Oeste, Betania, Panamá · Tel: {siteConfig.telefono}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
