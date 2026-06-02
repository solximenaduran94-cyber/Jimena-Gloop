import React, { useState, useEffect, useEffectEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Pause, Sparkles, Heart } from 'lucide-react';

interface Slide {
  url: string;
  title: string;
  caption: string;
}

const carouselSlides: Slide[] = [
  {
    url: '/67145a0856de08fd09821609a7348e9e.jpg',
    title: 'El Recuerdo Dorado',
    caption: 'Viviendo un sueño bajo las luces y la magia del Bayou.'
  },
  {
    url: '/7a505cf37e2fab7648759e7edf02d4aa.jpg',
    title: 'La Quinceañera Encantada',
    caption: 'Preparándome para escribir el capítulo más hermoso de mi vida.'
  },
  {
    url: '/d810e90edc740dcaaa415279643287ec.jpg',
    title: 'Destellos del Bayou',
    caption: 'Aires de cuento de hadas, donde los faroles iluminan el camino.'
  },
  {
    url: '/dd6bef746ab0102e08a3614fdc293b4a.jpg',
    title: 'Un Instante Mágico',
    caption: 'La princesa del reino celebra rodeada de risas y melodías reales.'
  }
];

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const [imageUrls, setImageUrls] = useState<string[]>(
    carouselSlides.map(slide => slide.url)
  );

  const handleImageError = (index: number) => {
    const fallbacks = [
      'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    ];
    setImageUrls(prev => {
      const next = [...prev];
      next[index] = fallbacks[index % fallbacks.length];
      return next;
    });
  };

  const nextSlide = useEffectEvent(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
  });

  const prevSlide = useEffectEvent(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  });

  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [isAutoplay]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  return (
    <div className="w-full max-w-2xl px-3 sm:px-4 flex flex-col items-center mb-16 sm:mb-20 font-sans select-none relative z-20">
      
      {/* Decorative Title */}
      <div className="text-center mb-6 relative w-full flex flex-col items-center select-none">
        <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-semibold mb-1">Mis Momentos</span>
        <h2 className="text-[#c5a059] font-serif font-light italic text-xl sm:text-2xl tracking-normal flex items-center gap-1.5 justify-center">
          <Sparkles className="w-4 h-4 text-[#c5a059] animate-pulse" />
          Galería del Reino
          <Sparkles className="w-4 h-4 text-[#c5a059] animate-pulse" />
        </h2>
        <div className="w-16 h-[1px] bg-[#c5a059]/30 mt-2 rounded-full" />
      </div>

      {/* Main Photographic Frame Carousel */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] md:h-[450px] rounded-3xl bg-[#0a170a]/90 border-4 border-double border-[#c5a059]/40 overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur-md flex flex-col">
        
        {/* Soft magical lighting background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#142314]/40 to-[#c5a059]/5 pointer-events-none z-0" />
        
        {/* Sliding images viewport */}
        <div className="relative flex-1 overflow-hidden flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={handleDragEnd}
              className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center p-3 sm:p-5 pb-16 sm:pb-20"
            >
              {/* Photo inside simulated antique frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#c5a059]/20 shadow-2xl bg-black">
                <img
                  src={imageUrls[currentIndex]}
                  onError={() => handleImageError(currentIndex)}
                  alt={carouselSlides[currentIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover sm:object-contain object-center pointer-events-none"
                />
                
                {/* Visual shimmer border glow overlay */}
                <div className="absolute inset-0 border border-white/5 pointer-events-none rounded-2xl" />
                
                {/* Delicate heart tag */}
                <span className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-md border border-[#c5a059]/30 rounded-full text-[10px] text-[#c5a059] font-mono tracking-widest flex items-center gap-1 uppercase select-none">
                  <Heart className="w-2.5 h-2.5 fill-[#c5a059] text-[#c5a059]" />
                  <span>Sofi • 15</span>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel overlay info/caption bar (placed elegant bottom style) */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent pt-12 pb-5 px-6 text-center text-white z-10 flex flex-col items-center">
          <motion.div
            key={`info-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-1"
          >
            <h3 className="text-[#c5a059] font-serif italic text-base sm:text-lg font-medium tracking-wide">
              {carouselSlides[currentIndex].title}
            </h3>
            <p className="text-white/80 text-xs sm:text-sm font-light italic leading-relaxed max-w-md mx-auto">
              "{carouselSlides[currentIndex].caption}"
            </p>
          </motion.div>

          {/* Indicators & controls list row */}
          <div className="flex items-center justify-between w-full mt-4 border-t border-white/10 pt-3 text-[10px] uppercase font-bold tracking-widest font-mono text-white/50">
            {/* Left page indicator */}
            <span className="text-[#c5a059]/80">
              {currentIndex + 1} / {carouselSlides.length}
            </span>

            {/* Custom Interactive Dot Indicators */}
            <div className="flex items-center justify-center gap-1.5">
              {carouselSlides.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => {
                    setDirection(dotIdx > currentIndex ? 1 : -1);
                    setCurrentIndex(dotIdx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    dotIdx === currentIndex ? 'w-4 bg-[#c5a059]' : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                  title={`Foto ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Play/pause toggles */}
            <button
              onClick={() => setIsAutoplay(prev => !prev)}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-[9px]"
              title={isAutoplay ? 'Pausar Reproducción' : 'Iniciar Reproducción'}
            >
              {isAutoplay ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5 fill-white/50 text-white/50" />}
              <span>{isAutoplay ? 'Auto' : 'Pausa'}</span>
            </button>
          </div>
        </div>

        {/* Floating manual prev/next arrow anchors */}
        <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none z-20">
          <button
            onClick={prevSlide}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-[#0a170a]/90 hover:border-[#c5a059]/60 hover:text-[#c5a059] border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer pointer-events-auto shadow-md backdrop-blur-xs transform active:scale-95"
            draggable={false}
            title="Anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-[#0a170a]/90 hover:border-[#c5a059]/60 hover:text-[#c5a059] border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer pointer-events-auto shadow-md backdrop-blur-xs transform active:scale-95"
            draggable={false}
            title="Siguiente"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

      </div>

    </div>
  );
}
