import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Image as ImageIcon, Upload, Trash2, Heart, PlusCircle, Sparkles } from 'lucide-react';
import type { PhotoUpload } from '../types';

interface PhotoUploadAlbumProps {
  googleDriveUrl: string;
}

export default function PhotoUploadAlbum({ googleDriveUrl }: PhotoUploadAlbumProps) {
  const [photos, setPhotos] = useState<PhotoUpload[]>([]);
  const [caption, setCaption] = useState('');
  const [sender, setSender] = useState('');
  const [uploadProgress, setUploadProgress] = useState(-1);
  const [urlInput, setUrlInput] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  // Set default photographs
  useEffect(() => {
    const saved = localStorage.getItem('guest_photos_15');
    if (saved) {
      try {
        setPhotos(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    } else {
      const demoPhotos: PhotoUpload[] = [
        {
          id: 'p1',
          url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80',
          caption: 'Hermosa ambientación dorada y verde bosque ✨',
          sender: 'Milo Alvarez',
          timestamp: '26/05/2026, 02:40'
        },
        {
          id: 'p2',
          url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
          caption: '¡Comiendo los deliciosos cupcakes del bayou! 🧁🐸',
          sender: 'Delfina Gómez',
          timestamp: '26/05/2026, 03:10'
        },
        {
          id: 'p3',
          url: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=600&q=80',
          caption: 'La mesa dulce llena de estrellitas y magia.',
          sender: 'Tía Carolina',
          timestamp: '26/05/2026, 03:45'
        }
      ];
      setPhotos(demoPhotos);
      localStorage.setItem('guest_photos_15', JSON.stringify(demoPhotos));
    }
  }, []);

  const savePhotos = (updated: PhotoUpload[]) => {
    setPhotos(updated);
    localStorage.setItem('guest_photos_15', JSON.stringify(updated));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      simulateFileUpload();
    }
  };

  const simulateFileUpload = () => {
    if (!sender.trim()) {
      alert('Por favor, indica tu nombre para saber quién sube la foto.');
      return;
    }

    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            const link = urlInput.trim() || 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80';
            const newPhoto: PhotoUpload = {
              id: Math.random().toString(36).substring(2, 9),
              url: link,
              caption: caption.trim() || '¡Viviendo momentos mágicos! 🥂',
              sender: sender.trim(),
              timestamp: new Date().toLocaleDateString('es-AR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })
            };
            const updated = [newPhoto, ...photos];
            savePhotos(updated);
            
            // cleanup
            setUploadProgress(-1);
            setCaption('');
            setUrlInput('');
          }, 300);
          return 100;
        }
        return prev + 25;
      });
    }, 200);
  };

  const handleDeletePhoto = (id: string) => {
    const updated = photos.filter((p) => p.id !== id);
    savePhotos(updated);
  };

  return (
    <div className="w-full max-w-4xl px-4 flex flex-col items-center gap-8 mt-6 pb-20 font-sans select-none">
      
      {/* Visual Divider */}
      <div className="flex items-center gap-4 w-full justify-center opacity-60">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#c5a059]" />
        <Camera className="w-5 h-5 text-[#c5a059]" />
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#c5a059]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        
        {/* Photos Google Drive QR Code Card */}
        <motion.div
          className="p-6 sm:p-8 rounded-2xl bg-[#0a170a]/90 border border-[#c5a059]/30 hover:border-[#c5a059]/50 shadow-2xl backdrop-blur-md flex flex-col items-center justify-between text-center relative transition-all"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <div className="p-3 bg-[#c5a059]/10 border border-[#c5a059]/30 rounded-xl text-[#c5a059] w-fit mx-auto mb-4">
              <Camera className="w-6 h-6" />
            </div>
            
            <h3 className="text-[#c5a059] font-sans font-medium text-base tracking-widest uppercase">Álbum Digital en Google Drive</h3>
            <p className="text-white/60 text-xs max-w-sm mx-auto mt-2 leading-relaxed">
              Durante la fiesta, puedes escanear este código QR con tu celular o hacer clic en el botón para subir todas las fotos y videos directos a nuestra carpeta mágica.
            </p>
          </div>

          {/* Majestic Thematic QR Code pointing to Google Drive */}
          <div className="my-6 p-4 bg-black/35 border border-[#c5a059]/25 rounded-2xl relative w-48 h-48 flex items-center justify-center shadow-lg shadow-black/80">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.1),transparent_70%)] rounded-2xl" />
            
            <div className="p-1 px-[5px] bg-white rounded-xl relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&color=081a14&data=${encodeURIComponent(googleDriveUrl)}`}
                alt="Google Drive Folder QR"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2.5 w-full">
            <a
              href={googleDriveUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 bg-[#c5a059] text-[#0a170a] font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-[#fdfcf0] transition-colors flex items-center justify-center gap-1.5 cursor-pointer font-sans shadow-md"
            >
              <span>Subir fotos a Google Drive</span>
              <span>↗</span>
            </a>
            
            <span className="text-[9px] text-white/45 font-mono truncate max-w-[280px] self-center">
              {googleDriveUrl}
            </span>
          </div>
        </motion.div>

        {/* Guest Photo Upload Form & Simulated Upload */}
        <motion.div
          className="p-6 sm:p-8 rounded-2xl bg-[#0a170a]/90 border border-[#c5a059]/30 hover:border-[#c5a059]/50 shadow-2xl backdrop-blur-md flex flex-col justify-between transition-all"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <h4 className="text-[#c5a059] font-sans font-medium text-base uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Upload className="w-4 h-4 text-[#c5a059]" />
              Sube tus fotos aquí
            </h4>
            <p className="text-white/50 text-xs mb-4">
              ¿No tienes un lector QR a mano? Sube una foto simulada desde tu navegador ahora mismo eligiendo tu nombre y completando los datos.
            </p>

            <div className="space-y-4 pt-1.5 text-white">
              <div>
                <label className="block text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">Tu Nombre</label>
                <input
                  type="text"
                  placeholder="Ej. Sofía Maldonado"
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-black/25 border border-[#c5a059]/20 rounded-xl focus:outline-hidden focus:border-[#c5a059] text-white placeholder-white/20 text-xs transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">Descripción / Mensaje</label>
                <input
                  type="text"
                  placeholder="Ej. ¡Qué hermosa noche! ✨💚"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-black/25 border border-[#c5a059]/20 rounded-xl focus:outline-hidden focus:border-[#c5a059] text-white placeholder-white/20 text-xs transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">Foto (Simulación URL - O vacío para default)</label>
                <input
                  type="text"
                  placeholder="Ingresa link de foto o déjalo vacío para un placeholder mágico"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-black/25 border border-[#c5a059]/20 rounded-xl focus:outline-hidden focus:border-[#c5a059] text-white placeholder-white/20 text-xs font-mono transition-all"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            {/* Drag & Drop simulated box */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={simulateFileUpload}
              className={`border border-dashed p-5 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${
                isDragging 
                  ? 'border-[#c5a059] bg-[#c5a059]/10' 
                  : 'border-white/10 bg-black/20 hover:border-[#c5a059]/40 hover:bg-black/30'
              }`}
            >
              <Camera className="w-7 h-7 text-[#c5a059] animate-pulse" />
              <p className="text-white text-xs font-semibold">
                {uploadProgress >= 0 ? `Subiendo... ${uploadProgress}%` : 'Hacer Click para subir'}
              </p>
              <p className="text-white/40 text-[10px]">Prepara tu mejor sonrisa 📸</p>
            </div>

            {uploadProgress >= 0 && (
              <div className="w-full h-1 bg-white/5 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#c5a059] to-[#fdfcf0] transition-all duration-200" style={{ width: `${uploadProgress}%` }} />
              </div>
            )}
          </div>
        </motion.div>

      </div>

      {/* Guest Photos live stream Gallery */}
      <div className="w-full mt-4">
        <h4 className="text-white font-sans text-center text-lg uppercase tracking-widest mb-6 flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-[#c5a059]" />
          Álbum Colectivo en Vivo
        </h4>

        {photos.length === 0 ? (
          <p className="text-center text-white/40 text-xs italic py-10">Todavía no se subió ninguna foto. ¡Sé el primero en aportar un recuerdo!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {photos.map((photo) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="rounded-xl overflow-hidden bg-[#0a170a]/90 border border-[#c5a059]/25 shadow-2xl group relative"
                  whileHover={{ y: -3 }}
                >
                  <div className="aspect-video w-full overflow-hidden relative bg-black/40">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Delete button */}
                    <button
                      onClick={() => handleDeletePhoto(photo.id)}
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-red-400 hover:text-white hover:bg-red-600 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="p-4">
                    <p className="text-white text-xs font-medium leading-relaxed font-serif italic">"{photo.caption}"</p>
                    <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-white/5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-[#c5a059] font-bold">👤 {photo.sender}</span>
                      </div>
                      <span className="text-[9px] text-white/40 font-mono">{photo.timestamp}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

    </div>
  );
}
