import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiZap, FiCalendar, FiShield, FiTrendingUp, FiArrowRight } from 'react-icons/fi';

const IndiaMap = ({ activeProjectId, setActiveProjectId, projects }) => {
  const getPolygonStyle = (projId) => {
    const isActive = activeProjectId === projId;
    return {
      fill: isActive ? 'rgba(249,115,22,0.18)' : '#f8fafc',
      stroke: isActive ? '#f97316' : '#cbd5e1',
      strokeWidth: isActive ? '2' : '1',
      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <svg viewBox="0 0 550 600" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      {/* Glow effect filter */}
      <defs>
        <filter id="map-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Base India outline shape */}
      <path
        d="M 230 20 L 270 15 L 310 25 L 360 50 L 400 80 L 430 120 L 460 160 L 470 200 L 480 240 L 470 280 L 460 320 L 440 360 L 420 395 L 400 420 L 380 450 L 360 475 L 340 500 L 320 520 L 300 540 L 280 555 L 260 545 L 240 525 L 220 505 L 200 475 L 185 445 L 170 415 L 155 380 L 145 340 L 135 300 L 130 260 L 135 220 L 145 180 L 160 145 L 180 110 L 205 75 Z"
        fill="#f1f5f9"
        stroke="#e2e8f0"
        strokeWidth="2"
      />

      {/* Dynamic State Polygons linked to Projects */}
      {/* Jammu & Kashmir (North-West) - Decorative / general */}
      <path d="M 170 150 L 220 140 L 250 155 L 245 190 L 220 200 L 185 195 L 170 175 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
      
      {/* Delhi / NCR (id: 5) */}
      <path d="M 260 150 L 310 145 L 330 165 L 325 195 L 300 205 L 270 200 L 255 180 Z" style={getPolygonStyle(5)} />
      
      {/* North-East - Decorative */}
      <path d="M 350 145 L 400 140 L 430 165 L 425 200 L 395 215 L 360 210 L 340 190 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
      
      {/* Rajasthan (id: 1) */}
      <path d="M 190 210 L 250 205 L 265 230 L 255 265 L 220 275 L 185 265 L 175 240 Z" style={getPolygonStyle(1)} />
      
      {/* Maharashtra / Central (id: 4) */}
      <path d="M 265 210 L 320 205 L 335 230 L 330 265 L 295 278 L 260 268 L 255 240 Z" style={getPolygonStyle(4)} />
      
      {/* Gujarat (id: 3) */}
      <path d="M 185 280 L 250 270 L 260 300 L 250 330 L 220 340 L 185 330 L 175 305 Z" style={getPolygonStyle(3)} />

      {/* Odisha (id: 2) */}
      <path d="M 320 330 L 350 325 L 375 340 L 385 360 L 380 385 L 360 395 L 340 400 L 320 390 L 305 375 L 302 355 L 310 340 Z" style={getPolygonStyle(2)} />

      {/* Glowing Pulsing Markers for Active Projects */}
      {projects.map((p) => {
        const isActive = activeProjectId === p.id;
        return (
          <g
            key={p.id}
            className="cursor-pointer"
            onMouseEnter={() => setActiveProjectId(p.id)}
            onMouseLeave={() => setActiveProjectId(null)}
          >
            {/* Pulsing ring filter glow */}
            {isActive && (
              <circle
                cx={p.cx}
                cy={p.cy}
                r="20"
                fill="none"
                stroke="#f97316"
                strokeWidth="4"
                opacity="0.25"
                filter="url(#map-glow)"
              />
            )}

            {/* Ripple expand circle */}
            <circle
              cx={p.cx}
              cy={p.cy}
              r={isActive ? 15 : 7}
              fill="none"
              stroke="#f97316"
              strokeWidth="2"
              opacity={isActive ? 0.8 : 0.4}
              style={{ transition: 'all 300ms ease' }}
            />
            {isActive && (
              <circle cx={p.cx} cy={p.cy} r="6" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.6">
                <animate attributeName="r" from="6" to="22" dur="1.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="1.4s" repeatCount="indefinite" />
              </circle>
            )}

            {/* Inner Core Circle */}
            <circle
              cx={p.cx}
              cy={p.cy}
              r={isActive ? 6 : 4}
              fill={isActive ? '#f97316' : '#ea580c'}
              stroke="#ffffff"
              strokeWidth="1.5"
              style={{ transition: 'all 300ms ease' }}
            />
          </g>
        );
      })}
    </svg>
  );
};

const CATEGORIES = ['All', 'Utility', 'Government', 'Industrial', 'Rooftop'];

const PROJECTS = [
  { id: 1, title: 'Rajasthan Ultra Mega Solar Park', category: 'Utility', capacity: '150 MW', location: 'Bhadla, Rajasthan', year: '2025', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80', cx: 210, cy: 230 },
  { id: 2, title: 'Odisha Government Solar Plant', category: 'Government', capacity: '25 MW', location: 'Bhubaneswar, Odisha', year: '2024', img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80', cx: 343, cy: 362 },
  { id: 3, title: 'Gujarat Kutch Solar Reserve', category: 'Utility', capacity: '100 MW', location: 'Kutch, Gujarat', year: '2023', img: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80', cx: 180, cy: 300 },
  { id: 4, title: 'Pune Industrial Roof Complex', category: 'Industrial', capacity: '10 MW', location: 'Pune, Maharashtra', year: '2022', img: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80', cx: 245, cy: 400 },
  { id: 5, title: 'Delhi NCR Smart Grid Initiative', category: 'Rooftop', capacity: '5 MW', location: 'Delhi NCR Region', year: '2023', img: 'https://images.unsplash.com/photo-1542332213-9b5a5a3afe34?w=800&q=80', cx: 260, cy: 190 },
  { id: 6, title: 'Bangalore Biotech Park Rooftops', category: 'Industrial', capacity: '12 MW', location: 'Bangalore, Karnataka', year: '2021', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', cx: 255, cy: 480 },
];

const STATS = [
  { label: 'Total Installed Capacity', value: '500+ MW', desc: 'Active renewable generation', icon: <FiZap size={22} />, color: 'text-orange-500', border: 'border-orange-500/10', bg: 'rgba(249,115,22,0.04)' },
  { label: 'States Covered', value: '12 States', desc: 'Pan-India operations', icon: <FiMapPin size={22} />, color: 'text-blue-500', border: 'border-blue-500/10', bg: 'rgba(59,130,246,0.04)' },
  { label: 'Government Projects', value: '18 Projects', desc: 'SECI & NTPC empanelled partner', icon: <FiShield size={22} />, color: 'text-emerald-500', border: 'border-emerald-500/10', bg: 'rgba(16,185,129,0.04)' },
  { label: 'Carbon Offset Annually', value: '4.2L Tons', desc: 'Clean air impact reduction', icon: <FiTrendingUp size={22} />, color: 'text-violet-500', border: 'border-violet-500/10', bg: 'rgba(139,92,246,0.04)' },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [activeProjectId, setActiveProjectId] = useState(null);

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  const activeProj = PROJECTS.find(p => p.id === activeProjectId);

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-28">

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 1 — Premium Compact Banner (Matches About Page Banner)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative flex items-center overflow-hidden pt-32 pb-20"
        style={{ background: 'linear-gradient(140deg,#010912 0%,#0c1e44 100%)', minHeight: '32vh' }}
      >
        {/* Mesh grid background */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(249,115,22,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,0.04) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }} />

        {/* Decorative ambient glowing spot */}
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(249,115,22,0.12) 0%,transparent 75%)', transform: 'translate(50%,-50%)' }} />

        {/* Ambient background photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80"
            alt="Solar plant"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Page indicator pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-orange-400 text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: "'Inter',sans-serif" }}>Our Portfolio</span>
            </motion.div>

            {/* Shimmer title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="font-hero text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold"
              style={{ lineHeight: 1.1 }}
            >
              Project{' '}
              <span style={{
                background: 'linear-gradient(90deg,#f97316 0%,#fbbf24 45%,#f97316 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 3s linear infinite',
              }}>
                Showcase
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ fontFamily: "'Inter',sans-serif" }}
            >
              Explore our utility-scale installations and robust renewable infrastructure systems powering government and industrial sectors across India.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2 — India Map & Dashboard Stats Bento Grid
      ════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Column (5/12 width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between"
            style={{
              boxShadow: '0 20px 40px rgba(15,32,68,0.05), 0 1px 3px rgba(0,0,0,0.01)'
            }}
          >
            {/* Section Tag */}
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200/50 rounded-full text-xs font-bold text-[#f97316]">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                Interactive Map
              </span>
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Hover dot to view project</span>
            </div>

            {/* SVG Interactive Map */}
            <div className="h-[360px] flex items-center justify-center relative my-4">
              <IndiaMap activeProjectId={activeProjectId} setActiveProjectId={setActiveProjectId} projects={PROJECTS} />
            </div>

            {/* Map Footnote or Hover Overlay Tooltip */}
            <div className="relative h-14">
              <AnimatePresence mode="wait">
                {activeProj ? (
                  <motion.div
                    key={activeProj.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-x-0 bottom-0 bg-slate-50 border border-slate-200/60 p-3 rounded-2xl flex items-center gap-3"
                  >
                    <img src={activeProj.img} alt={activeProj.title} className="w-10 h-10 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#0f2044] truncate">{activeProj.title}</h4>
                      <p className="text-[10px] text-slate-500 truncate">{activeProj.location}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[8px] text-slate-400 uppercase font-bold tracking-wider">Capacity</p>
                      <p className="text-xs font-bold text-orange-500 font-mono">{activeProj.capacity}</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="map-default-note"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-x-0 bottom-0 bg-[#f8fafc] border border-slate-100 p-3 rounded-2xl flex items-center gap-2.5 text-xs text-slate-500"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-400 shrink-0 shadow-sm shadow-orange-300" />
                    Hover project markers to explore regional installations.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Stats Dashboard Column (7/12 width) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 lg:p-8 flex-1" style={{ boxShadow: '0 20px 40px rgba(15,32,68,0.05)' }}>
              <span className="section-tag mb-3">Core Performance</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0f2044] leading-tight mb-4">
                Powering India's Clean Grid
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6" style={{ fontFamily: "'Inter',sans-serif" }}>
                We engineer utility-scale solar parks, corporate rooftop models, and government installations. Our work combines structural excellence with optimal energy output yields.
              </p>

              {/* Bento Grid Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.08 }}
                    className={`p-5 rounded-2xl border ${stat.border} flex items-start gap-4`}
                    style={{ background: stat.bg }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`p-3 rounded-xl bg-white shadow-sm ${stat.color} border border-slate-100`}>
                      {stat.icon}
                    </div>
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

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 3 — Filter Tabs & Grid
        ════════════════════════════════════════════════════════════════════ */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="section-tag mb-3">Portfolio Catalog</span>
              <h2 className="text-3xl font-bold text-[#0f2044]">Our Executed Projects</h2>
            </div>

            {/* Framer Motion Sliding Indicator Tabs */}
            <div className="bg-slate-100 p-1.5 rounded-2xl flex flex-wrap gap-1 border border-slate-200/40 w-max shrink-0">
              {CATEGORIES.map((cat) => {
                const isActive = filter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className="relative px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer select-none"
                    style={{ color: isActive ? '#ffffff' : '#475569', transition: 'color 200ms ease' }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#f97316] rounded-xl -z-10 shadow-sm"
                        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      />
                    )}
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Cards Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => {
                const isHoveredOrActive = activeProjectId === project.id;
                return (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    onMouseEnter={() => setActiveProjectId(project.id)}
                    onMouseLeave={() => setActiveProjectId(null)}
                    className="group relative h-[380px] rounded-3xl overflow-hidden border cursor-pointer"
                    style={{
                      borderColor: isHoveredOrActive ? '#f97316' : '#e2e8f0',
                      boxShadow: isHoveredOrActive ? '0 20px 48px rgba(249,115,22,0.12)' : '0 4px 16px rgba(15,32,68,0.02)',
                      transition: 'border-color 300ms ease, box-shadow 300ms ease',
                    }}
                  >
                    {/* Background image zoom on hover */}
                    <img
                      src={project.img}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#010912] via-[#0f2044]/65 to-transparent opacity-90 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end z-10 text-white">
                      
                      {/* Top tag */}
                      <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full text-[10px] font-bold tracking-widest uppercase w-max mb-3">
                        {project.category}
                      </span>

                      <h3 className="text-xl font-bold text-white mb-1.5 leading-snug group-hover:text-orange-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-1.5 text-slate-300 text-xs mb-4">
                        <FiMapPin className="text-orange-500 shrink-0" size={13} />
                        <span className="truncate">{project.location}</span>
                      </div>

                      {/* Expanding Hover Details */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/15 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0">
                            <FiZap size={14} />
                          </div>
                          <div>
                            <p className="text-[8px] text-slate-400 uppercase font-bold tracking-wider">Capacity</p>
                            <p className="text-xs font-bold text-orange-400 font-mono">{project.capacity}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 shrink-0">
                            <FiCalendar size={14} />
                          </div>
                          <div>
                            <p className="text-[8px] text-slate-400 uppercase font-bold tracking-wider">Commissioned</p>
                            <p className="text-xs font-bold text-white font-mono">{project.year}</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>

      {/* Shimmer animation CSS keyframes */}
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>

    </div>
  );
};

export default Projects;
