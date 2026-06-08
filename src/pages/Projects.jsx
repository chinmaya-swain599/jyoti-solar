import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IndiaMap = () => (
  <svg viewBox="0 0 550 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <path d="M 230 20 L 270 15 L 310 25 L 360 50 L 400 80 L 430 120 L 460 160 L 470 200 L 480 240 L 470 280 L 460 320 L 440 360 L 420 395 L 400 420 L 380 450 L 360 475 L 340 500 L 320 520 L 300 540 L 280 555 L 260 545 L 240 525 L 220 505 L 200 475 L 185 445 L 170 415 L 155 380 L 145 340 L 135 300 L 130 260 L 135 220 L 145 180 L 160 145 L 180 110 L 205 75 Z"
      fill="#e8edf5" stroke="#c5d0e4" strokeWidth="2" />
    <path d="M 320 330 L 350 325 L 375 340 L 385 360 L 380 385 L 360 395 L 340 400 L 320 390 L 305 375 L 302 355 L 310 340 Z"
      fill="#f97316" stroke="#ea6a0a" strokeWidth="1.5" opacity="0.9" />
    <path d="M 320 330 L 350 325 L 375 340 L 385 360 L 380 385 L 360 395 L 340 400 L 320 390 L 305 375 L 302 355 L 310 340 Z"
      fill="none" stroke="#f97316" strokeWidth="5" opacity="0.3" filter="url(#glow)" />
    <path d="M 170 150 L 220 140 L 250 155 L 245 190 L 220 200 L 185 195 L 170 175 Z" fill="#d4dcea" stroke="#c5d0e4" strokeWidth="1" />
    <path d="M 260 150 L 310 145 L 330 165 L 325 195 L 300 205 L 270 200 L 255 180 Z" fill="#d4dcea" stroke="#c5d0e4" strokeWidth="1" />
    <path d="M 350 145 L 400 140 L 430 165 L 425 200 L 395 215 L 360 210 L 340 190 Z" fill="#d4dcea" stroke="#c5d0e4" strokeWidth="1" />
    <path d="M 190 210 L 250 205 L 265 230 L 255 265 L 220 275 L 185 265 L 175 240 Z" fill="#d4dcea" stroke="#c5d0e4" strokeWidth="1" />
    <path d="M 265 210 L 320 205 L 335 230 L 330 265 L 295 278 L 260 268 L 255 240 Z" fill="#d4dcea" stroke="#c5d0e4" strokeWidth="1" />
    <path d="M 185 280 L 250 270 L 260 300 L 250 330 L 220 340 L 185 330 L 175 305 Z" fill="#d4dcea" stroke="#c5d0e4" strokeWidth="1" />
    <text x="343" y="372" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">Odisha</text>
    <circle cx="343" cy="362" r="6" fill="white" opacity="0.9" />
    <circle cx="343" cy="362" r="10" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.6">
      <animate attributeName="r" from="6" to="18" dur="1.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
  </svg>
);

const CATEGORIES = ['All', 'Utility', 'Government', 'Industrial', 'Rooftop'];

const PROJECTS = [
  { id: 1, title: 'Rajasthan Ultra Mega Solar Park', category: 'Utility',     capacity: '150 MW', location: 'Rajasthan',            year: '2025', img: 'https://picsum.photos/seed/proj1/800/600' },
  { id: 2, title: 'Odisha Government Solar Plant',   category: 'Government',  capacity: '25 MW',  location: 'Bhubaneswar, Odisha',   year: '2024', img: 'https://picsum.photos/seed/proj2/800/600' },
  { id: 3, title: 'Gujarat Solar Park',              category: 'Utility',     capacity: '100 MW', location: 'Kutch, Gujarat',         year: '2023', img: 'https://picsum.photos/seed/proj3/800/600' },
  { id: 4, title: 'Pune Industrial Complex',         category: 'Industrial',  capacity: '10 MW',  location: 'Pune, Maharashtra',     year: '2022', img: 'https://picsum.photos/seed/proj4/800/600' },
  { id: 5, title: 'Delhi NCR Rooftop Initiative',    category: 'Rooftop',     capacity: '5 MW',   location: 'Delhi NCR',             year: '2023', img: 'https://picsum.photos/seed/proj5/800/600' },
  { id: 6, title: 'Bangalore Tech Park',             category: 'Industrial',  capacity: '12 MW',  location: 'Bangalore, Karnataka',  year: '2021', img: 'https://picsum.photos/seed/proj6/800/600' },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#f4f6f9] pb-24">

      {/* ─── HEADER ─── */}
      <section className="pt-36 pb-16 bg-[#0f2044] relative overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80"
            alt="Large solar farm installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2044] via-[#0f2044]/90 to-[#0f2044]/60 pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="section-tag mb-3">Our Portfolio</span>
          <h1 className="text-5xl font-bold text-white mb-4">Project <span className="text-[#f97316]">Showcase</span></h1>
          <p className="text-blue-100/70 text-lg max-w-2xl">
            Explore our advanced renewable energy installations powering India's industrial and government sectors.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

        {/* ─── INDIA MAP + STATS ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gov-card p-6 relative overflow-hidden"
          >
            <div className="absolute top-4 left-4 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full">
              <span className="text-[#f97316] text-xs font-bold tracking-wider">PROJECT LOCATIONS</span>
            </div>
            <div className="h-80 flex items-center justify-center mt-6">
              <IndiaMap />
            </div>
            <div className="mt-4 flex items-center gap-3 text-sm text-slate-600 font-medium bg-orange-50 border border-orange-100 py-2.5 px-4 rounded-lg">
              <span className="w-3 h-3 rounded-full bg-[#f97316] shadow-lg shrink-0" />
              Odisha — Primary Project Hub
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <span className="section-tag mb-3">Impact Numbers</span>
              <h2 className="text-4xl font-bold text-[#0f2044] mb-4">Delivering Clean Energy Across India</h2>
              <p className="text-slate-600 leading-relaxed">
                From Rajasthan's sun-drenched deserts to Odisha's industrial corridors — Jyoti Solar has commissioned 50+ projects across 12 states.
              </p>
            </div>
            <div className="gov-card p-6 space-y-4">
              {[
                { label: 'Total Installed Capacity', value: '500+ MW' },
                { label: 'States Covered',           value: '12 States' },
                { label: 'Government Projects',      value: '18 Projects' },
                { label: 'Carbon Offset Annually',   value: '4.2 Lakh Tons CO₂' },
              ].map((stat) => (
                <div key={stat.label} className="flex justify-between items-center border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                  <span className="text-slate-600 font-medium">{stat.label}</span>
                  <span className="text-[#f97316] font-bold text-lg">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── FILTER BUTTONS ─── */}
        <div className="flex flex-wrap gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-lg font-bold text-sm transition-all border shadow-sm ${
                filter === cat
                  ? 'bg-[#f97316] text-white border-[#f97316] shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-[#f97316] hover:text-[#f97316]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ─── PROJECT GRID ─── */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative h-[360px] rounded-2xl overflow-hidden border border-slate-200 hover:border-[#f97316]/50 hover:shadow-xl transition-all cursor-pointer shadow-md"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2044] via-[#0f2044]/50 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                  <span className="inline-block px-3 py-1 bg-[#f97316] text-white rounded-full text-xs font-bold w-max mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-blue-100/70 text-sm mb-3">{project.location}</p>

                  <div className="grid grid-cols-2 gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 pt-3 border-t border-white/20">
                    <div>
                      <p className="text-[10px] text-blue-200/60 uppercase tracking-wider">Capacity</p>
                      <p className="text-sm font-bold text-[#f97316]">{project.capacity}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-blue-200/60 uppercase tracking-wider">Year</p>
                      <p className="text-sm font-bold text-white">{project.year}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
