/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Heart, 
  Phone, 
  Laptop, 
  Smartphone, 
  Image as ImageIcon, 
  FileText, 
  Video, 
  HelpCircle, 
  Check, 
  Copy, 
  ExternalLink,
  ChevronRight,
  Info,
  DollarSign,
  QrCode,
  MapPin,
  Calendar,
  Layers,
  Award,
  Clock,
  ArrowRight,
  User,
  Star,
  X,
  Globe,
  Palette,
  Code
} from 'lucide-react';

import MagicBackground from './components/MagicBackground';
import Countdown from './components/Countdown';
import AmbientMusic from './components/AmbientMusic';
import EventDetails from './components/EventDetails';
import RsvpForm from './components/RsvpForm';
import PhotoUploadAlbum from './components/PhotoUploadAlbum';
import PhotoCarousel from './components/PhotoCarousel';
import type { CelebrationConfig } from './types';
import { 
  MagnoliaVines, 
  GoldTiara, 
  PrincessEmeraldGown, 
  CrownFrogLilypad, 
  FloatingDragonflies,
  CherryBlossoms,
  OrientFan,
  MulanComb,
  CherryBlossomPetals
} from './components/FairytaleDecors';

export default function App() {
  // Global App States
  // 'portfolio': showing Gloop's amazing agency catalog with price charts, payment cards, and interactive demo toggle
  // 'invitation_raw': showing the full-screen immersive test-drive invitation directly
  const [appMode, setAppMode] = useState<'portfolio' | 'invitation_raw'>('portfolio');

  // Popup Modal Selection State
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Preview Mode inside Mockup / Frame
  const [devicePreview, setDevicePreview] = useState<'phone' | 'embed'>('phone');

  // Copied alert feedback state
  const [copiedState, setCopiedState] = useState(false);

  // Configuration State for Invitation Demo
  const [config, setConfig] = useState<CelebrationConfig>({
    birthdayGirl: 'Sofía',
    date: '2026-10-04T22:00:00', // Sábado 4 de Octubre de 2026 a las 22:00 hs
    locationName: 'Madero Walk',
    locationAddress: 'Pierina Dealessi 1855, Dique 1, Puerto Madero, CABA',
    cbu: '0000003100098765432101',
    alias: 'mis15.sofia.mágico',
    bankName: 'Banco de la Nación Argentina',
    photoUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80',
    googleDriveUrl: 'https://drive.google.com/drive/folders/1bE_T9O_Z9_PruebaMagicaDeSofi',
    adminPin: 'admin',
  });

  // Active design template style for the phone emulator
  const [selectedTemplate, setSelectedTemplate] = useState<'mulan' | 'sapo' | 'vintage' | 'kun'>('mulan');
  // Pre-configured elegant golden template app URL from user's AI Studio app (using the direct Run sandbox deploy)
  const doradoUrl = 'https://ais-pre-4vkjyxlwubgp5gmsfzbkef7jzy-537333962464.us-west2.run.app';

  const handleCopyAlias = () => {
    navigator.clipboard.writeText('jimenagloop');
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000);
  };

  // Pricing Catalog data directly reflecting gloop.liorah.pro specifications
  const servicesList = [
    {
      id: 'jpg',
      title: 'Imagen JPG',
      description: 'Diseño sin límites de temática, cualquier personaje o estilo para compartir rápidamente en todas tus redes.',
      features: [
        'Cualquier Personaje o Estilo',
        'Cumples, Baby Shower, Bautismos',
        'Bodas, XV, Despedidas, Eventos',
        'Formato horizontal o vertical HD'
      ],
      price: '$8.000',
      tag: 'Práctico & Rápido',
      icon: ImageIcon,
      color: 'from-blue-500/10 to-teal-500/10',
      borderColor: 'hover:border-blue-500/30',
      whatsappLink: 'https://wa.me/541168862966?text=Hola!%20Quiero%20la%20invitación%20JPG'
    },
    {
      id: 'pdf',
      title: 'PDF + Links',
      description: 'Botones inteligentes e interactivos sobre el diseño para facilitar accesos y direcciones a tus invitados.',
      features: [
        'Botones Interactivos táctiles',
        'Ubicación GPS (Google Maps)',
        'Confirmación directa por un toque',
        'Para niños y adultos en un solo clic'
      ],
      price: '$16.000',
      tag: 'Más Elegidos',
      icon: FileText,
      color: 'from-indigo-500/10 to-purple-500/10',
      borderColor: 'hover:border-indigo-500/30',
      whatsappLink: 'https://wa.me/541168862966?text=Hola!%20Quiero%20la%20invitación%20PDF'
    },
    {
      id: 'video',
      title: 'Video Inv.',
      description: 'Animación vibrante con música de fondo elegida para impactar en estados, reels y stories verticales.',
      features: [
        'Animación fluida de textos e íconos',
        'Canción elegida personalizada',
        'Efectos Urban / Modernos incorporados',
        'Ideal para Stories y WhatsApp'
      ],
      price: '$25.000',
      tag: 'Dinámico',
      icon: Video,
      color: 'from-pink-500/10 to-rose-500/10',
      borderColor: 'hover:border-pink-500/30',
      whatsappLink: 'https://wa.me/541168862966?text=Hola!%20Quiero%20Video%20Invitación'
    },
    {
      id: 'web',
      title: 'Web Inv.',
      isPremium: true,
      description: 'Experiencia inmersiva VIP con RSVP digital automatizado, mapas dinámicos interactivos, galerías de fotos y QR.',
      features: [
        'Cuenta regresiva en tiempo real',
        'Mapa GPS real integrado',
        'Playlist de Spotify ambiental',
        ' RSVP web inteligente & co-creación',
        'Suma de fotos y videos en vivo vía QR'
      ],
      price: '$40.000',
      tag: 'Máximo Esplendor',
      icon: Smartphone,
      color: 'from-[#c5a059]/20 to-[#e1be7d]/5',
      borderColor: 'border-[#c5a059]/40 hover:border-[#c5a059]/80',
      whatsappLink: 'https://wa.me/541168862966?text=Hola!%20Quiero%20Invitación%20Web'
    },
    {
      id: 'logo',
      title: 'Solo Logo',
      description: 'Logotipos vectoriales elegantes para marcas, eventos especiales, sellos de cera digitales y firmas.',
      features: [
        'Diseño único original',
        'Formato vector de alta resolución',
        '1 modificación incluida sin cargo',
        'Cambio extra posterior: $5.000'
      ],
      price: '$20k+',
      tag: 'Branding',
      icon: Award,
      color: 'from-amber-500/10 to-orange-500/10',
      borderColor: 'hover:border-amber-500/30',
      whatsappLink: 'https://wa.me/541168862966?text=Hola!%20Vengo%20por%20un%20Logo'
    },
    {
      id: 'webpages',
      title: 'Web Pages',
      description: 'Páginas y estructuras web sofisticadas a medida de tu negocio o presentación corporativa.',
      features: [
        'Diseño Adaptable a cualquier pantalla',
        'Secciones personalizadas estructuradas',
        '1 modificación incluida sin cargo',
        'Cambio extra posterior: $5.000'
      ],
      price: '$75.000',
      tag: 'Marcas & Redes',
      icon: Laptop,
      color: 'from-emerald-500/10 to-teal-500/10',
      borderColor: 'hover:border-emerald-500/30',
      whatsappLink: 'https://wa.me/541168862966?text=Hola!%20Vengo%20por%20una%20Página%20Web'
    }
  ];

  if (appMode === 'invitation_raw') {
    const activeUrl = selectedTemplate === 'mulan'
      ? 'https://www.mulan.gloop.liorah.pro'
      : selectedTemplate === 'sapo'
        ? 'https://www.princesayelsapo.gloop.liorah.pro'
        : selectedTemplate === 'vintage'
          ? 'https://vintage.gloop.liorah.pro'
          : 'https://www.kun.gloop.liorah.pro/';

    return (
      <div className="w-screen h-screen bg-black flex flex-col relative overflow-hidden">
        {/* Floating return indicator at the top */}
        <div className="relative w-full bg-black/95 backdrop-blur-md border-b border-white/10 py-3 px-6 z-50 flex items-center justify-between shadow-xl">
          <button
            onClick={() => setAppMode('portfolio')}
            className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-[#c5a059] hover:text-[#fdfcf0] font-bold border border-[#c5a059]/40 rounded-full px-4 py-1.5 bg-white/5 transition-all cursor-pointer"
          >
            ← Volver al Catálogo Gloop
          </button>
          <div className="hidden sm:flex items-center gap-2 text-[10px] text-white/50 font-mono">
            <span>Explorando Invitación Premium Activa • {selectedTemplate === 'mulan' ? 'Mulan en Vivo' : selectedTemplate === 'sapo' ? 'Princesa y Sapo en Vivo' : selectedTemplate === 'vintage' ? 'Vintage en Vivo' : 'Kun en Vivo'}</span>
          </div>
        </div>

        <div className="flex-1 bg-black w-full h-full relative">
          <iframe
            src={activeUrl}
            className="w-full h-full border-0 bg-black"
            title="Gloop Live Web Link Fullscreen"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </div>
    );
  }

  // Dead simulation code bypassed
  if (false) {
    if (selectedTemplate === 'dorado') {
      return (
        <div className="min-h-screen text-[#faf6ee] font-sans selection:bg-[#c5a059]/30 selection:text-white relative pb-12 flex flex-col items-center bg-[#050000] overflow-x-hidden">
          {/* Floating return indicator at the top */}
          <div className="relative w-full bg-[#120202]/95 backdrop-blur-md border-b border-[#c5a059]/30 py-3 px-6 sticky top-0 z-50 flex items-center justify-between shadow-xl">
            <button
              onClick={() => setAppMode('portfolio')}
              className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-[#c5a059] hover:text-[#fdfcf0] font-bold border border-[#c5a059]/40 rounded-full px-4 py-1.5 bg-[#0a0202]/85 transition-all cursor-pointer"
            >
              ← Volver al Catálogo Gloop
            </button>
            <div className="hidden sm:flex items-center gap-2 text-[10px] text-white/50 font-mono">
              <span>Demostración de Invitación Activa • Quinceañera: {config.birthdayGirl}</span>
            </div>
          </div>

          {/* Luxury Imperial Ruby Red and Gold background details */}
          <div className="absolute inset-0 bg-radial from-[#350202] via-[#0f0000] to-[#050000] pointer-events-none z-0" />
          <CherryBlossoms />
          <CherryBlossomPetals />

          <div className="absolute top-24 left-[12%] w-2 h-2 bg-[#ffb7c5]/25 rounded-full animate-ping duration-4000 pointer-events-none" />
          <div className="absolute top-[35%] right-[18%] w-1.5 h-1.5 bg-[#ffd700]/30 rounded-full animate-pulse pointer-events-none" />
          <div className="absolute bottom-[25%] left-[10%] w-1 h-1 bg-[#ffcbd5]/40 rounded-full animate-pulse pointer-events-none" />

          {/* Audio Ambient Widget */}
          <div className="w-full max-w-5xl px-4 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 z-10 mt-2">
            <div className="flex items-center gap-1.5 bg-[#3a0303]/45 backdrop-blur-md py-1.5 px-4 rounded-full border border-[#c5a059]/30">
              <span className="text-[#c5a059] font-medium text-[10px] tracking-[0.3em] uppercase">🌸 Dinastía Imperial (Mulan)</span>
            </div>
            <AmbientMusic theme="dorado" />
          </div>

          {/* Physical Gold Card Invitation Layout */}
          <main className="w-full max-w-2xl flex flex-col items-center mt-12 sm:mt-16 z-10 px-4">
            <motion.div
              className="w-full relative mb-16 sm:mb-24 select-none"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              {/* Layers */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4a0404] to-[#140101] border border-[#c5a059]/30 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] rotate-1 max-w-full" />
              <div className="relative bg-gradient-to-b from-[#1c0101] to-[#050000] border-4 border-double border-[#c5a059]/40 rounded-3xl p-6 sm:p-12 pb-36 sm:pb-48 text-center text-[#faf6ee] -rotate-1 shadow-inner overflow-hidden flex flex-col items-center">
                
                {/* Chinese Hanging Lantern Icons on Corners */}
                <div className="absolute top-4 left-4 text-xs text-[#c5a059]/40 font-serif select-none animate-pulse">🏮</div>
                <div className="absolute top-4 right-4 text-xs text-[#c5a059]/40 font-serif select-none animate-pulse">🏮</div>
                <div className="absolute bottom-16 left-4 text-xs text-[#c5a059]/40 font-serif select-none">🏮</div>
                <div className="absolute bottom-16 right-4 text-xs text-[#c5a059]/40 font-serif select-none">🏮</div>

                {/* Subtle visual fan and comb watermarks in corners */}
                <OrientFan className="absolute bottom-12 right-2 w-28 h-20 opacity-[0.14] rotate-12" />
                <MulanComb className="absolute bottom-14 left-2 w-24 h-18 opacity-[0.14] -rotate-12" />

                <div className="mt-8 mb-4 relative z-20">
                  <MulanComb className="w-24 h-20 animate-pulse" />
                </div>

                <div className="space-y-1 relative z-20">
                  <span className="text-[#c5a059] text-[10px] sm:text-[11px] font-sans font-black uppercase tracking-[0.3em] block">
                    Con Honor y Orgullo, te invito a celebrar mis
                  </span>
                  <span className="text-4xl sm:text-5xl font-serif text-[#ffe0ad] italic font-light tracking-wide block my-2">
                    Quince Años
                  </span>
                  <span className="text-[#c5a059] text-[9px] sm:text-[10px] font-sans font-medium uppercase tracking-[0.25em] block">
                    En presencia de mi dinastía
                  </span>
                </div>

                <div className="relative my-4 z-20">
                  <h1 className="text-6xl sm:text-8xl font-serif text-[#e5c185] tracking-tight font-light italic py-2">
                    {config.birthdayGirl}
                  </h1>
                </div>

                <div className="w-full max-w-sm border-y border-[#c5a059]/15 py-4 my-6 flex items-center justify-center gap-4 sm:gap-6 uppercase font-sans font-semibold text-[10px] sm:text-xs tracking-[0.2em] text-[#d6b472] relative z-20">
                  <span>Sábado</span>
                  <div className="relative">
                    <span className="absolute -inset-1.5 rounded-full border border-[#c5a059]/30" />
                    <span className="w-12 h-12 rounded-full bg-[#c5a059] text-[#1c0101] font-serif font-black italic text-lg flex items-center justify-center shadow-lg relative z-10">
                      04
                    </span>
                  </div>
                  <span>Octubre</span>
                </div>

                <div className="space-y-2 mb-8 relative z-20">
                  <p className="text-[#ffe0ad] font-sans font-bold text-[11px] sm:text-xs tracking-[0.15em] uppercase">
                    A las 22:00 hrs
                  </p>
                  <p className="text-zinc-300 font-serif italic text-xs sm:text-sm max-w-xs mx-auto leading-relaxed">
                    "{config.locationName}" — Ceremonia Real
                  </p>
                </div>

                <div className="max-w-md mx-auto relative z-20 border-t border-[#c5a059]/10 pt-6">
                  <p className="text-[#ffe0ad]/80 text-xs sm:text-sm italic font-light leading-relaxed font-serif px-4">
                    "Al igual que la flor de cerezo que florece en la tempestad, cada paso de este camino ha sido sostenido por el honor, la valentía y el amor eterno..."
                  </p>
                  <div className="flex items-center justify-center gap-1.5 mt-4 text-[#c5a059] opacity-75">
                    <span>🌸</span>
                    <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-[#c5a059]">Dinastía de Ensueño</span>
                    <span>🌸</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Countdown Clock */}
            <section className="w-full mb-16 sm:mb-20">
              <Countdown targetDateStr={config.date} />
            </section>

            {/* Chapters of the Story */}
            <section className="w-full mb-16 sm:mb-20 max-w-4xl">
              <div className="text-center mb-8 relative w-full flex flex-col items-center select-none">
                <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-semibold mb-1 font-sans">El Honor y la Virtud</span>
                <h2 className="text-[#c5a059] font-serif font-light italic text-xl sm:text-2xl tracking-normal">La Ceremonia Imperial</h2>
                <div className="w-16 h-[1px] bg-[#c5a059]/30 mt-2 rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-[#140202]/85 border border-[#c5a059]/15 shadow-lg text-center backdrop-blur-xs flex flex-col items-center justify-between">
                  <div className="text-[#c5a059] text-2xl mb-3 select-none">🌸⚔️🌸</div>
                  <h4 className="text-[#c5a059] font-serif italic font-medium text-sm mb-2">Capítulo I: Honor a la Familia</h4>
                  <p className="text-[#faf6ee]/70 text-xs leading-relaxed font-light italic">
                    "Preparando mis pasos con respeto y honor, guiada por el amor de mi dinastía. Un instante para celebrar el destino de quien florece con fuerza y gracia."
                  </p>
                  <span className="text-[9px] uppercase tracking-widest text-[#c5a059]/60 mt-4 block font-mono font-bold">Un Comienzo Digno</span>
                </div>

                <div className="p-6 rounded-2xl bg-[#140202]/85 border border-[#c5a059]/15 shadow-lg text-center backdrop-blur-xs flex flex-col items-center justify-between">
                  <div className="text-[#c5a059] text-2xl mb-3 select-none">🪞🌸🪭</div>
                  <h4 className="text-[#c5a059] font-serif italic font-medium text-sm mb-2">Capítulo II: Mi Reflejo</h4>
                  <p className="text-[#faf6ee]/70 text-xs leading-relaxed font-light italic">
                    "Al mirarme en el espejo, veo florecer el alma de quien hoy inicia su propia historia. Una noche de gala para revelar mi verdadero reflejo ante el reino."
                  </p>
                  <span className="text-[9px] uppercase tracking-widest text-[#c5a059]/60 mt-4 block font-mono font-bold">Autenticidad y Fuerza</span>
                </div>

                <div className="p-6 rounded-2xl bg-[#140202]/85 border border-[#c5a059]/15 shadow-lg text-center backdrop-blur-xs flex flex-col items-center justify-between">
                  <div className="text-[#c5a059] text-2xl mb-3 select-none">🐉✨🗡️</div>
                  <h4 className="text-[#c5a059] font-serif italic font-medium text-sm mb-2">Capítulo III: Con Valor</h4>
                  <p className="text-[#faf6ee]/70 text-xs leading-relaxed font-light italic">
                    "Con el coraje que habita en mi corazón, celebraré estos Quince años decidida a escribir un destino eterno de lealtad, risas y nobleza junto a ti."
                  </p>
                  <span className="text-[9px] uppercase tracking-widest text-[#c5a059]/60 mt-4 block font-mono font-bold">La Batalla Real</span>
                </div>
              </div>
            </section>

            {/* GPS Location Details */}
            <section className="w-full mb-16 sm:mb-20">
              <div className="text-center mb-10 relative w-full flex flex-col items-center select-none">
                <h2 className="text-[#c5a059] font-serif font-light italic text-xl sm:text-2xl tracking-normal">Coordenadas del Encuentro</h2>
                <div className="w-20 h-[1px] bg-[#c5a059]/30 mt-2 rounded-full" />
              </div>
              <EventDetails config={config} theme="dorado" />
            </section>

            {/* RSVPs */}
            <section className="w-full mb-16 sm:mb-20">
              <RsvpForm birthdayGirl={config.birthdayGirl} adminPin={config.adminPin} theme="dorado" />
            </section>

            {/* Showcase carousel */}
            <section className="w-full mb-16 sm:mb-20">
              <PhotoCarousel />
            </section>

            {/* Dynamic upload QR folder */}
            <section className="w-full">
              <PhotoUploadAlbum googleDriveUrl={config.googleDriveUrl} />
            </section>

            {/* Footer signature */}
            <footer className="w-full text-center py-10 mt-12 border-t border-white/5 opacity-55">
              <p className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-medium flex items-center justify-center gap-1.5 font-sans">
                <span>✨ Evento de {config.birthdayGirl} ✨</span>
              </p>
              <p className="text-[10px] text-white/50 font-mono mt-1.5">¡Estás cordialmente invitado/a a vivir el lujo!</p>
            </footer>
          </main>
        </div>
      );
    }

    // Default Esmeralda medieval fairytale invitation
    return (
      <div className="min-h-screen text-[#fdfcf0] font-sans selection:bg-[#c5a059]/30 selection:text-[#fdfcf0] relative pb-12 flex flex-col items-center">
        {/* Floating return indicator at the top */}
        <div className="w-full bg-[#0a100a]/90 backdrop-blur-md border-b border-[#c5a059]/30 py-3 px-6 sticky top-0 z-50 flex items-center justify-between shadow-xl">
          <button
            onClick={() => setAppMode('portfolio')}
            className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-[#c5a059] hover:text-[#fdfcf0] font-bold border border-[#c5a059]/40 rounded-full px-4 py-1.5 bg-[#121c12]/60 transition-all cursor-pointer"
          >
            ← Volver al Catálogo Gloop
          </button>
          <div className="hidden sm:flex items-center gap-2 text-[10px] text-white/50 font-mono">
            <span>Demostración de Invitación Activa • Quinceañera: {config.birthdayGirl}</span>
          </div>
        </div>

        {/* Emerald Magic Background and elements */}
        <MagicBackground />

        {/* Audio Ambient Widget */}
        <div className="w-full max-w-5xl px-4 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 z-10 mt-2">
          <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-md py-1.5 px-4 rounded-full border border-white/10">
            <span className="text-[#c5a059] font-medium text-[10px] tracking-[0.3em] uppercase">✨ Invitación Exclusiva de 15</span>
          </div>
          <AmbientMusic />
        </div>

        {/* Standard Physical Card Invitation Layout */}
        <main className="w-full max-w-2xl flex flex-col items-center mt-12 sm:mt-16 z-10 px-4">
          <motion.div
            className="w-full relative mb-16 sm:mb-24 select-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {/* Layers */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#142314] to-[#253f25] border border-[#c5a059]/30 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] rotate-1 max-w-full" />
            <div className="relative bg-gradient-to-b from-[#fdfbf7] via-[#faf6ee] to-[#f4eee0] border-4 border-double border-[#c5a059]/40 rounded-3xl p-6 sm:p-12 pb-36 sm:pb-48 text-center text-[#1c2d1c] -rotate-1 shadow-inner overflow-hidden flex flex-col items-center">
              
              <MagnoliaVines />
              <FloatingDragonflies />

              <div className="mt-8 mb-4 relative z-20">
                <GoldTiara className="w-16 h-10 sm:w-20 sm:h-12" />
              </div>

              <div className="space-y-1 relative z-20">
                <span className="text-[#3c5f3c] text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.3em] block">
                  Estás cordialmente invitado/a a celebrar los
                </span>
                <span className="text-4xl sm:text-5xl font-serif text-[#324f32] italic font-light tracking-wide block my-2">
                  Quince Años
                </span>
                <span className="text-[#3c5f3c] text-[9px] sm:text-[10px] font-sans font-medium uppercase tracking-[0.25em] block">
                  En honor de la quinceañera
                </span>
              </div>

              <div className="relative my-4 z-20">
                <h1 className="text-6xl sm:text-8xl font-serif text-[#3e5f41] drop-shadow-[0_1px_1px_rgba(197,160,89,0.2)] tracking-tight font-light italic py-2">
                  {config.birthdayGirl}
                </h1>
              </div>

              <div className="w-full max-w-sm border-y border-[#3e5f41]/15 py-4 my-6 flex items-center justify-center gap-4 sm:gap-6 uppercase font-sans font-semibold text-[10px] sm:text-xs tracking-[0.2em] text-[#2c402e] relative z-20">
                <span>Sábado</span>
                <div className="relative">
                  <span className="absolute -inset-1.5 rounded-full border border-[#c5a059]/30" />
                  <span className="w-12 h-12 rounded-full bg-[#345037] text-[#fdfcf0] font-serif font-bold italic text-lg flex items-center justify-center shadow-lg relative z-10">
                    04
                  </span>
                </div>
                <span>Octubre</span>
              </div>

              <div className="space-y-2 mb-8 relative z-20">
                <p className="text-[#2c402e] font-sans font-bold text-[11px] sm:text-xs tracking-[0.15em] uppercase">
                  A las 22:00 hrs
                </p>
                <p className="text-[#3c5f3c] font-serif italic text-xs sm:text-sm max-w-xs mx-auto leading-relaxed opacity-90">
                  "{config.locationName}" — Puerto Madero, CABA
                </p>
              </div>

              <div className="max-w-md mx-auto relative z-20 border-t border-[#3e5f41]/10 pt-6">
                <p className="text-[#324a35] text-xs sm:text-sm italic font-light leading-relaxed font-serif px-4">
                  "Hay un bosque mágico de sueños esperando brillar. El amor y la música nos guiarán al gran día..."
                </p>
                <div className="flex items-center justify-center gap-1.5 mt-4 text-[#c5a059] opacity-75">
                  <span>✦</span>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-[#324a35]">Un Sueño Encantado</span>
                  <span>✦</span>
                </div>
              </div>

              <PrincessEmeraldGown />
              <CrownFrogLilypad />
            </div>
          </motion.div>

          {/* Countdown Clock */}
          <section className="w-full mb-16 sm:mb-20">
            <Countdown targetDateStr={config.date} />
          </section>

          {/* Chapters of the Story */}
          <section className="w-full mb-16 sm:mb-20 max-w-4xl">
            <div className="text-center mb-8 relative w-full flex flex-col items-center select-none">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-semibold mb-1">Un Toque de Cuento de Hadas</span>
              <h2 className="text-[#c5a059] font-serif font-light italic text-xl sm:text-2xl tracking-normal">La Historia del Reino</h2>
              <div className="w-16 h-[1px] bg-[#c5a059]/30 mt-2 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#081a14]/60 border border-[#c5a059]/10 shadow-lg text-center backdrop-blur-xs flex flex-col items-center justify-between">
                <div className="text-[#c5a059] text-2xl mb-3 select-none">🌙🦋</div>
                <h4 className="text-[#c5a059] font-serif italic font-medium text-sm mb-2">Capítulo I: El Deseo Real</h4>
                <p className="text-white/70 text-xs leading-relaxed font-light italic">
                  "Había una vez una niña que soñaba bajo las luces del Bayou, esperando que el cielo pintara de oro su camino. Hoy, los deseos florecen..."
                </p>
                <span className="text-[9px] uppercase tracking-widest text-[#c5a059]/60 mt-4 block font-mono font-bold font-semibold">Un comienzo mágico</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#081a14]/60 border border-[#c5a059]/10 shadow-lg text-center backdrop-blur-xs flex flex-col items-center justify-between">
                <div className="text-[#c5a059] text-2xl mb-3 select-none">🥀🎷</div>
                <h4 className="text-[#c5a059] font-serif italic font-medium text-sm mb-2">Capítulo II: La Transformación</h4>
                <p className="text-white/70 text-xs leading-relaxed font-light italic">
                  "Donde los faroles se encienden y la melodía empieza a fluir, allí se encuentra la verdadera celebración. Un instante suspendido en el aire..."
                </p>
                <span className="text-[9px] uppercase tracking-widest text-[#c5a059]/60 mt-4 block font-mono font-bold font-semibold">La magia despierta</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#081a14]/60 border border-[#c5a059]/10 shadow-lg text-center backdrop-blur-xs flex flex-col items-center justify-between">
                <div className="text-[#c5a059] text-2xl mb-3 select-none">🐸✨</div>
                <h4 className="text-[#c5a059] font-serif italic font-medium text-sm mb-2">Capítulo III: El Gran Hechizo</h4>
                <p className="text-white/70 text-xs leading-relaxed font-light italic">
                  "La noche en que las risas se vuelven eternas. {config.birthdayGirl} celebra sus 15 primaveras para sellar un pacto de amor, música y amistad con vos."
                </p>
                <span className="text-[9px] uppercase tracking-widest text-[#c5a059]/60 mt-4 block font-mono font-semibold">El gran encuentro</span>
              </div>
            </div>
          </section>

          {/* GPS Location Details */}
          <section className="w-full mb-16 sm:mb-20">
            <div className="text-center mb-10 relative w-full flex flex-col items-center select-none">
              <h2 className="text-[#c5a059] font-serif font-light italic text-xl sm:text-2xl tracking-normal">Coordenadas del Encuentro</h2>
              <div className="w-20 h-[1px] bg-[#c5a059]/30 mt-2 rounded-full" />
            </div>
            <EventDetails config={config} />
          </section>

          {/* RSVPs */}
          <section className="w-full mb-16 sm:mb-20">
            <RsvpForm birthdayGirl={config.birthdayGirl} adminPin={config.adminPin} />
          </section>

          {/* Showcase carousel */}
          <section className="w-full mb-16 sm:mb-20">
            <PhotoCarousel />
          </section>

          {/* Dynamic upload QR folder */}
          <section className="w-full">
            <PhotoUploadAlbum googleDriveUrl={config.googleDriveUrl} />
          </section>

          {/* Footer signature */}
          <footer className="w-full text-center py-10 mt-12 border-t border-white/5 opacity-55">
            <p className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-medium flex items-center justify-center gap-1.5 font-sans">
              <span>✨ Evento de {config.birthdayGirl} ✨</span>
            </p>
            <p className="text-[10px] text-white/50 font-mono mt-1.5">¡Estás cordialmente invitado/a a vivir la magia!</p>
          </footer>
        </main>
      </div>
    );
  }

  // ----------------------------------------------------
  // GLOOP AGENCY STOREFRONT (Default View Mode)
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-black text-[#e2e8f0] font-[sans-serif] selection:bg-gloop-pink/30 relative pb-20 overflow-x-hidden flex flex-col items-center">
      
      {/* Laser Neon Ambient Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gloop-pink/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-gloop-cyan/10 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/5 left-10 w-96 h-96 bg-gloop-pink/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Floating Sparkles decorative constellation */}
      <div className="absolute top-24 right-1/4 opacity-20 animate-ping duration-[6000ms] text-gloop-pink text-xl select-none">✦</div>
      <div className="absolute top-96 left-12 opacity-35 animate-pulse text-gloop-cyan text-2xl select-none">✦</div>
      <div className="absolute bottom-[30%] right-10 opacity-20 text-white text-lg select-none">✦</div>

      {/* Navbar exactly matching user HTML */}
      <nav className="fixed top-0 w-full z-[9999] p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center bg-black/70 backdrop-blur-md rounded-3xl px-6 py-3 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-[#FF6B9E] fill-[#FF6B9E] animate-pulse shrink-0" />
            <div className="puffy-white text-2xl uppercase tracking-wider text-left leading-none">
              Gloop
            </div>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://wa.me/541168862966" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gloop-pink hover:bg-gloop-pink/90 text-white px-5 py-2 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg text-center leading-tight transition-transform duration-200 active:scale-95"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero exactly matching user HTML */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-6 relative overflow-hidden">
        <div className="mb-8 mt-4 relative">
          <div className="puffy-white text-6xl md:text-8xl select-none uppercase tracking-wide py-4 drop-shadow-[0_0_35px_rgba(255,0,162,0.4)]">
            Jimena Gloop
          </div>
        </div>
        <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px] bg-white/5 px-6 py-2 rounded-full border border-white/10 select-none">
          Arte Digital &amp; Invitaciones del Futuro
        </p>
      </section>

      {/* Vidriera de Servicios exactly matching card-service triggers and prices */}
      <section id="servicios" className="max-w-6xl w-full mx-auto px-6 pb-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card JPG */}
          <div 
            onClick={() => setActiveModal('jpg')} 
            className="card-service border-gloop-black/40 hover:border-gloop-pink shadow-lg"
          >
            <ImageIcon className="w-12 h-12 text-gloop-pink mx-auto mb-6" />
            <h3 className="puffy-white text-3xl mb-3 uppercase">Imagen JPG</h3>
            <div className="font-black text-gloop-pink text-xl font-syne">$8.000</div>
          </div>

          {/* Card PDF */}
          <div 
            onClick={() => setActiveModal('pdf')} 
            className="card-service border-gloop-pink/30 shadow-[0_0_15px_rgba(255,0,162,0.15)] hover:border-gloop-pink"
          >
            <FileText className="w-12 h-12 text-gloop-pink mx-auto mb-6" />
            <h3 className="puffy-white text-3xl mb-3 uppercase">PDF + Links</h3>
            <div className="font-black text-gloop-pink text-xl font-syne">$16.000</div>
          </div>

          {/* Card Video */}
          <div 
            onClick={() => setActiveModal('video')} 
            className="card-service border-gloop-black/40 hover:border-gloop-cyan"
          >
            <Video className="w-12 h-12 text-gloop-cyan mx-auto mb-6" />
            <h3 className="puffy-white text-3xl mb-3 uppercase">Video Inv.</h3>
            <div className="font-black text-gloop-cyan text-xl font-syne">$25.000</div>
          </div>

          {/* Card Web Invitation */}
          <div 
            onClick={() => setActiveModal('web')} 
            className="card-service border-gloop-cyan/30 shadow-[0_0_15px_rgba(0,242,255,0.15)] hover:border-gloop-cyan"
          >
            <Smartphone className="w-12 h-12 text-gloop-cyan mx-auto mb-6" />
            <h3 className="puffy-white text-3xl mb-3 uppercase">Invitación Web</h3>
            <div className="font-black text-gloop-cyan text-xl font-syne">$40.000</div>
          </div>

          {/* Card Solo Logo */}
          <div 
            onClick={() => setActiveModal('logo')} 
            className="card-service border-gloop-black/40 hover:border-white"
          >
            <Palette className="w-12 h-12 text-white mx-auto mb-6" />
            <h3 className="puffy-white text-3xl mb-3 uppercase">Solo Logo</h3>
            <div className="font-black text-white text-xl font-syne">Desde $20.000</div>
          </div>

          {/* Card Web Pages */}
          <div 
            onClick={() => setActiveModal('webpages')} 
            className="card-service border-gloop-black/40 hover:border-gloop-pink"
          >
            <Code className="w-12 h-12 text-gloop-pink mx-auto mb-6" />
            <h3 className="puffy-white text-3xl mb-3 uppercase">Web Pages</h3>
            <div className="font-black text-gloop-pink text-xl font-syne">$75.000</div>
          </div>

        </div>
      </section>

      {/* Ejemplo de Invitación Web Principal - Fully interactive with Live Playground customizer */}
      <section id="demo" className="w-full max-w-6xl mx-auto px-6 py-20 border-t border-white/10 text-center z-10 scroll-mt-24">
        <h2 className="puffy-white text-5xl md:text-7xl mb-12 uppercase italic leading-none">
          Ejemplo de<br />Invitación Web
        </h2>

        {/* Live Interaction Playground containing the emerald fairytale app within 9:16 layout */}
        <div className="w-full bg-[#111116]/80 p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-12 backdrop-blur-md">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gloop-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />
          
          {/* Left / Top description panel about the interactive features */}
          <div className="text-left space-y-6 max-w-sm w-full shrink-0">
            <div className="flex items-center gap-2 text-xs text-gloop-pink font-extrabold tracking-widest uppercase font-syne">
              <Sparkles className="w-4 h-4 text-gloop-pink animate-pulse" />
              <span>Experiencia 100% Interactiva</span>
            </div>
            
            <h3 className="text-xl font-syne font-bold text-white uppercase tracking-wider font-bubble">
              ¿Cómo funciona?
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed font-light font-sans">
              La demo de la derecha representa una invitación real adaptada a dispositivos móviles. Podés tocar e interactuar con cada uno de sus elementos:
            </p>

            <ul className="text-xs space-y-3 font-semibold font-sans text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gloop-pink mt-1.5 shrink-0" />
                <span>Cuenta regresiva activa en tiempo real.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gloop-cyan mt-1.5 shrink-0" />
                <span>Confirmación RSVP integrada (probá enviando una asistencia).</span>
              </li>
            </ul>

            {/* HIGH FIDELITY DESIGN STYLE SELECTOR FOR MULTIPLE SITES / MODELS */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#c5a059] block text-center border-b border-white/5 pb-1.5">
                Seleccionar Modelo Demo
              </span>
              
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] text-slate-400 uppercase font-bold tracking-widest block font-sans">
                    • Invitaciones Premium
                  </span>
                  <span className="text-[7px] px-1.5 py-0.5 rounded bg-gloop-cyan/10 text-gloop-cyan font-mono scale-90">LIVE IFRAME</span>
                </div>
                <div className="grid grid-cols-4 bg-black p-1 rounded-xl border border-white/10 gap-1 select-none">
                  <button
                    onClick={() => setSelectedTemplate('mulan')}
                    className={`py-2 text-[7px] sm:text-[8px] font-black uppercase rounded-lg transition-all cursor-pointer ${
                      selectedTemplate === 'mulan'
                        ? 'bg-gloop-cyan text-black shadow-lg font-black'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Mulan
                  </button>
                  <button
                    onClick={() => setSelectedTemplate('sapo')}
                    className={`py-2 text-[7px] sm:text-[8px] font-black uppercase rounded-lg transition-all cursor-pointer ${
                      selectedTemplate === 'sapo'
                        ? 'bg-emerald-500 text-black shadow-lg font-black'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Princesa y Sapo
                  </button>
                  <button
                    onClick={() => setSelectedTemplate('vintage')}
                    className={`py-2 text-[7px] sm:text-[8px] font-black uppercase rounded-lg transition-all cursor-pointer ${
                      selectedTemplate === 'vintage'
                        ? 'bg-amber-500 text-black shadow-lg font-black'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Vintage
                  </button>
                  <button
                    onClick={() => setSelectedTemplate('kun')}
                    className={`py-2 text-[7px] sm:text-[8px] font-black uppercase rounded-lg transition-all cursor-pointer ${
                      selectedTemplate === 'kun'
                        ? 'bg-sky-400 text-black shadow-lg font-black'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Kun
                  </button>
                </div>
              </div>

              {selectedTemplate === 'mulan' && (
                <p className="text-[9px] text-slate-400 italic leading-relaxed">
                  <strong className="text-gloop-cyan block font-sans not-italic mb-0.5 font-bold uppercase text-[8px]">Mulan Gloop Real (Web Externa):</strong>
                  Carga en vivo del demo real <span className="text-white underline font-mono">www.mulan.gloop.liorah.pro</span> de forma directa e interactiva dentro del emulador móvil.
                </p>
              )}

              {selectedTemplate === 'sapo' && (
                <p className="text-[9px] text-slate-400 italic leading-relaxed">
                  <strong className="text-emerald-400 block font-sans not-italic mb-0.5 font-bold uppercase text-[8px]">Princesa y Sapo Real (Web Externa):</strong>
                  Carga en vivo del demo real <span className="text-white underline font-mono">www.princesayelsapo.gloop.liorah.pro</span> de forma directa e interactiva dentro del emulador móvil.
                </p>
              )}

              {selectedTemplate === 'vintage' && (
                <p className="text-[9px] text-slate-400 italic leading-relaxed">
                  <strong className="text-amber-400 block font-sans not-italic mb-0.5 font-bold uppercase text-[8px]">Vintage Real (Web Externa):</strong>
                  Carga en vivo del demo real <span className="text-white underline font-mono">vintage.gloop.liorah.pro</span> de forma directa e interactiva dentro del emulador móvil.
                </p>
              )}

              {selectedTemplate === 'kun' && (
                <p className="text-[9px] text-slate-400 italic leading-relaxed">
                  <strong className="text-sky-400 block font-sans not-italic mb-0.5 font-bold uppercase text-[8px]">Kun Real (Web Externa):</strong>
                  Carga en vivo del demo real <span className="text-white underline font-mono">www.kun.gloop.liorah.pro</span> de forma directa e interactiva dentro del emulador móvil.
                </p>
              )}
            </div>

            {/* Quick action buttons */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setAppMode('invitation_raw');
                }}
                className="w-full py-3 bg-gloop-pink hover:bg-gloop-pink/90 text-white font-black uppercase text-[10px] tracking-widest rounded-xl transition-transform cursor-pointer shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Ver en Pantalla Completa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-[10px] text-slate-500 text-center italic font-sans font-medium">
                Accedé a la vista inmersiva completa sin limitación de marcos.
              </p>
            </div>
          </div>

          {/* Right Side: Virtualized High Fidelity Smartphone mockup embedding the live emerald view */}
          <div className="relative shrink-0 w-[310px] h-[610px] bg-[#0c0d12] rounded-[44px] border-[5px] border-white/10 p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] scale-95 md:scale-100 z-10">
            
            {/* Speaker Camera Notch */}
            <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 w-24 h-4.5 bg-black rounded-full z-30 flex items-center justify-center">
              <div className="w-8 h-0.5 bg-zinc-800 rounded-full" />
              <div className="w-1.5 h-1.5 ml-1 rounded-full bg-[#111116]" />
            </div>

            {/* Simulated Live View screen */}
            <div className="w-full h-full rounded-[35px] relative scrollbar-none custom-phone-screen text-center border border-white/5 overflow-hidden bg-black text-white">
              <div className="relative w-full h-full bg-black select-text">
                <iframe
                  src={
                    selectedTemplate === 'mulan'
                      ? 'https://www.mulan.gloop.liorah.pro'
                      : selectedTemplate === 'sapo'
                        ? 'https://www.princesayelsapo.gloop.liorah.pro'
                        : selectedTemplate === 'vintage'
                          ? 'https://vintage.gloop.liorah.pro'
                          : 'https://www.kun.gloop.liorah.pro/'
                  }
                  className="w-full h-full border-0 bg-black"
                  title="Gloop Live Web Link Demo"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
                
                {/* Overlay decorative banner for visual premium style */}
                <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 pointer-events-none z-30 shadow-md">
                  <span className={`w-2 h-2 rounded-full animate-pulse shrink-0 ${
                    selectedTemplate === 'mulan' ? 'bg-gloop-cyan' : selectedTemplate === 'sapo' ? 'bg-emerald-400' : selectedTemplate === 'vintage' ? 'bg-amber-400' : 'bg-sky-400'
                  }`} />
                  <span className="text-[7.5px] text-slate-200 font-mono tracking-widest font-black uppercase whitespace-nowrap">
                    {selectedTemplate === 'mulan' 
                      ? 'mulan.gloop.liorah.pro' 
                      : selectedTemplate === 'sapo'
                        ? 'princesayelsapo.gloop.liorah.pro'
                        : selectedTemplate === 'vintage'
                          ? 'vintage.gloop.liorah.pro'
                          : 'kun.gloop.liorah.pro'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[10px] font-bold text-slate-500 uppercase mt-8 tracking-[0.25em] italic">
          Interacción Real &amp; Código QR
        </p>
      </section>

      {/* RENDER THE POP-UPS EXACTLY MATCHING THE FORMAT PROVIDED IN HTML USING ANIMATED DIALOGS */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
            
            {/* Overlay click to close target */}
            <div className="absolute inset-0" onClick={() => setActiveModal(null)} />

            {/* Modal Body Container with customized animations */}
            <motion.div 
              className="relative max-w-[600px] w-full bg-[#0a0a0a] border-3 border-gloop-pink rounded-[2.5rem] p-6 sm:p-8 md:p-10 z-10 max-h-[90vh] overflow-y-auto text-left shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {/* Close Button right corner */}
              <button 
                onClick={() => setActiveModal(null)} 
                className="absolute top-4 right-6 text-3xl font-light text-white/40 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Dynamic Popup Content Selection Rendering */}
              {activeModal === 'jpg' && (
                <>
                  <h3 className="puffy-white text-5xl mb-2 uppercase leading-none">Imagen JPG</h3>
                  <p className="text-gloop-cyan font-black text-[10px] uppercase mb-6 italic tracking-widest font-syne">Diseño sin límites de temática</p>
                  
                  <div className="explainer-box">
                    <p className="puffy-white text-3xl mb-2 text-center uppercase">Cualquier Personaje</p>
                    <div className="grid grid-cols-1 gap-3 mt-4">
                      <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                        <div className="icon-circle bg-gloop-pink/20 text-gloop-pink"><Heart className="w-5 h-5" /></div>
                        <div>
                          <span className="part-tag mb-1 inline-block">Para Niños</span>
                          <p className="text-xs text-slate-300">Cumples, Baby Shower, Bautismos.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                        <div className="icon-circle bg-gloop-cyan/20 text-gloop-cyan"><Sparkles className="w-5 h-5" /></div>
                        <div>
                          <span className="part-tag bg-gloop-cyan text-black mb-1 inline-block">Para Adultos</span>
                          <p className="text-xs text-slate-300">Bodas, XV, Despedidas, Eventos.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="payment-info border-gloop-cyan">
                    <p className="text-white text-xs font-bold uppercase mb-1 flex items-center gap-1.5 font-syne">💳 Pago 100% Adelantado</p>
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] font-black text-gloop-cyan font-mono">Alias: jimenagloop</p>
                      <button 
                        onClick={handleCopyAlias}
                        className="text-[9px] uppercase tracking-wider font-bold text-gloop-cyan border border-gloop-cyan/30 rounded-md px-2 py-0.5 hover:bg-gloop-cyan hover:text-black transition-all"
                      >
                        {copiedState ? 'Copiado!' : 'Copiar'}
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-300">Titular: Sol Jimena Duran</p>
                  </div>

                  <a 
                    href="https://wa.me/541168862966?text=Hola!%20Quiero%20la%20invitaci%C3%B3n%20JPG" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-gloop-pink hover:bg-gloop-pink/95 text-white text-center py-4 rounded-xl font-black uppercase text-xs sm:text-sm mt-4 tracking-widest font-syne"
                  >
                    Pedir JPG ($8.000)
                  </a>
                </>
              )}

              {activeModal === 'pdf' && (
                <>
                  <h3 className="puffy-white text-5xl mb-2 uppercase leading-none">PDF + Links</h3>
                  <p className="text-gloop-cyan font-black text-[10px] uppercase mb-6 italic tracking-widest font-syne">Botones Interactivos</p>
                  
                  <div className="explainer-box">
                    <p className="puffy-white text-3xl mb-4 text-center uppercase">¡Cualquier Personaje!</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/10">
                        <div className="icon-circle bg-white text-black"><MapPin className="w-4 h-4 text-black" /></div>
                        <p className="text-xs text-slate-300 font-bold uppercase font-syne">Ubicación GPS (Google Maps)</p>
                      </div>
                      <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/10">
                        <div className="icon-circle bg-white text-black"><Phone className="w-4 h-4 text-black" /></div>
                        <p className="text-xs text-slate-300 font-bold uppercase font-syne">Confirmar Asistencia Directa</p>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-4 text-center italic">Para niños y adultos en un solo clic.</p>
                  </div>

                  <div className="payment-info border-gloop-pink">
                    <p className="text-white text-xs font-bold uppercase mb-1 flex items-center gap-1.5 font-syne">💳 Pago 100% Adelantado</p>
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] font-black text-gloop-pink font-mono">Alias: jimenagloop</p>
                      <button 
                        onClick={handleCopyAlias}
                        className="text-[9px] uppercase tracking-wider font-bold text-gloop-pink border border-gloop-pink/30 rounded-md px-2 py-0.5 hover:bg-gloop-pink hover:text-black transition-all"
                      >
                        {copiedState ? 'Copiado!' : 'Copiar'}
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-300">Titular: Sol Jimena Duran</p>
                  </div>

                  <a 
                    href="https://wa.me/541168862966?text=Hola!%20Quiero%20la%20invitaci%C3%B3n%20PDF" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-gloop-pink hover:bg-gloop-pink/95 text-white text-center py-4 rounded-xl font-black uppercase text-xs sm:text-sm mt-4 tracking-widest font-syne"
                  >
                    Pedir PDF ($16.000)
                  </a>
                </>
              )}

              {activeModal === 'video' && (
                <>
                  <h3 className="puffy-white text-5xl mb-2 uppercase leading-none font-bubble">Video Inv.</h3>
                  <p className="text-gloop-cyan font-black text-[10px] uppercase mb-6 italic tracking-widest font-syne">Animación &amp; Música</p>
                  
                  <div className="explainer-box">
                    <p className="puffy-white text-3xl mb-4 text-center uppercase">¡Todo Personaje!</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                        <Award className="w-6 h-6 text-gloop-pink mx-auto mb-2" />
                        <p className="text-[9px] font-black uppercase font-syne">Canción Elegida</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                        <Video className="w-6 h-6 text-gloop-cyan mx-auto mb-2" />
                        <p className="text-[9px] font-black uppercase font-syne">Efectos Urban</p>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-4 text-center font-bold">Ideal para Stories y Estados.</p>
                  </div>

                  <div className="payment-info border-gloop-cyan">
                    <p className="text-white text-xs font-bold uppercase mb-1 flex items-center gap-1.5 font-syne">💳 Pago 100% Adelantado</p>
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] font-black text-gloop-cyan font-mono">Alias: jimenagloop</p>
                      <button 
                        onClick={handleCopyAlias}
                        className="text-[9px] uppercase tracking-wider font-bold text-gloop-cyan border border-gloop-cyan/30 rounded-md px-2 py-0.5 hover:bg-gloop-cyan hover:text-black transition-all"
                      >
                        {copiedState ? 'Copiado!' : 'Copiar'}
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-300">Titular: Sol Jimena Duran</p>
                  </div>

                  <a 
                    href="https://wa.me/541168862966?text=Hola!%20Quiero%20Video%20Invitaci%C3%B3n" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-gloop-cyan text-black text-center py-4 rounded-xl font-black uppercase text-xs sm:text-sm mt-4 tracking-widest font-syne"
                  >
                    Pedir Video ($25.000)
                  </a>
                </>
              )}

              {activeModal === 'web' && (
                <>
                  <h3 className="puffy-white text-5xl mb-2 uppercase leading-none font-bubble">Web Inv.</h3>
                  <p className="text-gloop-pink font-black text-[10px] uppercase mb-6 italic tracking-widest font-syne">Experiencia Premium</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <div className="explainer-box border-gloop-cyan mb-0">
                      <div className="bg-gloop-cyan/20 p-4 rounded-2xl border border-gloop-cyan/40 mb-4 text-center">
                        <QrCode className="w-8 h-8 mx-auto mb-2 text-gloop-cyan" />
                        <p className="puffy-white text-xl">CÓDIGO QR</p>
                        <p className="text-[10px] uppercase font-bold text-white tracking-widest mt-1">Sube fotos/videos en vivo</p>
                      </div>
                      <ul className="text-[9px] font-black uppercase space-y-2 font-syne">
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gloop-cyan" /> Cuenta Regresiva</li>
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gloop-cyan" /> Mapa GPS Real</li>
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gloop-cyan" /> Playlist Spotify</li>
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gloop-cyan" /> RSVP Web Inteligente</li>
                      </ul>
                      <p className="puffy-white text-xl text-center mt-4">¡PARA TODO EVENTO!</p>
                    </div>
                    <div className="border-2 border-gloop-cyan rounded-3xl overflow-hidden aspect-[9/16] relative bg-black">
                      {/* Active Preview embedded natively inside popup view list */}
                      <div className="w-full h-full scale-90 translate-y-2 origin-top">
                        <div className="w-full text-center text-white/50 text-[10px] uppercase tracking-wider font-bold mb-2">Simulador de Celular</div>
                        <div className="w-full max-w-[240px] mx-auto bg-gradient-to-tr from-[#142314] to-[#253f25] border border-[#c5a059]/40 rounded-xl p-3 text-center text-white text-[11px]">
                          <span className="text-[8px] font-sans font-bold text-[#c5a059] block">MIS 15 AÑOS</span>
                          <h4 className="text-lg font-serif italic text-[#c5a059]">{config.birthdayGirl}</h4>
                          <p className="text-xs opacity-65 font-serif font-light">{config.locationName}</p>
                          <div className="mt-2 bg-[#345037] py-1 text-[8px] tracking-widest text-center rounded-lg uppercase">Sábado 04 Oct</div>
                        </div>
                        <div className="mt-4 px-2 scale-75 origin-top text-slate-300 font-sans text-[10px]">
                          RSVP, cuenta regresiva, y fotos en vivo totalmente configurables con tu música preferida.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="payment-info border-gloop-cyan mt-6">
                    <p className="text-white text-xs font-bold uppercase mb-1 flex items-center gap-1.5 font-syne">💳 Pago 100% Adelantado</p>
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] font-black text-gloop-cyan font-mono">Alias: jimenagloop</p>
                      <button 
                        onClick={handleCopyAlias}
                        className="text-[9px] uppercase tracking-wider font-bold text-gloop-cyan border border-gloop-cyan/30 rounded-md px-2 py-0.5 hover:bg-gloop-cyan hover:text-black transition-all"
                      >
                        {copiedState ? 'Copiado!' : 'Copiar'}
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-300">Titular: Sol Jimena Duran</p>
                  </div>

                  <a 
                    href="https://wa.me/541168862966?text=Hola!%20Quiero%20Invitaci%C3%B3n%20Web" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-gloop-cyan text-black text-center py-4 rounded-xl font-black uppercase text-xs sm:text-sm mt-4 tracking-widest font-syne shadow-xl shadow-gloop-cyan/25"
                  >
                    Pedir Web ($40.000)
                  </a>
                </>
              )}

              {activeModal === 'logo' && (
                <>
                  <h3 className="puffy-white text-5xl mb-8 uppercase italic font-bubble">Solo Logo</h3>
                  
                  <div className="payment-info border-white">
                    <p className="text-white text-xs font-bold uppercase mb-1 flex items-center gap-1.5 font-syne">💳 Pago 100% Adelantado</p>
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] font-black text-white font-mono">Alias: jimenagloop</p>
                      <button 
                        onClick={handleCopyAlias}
                        className="text-[9px] uppercase tracking-wider font-bold text-white border border-white/30 rounded-md px-2 py-0.5 hover:bg-white hover:text-black transition-all"
                      >
                        {copiedState ? 'Copiado!' : 'Copiar'}
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-300 font-medium font-sans">Titular: Sol Jimena Duran</p>
                  </div>

                  <div className="text-sm space-y-4 font-sans text-slate-300 leading-relaxed font-light">
                    <p className="italic">Diseño único. Se puede modificar una sola vez gratis. Cambio extra posterior tendrá un costo adicional de $5.000.</p>
                    
                    <a 
                      href="https://wa.me/541168862966?text=Hola!%20Vengo%20por%20un%20Logo" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white text-black text-center py-4 rounded-xl font-black uppercase text-xs sm:text-sm mt-6 tracking-widest font-syne"
                    >
                      Pedir Logo ($20k+)
                    </a>
                  </div>
                </>
              )}

              {activeModal === 'webpages' && (
                <>
                  <h3 className="puffy-white text-5xl mb-8 uppercase italic font-bubble leading-none">Web Pages</h3>
                  
                  <div className="payment-info border-gloop-pink">
                    <p className="text-white text-xs font-bold uppercase mb-1 flex items-center gap-1.5 font-syne">💳 Pago 100% Adelantado</p>
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] font-black text-gloop-pink font-mono">Alias: jimenagloop</p>
                      <button 
                        onClick={handleCopyAlias}
                        className="text-[9px] uppercase tracking-wider font-bold text-gloop-pink border border-gloop-pink/30 rounded-md px-2 py-0.5 hover:bg-gloop-pink hover:text-black transition-all"
                      >
                        {copiedState ? 'Copiado!' : 'Copiar'}
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-300 font-medium italic font-sans animate-pulse">Titular: Sol Jimena Duran</p>
                  </div>

                  <div className="text-sm space-y-4 font-sans text-slate-300 leading-relaxed font-light">
                    <p className="italic">Páginas estructurales e interactivas para marcas y empresas. 1 modificación de estructura incluida. Cambio extra: $5.000.</p>
                    
                    <a 
                      href="https://wa.me/541168862966?text=Hola!%20Vengo%20por%20una%20P%C3%A1gina%20Web" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gloop-pink text-white text-center py-4 rounded-xl font-black uppercase text-xs sm:text-sm mt-6 tracking-widest font-syne shadow-2xl shadow-gloop-pink/25 animate-bounce"
                    >
                      Empezar Web ($75.000)
                    </a>
                  </div>
                </>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FOOTER AGENCY INFO matching exact user layout */}
      <footer className="w-full py-24 text-center border-t border-white/10 bg-black mt-20 select-none z-10">
        <div className="puffy-white text-4xl mb-4 italic leading-none select-none uppercase tracking-wide">
          Jimena Gloop
        </div>
        <p className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.6em] font-sans">
          Digital Art Studio • Argentina • 2026
        </p>
      </footer>
    </div>
  );
}
