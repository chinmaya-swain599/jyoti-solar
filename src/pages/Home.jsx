import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import megaSolarFarm from '../assets/mega_solar_farm.png';
import SolarHeroCanvas from '../canvas/SolarHeroCanvas';
import {
  FiArrowRight, FiSun, FiZap, FiShield, FiCheckCircle, FiChevronDown,
} from 'react-icons/fi';
import {
  MdSolarPower, MdOutlineVerified, MdPeople, MdElectricBolt,
} from 'react-icons/md';
import { GiSolarPower } from 'react-icons/gi';

/* ─── DATA ──────────────────────────────────────────────────────────────── */
const STATS = [
  { value: 500, suffix: '+ MW', label: 'Installed Capacity', icon: <FiSun /> },
  { value: 12, suffix: '', label: 'States Present', icon: <FiZap /> },
  { value: 50, suffix: '+', label: 'Projects Completed', icon: <FiShield /> },
  { value: 4.2, suffix: 'L T', label: 'CO₂ Offset (Tons)', icon: <MdElectricBolt /> },
];

const SERVICES = [
  {
    title: 'Utility Solar Plants',
    desc: 'Large-scale utility solar parks designed for government and national grid integration.',
    icon: <MdSolarPower size={28} />,
    color: 'from-orange-500 to-amber-400',
  },
  {
    title: 'Industrial Installations',
    desc: 'End-to-end EPC services for factories and industrial units transitioning to solar.',
    icon: <FiZap size={28} />,
    color: 'from-blue-600 to-indigo-500',
  },
  {
    title: 'Rooftop Solar',
    desc: 'Smart rooftop systems for commercial and residential properties with net-metering.',
    icon: <GiSolarPower size={28} />,
    color: 'from-emerald-500 to-teal-400',
  },
  {
    title: 'Government Projects',
    desc: 'Contributing to the National Solar Mission with SECI & state DISCOM collaborations.',
    icon: <FiShield size={28} />,
    color: 'from-purple-600 to-violet-500',
  },
];

const PROCESS = [
  { step: '01', title: 'Site Assessment', desc: 'In-depth feasibility study, solar irradiance analysis and land survey.' },
  { step: '02', title: 'Engineering & Design', desc: 'Optimised system design using cutting-edge PV simulation tools.' },
  { step: '03', title: 'Procurement', desc: 'Sourcing Tier-1 modules, inverters and BoS components at scale.' },
  { step: '04', title: 'Construction', desc: 'Precision civil and electrical erection by certified field teams.' },
  { step: '05', title: 'Commissioning', desc: 'Full system testing, grid synchronisation and handover.' },
  { step: '06', title: 'O&M Support', desc: 'Proactive monitoring, preventive maintenance and performance reporting.' },
];

const WHY_US = [
  { title: 'ISO Certified Excellence', desc: 'ISO 9001:2015 & 14001:2015 certified quality management systems.', icon: <MdOutlineVerified size={22} /> },
  { title: 'National Solar Mission Partner', desc: 'Empanelled with SECI, NTPC and multiple state DISCOMs.', icon: <FiCheckCircle size={22} /> },
  { title: 'Experienced EPC Team', desc: 'Over 500 MW commissioned by industry-veteran engineers.', icon: <MdPeople size={22} /> },
];

/* ─── ANIMATED COUNTER ───────────────────────────────────────────────────── */
function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const isDecimal = target % 1 !== 0;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}


/* ─── HOME PAGE ──────────────────────────────────────────────────────────── */
const Home = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION — Full-screen cinematic
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col pt-24 pb-12"
        style={{ background: '#010914' }}
      >
        {/* ── Animated solar farm canvas background ── */}
        <SolarHeroCanvas />

        {/* ── Content legibility overlay ── */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(1,9,20,0.82) 0%, rgba(1,9,20,0.55) 50%, rgba(1,9,20,0.15) 100%)',
          }}
        />

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-auto mb-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ── Left ── */}
            <div className="space-y-5">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3"
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                  <span className="text-orange-400 text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>National Solar Mission Partner</span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h1 className="font-hero" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)' }}>
                  <span className="block text-white">Powering</span>
                  <span className="block">
                    <span className="text-white">India's{' '}</span>
                    <span
                      style={{
                        background: 'linear-gradient(90deg, #f97316 0%, #fbbf24 40%, #fb923c 70%, #f97316 100%)',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'shimmer 3s linear infinite',
                      }}
                    >
                      Renewable
                    </span>
                  </span>
                  <span className="block text-white">Future</span>
                </h1>
              </motion.div>

              {/* Sub-text */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-slate-300 text-base md:text-lg leading-[1.6] max-w-lg"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              >
                Jyoti Solar is a leading EPC contractor delivering utility-scale solar infrastructure — from grid-scale parks to rooftop systems — empowering the nation with clean energy.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  id="hero-explore-btn"
                  onClick={() => navigate('/projects')}
                  className="group relative flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #f97316, #ea580c)',
                    boxShadow: '0 8px 32px rgba(249,115,22,0.4)',
                  }}
                >
                  <span className="relative z-10">Explore Projects</span>
                  <FiArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                </button>
                <button
                  id="hero-tenders-btn"
                  onClick={() => navigate('/tenders')}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/15 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  View Tenders
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>

              {/* Mini stats strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="flex items-center gap-8 pt-4 border-t border-white/10"
              >
                {[
                  { val: '500+', unit: 'MW' },
                  { val: '12', unit: 'States' },
                  { val: '50+', unit: 'Projects' },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-orange-400">{s.val}</div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">{s.unit}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right — Image card ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative hidden lg:block"
            >
              {/* Outer glow ring */}
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-40 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, #f97316, #1a3a6b)' }}
              />

              {/* Image card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-3xl overflow-hidden"
                style={{
                  border: '1px solid rgba(249,115,22,0.3)',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                <img
                  src={megaSolarFarm}
                  alt="Mega Solar Project"
                  className="w-full h-auto object-cover aspect-[16/10]"
                />
                {/* Overlay shimmer */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.1) 0%, transparent 50%, rgba(26,58,107,0.2) 100%)' }} />
                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(to top, rgba(2,12,31,0.8), transparent)' }} />
              </motion.div>

              {/* Floating capacity chip */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
                transition={{
                  opacity: { delay: 0.8, duration: 0.6 },
                  x: { delay: 0.8, duration: 0.6 },
                  y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 },
                }}
                className="absolute -bottom-5 -left-8 flex items-center gap-3 px-5 py-3 rounded-2xl"
                style={{
                  background: 'rgba(2,12,31,0.85)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(249,115,22,0.3)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}>
                  ☀️
                </div>
                <div>
                  <p className="text-xs text-orange-300/80 uppercase font-bold tracking-widest">Utility Capacity</p>
                  <p className="text-lg font-bold text-white font-mono">500+ Megawatt</p>
                </div>
              </motion.div>

              {/* Floating ISO chip */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
                transition={{
                  opacity: { delay: 1, duration: 0.6 },
                  x: { delay: 1, duration: 0.6 },
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
                }}
                className="absolute -top-5 -right-6 flex items-center gap-2 px-4 py-2 rounded-2xl"
                style={{
                  background: 'rgba(2,12,31,0.85)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                }}
              >
                <MdOutlineVerified className="text-orange-400 text-xl shrink-0" />
                <div>
                  <p className="text-xs text-white font-bold">ISO Certified</p>
                  <p className="text-[10px] text-slate-400">9001 & 14001</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>


      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          STATS BAR — Animated counters
      ══════════════════════════════════════════════════════════════════════ */}
      {/* <section className="bg-white border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="group text-center p-7 rounded-2xl cursor-default"
                style={{
                  background: 'linear-gradient(135deg, #0f2044 0%, #1a3a6b 100%)',
                  border: '1.5px solid rgba(26,58,107,0.8)',
                  boxShadow: '0 4px 24px rgba(15,32,68,0.18)',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 12px 40px rgba(15,32,68,0.30)',
                  background: 'linear-gradient(135deg, #122555 0%, #1e4480 100%)',
                }}
              >
                <div
                  className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center text-orange-400 text-2xl"
                  style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)' }}
                >
                  {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-orange-300 text-sm font-semibold tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}



      {/* ═══════════════════════════════════════════════════════════════════
          ABOUT SNIPPET
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/jyoti-solar-about/900/600"
                  alt="Solar farm aerial view"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,32,68,0.7) 0%, transparent 60%)' }} />

                {/* Card overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.5)', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-orange-500 text-2xl shrink-0" style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)' }}>
                        <MdOutlineVerified />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">ISO Certified</h4>
                        <p className="text-sm text-slate-500">9001:2015 & 14001:2015</p>
                      </div>
                      <div className="ml-auto flex gap-1">
                        {[0, 1, 2].map(i => <div key={i} className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative shape behind image */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-3xl -z-10" style={{ background: 'rgba(249,115,22,0.08)', border: '2px dashed rgba(249,115,22,0.2)' }} />
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl -z-10" style={{ background: 'rgba(15,32,68,0.06)', border: '2px dashed rgba(15,32,68,0.15)' }} />
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <span className="section-tag mb-4 block">About The Company</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2044] leading-tight">
                  Committed to India's <span style={{ color: '#f97316' }}>Green Energy</span> Future
                </h2>
              </div>

              <p className="text-slate-600 text-lg leading-relaxed">
                Founded with a vision to transform India's energy landscape, Jyoti Solar provides comprehensive EPC solutions — from land acquisition and engineering to commissioning and long-term maintenance.
              </p>

              <div className="space-y-4">
                {WHY_US.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 p-4 rounded-2xl group hover:shadow-md transition-all duration-300"
                    style={{ background: 'rgba(249,115,22,0.03)', border: '1px solid rgba(249,115,22,0.1)' }}
                    whileHover={{ x: 4, borderColor: 'rgba(249,115,22,0.3)' }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-orange-500 shrink-0" style={{ background: 'rgba(249,115,22,0.1)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-0.5">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => navigate('/about')}
                className="inline-flex items-center gap-2 text-orange-500 font-bold hover:text-orange-600 transition-colors group cursor-pointer"
              >
                Learn More About Us
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SERVICES — Modern gradient cards
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-14" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-tag mx-auto justify-center mb-4 block">Our Expertise</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2044] mb-4">Core Capabilities</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Delivering robust and efficient solar infrastructure tailored for diverse sectors across India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((srv, i) => (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(0,0,0,0.15)' }}
                className="group relative rounded-3xl overflow-hidden bg-white cursor-default"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid rgba(226,232,240,0.8)' }}
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${srv.color}`} />

                <div className="p-7">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 bg-gradient-to-br ${srv.color} shadow-lg`}>
                    {srv.icon}
                  </div>

                  <h3 className="text-xl font-bold text-[#0f2044] mb-3 group-hover:text-orange-500 transition-colors duration-300">
                    {srv.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{srv.desc}</p>

                  {/* Arrow link */}
                  <div className="mt-6 flex items-center gap-2 text-orange-500 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                    Learn More <FiArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PROCESS — Timeline
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-tag mx-auto justify-center mb-4 block">How We Work</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2044] mb-4">Our EPC Process</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              A proven six-stage methodology ensuring every project is delivered on time, on budget, and to the highest standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative p-7 rounded-3xl hover:shadow-xl transition-all duration-400 cursor-default"
                style={{ background: i % 2 === 0 ? '#f8fafc' : 'white', border: '1px solid #e2e8f0' }}
                whileHover={{ borderColor: 'rgba(249,115,22,0.4)', scale: 1.02 }}
              >
                {/* Step number */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="text-5xl font-black font-mono leading-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.05))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {p.step}
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" style={{ background: 'rgba(249,115,22,0.1)' }}>
                    <FiArrowRight size={14} className="text-orange-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f2044] mb-2 group-hover:text-orange-500 transition-colors duration-300">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-7 right-7 h-0.5 bg-gradient-to-r from-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA — Full bleed with particles
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-16 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #020c1f 0%, #0f2044 50%, #1a1a3e 100%)' }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Orange glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)' }} />

        {/* Animated ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/20 pointer-events-none"
          style={{ width: 500, height: 500 }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">Let's Build Together</span>
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Partner With Us For
              <br />
              <span style={{ background: 'linear-gradient(90deg, #f97316, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Your Next Project
              </span>
            </h2>

            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              From government tenders to large-scale industrial installations, we bring unmatched expertise and reliability to every solar initiative across India.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                id="cta-contact-btn"
                onClick={() => navigate('/contact')}
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)', boxShadow: '0 12px 40px rgba(249,115,22,0.4)' }}
              >
                Contact Our Team
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                id="cta-projects-btn"
                onClick={() => navigate('/projects')}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                View Our Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shimmer keyframe */}
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Home;
