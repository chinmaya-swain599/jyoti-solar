import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileDownload, FaChevronDown, FaCheckCircle, FaBriefcase, FaCalendarAlt, FaTag } from 'react-icons/fa';
import { MdOutlineHowToVote } from 'react-icons/md';

const STEPS = [
  { icon: '📋', title: 'Tender Notification', desc: 'Official tenders published on our portal and government e-procurement websites.' },
  { icon: '📝', title: 'Application & Docs',   desc: 'Eligible vendors submit technical and financial bids along with required certifications.' },
  { icon: '🔍', title: 'Evaluation & Review',  desc: 'Our procurement team evaluates all bids against pre-published eligibility criteria.' },
  { icon: '🏆', title: 'Award & Execution',    desc: 'Successful bidders receive letters of award and proceed to project execution phase.' },
];

const CRITERIA = [
  { id: 1, title: 'Technical Eligibility',    content: 'Vendors must have successfully executed at least 3 similar solar EPC projects in the last 5 years, with a minimum combined capacity of 20 MW.' },
  { id: 2, title: 'Financial Requirements',   content: 'Minimum average annual turnover of ₹50 Crore for the last 3 financial years, supported by CA-audited balance sheets and profit/loss statements.' },
  { id: 3, title: 'Certifications Required',  content: 'Valid ISO 9001:2015, ISO 14001:2015 certifications and active MNRE / SECI / State DISCOM vendor registration are mandatory.' },
  { id: 4, title: 'Blacklisting Clause',      content: 'Vendors must not be blacklisted by any central/state government authority or PSU. A self-declaration affidavit is required with the bid.' },
];

const TENDERS = [
  { id: 'TND-2024-001', title: 'Supply, Installation & Commissioning of 10 MW Ground-Mounted Solar Plant — Government Secretariat Complex', deadline: '15 Oct 2024', status: 'Open',     type: 'Government', value: '₹42 Cr' },
  { id: 'TND-2024-002', title: 'Civil & Structural Works for Rajasthan Ultra Mega Solar Park Phase II (50 MW)',                             deadline: '02 Nov 2024', status: 'Open',     type: 'Utility',    value: '₹18 Cr' },
  { id: 'TND-2024-003', title: 'Procurement of Central String Inverters for Odisha Industrial Solar Project',                               deadline: '30 Sep 2024', status: 'Closed',   type: 'Industrial', value: '₹9 Cr'  },
  { id: 'TND-2024-004', title: 'O&M Contract — 5-Year AMC for Gujarat Solar Park (100 MW)',                                                deadline: '20 Dec 2024', status: 'Upcoming', type: 'O&M',        value: '₹15 Cr' },
];

const statusStyles = {
  Open:     'bg-green-50 text-green-700 border-green-200',
  Closed:   'bg-red-50 text-red-600 border-red-200',
  Upcoming: 'bg-amber-50 text-amber-700 border-amber-200',
};

const Tenders = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  return (
    <div className="min-h-screen bg-[#f4f6f9] pb-24 page-fade">

      {/* ─── PAGE HEADER ─── */}
      <section className="pt-36 pb-16 bg-[#0f2044] relative overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=1600&q=80"
            alt="Solar panel construction and procurement"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2044] via-[#0f2044]/90 to-[#0f2044]/60 pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="section-tag mb-3">Procurement Portal</span>
          <h1 className="text-5xl font-bold text-white mb-4">
            Tenders &amp; <span className="text-[#f97316]">Procurement</span>
          </h1>
          <p className="text-blue-100/70 text-lg max-w-2xl">
            Partner with Jyoti Solar to build next-generation solar infrastructure. Explore active tenders, eligibility criteria, and the application process below.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">

        {/* ─── PROCESS STEPS ─── */}
        <section>
          <div className="text-center mb-12">
            <span className="section-tag mx-auto justify-center mb-3">How It Works</span>
            <h2 className="text-3xl font-bold text-[#0f2044]">Tender Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="gov-card p-6 hover:border-[#f97316]/50 accent-bar"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-[#f97316] font-mono text-xs font-bold mb-2 tracking-widest">STEP {String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-[#0f2044] font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── TENDERS + CRITERIA ─── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Tender List */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-[#f97316] animate-pulse shadow-md" />
                <h2 className="text-2xl font-bold text-[#0f2044]">Active &amp; Upcoming Tenders</h2>
              </div>

              {TENDERS.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="gov-card p-6 hover:border-[#f97316]/40"
                >
                  <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-[#f97316] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">{t.id}</span>
                        <span className="text-xs text-slate-500 border border-slate-200 bg-slate-50 px-2 py-0.5 rounded flex items-center gap-1"><FaTag className="text-[10px]" /> {t.type}</span>
                      </div>
                      <h3 className="text-[#0f2044] font-semibold text-base leading-snug">{t.title}</h3>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border shrink-0 ${statusStyles[t.status]}`}>
                      {t.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap justify-between items-center pt-4 border-t border-slate-100 gap-3">
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5 font-medium"><FaCalendarAlt className="text-[#f97316]" /> {t.deadline}</span>
                      <span className="font-bold text-[#0f2044] text-base">{t.value}</span>
                    </div>
                    {t.status !== 'Closed' && (
                      <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-[#f97316] rounded-lg hover:bg-[#ea6a0a] transition-colors shadow-sm">
                        <FaFileDownload /> Download Specs
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Qualification Criteria Accordion */}
            <div>
              <div className="gov-card p-6 sticky top-28">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                  <FaBriefcase className="text-[#f97316] text-xl" />
                  <h2 className="text-xl font-bold text-[#0f2044]">Qualification Criteria</h2>
                </div>
                <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                  All applicants must meet the following minimum eligibility requirements to participate.
                </p>
                <div className="space-y-3">
                  {CRITERIA.map((c) => (
                    <div key={c.id} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                      <button
                        onClick={() => setOpenAccordion(openAccordion === c.id ? null : c.id)}
                        className="w-full flex justify-between items-center p-4 text-left hover:bg-orange-50 transition-colors"
                      >
                        <span className="flex items-center gap-2 text-sm font-semibold text-[#0f2044]">
                          <FaCheckCircle className="text-[#f97316] shrink-0" />
                          {c.title}
                        </span>
                        <motion.span
                          animate={{ rotate: openAccordion === c.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-slate-400 shrink-0"
                        >
                          <FaChevronDown />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {openAccordion === c.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="px-4 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3 bg-white">
                              {c.content}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-[#0f2044] rounded-xl text-white">
                  <div className="flex items-center gap-2 font-bold text-sm mb-1.5">
                    <MdOutlineHowToVote className="text-[#f97316]" /> Register as Vendor
                  </div>
                  <p className="text-blue-100/70 text-xs leading-relaxed">Send your pre-qualification documents to <span className="text-[#f97316] font-semibold">tenders@jyotisolar.com</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Tenders;
