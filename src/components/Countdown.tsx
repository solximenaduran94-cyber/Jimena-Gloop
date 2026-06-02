import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Sparkles } from 'lucide-react';

interface CountdownProps {
  targetDateStr: string; // "2026-10-04T22:00:00"
}

export default function Countdown({ targetDateStr }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDateStr) - +new Date();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isOver: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDateStr]);

  const timeBlocks = [
    { value: timeLeft.days, label: 'Días' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Minutos' },
    { value: timeLeft.seconds, label: 'Segundos' },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
        <Sparkles className="w-4 h-4 text-[#c5a059] animate-pulse" />
        <span className="text-[#c5a059] text-xs font-sans tracking-[0.3em] uppercase font-semibold">
          {timeLeft.isOver ? '¡Llegó el gran día!' : 'Falta muy poco'}
        </span>
        <Sparkles className="w-4 h-4 text-[#c5a059] animate-pulse" />
      </div>

      <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-lg w-full">
        {timeBlocks.map((block, index) => (
          <motion.div
            key={block.label}
            className="relative flex flex-col items-center p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, borderColor: '#c5a059' }}
          >
            {/* Top glass reflection gradient */}
            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-2xl pointer-events-none" />
            
            <span className="text-3xl sm:text-4xl font-serif font-light italic text-[#c5a059] tracking-tight">
              {block.value}
            </span>
            <span className="text-[10px] sm:text-xs text-white/50 tracking-[0.2em] font-sans uppercase mt-1">
              {block.label}
            </span>

            {/* Subtle sparkling decorative dot inside card */}
            <div className="absolute bottom-1 right-2 w-1 h-1 bg-[#c5a059]/30 rounded-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
