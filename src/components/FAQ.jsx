import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import siteConfig from '../siteConfig'

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border border-white/15 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white/8 hover:bg-white/12 transition-colors"
      >
        <span className="font-semibold text-white">{item.pregunta}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-[#F5A623]"
        >
          <FaChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 pt-3 text-white/70 text-sm leading-relaxed bg-white/5">
              {item.respuesta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section className="py-20 bg-[#6B3A1F]">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-[#F5A623]/20 border border-[#F5A623]/40 text-[#F5A623] text-sm font-bold px-4 py-1 rounded-full mb-4">
            Preguntas frecuentes
          </span>
          <h2
            className="text-4xl font-black text-white"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            ¿Tienes dudas?{' '}
            <span className="text-[#F5A623]">Aquí respondemos</span>
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-3">
          {siteConfig.faq.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
