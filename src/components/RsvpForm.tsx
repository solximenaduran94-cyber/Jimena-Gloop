import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserCheck, Users, Search, AlertCircle, Plus, Sparkles, Check, CheckCircle, Smartphone, Lock, Unlock, Key } from 'lucide-react';
import type { GuestRSVP } from '../types';

interface RsvpFormProps {
  birthdayGirl: string;
  adminPin: string;
  theme?: 'esmeralda' | 'dorado';
}

export default function RsvpForm({ birthdayGirl, adminPin, theme = 'esmeralda' }: RsvpFormProps) {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState<'yes' | 'no'>('yes');
  const [menu, setMenu] = useState<'standard' | 'vegetarian' | 'vegan' | 'celiac'>('standard');
  const [message, setMessage] = useState('');
  const [songRequest, setSongRequest] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  // Security gate states
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  
  // Custom ticket generation state
  const [ticketData, setTicketData] = useState<GuestRSVP | null>(null);

  // Guests List state (local storage)
  const [guests, setGuests] = useState<GuestRSVP[]>([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [searchText, setSearchText] = useState('');

  // Toast / error state
  const [error, setError] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('rsvps_15_princess');
    if (saved) {
      try {
        setGuests(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const saveRsvps = (updatedList: GuestRSVP[]) => {
    localStorage.setItem('rsvps_15_princess', JSON.stringify(updatedList));
    setGuests(updatedList);
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Por favor indica tu nombre y apellido');
      return;
    }
    setError('');

    const newRsvp: GuestRSVP = {
      id: Math.random().toString(36).substring(2, 9),
      name: name.trim(),
      attendance,
      menu,
      message: message.trim(),
      songRequest: songRequest.trim(),
      timestamp: new Date().toLocaleDateString('es-AR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
    };

    const updated = [newRsvp, ...guests];
    saveRsvps(updated);
    setTicketData(newRsvp);
    setSubmitted(true);

    // Reset input fields
    setName('');
    setMessage('');
    setSongRequest('');
  };

  // Pre-populate some cute default guests if list is empty to showcase the organizer dashboard
  useEffect(() => {
    if (guests.length === 0) {
      const demoGuests: GuestRSVP[] = [
        { id: '1', name: 'Milo Alvarez', attendance: 'yes', menu: 'standard', message: '¡Felicidades Sofi! Qué ganas de celebrar con vos', songRequest: 'Un Poquito de Todo - Tiana', timestamp: '24/05/2026, 15:30' },
        { id: '2', name: 'Delfina Gómez', attendance: 'yes', menu: 'vegetarian', message: 'No me lo pierdo por nada del mundo ✨', songRequest: 'La Princesa y el Sapo - Ne-Yo', timestamp: '25/05/2026, 09:12' },
        { id: '3', name: 'Lucas Pérez', attendance: 'no', menu: 'standard', message: '¡Feliz cumple Sofi! No voy a poder estar pero te deseo lo mejor.', songRequest: '', timestamp: '25/05/2026, 18:45' }
      ];
      saveRsvps(demoGuests);
    }
  }, [guests]);

  const handleVerifyPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === adminPin.trim()) {
      setIsUnlocked(true);
      setPinError('');
    } else {
      setPinError('El PIN ingresado es incorrecto. Intenta de nuevo 🔮');
    }
  };

  const handleDelete = (id: string) => {
    const filtered = guests.filter(g => g.id !== id);
    saveRsvps(filtered);
  };

  const filteredGuests = guests.filter(g =>
    g.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const confirmedCount = guests.filter(g => g.attendance === 'yes').length;

  return (
    <div className="w-full max-w-4xl px-4 flex flex-col items-center gap-8 mt-6">
      
      {/* Decorative separators with crown */}
      <div className="flex items-center gap-4 w-full justify-center opacity-60">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#c5a059]" />
        <span className="text-xl">{theme === 'dorado' ? '✨👑⚜️' : '🐸👑🥀'}</span>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#c5a059]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        
        {/* Reservation Form Column */}
        <div className="lg:col-span-12 xl:col-span-12 flex flex-col items-center">
          <div className={`w-full max-w-2xl p-6 sm:p-8 rounded-2xl border border-[#c5a059]/30 hover:border-[#c5a059]/50 shadow-2xl backdrop-blur-md relative transition-all ${
            theme === 'dorado' ? 'bg-[#0d0d11]/95' : 'bg-[#0a170a]/90'
          }`}>
            <div className={`absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 text-[#c5a059] border border-[#c5a059] font-semibold text-[10px] sm:text-xs uppercase px-5 py-1.5 rounded-full tracking-widest shadow-md ${
              theme === 'dorado' ? 'bg-[#0a0a0d]' : 'bg-[#0a170a]'
            }`}>
              Confirmación de Asistencia
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleRsvpSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 pt-4 text-white font-sans"
                >
                  <p className="text-center text-xs text-white/50 mb-6 uppercase tracking-wider">
                    Por favor, confirma tu asistencia antes del 15 de Septiembre
                  </p>

                  {error && (
                    <div className="p-3.5 bg-red-950/40 border border-red-500/20 text-red-200 text-xs rounded-xl flex items-center gap-2">
                       <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label className="block text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold mb-1.5">Nombre y Apellido</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Tiana Maldonado"
                      className="w-full px-4 py-3 bg-black/25 border border-[#c5a059]/20 rounded-xl focus:outline-hidden focus:border-[#c5a059] transition-all text-white placeholder-white/20 text-sm"
                    />
                  </div>

                  {/* Attendance Switch */}
                  <div>
                    <label className="block text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold mb-2">¿Asistirás a la fiesta?</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setAttendance('yes')}
                        className={`py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-widest border cursor-pointer transition-all ${
                          attendance === 'yes'
                            ? 'bg-[#c5a059]/15 border-[#c5a059] text-[#c5a059] shadow-md'
                            : 'bg-black/20 border-white/10 text-white/50 hover:bg-white/5 hover:border-[#c5a059]/30'
                        }`}
                      >
                        💚 ¡Sí, asistiré!
                      </button>
                      <button
                        type="button"
                        onClick={() => setAttendance('no')}
                        className={`py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-widest border cursor-pointer transition-all ${
                          attendance === 'no'
                            ? 'bg-red-950/20 border-red-500/35 text-red-300 shadow-md'
                            : 'bg-black/20 border-white/10 text-white/50 hover:bg-white/5 hover:border-[#c5a059]/30'
                        }`}
                      >
                        💔 No podré ir
                      </button>
                    </div>
                  </div>

                  {/* Menu selection (conditional) */}
                  {attendance === 'yes' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-1"
                    >
                      <label className="block text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold mb-1.5">Preferencia de Menú</label>
                      <select
                        value={menu}
                        onChange={(e: any) => setMenu(e.target.value)}
                        className="w-full px-4 py-3 bg-black/25 border border-[#c5a059]/20 rounded-xl focus:outline-hidden focus:border-[#c5a059] transition-all text-white text-sm"
                      >
                        <option value="standard">Standard (Clásico)</option>
                        <option value="vegetarian">Vegetariano</option>
                        <option value="vegan">Vegano</option>
                        <option value="celiac">Celíaco (Sin Tacc)</option>
                      </select>
                    </motion.div>
                  )}

                  {/* Song Request (conditional) */}
                  {attendance === 'yes' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <label className="block text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold mb-1.5">¿Qué canción no puede faltar?</label>
                      <input
                        type="text"
                        value={songRequest}
                        onChange={(e) => setSongRequest(e.target.value)}
                        placeholder="Ej. La Princesa y el Sapo - Ne-Yo"
                        className="w-full px-4 py-3 bg-black/25 border border-[#c5a059]/20 rounded-xl focus:outline-hidden focus:border-[#c5a059] transition-all text-white placeholder-white/20 text-sm"
                      />
                    </motion.div>
                  )}

                  {/* Message / Comments */}
                  <div>
                    <label className="block text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold mb-1.5">Mensaje para {birthdayGirl}</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Dejale tus buenos deseos a la quinceañera..."
                      rows={3}
                      className="w-full px-4 py-3 bg-black/25 border border-[#c5a059]/20 rounded-xl focus:outline-hidden focus:border-[#c5a059] transition-all text-white placeholder-white/20 text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#c5a059] hover:bg-[#fdfcf0] text-[#081a14] font-bold text-xs rounded-xl uppercase tracking-widest transition-all duration-300 shadow-lg cursor-pointer font-sans"
                  >
                    Confirmar Asistencia ✨
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="pt-6 text-center text-white font-sans"
                >
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40 mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-[#c5a059] font-serif italic">¡Asistencia Registrada!</h4>
                  <p className="text-white/60 text-sm mt-1 max-w-md mx-auto">
                    {ticketData?.attendance === 'yes'
                      ? 'Tu lugar está reservado para la noche mágica. ¡Nos vemos en el Bayou real!'
                      : 'Lamentamos mucho que no puedas asistir. ¡Gracias por hacernos saber!'}
                  </p>

                  {/* Ticket Card with QR Code conforming to theme */}
                  {ticketData?.attendance === 'yes' && (
                    <div className="mt-6 p-5 rounded-2xl bg-white/5 border border-[#c5a059]/30 max-w-sm mx-auto shadow-inner text-left relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-1 px-4 bg-[#c5a059] text-[#081a14] font-bold text-[8px] uppercase tracking-wider rounded-bl-xl font-sans">
                        Pase de Invitado
                      </div>
                      <div className="flex gap-4">
                        {/* Mock Ticket QR Code SVG */}
                        <div className="p-1.5 bg-white rounded-lg shrink-0 w-24 h-24 flex items-center justify-center relative shadow-md">
                          <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-900">
                            <path fill="currentColor" d="M0,0 h30 v10 h-20 v20 h-10 z M70,0 h30 v30 h-10 v-20 h-20 z M0,70 h10 v20 h20 v10 h-30 z M70,100 h30 v-30 h-10 v20 h-20 z" />
                            <path fill="currentColor" d="M15,15 h10 v10 h-10 z M25,40 h15 v10 h-15 z M45,15 h15 v10 h-15 z M75,15 h10 v10 h-10 z M15,75 h10 v10 h-10 z M55,50 h10 v20 h-10 z" />
                            <circle cx="50" cy="50" r="10" fill="#c5a059" />
                            <polygon points="50,45 53,51 50,55 47,51" fill="#081a14" />
                          </svg>
                        </div>
                        <div className="flex flex-col justify-between text-xs mt-2 overflow-hidden">
                          <div>
                            <p className="text-[#c5a059] font-bold tracking-wide truncate">{ticketData.name}</p>
                            <p className="text-white/50 text-[10px] uppercase font-mono mt-0.5">Menú: {ticketData.menu.toUpperCase()}</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-white/40">ID: {ticketData.id}</p>
                            <p className="text-[10px] text-white/30">{ticketData.timestamp}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 py-2 px-6 bg-white/5 hover:bg-white/10 text-[#c5a059] border border-[#c5a059]/30 text-xs rounded-xl font-bold uppercase tracking-widest transition-all cursor-pointer"
                  >
                    Confirmar otro invitado
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Guest list organizer view trigger */}
        <div className="lg:col-span-12 w-full flex flex-col items-center">
          <button
            onClick={() => setShowAdmin(!showAdmin)}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white/80 hover:text-[#c5a059] border border-white/10 rounded-full text-xs font-semibold tracking-widest uppercase transition-all cursor-pointer shadow-md font-sans"
          >
            <Users className="w-4 h-4 text-[#c5a059]" />
            <span>{showAdmin ? 'Ocultar listado de confirmados' : 'Ver listado de confirmados (Dashboard)'}</span>
          </button>

          {/* Admin RSVP List Panel */}
          <AnimatePresence>
            {showAdmin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`w-full max-w-2xl mt-4 border border-[#c5a059]/30 rounded-2xl p-5 overflow-hidden shadow-2xl backdrop-blur-md font-sans ${
                  theme === 'dorado' ? 'bg-[#0a0a0c]/95' : 'bg-[#0a170a]/95'
                }`}
              >
                {!isUnlocked ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleVerifyPin}
                    className="py-6 px-4 text-center max-w-sm mx-auto space-y-4"
                  >
                    <div className="w-14 h-14 bg-[#c5a059]/10 border border-[#c5a059]/30 rounded-full flex items-center justify-center mx-auto mb-2 shadow-inner">
                      <Lock className="w-5 h-5 text-[#c5a059]" />
                    </div>
                    <div>
                      <h5 className="text-[#c5a059] font-serif font-semibold text-base italic">Cofre de Invitados Privado</h5>
                      <p className="text-white/50 text-xs mt-1 leading-relaxed">
                        Este espacio de confirmados es privado para los organizadores de {birthdayGirl}. Susurra la clave real para abrir el pergamino:
                      </p>
                    </div>

                    <div className="space-y-2">
                      <input
                        type="password"
                        placeholder="Ingresa clave de acceso..."
                        value={pinInput}
                        onChange={(e) => setPinInput(e.target.value)}
                        className="w-full max-w-xs px-4 py-2 bg-black/25 border border-[#c5a059]/20 rounded-lg focus:outline-hidden focus:border-[#c5a059] text-white text-center text-xs font-mono tracking-widest placeholder-white/20 transition-all shadow-inner"
                      />
                      {pinError && (
                        <p className="text-red-400 text-[10px] font-medium leading-normal">
                          {pinError}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="px-5 py-2 bg-[#c5a059] hover:bg-[#fdfcf0] text-[#081a14] font-bold text-[10px] rounded-lg uppercase tracking-widest transition-all cursor-pointer shadow-md inline-flex items-center gap-1.5"
                    >
                      <Key className="w-3 h-3" />
                      <span>Abrir Cofre ✨</span>
                    </button>
                  </motion.form>
                ) : (
                  <>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/5">
                      <div>
                        <div className="flex items-center gap-2 select-none">
                          <h5 className="text-[#c5a059] font-bold text-sm uppercase tracking-widest">Confirmaciones Totales: {guests.length}</h5>
                          <button
                            onClick={() => { setIsUnlocked(false); setPinInput(''); }}
                            className="bg-white/5 border border-white/10 text-white/60 hover:text-red-400 hover:border-red-400/20 text-[9px] px-2 py-0.5 rounded-full uppercase transition-all cursor-pointer"
                            title="Cerrar Sesión"
                          >
                            Bloquear
                          </button>
                        </div>
                        <p className="text-white/40 text-[11px] mt-0.5">Asistentes: {confirmedCount} | No asisten: {guests.length - confirmedCount}</p>
                      </div>

                      {/* Search box */}
                      <div className="relative">
                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
                        <input
                          type="text"
                          placeholder="Buscar invitado..."
                          value={searchText}
                          onChange={(e) => setSearchText(e.target.value)}
                          className="pl-8 pr-3 py-1.5 bg-black/25 border border-[#c5a059]/20 rounded-lg text-xs text-white focus:outline-hidden focus:border-[#c5a059] w-[160px] sm:w-[200px]"
                        />
                      </div>
                    </div>

                    {filteredGuests.length === 0 ? (
                      <p className="text-center text-xs text-white/40 py-6">No hay invitados confirmados aún o la búsqueda no coincide.</p>
                    ) : (
                      <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                        {filteredGuests.map((g) => (
                          <div
                            key={g.id}
                            className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ml-1 mr-1"
                          >
                            <div className="space-y-0.5 max-w-[80%]">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-white/90">{g.name}</span>
                                <span className={`px-2 py-0.5 text-[9px] uppercase font-semibold font-mono rounded-xs ${
                                  g.attendance === 'yes' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                }`}>
                                  {g.attendance === 'yes' ? 'Asiste' : 'No asiste'}
                                </span>
                                {g.attendance === 'yes' && (
                                  <span className="px-2 py-0.5 bg-[#c5a059]/10 text-[#c5a059] text-[9px] uppercase font-mono font-semibold rounded-xs border border-[#c5a059]/20 font-sans">
                                    Menú: {g.menu}
                                  </span>
                                )}
                              </div>
                              
                              {g.message && <p className="text-xs text-white/50 italic">"{g.message}"</p>}
                              {g.songRequest && (
                                <p className="text-[10px] text-[#c5a059]/80">
                                  <span>🎵 Canción: </span><span className="text-white/80">{g.songRequest}</span>
                                </p>
                              )}
                            </div>

                            <div className="flex sm:flex-col items-end gap-2 shrink-0 self-end sm:self-center">
                              <span className="text-[9px] text-white/30 font-mono">{g.timestamp}</span>
                              <button
                                onClick={() => handleDelete(g.id)}
                                className="bg-red-950/20 hover:bg-red-900/30 hover:text-red-300 border border-red-500/20 text-red-400 text-[10px] px-2 py-0.5 rounded-md cursor-pointer transition-colors"
                              >
                                Eliminar
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
