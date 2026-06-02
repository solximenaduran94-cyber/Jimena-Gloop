import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, Clock, Sparkles, Gift, Compass, Check, Copy } from 'lucide-react';
import type { CelebrationConfig } from '../types';

interface EventDetailsProps {
  config: CelebrationConfig;
  theme?: 'esmeralda' | 'dorado';
}

export default function EventDetails({ config, theme = 'esmeralda' }: EventDetailsProps) {
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-4 font-sans select-none">
      
      {/* Location card */}
      <motion.div
        className={`relative p-6 sm:p-8 rounded-2xl border border-[#c5a059]/30 hover:border-[#c5a059]/55 shadow-2xl backdrop-blur-md transition-all ${
          theme === 'dorado' ? 'bg-[#0d0d11]/95' : 'bg-[#0a170a]/90'
        }`}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3.5 mb-5">
          <div className="p-3 bg-[#c5a059]/10 border border-[#c5a059]/30 rounded-xl text-[#c5a059]">
            <MapPin className="w-5.5 h-5.5" />
          </div>
          <div>
            <h3 className="text-[#c5a059] font-sans font-medium text-base tracking-widest uppercase">Dónde & Cuándo</h3>
            <p className="text-white/50 text-xs">Los detalles de la cita principal</p>
          </div>
        </div>

        <div className="space-y-4 text-white">
          <div className="flex items-start gap-4">
            <Calendar className="w-5 h-5 text-[#c5a059] mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-sm sm:text-base font-serif italic text-white/90">Sábado 4 de Octubre de 2026</p>
              <p className="text-xs text-white/50">Una noche única en el Río de la Plata</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="w-5 h-5 text-[#c5a059] mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-sm sm:text-base font-serif italic text-white/90">A las 22:00 hrs</p>
              <p className="text-xs text-white/50">Rogamos puntualidad para el inicio del vals</p>
            </div>
          </div>

          <div className="flex items-start gap-4 pt-2">
            <Compass className="w-5 h-5 text-[#c5a059] mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-sm sm:text-base font-serif italic text-white/90">{config.locationName}</p>
              <p className="text-xs text-white/50">{config.locationAddress}</p>
            </div>
          </div>
        </div>

        {/* Custom Sophisticated Dark Stylized Map Mock */}
        <div className="mt-6 rounded-xl overflow-hidden border border-[#c5a059]/30 relative h-36 bg-[#030a03]">
          <div className={`absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b ${
            theme === 'dorado' ? 'from-[#0c0c10] to-[#030303]' : 'from-[#0a170a] to-[#030a03]'
          }`}>
            {/* Elegant dark grid */}
            <div className="w-full h-full relative opacity-60" style={{ backgroundImage: 'radial-gradient(rgba(197, 160, 89, 0.15) 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
              {/* Canal / harbor water lanes */}
              <div className="absolute top-[40%] left-0 right-0 h-6 bg-[#c5a059]/5 border-y border-[#c5a059]/10" />
              {/* Pin */}
              <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="flex h-3.5 w-3.5 relative mb-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a059] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#c5a059]"></span>
                </span>
                <span className="bg-[#0a170a] border border-[#c5a059] text-[#c5a059] text-[9px] uppercase tracking-[0.2em] font-bold px-2 py-0.5 rounded-xs shadow-md">
                  Madero Walk
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Overlay Link */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.locationName + ' ' + config.locationAddress)}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-[#c5a059] text-[#081a14] hover:bg-[#fdfcf0] font-bold text-xs rounded-full uppercase tracking-widest transition-all duration-300 shadow-lg cursor-pointer font-sans"
            >
              Ver mapa en Google Maps
            </a>
          </div>
        </div>
      </motion.div>

      {/* Dress Code & Gifts Card */}
      <div className="flex flex-col gap-6">
        
        {/* Dress Code */}
        <motion.div
          className={`p-6 sm:p-8 rounded-2xl border border-[#c5a059]/30 hover:border-[#c5a059]/55 shadow-2xl backdrop-blur-md transition-all ${
            theme === 'dorado' ? 'bg-[#0d0d11]/95' : 'bg-[#0a170a]/90'
          }`}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3.5 mb-4">
            <div className="p-3 bg-[#c5a059]/10 border border-[#c5a059]/30 rounded-xl text-[#c5a059]">
              <Sparkles className="w-5.5 h-5.5" />
            </div>
            <div>
              <h3 className="text-[#c5a059] font-sans font-medium text-base tracking-widest uppercase">Código de Vestimenta</h3>
              <p className="text-white/50 text-xs">Cómo vestir para la noche</p>
            </div>
          </div>

          <p className="text-white/80 text-sm leading-relaxed mb-4">
            {theme === 'dorado'
              ? 'La noche de gala se viste de etiqueta. Te invitamos a compartir esta noche tan sofisticada con tu mejor elegancia.'
              : 'La magia del Bayou se viste de gala. Te invitamos a compartir esta noche mágica bajo la luz de las luciérnagas.'}
          </p>

          <div className="p-4 rounded-xl bg-white/5 border border-[#c5a059]/30 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-white/95 font-medium font-serif italic text-sm">
                {theme === 'dorado' ? 'Gala de Etiqueta' : 'Gala y Elegancia'}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#c5a059] mt-0.5 font-sans font-semibold">
                {theme === 'dorado' ? 'Elegante Negro o Dorado' : 'Detalle en Verde o Dorado'}
              </span>
            </div>
            <span className="text-2xl">✨👗👔</span>
          </div>
        </motion.div>

        {/* Gifts info */}
        <motion.div
          className={`p-6 sm:p-8 rounded-2xl border border-[#c5a059]/30 hover:border-[#c5a059]/55 shadow-2xl backdrop-blur-md relative overflow-hidden flex flex-col justify-between flex-1 transition-all ${
            theme === 'dorado' ? 'bg-[#0d0d11]/95' : 'bg-[#0a170a]/90'
          }`}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          {/* Gold crown seal in background */}
          <div className="absolute -right-6 -bottom-6 text-yellow-500/5 text-9xl pointer-events-none font-serif select-none">👑</div>

          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-3 bg-[#c5a059]/10 border border-[#c5a059]/30 rounded-xl text-[#c5a059]">
                <Gift className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-[#c5a059] font-sans font-medium text-base tracking-widest uppercase">Regalos & Sobres</h3>
                <p className="text-white/50 text-xs">Tu presencia es mi mayor regalo</p>
              </div>
            </div>

            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Si deseas obsequiarme algo, puedes hacerlo mediante un sobre el día del evento o realizando una transferencia bancaria.
            </p>
          </div>

          <button
            onClick={() => setShowGiftModal(true)}
            className="w-full py-2.5 border border-[#c5a059] text-[#c5a059] text-xs uppercase tracking-widest hover:bg-[#c5a059] hover:text-[#081a14] transition-colors duration-300 font-bold rounded-lg cursor-pointer font-sans"
          >
            Ver datos bancarios
          </button>
        </motion.div>
      </div>

      {/* Gift Details Modal */}
      <AnimatePresence>
        {showGiftModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowGiftModal(false)}
            />

            {/* Modal content */}
            <motion.div
              className="relative w-full max-w-md p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#112411] to-[#0a170a] border border-[#c5a059]/50 shadow-2xl shadow-black/95 text-[#fdfcf0] z-10"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
            >
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/40 flex items-center justify-center mx-auto mb-3">
                  <Gift className="w-5 h-5 text-[#c5a059]" />
                </div>
                <h4 className="text-lg font-bold text-[#c5a059] font-sans tracking-wide uppercase">Datos de Transferencia</h4>
                <p className="text-xs text-white/50">Muchas gracias por tu cariño</p>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                  <label className="text-[10px] text-[#c5a059] uppercase tracking-widest font-bold font-sans">Banco</label>
                  <p className="text-white/95 font-medium text-sm mt-0.5">{config.bankName}</p>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center">
                  <div>
                    <label className="text-[10px] text-[#c5a059] uppercase tracking-widest font-bold font-sans">Alias</label>
                    <p className="text-white/90 font-mono font-medium text-sm mt-0.5">{config.alias}</p>
                  </div>
                  <button
                    onClick={() => handleCopy(config.alias)}
                    className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors cursor-pointer"
                  >
                    {copiedText ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#c5a059]" />}
                  </button>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center">
                  <div>
                    <label className="text-[10px] text-[#c5a059] uppercase tracking-widest font-bold font-sans">CBU</label>
                    <p className="text-white/90 font-mono text-xs mt-0.5 tracking-wide">{config.cbu}</p>
                  </div>
                  <button
                    onClick={() => handleCopy(config.cbu)}
                    className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors cursor-pointer"
                  >
                    {copiedText ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#c5a059]" />}
                  </button>
                </div>
              </div>

              {copiedText && (
                <p className="text-center text-xs text-amber-100 font-semibold mt-4 bg-amber-950/40 py-1.5 rounded-lg border border-amber-500/20 font-sans">
                  ¡Capiado al portapapeles!
                </p>
              )}

              <button
                onClick={() => setShowGiftModal(false)}
                className="w-full mt-6 py-2.5 bg-[#0a170a] hover:bg-[#112411] text-[#c5a059] font-bold text-xs rounded-lg uppercase tracking-wider border border-[#c5a059]/30 transition-all cursor-pointer font-sans"
              >
                Cerrar ventana
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
