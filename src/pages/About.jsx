import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FiArrowRight, FiZap, FiShield, FiCheckCircle,
  FiTarget, FiUsers, FiAward, FiTrendingUp, FiSun,
} from 'react-icons/fi';
import { MdOutlineVerified, MdSolarPower, MdElectricBolt } from 'react-icons/md';
import { GiSolarPower } from 'react-icons/gi';

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const VALUES = [
  {
    id: 'vision', icon: <FiSun size={24} />, label: 'Our Vision',
    headline: 'A greener tomorrow starts today.',
    content: 'We envision an India powered entirely by clean, green solar energy — transforming the national energy landscape for future generations.',
    gradient: 'from-amber-500 to-orange-600',
    bg: 'rgba(249,115,22,0.06)',
    border: 'rgba(249,115,22,0.2)',
    size: 'large', // spans 2 cols
  },
  {
    id: 'mission', icon: <FiTarget size={24} />, label: 'Our Mission',
    headline: 'Leading through innovation.',
    content: "To become India's leading solar power generation company through advanced technology, efficient management, and long-term renewable infrastructure.",
    gradient: 'from-blue-500 to-indigo-600',
    bg: 'rgba(59,130,246,0.06)',
    border: 'rgba(59,130,246,0.2)',
    size: 'normal',
  },
  {
    id: 'sustainability', icon: <FiCheckCircle size={24} />, label: 'Sustainability',
    headline: 'Zero carbon. Always.',
    content: 'Committed to reducing India\'s carbon footprint through scalable, clean solar solutions for public and private sectors.',
    gradient: 'from-emerald-500 to-teal-500',
    bg: 'rgba(16,185,129,0.06)',
    border: 'rgba(16,185,129,0.2)',
    size: 'normal',
  },
  {
    id: 'quality', icon: <MdOutlineVerified size={24} />, label: 'Quality',
    headline: 'ISO certified excellence.',
    content: 'ISO 9001:2015 & 14001:2015 certified — every project is delivered to the highest global standards with zero compromise.',
    gradient: 'from-violet-500 to-purple-600',
    bg: 'rgba(139,92,246,0.06)',
    border: 'rgba(139,92,246,0.2)',
    size: 'normal',
  },
  {
    id: 'government', icon: <FiShield size={24} />, label: 'Government',
    headline: 'Trusted by the nation.',
    content: 'Empanelled with SECI, NTPC and multiple state DISCOMs — contributing to India\'s 500 GW solar target by 2030.',
    gradient: 'from-rose-500 to-pink-600',
    bg: 'rgba(244,63,94,0.06)',
    border: 'rgba(244,63,94,0.2)',
    size: 'large', // spans 2 cols
  },
];

const TEAM = [
  { name: 'Rajesh Sharma', role: 'Managing Director', exp: '20+ Years', img: 'https://picsum.photos/seed/team-rajesh/400/500' },
  { name: 'Priya Nair', role: 'Director – Operations', exp: '15+ Years', img: 'https://picsum.photos/seed/team-priya/400/500' },
  { name: 'Anil Gupta', role: 'Chief Engineer', exp: '18+ Years', img: 'https://picsum.photos/seed/team-anil/400/500' },
  { name: 'Sunita Rao', role: 'Head – Government Affairs', exp: '12+ Years', img: 'https://picsum.photos/seed/team-sunita/400/500' },
];

const TIMELINE = [
  { year: '2010', title: 'Foundation', desc: "Jyoti Solar founded with a bold mission to transform India's energy landscape.", icon: <GiSolarPower /> },
  { year: '2014', title: 'First Park', desc: 'First 10 MW utility solar park commissioned in Gujarat — a landmark moment.', icon: <FiSun /> },
  { year: '2018', title: 'SECI Award', desc: 'Awarded SECI government tender for a 50 MW Rajasthan Solar Park.', icon: <FiAward /> },
  { year: '2021', title: '250 MW', desc: 'Crossed 250 MW cumulative installed solar capacity across India.', icon: <FiTrendingUp /> },
  { year: '2024', title: '500 MW', desc: '500 MW milestone achieved. Expanding into Odisha & North-East India.', icon: <MdElectricBolt /> },
];

const HIGHLIGHTS = [
  { value: '500+', unit: 'MW', label: 'Solar Installed' },
  { value: '12', unit: 'States', label: 'Pan-India Reach' },
  { value: '50+', unit: 'Projects', label: 'Delivered' },
  { value: '14', unit: 'Years', label: 'Of Excellence' },
];

/* ─── ABOUT PAGE ─────────────────────────────────────────────────────────── */
const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 1 — Cinematic hero with bold statement
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative flex items-center overflow-hidden pt-28 pb-16"
        style={{ background: 'linear-gradient(140deg,#010912 0%,#0c1e44 100%)', minHeight: '32vh' }}
      >
        {/* Mesh grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(249,115,22,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,0.04) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }} />

        {/* Glowing blobs */}
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(249,115,22,0.12) 0%,transparent 75%)', transform: 'translate(50%,-50%)' }} />

        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80" alt="Solar panels" className="w-full h-full object-cover opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Breadcrumb / Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-orange-400 text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: "'Inter',sans-serif" }}>About Us</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
              className="font-hero text-white mb-4"
              style={{ fontSize: 'clamp(2.2rem,5vw,3.6rem)', lineHeight: 1.1 }}
            >
              Building India's{' '}
              <span style={{
                background: 'linear-gradient(90deg,#f97316 0%,#fbbf24 45%,#f97316 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 3s linear infinite',
              }}>
                Solar Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
              className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ fontFamily: "'Inter',sans-serif" }}
            >
              From a bold vision in 2010 to 500+ MW of commissioned solar capacity across 12 states — Jyoti Solar is India's most trusted EPC partner for renewable infrastructure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Floating stats row bridging the header and content */}
      <section className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl"
          style={{
            background: '#ffffff',
            border: '1px solid #dde3ed',
            boxShadow: '0 20px 40px rgba(15,32,68,0.08), 0 1px 3px rgba(0,0,0,0.02)'
          }}
        >
          {HIGHLIGHTS.map((h, i) => (
            <div
              key={h.label}
              className="text-center border-r last:border-r-0 border-slate-100 flex flex-col justify-center py-2 px-1"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0f2044] font-mono leading-none">{h.value}</div>
              <div className="text-orange-500 text-[10px] sm:text-xs font-bold tracking-widest uppercase mt-2 mb-1" style={{ fontFamily: "'Inter',sans-serif" }}>{h.unit}</div>
              <div className="text-slate-400 text-[11px] sm:text-xs" style={{ fontFamily: "'Inter',sans-serif" }}>{h.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2 — Company story split
      ════════════════════════════════════════════════════════════════════ */}
      <section className="pt-20 pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 24px 64px rgba(15,32,68,0.18)' }}>
                <img src="https://picsum.photos/seed/jyoti-story/900/700" alt="Jyoti Solar Story" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(10,20,50,0.7) 0%,transparent 60%)' }} />

                {/* ISO badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-3 rounded-2xl" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
                  <MdOutlineVerified className="text-orange-500 text-2xl shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-slate-800">ISO Certified</p>
                    <p className="text-xs text-slate-400">9001:2015 & 14001:2015</p>
                  </div>
                </div>

                {/* Year badge */}
                <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)', boxShadow: '0 8px 20px rgba(249,115,22,0.4)' }}>
                  <span className="text-white font-black text-xl leading-none">14</span>
                  <span className="text-orange-200 text-[10px] font-semibold">YEARS</span>
                </div>
              </div>

              {/* Decorative shapes */}
              <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-3xl -z-10" style={{ background: 'rgba(249,115,22,0.07)', border: '2px dashed rgba(249,115,22,0.25)' }} />
              <div className="absolute -top-5 -left-5 w-24 h-24 rounded-2xl -z-10" style={{ background: 'rgba(15,32,68,0.05)', border: '2px dashed rgba(15,32,68,0.12)' }} />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="space-y-7"
            >
              <div>
                <span className="section-tag mb-4 block">Who We Are</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2044] leading-tight">
                  India's Most Trusted <span style={{ color: '#f97316' }}>Solar EPC</span> Partner
                </h2>
              </div>

              <p className="text-slate-500 text-lg leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>
                Founded in 2010, Jyoti Solar has grown from a small team of engineers to one of India's premier EPC contractors, delivering comprehensive solar solutions from land acquisition and engineering to commissioning and long-term maintenance.
              </p>

              <p className="text-slate-500 leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>
                We work across utility-scale parks, industrial installations, rooftop systems, and government projects — bringing unmatched technical expertise and operational reliability to every initiative.
              </p>

              <div className="grid grid-cols-1 gap-3 pt-2">
                {[
                  { icon: <MdSolarPower className="text-orange-500" />, text: 'End-to-end EPC across all solar segments' },
                  { icon: <FiCheckCircle className="text-orange-500" />, text: 'Empanelled with SECI, NTPC & state DISCOMs' },
                  { icon: <MdOutlineVerified className="text-orange-500" />, text: 'ISO 9001:2015 & 14001:2015 certified quality' },
                  { icon: <FiUsers className="text-orange-500" />, text: 'Dedicated O&M teams for lifecycle support' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
                    whileHover={{ x: 4, borderColor: 'rgba(249,115,22,0.3)', backgroundColor: 'rgba(249,115,22,0.03)' }}
                  >
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <span className="text-slate-700 font-medium text-sm" style={{ fontFamily: "'Inter',sans-serif" }}>{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 text-orange-500 font-bold hover:text-orange-600 transition-colors group cursor-pointer mt-2"
              >
                Get in touch with us <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 3 — Values bento grid
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-tag mx-auto justify-center mb-4 block">Our Pillars</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2044] mb-4">What Drives Us</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto" style={{ fontFamily: "'Inter',sans-serif" }}>Five core pillars that define how we work, think, and deliver</p>
          </motion.div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {/* Row 1: Vision (large) + Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}
              className="lg:col-span-2 group relative rounded-3xl p-8 overflow-hidden cursor-default"
              style={{ background: 'linear-gradient(135deg,#0f2044 0%,#1a3a6b 100%)', border: '1.5px solid rgba(26,58,107,0.6)', minHeight: 260, boxShadow: '0 4px 24px rgba(15,32,68,0.15)' }}
              whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(15,32,68,0.25)' }}
            >
              {/* Glow in corner */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(249,115,22,0.18) 0%,transparent 70%)', transform: 'translate(30%,-30%)' }} />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-orange-400 mb-5" style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)' }}>
                  <FiSun size={22} />
                </div>
                <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-3" style={{ fontFamily: "'Inter',sans-serif" }}>Our Vision</p>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">A greener tomorrow<br />starts today.</h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-lg" style={{ fontFamily: "'Inter',sans-serif" }}>We envision an India powered entirely by clean, green solar energy — transforming the national energy landscape for generations to come.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="group relative rounded-3xl p-7 overflow-hidden cursor-default"
              style={{ background: '#fff', border: '1.5px solid #e2e8f0', minHeight: 260, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
              whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.4)', boxShadow: '0 16px 40px rgba(59,130,246,0.1)' }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-blue-500 mb-5" style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)' }}>
                <FiTarget size={22} />
              </div>
              <p className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-3" style={{ fontFamily: "'Inter',sans-serif" }}>Our Mission</p>
              <h3 className="text-xl font-bold text-[#0f2044] mb-3 leading-tight">Leading through<br />innovation.</h3>
              <p className="text-slate-500 text-sm leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>To become India's leading solar power company through advanced technology and long-term renewable infrastructure development.</p>
            </motion.div>

            {/* Row 2: Sustainability + Quality + Government (large) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="group relative rounded-3xl p-7 overflow-hidden cursor-default"
              style={{ background: '#fff', border: '1.5px solid #e2e8f0', minHeight: 240, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
              whileHover={{ y: -4, borderColor: 'rgba(16,185,129,0.4)', boxShadow: '0 16px 40px rgba(16,185,129,0.1)' }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-emerald-500 mb-5" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}>
                <FiCheckCircle size={22} />
              </div>
              <p className="text-emerald-500 text-xs font-bold tracking-widest uppercase mb-3" style={{ fontFamily: "'Inter',sans-serif" }}>Sustainability</p>
              <h3 className="text-xl font-bold text-[#0f2044] mb-3 leading-tight">Zero carbon.<br />Always.</h3>
              <p className="text-slate-500 text-sm leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>Scalable, clean solar solutions reducing India's carbon footprint for public and private sectors alike.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="group relative rounded-3xl p-7 overflow-hidden cursor-default"
              style={{ background: '#fff', border: '1.5px solid #e2e8f0', minHeight: 240, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
              whileHover={{ y: -4, borderColor: 'rgba(139,92,246,0.4)', boxShadow: '0 16px 40px rgba(139,92,246,0.1)' }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-violet-500 mb-5" style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)' }}>
                <MdOutlineVerified size={22} />
              </div>
              <p className="text-violet-500 text-xs font-bold tracking-widest uppercase mb-3" style={{ fontFamily: "'Inter',sans-serif" }}>Quality</p>
              <h3 className="text-xl font-bold text-[#0f2044] mb-3 leading-tight">ISO certified<br />excellence.</h3>
              <p className="text-slate-500 text-sm leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>ISO 9001:2015 & 14001:2015 certified — every project delivered to the highest global standards.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
              className="group relative rounded-3xl p-8 overflow-hidden cursor-default"
              style={{ background: 'linear-gradient(135deg,#f97316 0%,#ea580c 100%)', border: '1.5px solid rgba(249,115,22,0.5)', minHeight: 240, boxShadow: '0 4px 24px rgba(249,115,22,0.25)' }}
              whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(249,115,22,0.35)' }}
            >
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-5" style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <FiShield size={22} />
                </div>
                <p className="text-orange-100 text-xs font-bold tracking-widest uppercase mb-3" style={{ fontFamily: "'Inter',sans-serif" }}>Government</p>
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">Trusted by<br />the nation.</h3>
                <p className="text-orange-50 text-sm leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>Empanelled with SECI, NTPC & multiple state DISCOMs — contributing to India's 500 GW target by 2030.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 4 — Timeline
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="section-tag mx-auto justify-center mb-4 block">Our Journey</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2044]">Milestones That Matter</h2>
          </motion.div>

          <div className="relative">
            {/* Vertical spine */}
            <div className="absolute left-[120px] top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom,transparent,#f97316 10%,#0f2044 90%,transparent)' }} />

            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex items-start gap-0"
                >
                  {/* Year column */}
                  <div className="w-[120px] shrink-0 pt-4 text-right pr-8">
                    <span className="text-2xl font-black text-[#0f2044] font-mono">{item.year}</span>
                  </div>

                  {/* Dot */}
                  <div className="relative z-10 shrink-0 mt-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-base"
                      style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)', boxShadow: '0 4px 16px rgba(249,115,22,0.4)', border: '3px solid white', marginLeft: -20 }}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <motion.div
                    className="flex-1 ml-8 rounded-2xl p-5"
                    style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
                    whileHover={{ x: 6, borderColor: 'rgba(249,115,22,0.35)', backgroundColor: 'rgba(249,115,22,0.02)', boxShadow: '0 8px 24px rgba(15,32,68,0.08)' }}
                  >
                    <h4 className="font-bold text-[#0f2044] mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>{item.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 5 — Leadership team
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: 'linear-gradient(180deg,#f8fafc 0%,#f1f5f9 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
          >
            <div>
              <span className="section-tag mb-4 block">Our People</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2044]">Leadership Team</h2>
            </div>
            <p className="text-slate-500 text-base max-w-xs leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>
              Visionary engineers, policy experts, and infrastructure leaders with decades of combined experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative rounded-3xl overflow-hidden"
                style={{ aspectRatio: '3/4', boxShadow: '0 4px 20px rgba(15,32,68,0.1)' }}
                whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(15,32,68,0.2)' }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ transition: 'transform 700ms ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.07)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />

                {/* Gradient */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(10,20,50,0.95) 0%,rgba(10,20,50,0.5) 45%,transparent 100%)' }} />

                {/* Exp badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold" style={{ background: 'rgba(249,115,22,0.9)', backdropFilter: 'blur(8px)', color: 'white' }}>
                  {member.exp}
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-8 h-0.5 bg-orange-500 mb-3 rounded-full transition-all duration-500 group-hover:w-14" />
                  <h4 className="text-white font-bold text-lg leading-tight">{member.name}</h4>
                  <p className="text-orange-300 text-sm font-medium mt-1" style={{ fontFamily: "'Inter',sans-serif" }}>{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 6 — CTA
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(140deg,#010912 0%,#0f2044 55%,#1a1535 100%)' }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(249,115,22,0.1) 0%,transparent 70%)' }} />
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/10 pointer-events-none" style={{ width: 520, height: 520 }} animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.06, 0.25] }} transition={{ duration: 4.5, repeat: Infinity }} />

        <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-orange-400 text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: "'Inter',sans-serif" }}>Let's Build Together</span>
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to power<br />
              <span style={{ background: 'linear-gradient(90deg,#f97316,#fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                your future?
              </span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto" style={{ fontFamily: "'Inter',sans-serif" }}>
              Partner with India's most trusted EPC contractor for your next solar project — from conception to commissioning and beyond.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <button
                onClick={() => navigate('/contact')}
                className="group inline-flex items-center gap-3 px-9 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)', boxShadow: '0 12px 36px rgba(249,115,22,0.4)' }}
              >
                Contact Our Team
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate('/projects')}
                className="inline-flex items-center gap-3 px-9 py-4 rounded-2xl font-bold text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                View Our Projects
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </div>
  );
};

export default About;
