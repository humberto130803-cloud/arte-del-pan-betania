import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaClock, FaWhatsapp } from 'react-icons/fa'
import siteConfig from '../siteConfig'

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 bg-[#3E1C00]">
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
            Visítanos
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white leading-tight"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Siempre hay un lugar{' '}
            <span className="text-[#F5A623]">para ti</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="bg-white/8 border border-white/15 rounded-2xl p-5 flex gap-4">
              <div className="bg-[#F5A623] rounded-xl p-3 flex-shrink-0">
                <FaMapMarkerAlt className="text-[#3E1C00]" size={20} />
              </div>
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">Dirección</p>
                <p className="text-white font-semibold">{siteConfig.direccion}</p>
                <a
                  href="https://maps.google.com/?q=Arte+del+Pan+Betania+Panama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5A623] text-sm hover:underline mt-1 inline-block"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white/8 border border-white/15 rounded-2xl p-5 flex gap-4">
              <div className="bg-[#F5A623] rounded-xl p-3 flex-shrink-0">
                <FaPhone className="text-[#3E1C00]" size={20} />
              </div>
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">Teléfono</p>
                <a
                  href={`tel:+507${siteConfig.telefono.replace('-', '')}`}
                  className="text-white font-semibold hover:text-[#F5A623] transition-colors"
                >
                  {siteConfig.telefono}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/8 border border-white/15 rounded-2xl p-5 flex gap-4">
              <div className="bg-[#F5A623] rounded-xl p-3 flex-shrink-0">
                <FaClock className="text-[#3E1C00]" size={20} />
              </div>
              <div className="flex-1">
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">Horario</p>
                <div className="space-y-2">
                  {siteConfig.horarios.map((h, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-white/80 text-sm">{h.dia}</span>
                      <span className="text-[#F5A623] text-sm font-semibold">{h.hora}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/40 text-xs mt-3 italic">
                  * Horario completo por confirmar. Contáctanos para más información.
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#2ECC71] hover:bg-[#27AE60] text-white font-bold text-lg px-6 py-4 rounded-2xl transition-all hover:scale-105 w-full"
            >
              <FaWhatsapp size={22} />
              Confirmar horario por WhatsApp
            </a>
          </motion.div>

          {/* Map column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3!2d-79.5362!3d8.9824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8e7c28b3a3b%3A0x0!2sBetania%2C+Panama!5e0!3m2!1ses!2spa!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Arte del Pan Betania"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
