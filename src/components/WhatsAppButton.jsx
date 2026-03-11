import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import siteConfig from '../siteConfig'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#2ECC71] rounded-full shadow-lg shadow-green-900/40 text-white"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 300 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#2ECC71]"
        animate={{ scale: [1, 1.4, 1.4], opacity: [0.7, 0, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
      />
      <FaWhatsapp size={26} />
    </motion.a>
  )
}
