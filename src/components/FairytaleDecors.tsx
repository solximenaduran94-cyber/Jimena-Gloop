import React from 'react';

// Draped White Magnolias with Sage green stems and leaves for card corners
export function MagnoliaVines() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
      {/* Top Left Vines */}
      <svg className="absolute top-0 left-0 w-36 h-36 sm:w-56 sm:h-56 opacity-90 drop-shadow-md" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Soft twigs */}
        <path d="M-10 -10 C 30 20, 80 40, 110 30 C 130 20, 150 5, 160 -10" stroke="#4a5f4a" strokeWidth="3" strokeLinecap="round" />
        <path d="M20 -10 C 40 10, 60 15, 75 5" stroke="#4a5f4a" strokeWidth="2" strokeLinecap="round" />
        <path d="M-10 40 C 20 50, 45 70, 50 100" stroke="#4a5f4a" strokeWidth="2" strokeLinecap="round" />
        
        {/* Sage Leaves */}
        <path d="M30 15 C 20 30, 10 35, 5 30 C 0 25, 10 10, 30 15 Z" fill="#758c75" opacity="0.85" />
        <path d="M75 25 C 85 40, 80 50, 70 48 C 60 46, 65 30, 75 25 Z" fill="#8ca68c" opacity="0.9" />
        <path d="M100 28 C 115 35, 125 30, 120 22 C 115 15, 105 20, 100 28 Z" fill="#758c75" opacity="0.8" />
        <path d="M12 45 C 5 60, -5 65, -8 55 C -10 45, 0 40, 12 45 Z" fill="#8ca68c" opacity="0.8" />
        <path d="M40 70 C 28 85, 20 90, 18 80 C 15 70, 30 65, 40 70 Z" fill="#5c735c" opacity="0.8" />

        {/* Magnolia Blossoms */}
        {/* Flower 1 - Large central leaf/petal clusters */}
        <g transform="translate(60, 20) scale(0.95)">
          {/* Back petals */}
          <path d="M0 0 C -25 -25, -35 -5, -20 15 C -5 35, 15 25, 0 0 Z" fill="#fcfcf0" stroke="#e1d8c3" strokeWidth="1" />
          <path d="M0 0 C 25 -25, 35 -5, 20 15 C 5 35, -15 25, 0 0 Z" fill="#fcfcf0" stroke="#e1d8c3" strokeWidth="1" />
          <path d="M0 0 C -10 -35, 10 -35, 0 -5 Z" fill="#fafae8" stroke="#e1d8c3" strokeWidth="1" />
          {/* Front petals */}
          <path d="M0 5 C -20 -10, -25 15, -10 25 C 5 35, 15 20, 0 5 Z" fill="#ffffff" stroke="#e8e2d2" strokeWidth="1" />
          <path d="M0 5 C 20 -10, 25 15, 10 25 C -5 35, -15 20, 0 5 Z" fill="#ffffff" stroke="#e8e2d2" strokeWidth="1" />
          <path d="M0 8 C -10 15, -5 30, 0 28 C 5 30, 10 15, 0 8 Z" fill="#ffffff" stroke="#e8e2d2" strokeWidth="1" />
          {/* Flower center (pistil/stamens) */}
          <circle cx="0" cy="12" r="4" fill="#d4af37" opacity="0.9" />
          <circle cx="-1" cy="11" r="1.5" fill="#a48c32" />
        </g>

        {/* Flower 2 - Top left bud */}
        <g transform="translate(15, 10) scale(0.6)">
          <path d="M0 0 C -15 -25, -20 -5, -5 15 C 10 35, 25 15, 0 0 Z" fill="#fcfcf0" stroke="#e1d8c3" strokeWidth="1" />
          <path d="M-5 5 C -15 5, -5 25, 0 20 C 5 25, 15 5, -5 5 Z" fill="#ffffff" stroke="#e8e2d2" strokeWidth="1" />
          <path d="M-8 12 L-10 10" stroke="#d4af37" strokeWidth="2" />
          <circle cx="-5" cy="14" r="2" fill="#d4af37" />
        </g>

        {/* Flower 3 - Bottom left opening */}
        <g transform="translate(35, 60) scale(0.7)">
          <path d="M0 0 C -25 -5, -25 20, -5 25 C 15 30, 20 10, 0 0 Z" fill="#fafafd" stroke="#e1d8c3" strokeWidth="0.8" />
          <path d="M0 -5 C 15 -15, 25 10, 10 20 C -5 30, -10 10, 0 -5 Z" fill="#ffffff" stroke="#e8e2d2" strokeWidth="0.8" />
          <path d="M10 5 C 5 15, -2 12, 1 3 L5 5 Z" fill="#d4af37" />
        </g>
      </svg>

      {/* Top Right Vines */}
      <svg className="absolute top-0 right-0 w-36 h-36 sm:w-56 sm:h-56 opacity-90 drop-shadow-md transform scale-x-[-1]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Soft twigs */}
        <path d="M-10 -10 C 30 20, 80 40, 110 30 C 130 20, 150 5, 160 -10" stroke="#4a5f4a" strokeWidth="3" strokeLinecap="round" />
        <path d="M20 -10 C 40 10, 60 15, 75 5" stroke="#4a5f4a" strokeWidth="2" strokeLinecap="round" />
        <path d="M-10 40 C 20 50, 45 70, 50 100" stroke="#4a5f4a" strokeWidth="2" strokeLinecap="round" />
        
        {/* Sage Leaves */}
        <path d="M30 15 C 20 30, 10 35, 5 30 C 0 25, 10 10, 30 15 Z" fill="#758c75" opacity="0.85" />
        <path d="M75 25 C 85 40, 80 50, 70 48 C 60 46, 65 30, 75 25 Z" fill="#8ca68c" opacity="0.9" />
        <path d="M100 28 C 115 35, 125 30, 120 22 C 115 15, 105 20, 100 28 Z" fill="#5c735c" opacity="0.8" />

        {/* Magnolia Blossoms */}
        <g transform="translate(65, 25) scale(0.9)">
          <path d="M0 0 C -25 -25, -35 -5, -20 15 C -5 35, 15 25, 0 0 Z" fill="#fcfcf0" stroke="#e1d8c3" strokeWidth="1" />
          <path d="M0 0 C 25 -25, 35 -5, 20 15 C 5 35, -15 25, 0 0 Z" fill="#fcfcf0" stroke="#e1d8c3" strokeWidth="1" />
          <path d="M0 5 C -20 -10, -25 15, -10 25 C 5 35, 15 20, 0 5 Z" fill="#ffffff" stroke="#e8e2d2" strokeWidth="1" />
          <path d="M0 5 C 20 -10, 25 15, 10 25 C -5 35, -15 20, 0 5 Z" fill="#ffffff" stroke="#e8e2d2" strokeWidth="1" />
          <circle cx="0" cy="12" r="3.5" fill="#d4af37" opacity="0.9" />
        </g>

        {/* Extra opening petal */}
        <g transform="translate(115, 15) scale(0.6)">
          <path d="M0 0 C -20 -15, -15 15, 5 15 C 25 15, 15 -15, 0 0 Z" fill="#ffffff" stroke="#e1d8c3" strokeWidth="1" />
          <circle cx="2" cy="5" r="2.5" fill="#d4af37" />
        </g>
      </svg>
    </div>
  );
}

// Delicate Royal Crown/Tiara for top text alignment
export function GoldTiara({ className = "w-16 h-12" }: { className?: string }) {
  return (
    <svg className={`${className} text-[#c5a059] drop-shadow-[0_2px_8px_rgba(197,160,89,0.3)]`} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tiara Frame base */}
      <path d="M10 50 C 30 55, 70 55, 90 50 M15 48 C 30 51, 70 51, 85 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Crown Peaks */}
      {/* Central peak */}
      <path d="M50 15 L55 35 L45 35 Z" fill="currentColor" opacity="0.15" />
      <path d="M50 15 L50 49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="13" r="3.5" fill="currentColor" />
      <circle cx="50" cy="13" r="1.5" fill="#ffffff" />

      {/* Mid Left peak */}
      <path d="M32 24 L36 49" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="32" cy="22" r="2.5" fill="currentColor" />
      
      {/* Mid Right peak */}
      <path d="M68 24 L64 49" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="68" cy="22" r="2.5" fill="currentColor" />

      {/* Far Left peak */}
      <path d="M18 35 L24 49" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="18" cy="34" r="2" fill="currentColor" />

      {/* Far Right peak */}
      <path d="M82 35 L76 49" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="82" cy="34" r="2" fill="currentColor" />

      {/* Connected Arcs and Filigrees */}
      <path d="M18 34 C 23 28, 27 28, 32 22 C 37 16, 43 15, 50 13 C 57 15, 63 16, 68 22 C 73 28, 77 28, 82 34" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M15 48 C 24 40, 36 33, 50 32 C 64 33, 76 40, 85 48" stroke="currentColor" strokeWidth="1" fill="none" />
      
      {/* Tiny dangling design sparks */}
      <circle cx="50" cy="32" r="1.8" fill="currentColor" />
      <circle cx="37" cy="38" r="1.2" fill="currentColor" />
      <circle cx="63" cy="38" r="1.2" fill="currentColor" />
    </svg>
  );
}

// Gorgeous Watercolor Princess wearing an emerald ballroom gown, viewed from behind
export function PrincessEmeraldGown() {
  return (
    <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-32 h-44 sm:w-44 sm:h-60 pointer-events-none select-none overflow-hidden z-10 opacity-90">
      <svg className="w-full h-full drop-shadow-lg" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Soft magical glow behind princess */}
        <circle cx="60" cy="110" r="40" fill="#a4cca4" opacity="0.3" className="filter blur-xl" />
        
        {/* Hair updo and neck */}
        {/* Back and Neck */}
        <path d="M57 32 C 57 38, 63 38, 63 32 L61 24 L59 24 Z" fill="#ebc2a2" />
        <path d="M54 24 C 53 28, 55 31, 57 32 C 59 33, 61 33, 63 32 C 65 31, 67 28, 66 24 Z" fill="#f5d3b8" />
        {/* Dark hair styled elegantly in high bun */}
        <ellipse cx="60" cy="11" r="9" rx="8" ry="9" fill="#1c1109" />
        <ellipse cx="60" cy="18" r="7" rx="6" ry="7" fill="#24180f" />
        {/* Little pearl pins in hair */}
        <circle cx="55" cy="10" r="1.2" fill="#ffffff" />
        <circle cx="65" cy="11" r="1.2" fill="#ffffff" />
        <circle cx="60" cy="6" r="1.5" fill="#c5a059" /> {/* Tiny golden crown/comb pin */}
        <path d="M58 5 L62 5 L60 8 Z" fill="#c5a059" />
        
        {/* Slender shoulders and back */}
        <path d="M46 32 C 50 31, 56 32, 60 32 C 64 32, 70 31, 74 32 C 75 36, 73 40, 71 43 C 67 44, 53 44, 49 43 C 47 40, 45 36, 46 32 Z" fill="#f5d3b8" />
        
        {/* Gown Bodice (sweetheart back) */}
        <path d="M48 39 C 50 49, 70 49, 72 39 C 74 45, 71 52, 69 57 C 65 59, 55 59, 51 57 C 49 52, 46 45, 48 39 Z" fill="#223a22" />
        {/* Shading/textures of corset */}
        <path d="M48 39 C 53 43, 67 43, 72 39 C 68 53, 52 53, 48 39 Z" fill="#3c5f3c" />
        <path d="M59.5 39 L59.5 56" stroke="#c5a059" strokeWidth="0.8" strokeDasharray="1.5 1.5" /> {/* Lace up details */}
        
        {/* Casading, Tiered Princess Ballgown Gown */}
        {/* Layer 1: Base voluminous petticoat shadow */}
        <path d="M51 57 C 35 75, 20 100, 10 135 C 10 150, 110 150, 110 135 C 100 100, 85 75, 69 57 Z" fill="#1c2e1c" opacity="0.6" />
        
        {/* Watercolor emerald dress volume folds */}
        <g id="gown-folds">
          {/* Back main cascade */}
          <path d="M51 57 C 40 70, 25 100, 15 145 C 22 153, 98 153, 105 145 C 95 100, 80 70, 69 57 Z" fill="#2d4d2d" />
          
          {/* Individual swirling gorgeous cascading ruffles (watercolor layers) */}
          {/* Soft leftmost tulle tier */}
          <path d="M52 58 C 44 75, 32 98, 22 130 C 18 138, 26 148, 38 148 C 45 148, 52 118, 59 95 Z" fill="#3a5c3a" opacity="0.9" />
          <path d="M52 58 C 44 75, 32 98, 22 130 C 23 133, 45 110, 59 95 Z" fill="#4b704b" opacity="0.95" />

          {/* Soft rightmost tulle tier */}
          <path d="M68 58 C 76 75, 88 98, 98 130 C 102 138, 94 148, 82 148 C 75 148, 68 118, 61 95 Z" fill="#3a5c3a" opacity="0.9" />
          <path d="M68 58 C 76 75, 88 98, 98 130 C 97 133, 75 110, 61 95 Z" fill="#4b704b" opacity="0.95" />

          {/* Central Tier Waterfall */}
          <path d="M56 60 C 53 80, 48 105, 42 140 C 40 148, 52 152, 60 152 C 68 152, 80 148, 78 140 C 72 105, 67 80, 64 60 Z" fill="#466946" />
          <path d="M57 60 C 56 75, 52 95, 48 125 C 50 128, 70 128, 72 125 C 68 95, 64 75, 63 60 Z" fill="#5c825c" />
          
          {/* Golden embroidery / glitter sparkles on the hem */}
          <path d="M22 130 C 35 148, 85 148, 98 130" stroke="#c5a059" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
          <path d="M15 145 C 50 155, 70 155, 105 145" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          
          {/* Sparkly magical particles on gown */}
          <circle cx="45" cy="85" r="1.5" fill="#fdfcf0" />
          <circle cx="75" cy="90" r="1" fill="#fdfcf0" />
          <circle cx="60" cy="72" r="1.2" fill="#c5a059" />
          <circle cx="50" cy="115" r="1.5" fill="#c5a059" />
          <circle cx="70" cy="112" r="1" fill="#ffffff" />
          <circle cx="58" cy="135" r="1.8" fill="#ffffff" />
          <circle cx="35" cy="138" r="1.2" fill="#c5a059" />
          <circle cx="85" cy="135" r="1" fill="#fdfcf0" />
        </g>
      </svg>
    </div>
  );
}

// Cute illustrated frog prince sitting happily on a water lily leaf
export function CrownFrogLilypad() {
  return (
    <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-32 h-32 sm:w-40 sm:h-40 pointer-events-none select-none overflow-hidden z-10 opacity-90">
      <svg className="w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Glowing water lily magic circle */}
        <circle cx="60" cy="75" r="30" fill="#fdfcf0" opacity="0.2" className="filter blur-md" />

        {/* Large green water lily leaf (lotus pad) */}
        <g id="lilypad">
          {/* Main pad disk with slight watercolor wedge out */}
          <path d="M60 100 C 25 100, 15 80, 20 60 C 25 40, 60 40, 95 50 C 105 65, 100 85, 85 95 C 78 100, 71 96, 68 91 L60 100 Z" fill="#416347" />
          <path d="M60 98 C 28 98, 18 79, 23 61 C 28 43, 60 43, 93 52 C 101 64, 98 82, 84 92" stroke="#527d59" strokeWidth="1.5" fill="none" />
          
          {/* Leaf veins */}
          <path d="M60 70 L25 65" stroke="#527d59" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <path d="M60 70 L40 50" stroke="#527d59" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <path d="M60 70 L75 50" stroke="#527d59" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <path d="M60 70 L90 70" stroke="#527d59" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <path d="M60 70 L80 90" stroke="#527d59" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <path d="M60 70 L45 92" stroke="#527d59" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        </g>
        
        {/* Beautiful white blooming lotus (water lily) at pad side */}
        <g transform="translate(26, 76) scale(0.6)">
          <path d="M0 0 C -15 -10, -10 -25, 0 -30 C 10 -25, 15 -10, 0 0 Z" fill="#ffffff" stroke="#c0b9a9" strokeWidth="0.8" />
          <path d="M-8 -5 C -22 -12, -20 -3, -10 5 C 0 13, 10 5, -8 -5 Z" fill="#fafae8" stroke="#c0b9a9" strokeWidth="0.8" />
          <path d="M8 -5 C 22 -12, 20 -3, 10 5 C 0 13, -10 5, 8 -5 Z" fill="#fafae8" stroke="#c0b9a9" strokeWidth="0.8" />
          {/* Inner petals */}
          <path d="M-4 -8 C -12 -18, -2 -25, 0 -22 C 2 -25, 12 -18, 4 -8 Z" fill="#ffffff" />
          {/* Golden core */}
          <circle cx="0" cy="-10" r="3" fill="#d4af37" />
        </g>

        {/* Cute Crown Frog */}
        <g id="frog-prince" transform="translate(62, 58) scale(0.95)">
          {/* Frog Body shadows */}
          <ellipse cx="0" cy="14" rx="14" ry="10" fill="#4d7945" />
          <ellipse cx="0" cy="14" rx="12" ry="9" fill="#5fa254" />
          
          {/* Large frog eyes */}
          {/* Left Eye */}
          <circle cx="-8" cy="-1" r="5" fill="#5fa254" />
          <circle cx="-8" cy="-1" r="3.5" fill="#fdfcf0" />
          <circle cx="-7.5" cy="-1" r="1.8" fill="#112411" />
          <circle cx="-8.5" cy="-2" r="0.8" fill="#ffffff" /> {/* Eye light reflex */}
          
          {/* Right Eye */}
          <circle cx="8" cy="-1" r="5" fill="#5fa254" />
          <circle cx="8" cy="-1" r="3.5" fill="#fdfcf0" />
          <circle cx="7.5" cy="-1" r="1.8" fill="#112411" />
          <circle cx="6.5" cy="-2" r="0.8" fill="#ffffff" /> {/* Eye light reflex */}

          {/* Cheeks blush */}
          <circle cx="-9" cy="8" r="2" fill="#e88a8a" opacity="0.6" />
          <circle cx="9" cy="8" r="2" fill="#e88a8a" opacity="0.6" />

          {/* Smiling Mouth */}
          <path d="M-5 8 C -2 12, 2 12, 5 8" stroke="#2c4d26" strokeWidth="1.5" strokeLinecap="round" />

          {/* Underbelly (light yellow-green cream) */}
          <ellipse cx="0" cy="15" rx="8" ry="6" fill="#daecc8" />

          {/* Front tiny folding feet */}
          <path d="M-4 18 C -4 21, -8 24, -9 22 C -10 20, -6 17, -4 18 Z" fill="#416f39" />
          <path d="M4 18 C 4 21, 8 24, 9 22 C 10 20, 6 17, 4 18 Z" fill="#416f39" />
          <path d="M-2 19 C -2 23, -5 25, -5 23 C -5 21, -3 19, -2 19 Z" fill="#5fa254" />
          <path d="M2 19 C 2 23, 5 25, 5 23 C 5 21, 3 19, 2 19 Z" fill="#5fa254" />

          {/* Frog Prince Tiny Golden Crown */}
          <g transform="translate(0, -7)">
            <path d="M-5 5 L-6 0 L-2 2.5 L0 -2 L2 2.5 L6 0 L5 5 Z" fill="#d4af37" stroke="#b08c1a" strokeWidth="0.5" />
            <circle cx="-6" cy="-1" r="0.8" fill="#ffffff" />
            <circle cx="0" cy="-3.2" r="1" fill="#ffffff" />
            <circle cx="6" cy="-1" r="0.8" fill="#ffffff" />
            
            {/* Crown jewel dot */}
            <circle cx="0" cy="2.5" r="0.8" fill="#ff4d4d" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// Subtle golden dragonflies to float on the page sides
export function FloatingDragonflies() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-10">
      {/* Dragonfly 1 */}
      <svg className="absolute top-[28%] right-[8%] w-10 h-10 text-[#c5a059] opacity-70 animate-pulse duration-4000" viewBox="0 0 40 40" fill="currentColor">
        {/* Slender body */}
        <line x1="20" y1="8" x2="20" y2="34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="20" cy="8" r="1.5" />
        {/* Upper Wings */}
        <ellipse cx="11" cy="13" rx="9" ry="2.2" transform="rotate(-15, 11, 13)" opacity="0.7" />
        <ellipse cx="29" cy="13" rx="9" ry="2.2" transform="rotate(15, 29, 13)" opacity="0.7" />
        {/* Lower Wings */}
        <ellipse cx="13" cy="17" rx="7.5" ry="1.8" transform="rotate(-10, 13, 17)" opacity="0.5" />
        <ellipse cx="27" cy="17" rx="7.5" ry="1.8" transform="rotate(10, 27, 17)" opacity="0.5" />
      </svg>
      
      {/* Dragonfly 2 */}
      <svg className="absolute top-[68%] left-[7%] w-8 h-8 text-[#c5a059] opacity-60 animate-pulse duration-3000" viewBox="0 0 40 40" fill="currentColor">
        <g transform="rotate(35, 20, 20)">
          <line x1="20" y1="8" x2="20" y2="34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <circle cx="20" cy="8" r="1.4" />
          <ellipse cx="11" cy="13" rx="9" ry="2.2" transform="rotate(-15, 11, 13)" opacity="0.7" />
          <ellipse cx="29" cy="13" rx="9" ry="2.2" transform="rotate(15, 29, 13)" opacity="0.7" />
          <ellipse cx="13" cy="17" rx="7.5" ry="1.8" transform="rotate(-10, 13, 17)" opacity="0.5" />
          <ellipse cx="27" cy="17" rx="7.5" ry="1.8" transform="rotate(10, 27, 17)" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

// === MULAN THEME DECORATIVE COMPONENTS ===

// Beautiful draping pink Cherry Blossom branches for corners
export function CherryBlossoms() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
      {/* Top Left Branches */}
      <svg className="absolute top-0 left-0 w-36 h-36 sm:w-56 sm:h-56 opacity-95 drop-shadow-lg animate-pulse duration-5000" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Dark branches with a hint of gold glaze */}
        <path d="M-10 -10 C 40 10, 90 20, 120 10 C 140 0, 160 -10, 170 -20" stroke="#3d211b" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 -10 C 45 5, 75 12, 90 2" stroke="#3d211b" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M-10 30 C 15 35, 35 50, 40 80" stroke="#3d211b" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 15 C 65 25, 80 30, 85 45" stroke="#3d211b" strokeWidth="1.5" strokeLinecap="round" />

        {/* Delicate Sakura Buds & Blossoms */}
        {/* Blossom 1 - Corner */}
        <g transform="translate(68, 12) scale(0.9)">
          <path d="M0 0 C -15 -20, -25 -5, -15 10 C -5 20, 10 15, 0 0 Z" fill="#ffb7c5" stroke="#ff859d" strokeWidth="0.8" />
          <path d="M0 0 C 15 -20, 25 -5, 15 10 C 5 20, -10 15, 0 0 Z" fill="#ffb7c5" stroke="#ff859d" strokeWidth="0.8" />
          <path d="M0 0 C -5 -25, 5 -25, 0 -5 Z" fill="#ffc0cb" stroke="#ff859d" strokeWidth="0.8" />
          <circle cx="0" cy="6" r="3.5" fill="#fdfcf0" />
          {/* Gold pistil details */}
          <circle cx="0" cy="6" r="1.5" fill="#c5a059" />
        </g>

        {/* Blossom 2 - Main bloom */}
        <g transform="translate(110, 10) scale(1.1)">
          {/* 5 Petals structure */}
          <path d="M0 0 C -12 -20, -20 -15, -15 0 C -10 10, -2 8, 0 0 Z" fill="#ffb7c5" stroke="#ff7c95" strokeWidth="0.7" />
          <path d="M0 0 C 12 -20, 20 -15, 15 0 C 10 10, 2 8, 0 0 Z" fill="#ffb7c5" stroke="#ff7c95" strokeWidth="0.7" />
          <path d="M0 0 C -20 0, -18 15, -5 15 C 2 12, 0 5, 0 0 Z" fill="#ff9eb5" stroke="#ff7c95" strokeWidth="0.7" />
          <path d="M0 0 C 20 0, 18 15, 5 15 C -2 12, 0 5, 0 0 Z" fill="#ff9eb5" stroke="#ff7c95" strokeWidth="0.7" />
          <path d="M0 0 C -8 -22, 8 -22, 0 -3 Z" fill="#ffcbd5" stroke="#ff7c95" strokeWidth="0.7" />
          {/* Sparkling golden stamen stars */}
          <circle cx="0" cy="3" r="3" fill="#ffd700" />
          <circle cx="0" cy="3" r="1" fill="#ffffff" />
        </g>

        {/* Blossom 3 - Bud side branch */}
        <g transform="translate(35, 45) scale(0.75)">
          <path d="M0 0 C -15 -10, -15 15, -2 18 C 10 20, 12 5, 0 0 Z" fill="#ffb7c5" stroke="#ff859d" strokeWidth="0.8" />
          <path d="M0 -3 C 12 -12, 18 8, 8 15 C -2 22, -8 10, 0 -3 Z" fill="#ffe4e1" stroke="#ff859d" strokeWidth="0.8" />
          <circle cx="4" cy="7" r="2" fill="#ffd700" />
        </g>

        {/* Floating petals around */}
        <path d="M140 30 C 150 40, 142 45, 138 35 Z" fill="#ffb7c5" opacity="0.8" />
        <path d="M85 60 C 90 70, 85 75, 80 65 Z" fill="#ffb7c5" opacity="0.6" />
      </svg>

      {/* Top Right Branches */}
      <svg className="absolute top-0 right-0 w-36 h-36 sm:w-56 sm:h-56 opacity-95 drop-shadow-lg transform scale-x-[-1] animate-pulse duration-5000" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-10 -10 C 40 10, 90 20, 120 10 C 140 0, 160 -10, 170 -20" stroke="#3d211b" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 -10 C 45 5, 75 12, 90 2" stroke="#3d211b" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M-10 30 C 15 35, 35 50, 40 80" stroke="#3d211b" strokeWidth="2" strokeLinecap="round" />
        
        <g transform="translate(70, 15) scale(0.95)">
          <path d="M0 0 C -15 -20, -25 -5, -15 10 C -5 20, 10 15, 0 0 Z" fill="#ffb7c5" stroke="#ff859d" strokeWidth="0.8" />
          <path d="M0 0 C 15 -20, 25 -5, 15 10 C 5 20, -10 15, 0 0 Z" fill="#ffb7c5" stroke="#ff859d" strokeWidth="0.8" />
          <circle cx="0" cy="5" r="2.5" fill="#fdfcf0" />
          <circle cx="0" cy="5" r="1.2" fill="#c5a059" />
        </g>
        <g transform="translate(108, 12) scale(0.8)">
          <path d="M0 0 C -15 -10, -15 15, -2 18 C 10 20, 12 5, 0 0 Z" fill="#ffb7c5" stroke="#ff859d" strokeWidth="0.8" />
          <circle cx="2" cy="7" r="2" fill="#ffd700" />
        </g>
      </svg>
    </div>
  );
}

// Gorgeous Oriental Fan representing elegance and honor
export function OrientFan({ className = "w-32 h-24" }: { className?: string }) {
  return (
    <div className={`${className} pointer-events-none select-none z-10 overflow-visible`}>
      <svg className="w-full h-full drop-shadow-[0_4px_12px_rgba(197,160,89,0.35)]" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Soft magical circular glow behind the fan */}
        <circle cx="60" cy="65" r="30" fill="#ff3b30" opacity="0.15" className="filter blur-md" />

        {/* Fan Plies / Back Ribs */}
        <g stroke="#c5a059" strokeWidth="1.2" strokeLinecap="round">
          <line x1="60" y1="70" x2="10" y2="40" />
          <line x1="60" y1="70" x2="25" y2="25" />
          <line x1="60" y1="70" x2="45" y2="15" />
          <line x1="60" y1="70" x2="60" y2="10" />
          <line x1="60" y1="70" x2="75" y2="15" />
          <line x1="60" y1="70" x2="95" y2="25" />
          <line x1="60" y1="70" x2="110" y2="40" />
        </g>

        {/* Main Silk Fan Surface with dynamic red-gold gradient */}
        <path 
          d="M10 40 C 25 15, 95 15, 110 40 C 95 35, 25 35, 10 40 Z" 
          fill="url(#fanGrad)" 
          stroke="#c5a059" 
          strokeWidth="1.5" 
        />
        <path 
          d="M20 40 C 32 20, 88 20, 100 40" 
          stroke="#ffe0ad" 
          strokeWidth="1" 
          strokeDasharray="1.5 1.5"
          fill="none" 
        />

        {/* Cherry blossom design printed on the fan */}
        <g transform="translate(60, 26) scale(0.6)">
          <circle cx="-15" cy="5" r="4" fill="#ffb7c5" stroke="#ff69b4" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="5" fill="#fdfcf0" stroke="#ffb7c5" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="1.5" fill="#ffd700" />
          <circle cx="15" cy="8" r="3" fill="#ffb7c5" stroke="#ff69b4" strokeWidth="0.5" />
          {/* Branch connecting them */}
          <path d="M-22 10 C -10 12, 10 12, 22 10" stroke="#ffd700" strokeWidth="0.8" fill="none" />
        </g>

        {/* Gold Tassel hanging from bottom center pin */}
        <g transform="translate(60, 70)">
          {/* Fan pivot pin */}
          <circle cx="0" cy="0" r="3" fill="#ffd700" stroke="#b18c1a" strokeWidth="0.8" />
          <circle cx="0" cy="0" r="1" fill="#ffffff" />
          
          {/* Cord */}
          <path d="M0 3 L0 12" stroke="#ff3b30" strokeWidth="1.2" />
          
          {/* Knot */}
          <circle cx="0" cy="12" r="2.5" fill="#ffd700" />
          
          {/* Tassel threads hanging */}
          <path d="M-1.5 14 L-3 30 M0 14 L0 32 M1.5 14 L3 30" stroke="#ffd700" strokeWidth="1" strokeLinecap="round" opacity="0.9" />
          <path d="M-0.7 14 L-1.5 28 M0.7 14 L1.5 28" stroke="#ff3b30" strokeWidth="0.8" strokeLinecap="round" />
        </g>

        {/* Defenitions */}
        <defs>
          <linearGradient id="fanGrad" x1="10" y1="40" x2="110" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#800000" />
            <stop offset="25%" stopColor="#bd111a" />
            <stop offset="50%" stopColor="#d21f26" />
            <stop offset="75%" stopColor="#bd111a" />
            <stop offset="100%" stopColor="#800000" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Mulan's signature green jade hair comb with white cherry blossom flower
export function MulanComb({ className = "w-28 h-20" }: { className?: string }) {
  return (
    <div className={`${className} pointer-events-none select-none z-10 overflow-visible`}>
      <svg className="w-full h-full drop-shadow-[0_4px_10px_rgba(40,100,50,0.3)]" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Soft jade light backdrop */}
        <circle cx="50" cy="40" r="25" fill="#319b54" opacity="0.12" className="filter blur-md" />

        {/* Comb teeth (silver/gold alloy) */}
        <g stroke="#d6b472" strokeWidth="1.8" strokeLinecap="round">
          <line x1="25" y1="36" x2="25" y2="65" />
          <line x1="31" y1="36" x2="31" y2="67" />
          <line x1="37" y1="36" x2="37" y2="68" strokeWidth="2" />
          <line x1="43" y1="36" x2="43" y2="69" />
          <line x1="49" y1="36" x2="49" y2="69" />
          <line x1="55" y1="36" x2="55" y2="69" />
          <line x1="61" y1="36" x2="61" y2="68" strokeWidth="2" />
          <line x1="67" y1="36" x2="67" y2="67" />
          <line x1="73" y1="36" x2="73" y2="65" />
        </g>

        {/* Jade Spine Base */}
        <path 
          d="M20 37 C 35 25, 65 25, 80 37 M21 35 C 35 23, 65 23, 79 35" 
          stroke="#207a44" 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
        <path 
          d="M20 36 C 35 24, 65 24, 80 36" 
          stroke="#41bd75" 
          strokeWidth="2" 
          strokeLinecap="round" 
        />

        {/* Central Magnolia/Cherry Blossom Flower (representing Mulan’s hair flower) */}
        <g transform="translate(50, 24)">
          {/* Leaves underneath */}
          <path d="M-15 0 C -25 -10, -5 -22, 0 -15" fill="#1c5d33" />
          <path d="M15 0 C 25 -10, 5 -22, 0 -15" fill="#1c5d33" />
          
          {/* Back petals */}
          <path d="M0 -3 C -15 -18, -20 -3, -10 10" fill="#fcfcf0" stroke="#ffb7c5" strokeWidth="0.5" />
          <path d="M0 -3 C 15 -18, 20 -3, 10 10" fill="#fcfcf0" stroke="#ffb7c5" strokeWidth="0.5" />
          
          {/* Front white petals with pink gradients */}
          <circle cx="-10" cy="-3" r="7" fill="#ffffff" stroke="#ffb7c5" strokeWidth="0.7" />
          <circle cx="10" cy="-3" r="7" fill="#ffffff" stroke="#ffb7c5" strokeWidth="0.7" />
          <circle cx="0" cy="8" r="8" fill="#fafafa" stroke="#ffb7c5" strokeWidth="0.7" />
          <circle cx="-5" cy="5" r="7.5" fill="#ffffff" stroke="#ffb7c5" strokeWidth="0.7" />
          <circle cx="5" cy="5" r="7.5" fill="#ffffff" stroke="#ffb7c5" strokeWidth="0.7" />
          <circle cx="0" cy="-6" r="8.5" fill="#ffffff" stroke="#ffcbd5" strokeWidth="0.7" />

          {/* Central Golden Core Pistil */}
          <circle cx="0" cy="1" r="4.5" fill="#ffd700" />
          <circle cx="0" cy="1" r="2.5" fill="#ff4d4d" />
          <circle cx="0" cy="1" r="1.2" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}

// Cherry Blossom Petals floating gently with beautiful motion.js curves
export function CherryBlossomPetals() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-10">
      {/* Petal 1 */}
      <svg className="absolute top-[22%] right-[10%] w-6 h-6 text-[#ffcbd5]" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2 C 5 2, 2 7, 5 13 C 8 18, 14 18, 16 12 C 17 7, 14 2, 10 2 Z" opacity="0.8" className="animate-bounce" />
      </svg>
      {/* Petal 2 */}
      <svg className="absolute top-[52%] left-[8%] w-5 h-5 text-[#ffb7c5]" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2 C 5 2, 2 7, 5 13 C 8 18, 14 18, 16 12 C 17 7, 14 2, 10 2 Z" opacity="0.7" />
      </svg>
      {/* Petal 3 */}
      <svg className="absolute bottom-[24%] right-[12%] w-4 h-4 text-[#ffcbd5]" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2 C 5 2, 2 7, 5 13 C 8 18, 14 18, 16 12 C 17 7, 14 2, 10 2 Z" opacity="0.65" />
      </svg>
    </div>
  );
}

