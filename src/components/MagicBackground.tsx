import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function MagicBackground() {
  const [fireflies, setFireflies] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate fireflies with random positions, sizes and delays
    const count = 35;
    const generated = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage of width
      y: Math.random() * 100, // percentage of height
      size: Math.random() * 6 + 2, // px
      delay: Math.random() * 8, // seconds
      duration: Math.random() * 12 + 8, // seconds
    }));
    setFireflies(generated);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-gradient-to-b from-[#172617] via-[#0b120b] to-[#060a06]">
      {/* Mystical Forest Lighting overlay in gold */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(197,160,89,0.14),transparent_75%)] animate-pulse duration-8000" />
      
      {/* Starry Night Sky details */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_50%,transparent_100%)]" />

      {/* Elegant structural golden curves representing Bayou/tiara */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-[0.08] border border-[#c5a059] rounded-full flex items-center justify-center">
        <div className="w-24 h-24 border border-[#c5a059] rounded-full"></div>
      </div>
      <div className="absolute bottom-10 right-10 w-52 h-52 opacity-[0.05] border border-[#c5a059] rounded-full flex items-center justify-center">
        <div className="w-40 h-40 border border-[#c5a059] rounded-full"></div>
      </div>

      {/* Floating Fireflies */}
      {fireflies.map((ff) => (
        <motion.div
          key={ff.id}
          className="absolute rounded-full bg-gradient-to-br from-[#FFE066] to-[#E3A813]"
          style={{
            left: `${ff.x}%`,
            top: `${ff.y}%`,
            width: ff.size,
            height: ff.size,
            boxShadow: '0 0 8px 3px rgba(254, 215, 170, 0.7)',
          }}
          animate={{
            y: [-30, -180],
            x: [0, Math.sin(ff.id) * 40, 0],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: ff.duration,
            delay: ff.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Water Lilies & Bayou Silhouettes at the very bottom */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#020904] to-transparent opacity-80 pointer-events-none" />
      
      {/* Decorative pond reflections */}
      <div className="absolute bottom-6 left-1/4 w-48 h-1.5 bg-gradient-to-r from-transparent via-[#76C2AF]/20 to-transparent rounded-full filter blur-[1px] animate-pulse duration-5000" />
      <div className="absolute bottom-14 right-1/4 w-64 h-2 bg-gradient-to-r from-transparent via-[#E3A813]/10 to-transparent rounded-full filter blur-[2px] animate-pulse duration-7000" />
    </div>
  );
}
