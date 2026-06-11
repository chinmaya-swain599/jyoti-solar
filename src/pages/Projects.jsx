import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiZap, FiCalendar, FiShield, FiTrendingUp, FiArrowRight, FiInfo, FiLayers } from 'react-icons/fi';

// Single IndiaMap component using map.png background
// Marker cx/cy are stored as percentages of the original 1536x1024 PNG
const IndiaMap = ({ activeProjectId, setActiveProjectId, projects }) => {
  return (
    <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[400px] xl:h-[440px] bg-slate-950/5 rounded-3xl overflow-hidden border border-slate-200/60 shadow-inner flex items-center justify-center">
      {/* Map Image — object-contain ensures the full map is visible */}
      <img src="/map.png" alt="India map" className="absolute inset-0 w-full h-full object-contain" />
      {/* Markers use percentage positioning so they scale with the contained image */}
      {projects.map(p => {
        const isActive = activeProjectId === p.id;
        return (
          <div
            key={p.id}
            className="absolute cursor-pointer"
            style={{ left: `${p.cx}%`, top: `${p.cy}%`, transform: 'translate(-50%, -50%)' }}
            onMouseEnter={() => setActiveProjectId(p.id)}
            onMouseLeave={() => setActiveProjectId(null)}
          >
            {/* Glow ring for active marker */}
            {isActive && (
              <svg className="absolute -translate-x-1/2 -translate-y-1/2" width="40" height="40" style={{ left: '-20px', top: '-20px' }}>
                <circle cx="20" cy="20" r="20" fill="none" stroke="#f97316" strokeWidth="4" opacity="0.25" />
              </svg>
            )}
            {/* Core marker */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r={isActive ? 7 : 4} fill={isActive ? '#f97316' : '#ea580c'} stroke="#ffffff" strokeWidth="2" />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

const CATEGORIES = ['All', 'Utility', 'Government', 'Industrial', 'Rooftop'];

const PROJECTS = [
  { id: 1, title: 'Rajasthan Ultra Mega Solar Park', category: 'Utility', capacity: '150 MW', location: 'Bhadla, Rajasthan', year: '2025', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80', cx: 14.3, cy: 36.0 },
  { id: 2, title: 'Odisha Government Solar Plant', category: 'Government', capacity: '25 MW', location: 'Bhubaneswar, Odisha', year: '2024', img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80', cx: 34.0, cy: 54.5 },
  { id: 3, title: 'Gujarat Kutch Solar Reserve', category: 'Utility', capacity: '100 MW', location: 'Kutch, Gujarat', year: '2023', img: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80', cx: 10.0, cy: 45.9 },
  { id: 4, title: 'Pune Industrial Roof Complex', category: 'Industrial', capacity: '10 MW', location: 'Pune, Maharashtra', year: '2022', img: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80', cx: 11.7, cy: 62.5 },
  { id: 5, title: 'Delhi NCR Smart Grid Initiative', category: 'Rooftop', capacity: '5 MW', location: 'Delhi NCR Region', year: '2023', img: 'https://images.unsplash.com/photo-1542332213-9b5a5a3afe34?w=800&q=80', cx: 15.6, cy: 29.3 },
  { id: 6, title: 'Bangalore Biotech Park Rooftops', category: 'Industrial', capacity: '12 MW', location: 'Bangalore, Karnataka', year: '2021', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', cx: 17.0, cy: 72.4 },
];

const STATS = [
  {
    label: 'Total Installed Capacity',
    value: '500+ MW',
    desc: 'Active renewable generation',
    icon: <FiZap size={22} />, 
    color: 'text-orange-500',
    border: 'border-orange-500/10 hover:border-orange-500/20',
    bg: 'linear-gradient(135deg, rgba(249,115,22,0.02) 0%, rgba(249,115,22,0.06) 100%)',
    shadow: 'shadow-orange-500/5'
  },
  {
    label: 'States Covered',
    value: '12 States',
    desc: 'Pan-India operations',
    icon: <FiMapPin size={22} />, 
    color: 'text-blue-500',
    border: 'border-blue-500/10 hover:border-blue-500/20',
    bg: 'linear-gradient(135deg, rgba(59,130,246,0.02) 0%, rgba(59,130,246,0.06) 100%)',
    shadow: 'shadow-blue-500/5'
  },
  {
    label: 'Government Projects',
    value: '18 Projects',
    desc: 'SECI & NTPC empanelled partner',
    icon: <FiShield size={22} />, 
    color: 'text-emerald-500',
    border: 'border-emerald-500/10 hover:border-emerald-500/20',
    bg: 'linear-gradient(135deg, rgba(16,185,129,0.02) 0%, rgba(16,185,129,0.06) 100%)',
    shadow: 'shadow-emerald-500/5'
  },
  {
    label: 'Carbon Offset Annually',
    value: '4.2L Tons',
    desc: 'Clean air impact reduction',
    icon: <FiTrendingUp size={22} />, 
    color: 'text-violet-500',
    border: 'border-violet-500/10 hover:border-violet-500/20',
    bg: 'linear-gradient(135deg, rgba(139,92,246,0.02) 0%, rgba(139,92,246,0.06) 100%)',
    shadow: 'shadow-violet-500/5'
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [activeProjectId, setActiveProjectId] = useState(null);

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  const activeProj = PROJECTS.find(p => p.id === activeProjectId);

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-16 sm:pb-28 overflow-x-hidden">
      {/* Banner Section */}
      <section className="relative flex items-center overflow-hidden pt-24 sm:pt-32 pb-14 sm:pb-20" style={{ background: 'linear-gradient(140deg, #010912 0%, #0c1e44 100%)', minHeight: '28vh' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(249,115,22,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,0.04) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(249,115,22,0.12) 0%,transparent 75%)', transform: 'translate(50%,-50%)' }} />
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80" alt="Solar plant" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-orange-400 text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: "'Inter',sans-serif" }}>Our Portfolio</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="font-hero text-white mb-3 sm:mb-4 text-3xl sm:text-5xl lg:text-6xl font-bold" style={{ lineHeight: 1.1 }}>
              Project <span style={{
                background: 'linear-gradient(90deg,#f97316 0%,#fbbf24 45%,#f97316 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 3s linear infinite',
              }}>Showcase</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter',sans-serif" }}>
              Explore our utility-scale installations and robust renewable infrastructure systems powering government and industrial sectors across India.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Map & Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Column */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-5 bg-white/90 backdrop-blur-md border border-slate-200/70 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between" style={{ boxShadow: '0 20px 45px rgba(15,32,68,0.06), 0 1px 3px rgba(0,0,0,0.01)' }}>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200/50 rounded-full text-xs font-bold text-[#f97316]">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                Interactive Map
              </span>
              <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase">Hover markers to inspect</span>
            </div>
            <div className="h-[360px] sm:h-[420px] lg:h-[350px] xl:h-[380px] flex items-center justify-center relative my-4">
              <IndiaMap activeProjectId={activeProjectId} setActiveProjectId={setActiveProjectId} projects={PROJECTS} />
            </div>
            <div className="relative h-20 mt-2">
              <AnimatePresence mode="wait">
                {activeProj ? (
                  <motion.div key={activeProj.id} initial={{ opacity: 0, y: 12, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.97 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-md border border-orange-500/20 p-4 rounded-2xl flex items-center gap-4 shadow-lg shadow-orange-500/5">
                    <img src={activeProj.img} alt={activeProj.title} className="w-12 h-12 rounded-xl object-cover border border-slate-100" />
                    <div className="flex-1 min-w-0">
                      <span className="inline-block px-2 py-0.5 bg-orange-50 border border-orange-200/30 text-orange-600 text-[8px] font-bold rounded-full mb-1 uppercase tracking-wider">{activeProj.category}</span>
                      <h4 className="text-xs font-extrabold text-[#0f2044] truncate">{activeProj.title}</h4>
                      <div className="flex items-center gap-1 mt-0.5">
                        <FiMapPin className="text-slate-400" size={11} />
                        <p className="text-[10px] text-slate-500 truncate">{activeProj.location}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0 border-l border-slate-100 pl-4">
                      <p className="text-[8px] text-slate-400 uppercase font-bold tracking-wider">Capacity</p>
                      <p className="text-sm font-extrabold text-orange-500 font-mono leading-none mt-0.5">{activeProj.capacity}</p>
                      <p className="text-[9px] text-slate-400 font-mono mt-1">Est. {activeProj.year}</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="map-default-note" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-x-0 bottom-0 bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-center gap-3 text-xs text-slate-500 shadow-sm">
                    <span className="relative flex h-2.5 w-2.5 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" /><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" /></span>
                    <span className="font-medium text-slate-600">Hover project markers to explore regional solar installations.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Stats Dashboard Column */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="bg-white/95 backdrop-blur-md border border-slate-200/70 rounded-3xl p-6 lg:p-8 flex-1 flex flex-col justify-between" style={{ boxShadow: '0 20px 45px rgba(15,32,68,0.06)' }}>
              <div>
                <span className="section-tag mb-3">Core Performance</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0f2044] leading-tight mb-4">Powering India's Clean Grid</h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6" style={{ fontFamily: "'Inter',sans-serif" }}>We engineer utility-scale solar parks, corporate rooftop models, and government installations. Our work combines structural excellence with optimal energy output yields.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {STATS.map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.08 }} className={`p-5 rounded-2xl border ${stat.border} flex items-start gap-4 transition-all duration-300 shadow-sm ${stat.shadow}`} style={{ background: stat.bg }} whileHover={{ scale: 1.02, translateY: -2 }}>
                    <div className={`p-3 rounded-xl bg-white shadow-sm ${stat.color} border border-slate-100`}>{stat.icon}</div>
                    <div>
                      <div className="text-2xl font-black text-[#0f2044] font-mono leading-none">{stat.value}</div>
                      <div className="text-xs font-bold text-slate-700 mt-1.5 mb-0.5">{stat.label}</div>
                      <div className="text-[10px] text-slate-400">{stat.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Project Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div>
            <span className="section-tag mb-3">Portfolio Catalog</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2044]">Our Executed Projects</h2>
          </div>
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="bg-slate-100/80 backdrop-blur-sm p-1 sm:p-1.5 rounded-2xl flex gap-1 border border-slate-200/50 w-max shrink-0">
              {CATEGORIES.map((cat) => {
                const isActive = filter === cat;
                return (
                  <button key={cat} onClick={() => setFilter(cat)} className="relative px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-[10px] sm:text-xs tracking-wider uppercase transition-colors cursor-pointer select-none whitespace-nowrap" style={{ color: isActive ? '#ffffff' : '#475569', transition: 'color 200ms ease' }}>
                    {isActive && (
                      <motion.div layoutId="activeTab" className="absolute inset-0 bg-[#f97316] rounded-xl -z-10 shadow-md shadow-orange-500/20" transition={{ type: 'spring', stiffness: 350, damping: 28 }} />
                    )}
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const isHoveredOrActive = activeProjectId === project.id;
              return (
                <motion.div layout key={project.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.35 }} onMouseEnter={() => setActiveProjectId(project.id)} onMouseLeave={() => setActiveProjectId(null)} className="group relative h-[300px] sm:h-[340px] lg:h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden border cursor-pointer bg-slate-900" style={{
                  borderColor: isHoveredOrActive ? '#f97316' : '#e2e8f0',
                  boxShadow: isHoveredOrActive ? '0 20px 50px rgba(249,115,22,0.14)' : '0 4px 16px rgba(15,32,68,0.02)',
                  transition: 'border-color 400ms ease, box-shadow 400ms ease',
                }}>
                  <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010912]/95 via-[#0f2044]/70 to-transparent opacity-95 transition-opacity duration-300" />
                  <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end z-10 text-white">
                    <span className="inline-block px-2.5 sm:px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full text-[9px] sm:text-[10px] font-bold tracking-widest uppercase w-max mb-2 sm:mb-3">{project.category}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-1.5 leading-snug group-hover:text-orange-400 transition-colors duration-300">{project.title}</h3>
                    <div className="flex items-center gap-1.5 text-slate-300 text-xs mb-3 sm:mb-4"><FiMapPin className="text-orange-500 shrink-0" size={13} /><span className="truncate">{project.location}</span></div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/15 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center gap-2"><div className="p-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0"><FiZap size={14} /></div><div><p className="text-[8px] text-slate-400 uppercase font-bold tracking-wider">Capacity</p><p className="text-xs font-bold text-orange-400 font-mono">{project.capacity}</p></div></div>
                      <div className="flex items-center gap-2"><div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 shrink-0"><FiCalendar size={14} /></div><div><p className="text-[8px] text-slate-400 uppercase font-bold tracking-wider">Commissioned</p><p className="text-xs font-bold text-white font-mono">{project.year}</p></div></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Shimmer animation CSS */}
      <style>{`
        @keyframes shimmer { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
      `}</style>
    </div>
  );
};

export default Projects;
