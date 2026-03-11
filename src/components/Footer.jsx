import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'
import siteConfig from '../siteConfig'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1a0a00] text-white pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#F5A623]">
                <img
                  src="/logo.jpg"
                  alt="Arte del Pan"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-xl font-black text-[#F5A623]"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Arte del Pan
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed">
              Panadería artesanal en el corazón de Betania, Panamá. Pan fresco, dulces y productos colombianos desde el amanecer.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="font-black text-[#F5A623] mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              Navegación
            </h4>
            <ul className="space-y-2">
              {[
                ['Inicio', '#inicio'],
                ['Nosotros', '#nosotros'],
                ['Productos', '#productos'],
                ['Reseñas', '#resenas'],
                ['Ubicación', '#ubicacion'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/60 hover:text-[#F5A623] transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-black text-[#F5A623] mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#F5A623] mt-0.5 flex-shrink-0" size={14} />
                <span className="text-white/60 text-sm">{siteConfig.direccion}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#F5A623] flex-shrink-0" size={14} />
                <a
                  href={`tel:+507${siteConfig.telefono.replace('-', '')}`}
                  className="text-white/60 hover:text-[#F5A623] transition-colors text-sm"
                >
                  {siteConfig.telefono}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-[#2ECC71] flex-shrink-0" size={14} />
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#2ECC71] transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>© {year} Arte del Pan | Betania. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Desarrollado por{' '}
            <a
              href="https://axiomsais.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5A623] hover:underline"
            >
              Axiom Software &amp; AI Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
