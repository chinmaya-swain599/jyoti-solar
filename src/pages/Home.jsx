import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import megaSolarFarm from '../assets/mega_solar_farm.png';
import { FiArrowRight } from 'react-icons/fi';
import { MdSolarPower, MdOutlineVerified, MdPeople } from 'react-icons/md';
import { GiSolarPower } from 'react-icons/gi';

const SERVICES = [
  {
    title: 'Utility Solar Plants',
    desc: 'Large-scale utility solar parks designed for government and national grid integration.',
    img: 'https://picsum.photos/seed/solar-utility/700/500',
  },
  {
    title: 'Industrial Installations',
    desc: 'End-to-end EPC services for factories and industrial units transitioning to solar.',
    img: 'https://picsum.photos/seed/solar-industrial/700/500',
  },
  {
    title: 'Rooftop Solar',
    desc: 'Smart rooftop systems for commercial and residential properties with net-metering.',
    img: 'https://picsum.photos/seed/solar-rooftop/700/500',
  },
  {
    title: 'Government Projects',
    desc: 'Contributing to the National Solar Mission with SECI & state DISCOM collaborations.',
    img: 'https://picsum.photos/seed/solar-govt/700/500',
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white page-fade">

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-36 pb-20 min-h-[85vh] flex items-center overflow-hidden border-b border-slate-200">
        
        {/* Subtle grid and sun glow backgrounds */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0f2044 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#f97316]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0f2044]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
                <span className="text-[#f97316] text-sm font-bold tracking-wider">NATIONAL SOLAR MISSION PARTNER</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#0f2044] leading-tight mb-6"
              >
                Powering India's{' '}
                <span className="text-[#f97316]">Renewable</span>{' '}
                Future
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-slate-600 text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
              >
                Jyoti Solar is a leading EPC contractor and developer, delivering utility-scale solar infrastructure and empowering the nation with clean, sustainable energy solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => navigate('/projects')}
                  className="group relative flex items-center gap-2 px-8 py-4 bg-[#f97316] text-white font-bold rounded-lg overflow-hidden transition-all hover:bg-[#ea6a0a] shadow-lg shadow-orange-300/40 cursor-pointer"
                >
                  <span>Explore Projects</span>
                  <FiArrowRight />
                </button>
                <button
                  onClick={() => navigate('/tenders')}
                  className="flex items-center gap-2 px-8 py-4 bg-white text-[#0f2044] font-bold rounded-lg border-2 border-[#0f2044] hover:bg-[#0f2044] hover:text-white transition-all cursor-pointer"
                >
                  View Tenders
                </button>
              </motion.div>
            </div>

            {/* Right Column - Animated Mega Solar Project Image */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              
              {/* Soft pulsing warm glow background */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[120%] h-[120%] bg-gradient-to-tr from-orange-400 to-[#f97316] rounded-full blur-3xl -z-10 pointer-events-none"
              />

              {/* Main image container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white"
              >
                {/* Subtle infinite float animation */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative overflow-hidden group"
                >
                  <img
                    src={megaSolarFarm}
                    alt="Mega Solar Project"
                    className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle sun flare lighting sweep */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-white/10 mix-blend-overlay pointer-events-none" />
                </motion.div>
              </motion.div>

              {/* Floating interactive stat bubble for depth / parallax effect */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0, y: [-5, 5, -5] }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.5 },
                  x: { duration: 0.8, delay: 0.5 },
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -bottom-4 -left-6 bg-[#0f2044] text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/10 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f97316] flex items-center justify-center text-xl">
                  ☀️
                </div>
                <div>
                  <p className="text-[10px] text-orange-200/80 uppercase font-bold tracking-wider">UTILITY CAPACITY</p>
                  <p className="text-lg font-bold text-white font-mono">500+ Megawatt</p>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-[#0f2044] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Installed Capacity', value: '500+ MW' },
              { label: 'States Present',     value: '12' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'CO₂ Offset (Tons)',  value: '4.2L' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-[#f97316] text-sm font-semibold tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT SNIPPET ─── */}
      <section className="py-24 bg-[#f4f6f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-xl"
            >
              <img
                src="https://picsum.photos/seed/jyoti-solar-hero-main/900/600"
                alt="Solar farm aerial view"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2044]/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-white/60 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-50 border border-orange-200 rounded-full flex items-center justify-center text-[#f97316] text-2xl">
                      <MdOutlineVerified />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0f2044]">ISO Certified</h4>
                      <p className="text-sm text-slate-500">9001:2015 & 14001:2015</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="section-tag">About The Company</span>
              <h2 className="text-4xl font-bold text-[#0f2044] leading-tight">Committed to India's Green Energy Future</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Founded with a vision to transform the national energy landscape, Jyoti Solar provides comprehensive EPC solutions, from land acquisition and engineering to commissioning and long-term maintenance.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  { icon: <MdSolarPower />, text: 'Utility-Scale Solar Parks' },
                  { icon: <GiSolarPower />, text: 'Advanced Photovoltaic Tech' },
                  { icon: <MdPeople />,     text: 'Dedicated O&M Teams' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="w-8 h-8 rounded-md bg-orange-50 border border-orange-200 flex items-center justify-center text-[#f97316] text-lg shrink-0">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <button
                  onClick={() => navigate('/about')}
                  className="text-[#f97316] font-bold hover:text-[#ea6a0a] flex items-center gap-2 transition-colors"
                >
                  Learn More About Us <FiArrowRight />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES OVERVIEW ─── */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mx-auto justify-center mb-3">Our Expertise</span>
            <h2 className="text-4xl font-bold text-[#0f2044]">Core Capabilities</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Delivering robust and efficient solar infrastructure tailored for diverse sectors across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {SERVICES.map((srv, i) => (
                <motion.div
                  key={srv.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="gov-card overflow-hidden group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={srv.img}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2044]/60 to-transparent" />
                  </div>
                  <div className="p-6 accent-bar">
                    <h3 className="text-xl font-bold text-[#0f2044] mb-2 group-hover:text-[#f97316] transition-colors">{srv.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{srv.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-24 bg-[#0f2044] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Partner With Us For Your Next Project</h2>
          <p className="text-blue-100/70 text-lg mb-10 max-w-2xl mx-auto">
            From government tenders to large-scale industrial installations, we bring unmatched expertise and reliability to every solar initiative.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#f97316] text-white font-bold rounded-lg hover:bg-[#ea6a0a] transition-colors shadow-xl shadow-orange-900/30"
          >
            Contact Our Team <FiArrowRight />
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;
