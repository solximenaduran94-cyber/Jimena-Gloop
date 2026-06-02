import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Music, Volume2, VolumeX } from 'lucide-react';

export default function AmbientMusic({ theme }: { theme?: 'esmeralda' | 'dorado' }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Audio playback failed: ", err);
        });
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.55; // Pleasant, non-overwhelming initial volume level
    }
  }, []);

  return (
    <div className="flex items-center gap-3 bg-[#0a170a]/90 border border-[#c5a059]/30 rounded-2xl p-3 pr-5 shadow-xl shadow-black/40 backdrop-blur-md max-w-sm select-none">
      {/* Hidden HTML5 Audio Element referencing the converted safe-path MP3 track */}
      <audio 
        ref={audioRef} 
        src="/llegare_karaoke.mp3" 
        loop 
        preload="auto"
      />

      <motion.button
        onClick={toggleMusic}
        className={`relative p-3.5 rounded-full outline-hidden cursor-pointer flex items-center justify-center border ${
          isPlaying 
            ? 'bg-gradient-to-br from-[#c5a059] to-[#917135] border-[#fdfcf0] text-[#0a170a]' 
            : 'bg-[#0a170a] border-[#c5a059]/30 text-[#c5a059]'
        }`}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        title={isPlaying ? "Pausar música" : "Reproducir canción"}
      >
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={isPlaying ? { repeat: Infinity, duration: 10, ease: 'linear' } : {}}
        >
          {isPlaying ? <Volume2 className="w-5 h-5 font-bold" /> : <VolumeX className="w-5 h-5" />}
        </motion.div>
        
        {/* Animated pulse indicator when playing */}
        {isPlaying && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a059] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#c5a059]"></span>
          </span>
        )}
      </motion.button>

      <div className="flex flex-col select-none">
        <div className="flex items-center gap-1">
          <Music className="w-3.5 h-3.5 text-[#c5a059] animate-pulse" />
          <span className="text-[#c5a059] text-xs font-semibold tracking-wide uppercase font-sans block">
            {theme === 'dorado' ? 'Soundtrack Real' : 'Canción Temática'}
          </span>
        </div>
        <p className="text-white/95 text-[11px] mt-0.5 font-medium leading-tight">
          {isPlaying 
            ? (theme === 'dorado' ? 'Llegaré a Ser un Héroe (Mulan)' : 'Almost There / Llegaré (Sapo)')
            : 'Escucha mi canción especial'}
        </p>
        <span className="text-white/50 text-[9px] uppercase tracking-wider mt-0.5 font-mono">
          {isPlaying ? 'Sonando en Vivo ♫' : 'Haz clic para ambientar'}
        </span>
      </div>

      {isPlaying && (
        <div className="flex items-end gap-0.5 h-3.5 ml-auto">
          {[0.6, 0.4, 0.8, 0.3, 0.7].map((h, i) => (
            <motion.div
              key={i}
              className="w-0.75 bg-[#c5a059] rounded-t-sm"
              animate={{ height: [`${h * 100}%`, `${(1 - h) * 100}%`, `${h * 100}%`] }}
              transition={{ repeat: Infinity, duration: 1 + i * 0.2, ease: 'easeInOut' }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
