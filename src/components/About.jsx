import { motion } from 'framer-motion'
import { FaHeart, FaStar, FaClock } from 'react-icons/fa'

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80"
                alt="Interior de Arte del Pan"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E1C00]/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 rounded-2xl p-3 flex items-center gap-3">
                  <div className="bg-[#F5A623] rounded-full p-2">
                    <FaStar className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="text-[#3E1C00] font-bold text-sm">Calificación Google</p>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={12}
                          className={i < 4 ? 'text-[#F5A623]' : 'text-gray-300'}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">4.5 / 5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-[#C0392B] text-white rounded-full w-20 h-20 flex flex-col items-center justify-center text-center shadow-lg">
              <span className="text-lg font-black" style={{ fontFamily: 'Fraunces, serif' }}>
                🇨🇴
              </span>
              <span className="text-[9px] font-bold leading-tight">PRODUCTOS<br/>COLOMBIANOS</span>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-[#F5A623]/20 text-[#3E1C00] text-sm font-bold px-4 py-1 rounded-full mb-4">
              ¿Quiénes somos?
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-[#3E1C00] leading-tight mb-6"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              La panadería del barrio que{' '}
              <span className="text-[#F5A623]">todos conocen</span>
            </h2>
            <p className="text-[#3E1C00]/75 text-lg leading-relaxed mb-6">
              En Arte del Pan somos más que una panadería — somos parte del barrio. Cada mañana, desde muy temprano, nuestro local se llena del aroma del pan recién horneado y del café bien preparado.
            </p>
            <p className="text-[#3E1C00]/70 leading-relaxed mb-8">
              Nuestra clientela fiel sabe que aquí encuentra variedad, precio justo y una atención genuinamente amable. No somos un lugar de lujo — somos un lugar auténtico y confiable, en el corazón de Betania.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {[
                { icon: FaClock, title: 'Desde el amanecer', desc: 'Abrimos muy temprano para los madrugadores y trabajadores del sector.' },
                { icon: FaHeart, title: 'Atención de calidad', desc: 'Personal amable que hace sentir a cada cliente como en casa.' },
                { icon: FaStar, title: 'Productos colombianos', desc: 'Importamos productos auténticos de Colombia, difíciles de encontrar en otro lugar.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="bg-[#F5A623] rounded-xl p-2.5 flex-shrink-0 mt-0.5">
                    <item.icon className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="font-bold text-[#3E1C00]">{item.title}</p>
                    <p className="text-[#3E1C00]/65 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
