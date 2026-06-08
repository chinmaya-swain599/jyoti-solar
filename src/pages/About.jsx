import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const TOPICS = [
  { id: 'vision',      label: 'Our Vision',         icon: '👁️', subtitle: 'A Greener Tomorrow',    content: 'To invest in renewable energy projects and help create a sustainable future with better environmental balance for future generations. We envision an India powered entirely by clean, green solar energy.',    img: 'https://picsum.photos/seed/jyoti-vision/1200/800' },
  { id: 'mission',     label: 'Our Mission',         icon: '🎯', subtitle: 'Empowering India',       content: 'To become a leading solar power generation company in India through advanced technology, efficient management, innovation, and long-term renewable infrastructure development.',                             img: 'https://picsum.photos/seed/jyoti-mission/1200/800' },
  { id: 'sustainability', label: 'Sustainability',   icon: '🌱', subtitle: 'Zero Carbon Future',     content: "Committed to reducing India's carbon footprint through scalable, clean solar solutions designed for both public and private sectors — ensuring long-term environmental balance.",                          img: 'https://picsum.photos/seed/jyoti-sustain/1200/800' },
  { id: 'industrial',  label: 'Industrial Solutions',icon: '🏭', subtitle: 'Powering Heavy Industry', content: 'End-to-end EPC services for large-scale industrial setups, helping corporations transition to renewable energy grids without operational downtime and reducing electricity costs significantly.',        img: 'https://picsum.photos/seed/jyoti-industrial/1200/800' },
  { id: 'government',  label: 'Government Projects', icon: '🏛️', subtitle: 'National Solar Mission', content: "Actively participating in state and central government tenders to build massive utility-scale solar parks across India, contributing to the National Solar Mission's 500GW target by 2030.",              img: 'https://picsum.photos/seed/jyoti-govt/1200/800' },
  { id: 'leadership',  label: 'Leadership',          icon: '👥', subtitle: 'Guided by Experts',      content: 'Our leadership team consists of visionary engineers, seasoned policy experts, and infrastructure developers with decades of combined experience in renewable energy development across India.',           img: 'https://picsum.photos/seed/jyoti-leadership/1200/800' },
];

const TEAM = [
  { name: 'Rajesh Sharma',  role: 'Managing Director',         img: 'https://picsum.photos/seed/team-rajesh/400/600'  },
  { name: 'Priya Nair',     role: 'Director – Operations',     img: 'https://picsum.photos/seed/team-priya/400/600'   },
  { name: 'Anil Gupta',     role: 'Chief Engineer',            img: 'https://picsum.photos/seed/team-anil/400/600'    },
  { name: 'Sunita Rao',     role: 'Head – Government Affairs', img: 'https://picsum.photos/seed/team-sunita/400/600'  },
];

const TIMELINE = [
  { year: '2010', event: "Jyoti Solar founded with a mission to transform India's energy landscape." },
  { year: '2014', event: 'First 10 MW utility solar park commissioned in Gujarat.' },
  { year: '2018', event: 'Awarded SECI government tender — 50 MW Rajasthan Solar Park.' },
  { year: '2021', event: 'Crossed 250 MW cumulative installed solar capacity across India.' },
  { year: '2024', event: '500 MW milestone achieved. Expansion into Odisha & North-East India.' },
];

const About = () => {
  const [active, setActive] = useState(TOPICS[0]);

  return (
    <div className="min-h-screen bg-[#f4f6f9] page-fade">

      {/* ─── PAGE HEADER ─── */}
      <section className="pt-36 pb-16 bg-[#0f2044] relative overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=80"
            alt="Solar energy team working"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2044] via-[#0f2044]/90 to-[#0f2044]/60 pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-tag mb-4">Who We Are</motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            About <span className="text-[#f97316]">Jyoti Solar</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100/70 text-lg max-w-2xl"
          >
            Pioneering India's renewable energy future through sustainable solar infrastructure, advanced technology, and unwavering commitment to a greener tomorrow.
          </motion.p>
        </div>
      </section>

      {/* ─── INTERACTIVE IDENTITY SWITCHER ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag mx-auto justify-center mb-3">Company Identity</span>
            <h2 className="text-4xl font-bold text-[#0f2044]">Explore Our Core Values</h2>
            <p className="text-slate-500 mt-3">Click or hover any section to learn more</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[580px]">

            {/* Left nav */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {TOPICS.map((t) => {
                const isActive = active.id === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActive(t)}
                    onMouseEnter={() => setActive(t)}
                    className={`relative flex items-center gap-4 p-4 rounded-xl text-left border transition-all duration-200 ${
                      isActive
                        ? 'bg-orange-50 border-[#f97316] shadow-md'
                        : 'bg-white border-slate-200 hover:border-orange-300 hover:bg-orange-50/50'
                    }`}
                  >
                    <span className="text-2xl">{t.icon}</span>
                    <div>
                      <p className={`font-bold text-base ${isActive ? 'text-[#f97316]' : 'text-[#0f2044]'}`}>{t.label}</p>
                      <p className="text-xs text-slate-400">{t.subtitle}</p>
                    </div>
                    {isActive && <FiArrowRight className="ml-auto text-[#f97316]" />}
                  </button>
                );
              })}
            </div>

            {/* Right content display */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl overflow-hidden relative shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 flex flex-col"
                >
                  <div className="h-[55%] relative overflow-hidden">
                    <img src={active.img} alt={active.label} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2044]/60 to-transparent" />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#f97316] rounded-full shadow-md">
                      <span className="text-white text-xs font-bold tracking-wider">{active.subtitle}</span>
                    </div>
                  </div>
                  <div className="h-[45%] p-8 flex flex-col justify-center accent-bar ml-0 border-l-4 border-[#f97316]">
                    <h3 className="text-3xl font-bold text-[#0f2044] mb-3">{active.label}</h3>
                    <p className="text-slate-600 text-base leading-relaxed">{active.content}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-20 bg-[#f4f6f9] border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag mx-auto justify-center mb-3">Our Journey</span>
            <h2 className="text-4xl font-bold text-[#0f2044]">Company Timeline</h2>
          </div>
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#f97316] to-[#0f2044]" />
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center gap-6 mb-10 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <p className="text-[#f97316] font-bold text-xl mb-1">{item.year}</p>
                  <div className="gov-card inline-block p-4">
                    <p className="text-slate-600 text-sm leading-relaxed">{item.event}</p>
                  </div>
                </div>
                <div className="relative z-10 w-5 h-5 rounded-full bg-[#f97316] border-4 border-white shadow-lg shrink-0" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag mx-auto justify-center mb-3">Our People</span>
            <h2 className="text-4xl font-bold text-[#0f2044]">Leadership Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] border border-slate-200 shadow-md hover:shadow-xl hover:border-[#f97316]/50 transition-all"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2044] via-[#0f2044]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-5 z-10 border-t-2 border-[#f97316]">
                  <h4 className="text-white font-bold text-lg">{member.name}</h4>
                  <p className="text-[#f97316] text-sm font-semibold">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
