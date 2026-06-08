import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { MdAccessTime, MdSend } from 'react-icons/md';

const FAQ = [
  { q: 'What types of solar projects do you undertake?', a: 'We handle utility-scale solar parks, industrial EPC installations, government projects, and commercial rooftop systems across India.' },
  { q: 'How do I apply for a tender?',                   a: 'Download the tender specification document from our Tenders page, prepare your technical & financial bid, and submit via email to tenders@jyotisolar.com before the deadline.' },
  { q: 'Do you offer O&M services?',                     a: 'Yes. We provide comprehensive 5–10 year AMC and Operations & Maintenance contracts for all projects we commission.' },
  { q: 'Which states do you operate in?',                a: 'We are currently active across 12 Indian states including Odisha, Rajasthan, Gujarat, Maharashtra, Karnataka, and Delhi NCR.' },
];

const OFFICES = [
  { city: 'Bhubaneswar', label: 'Head Office — Odisha',        address: 'Plot No. 45, Janpath, Bhubaneswar, Odisha 751001',    phone: '+91 67 4230 1234', email: 'info@jyotisolar.com',  icon: '🏢' },
  { city: 'New Delhi',   label: 'Corporate Liaison Office',    address: '12th Floor, DLF Cyber Hub, Gurugram, Haryana 122002', phone: '+91 11 4567 8900', email: 'delhi@jyotisolar.com', icon: '🏛️' },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm]       = useState({ firstName: '', lastName: '', email: '', subject: 'General Inquiry', message: '' });
  const [sent, setSent]       = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#f4f6f9] pb-24 page-fade">

      {/* ─── PAGE HEADER ─── */}
      <section className="pt-36 pb-16 bg-[#0f2044] relative overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560472355-536de3962603?w=1600&q=80"
            alt="Solar energy office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2044] via-[#0f2044]/90 to-[#0f2044]/60 pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="section-tag mx-auto justify-center mb-3">Reach Us</span>
          <h1 className="text-5xl font-bold text-white mb-4">
            Get In <span className="text-[#f97316]">Touch</span>
          </h1>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">
            Whether you're exploring solar solutions, submitting a tender inquiry, or planning a partnership — our team is ready to help.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">

        {/* ─── CONTACT FORM + INFO ─── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="gov-card p-8 lg:p-10"
          >
            <h2 className="text-2xl font-bold text-[#0f2044] mb-2">Send a Message</h2>
            <p className="text-slate-500 text-sm mb-8">Our team typically responds within 24 business hours.</p>

            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm font-semibold"
              >
                ✅ Message sent! We'll get back to you shortly.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { key: 'firstName', label: 'First Name', placeholder: 'Rajesh', type: 'text' },
                  { key: 'lastName',  label: 'Last Name',  placeholder: 'Sharma', type: 'text' },
                ].map(({ key, label, placeholder, type }) => (
                  <div key={key}>
                    <label className="block text-xs font-bold text-slate-500 mb-2 tracking-wider uppercase">{label}</label>
                    <input
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[key]}
                      onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                      className="input-gov w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0f2044] text-sm placeholder-slate-400 transition-all"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 tracking-wider uppercase">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="rajesh@example.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="input-gov w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0f2044] text-sm placeholder-slate-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 tracking-wider uppercase">Subject</label>
                <div className="relative">
                  <select
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    className="input-gov w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0f2044] text-sm transition-all appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Tender / Procurement</option>
                    <option>Project Consultation</option>
                    <option>Partnership</option>
                    <option>Careers</option>
                  </select>
                  <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 tracking-wider uppercase">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your project or inquiry..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="input-gov w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0f2044] text-sm placeholder-slate-400 resize-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#f97316] text-white font-bold rounded-xl hover:bg-[#ea6a0a] transition-colors shadow-lg shadow-orange-300/30"
              >
                <MdSend className="text-lg" /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Right — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {OFFICES.map((office) => (
              <div key={office.city} className="gov-card p-6 hover:border-[#f97316]/40 border-l-4 border-l-[#f97316]">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-3xl bg-orange-50 border border-orange-100 p-3 rounded-xl">{office.icon}</span>
                  <div>
                    <p className="font-bold text-[#0f2044] text-lg">{office.city}</p>
                    <p className="text-[#f97316] text-xs font-bold tracking-wider uppercase">{office.label}</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-start gap-3"><FaMapMarkerAlt className="text-[#f97316] mt-1 shrink-0" /><span>{office.address}</span></div>
                  <div className="flex items-center gap-3"><FaPhoneAlt className="text-[#f97316] shrink-0" /><span className="font-medium">{office.phone}</span></div>
                  <div className="flex items-center gap-3"><FaEnvelope className="text-[#f97316] shrink-0" /><span className="font-medium">{office.email}</span></div>
                </div>
              </div>
            ))}

            {/* Business Hours */}
            <div className="gov-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <MdAccessTime className="text-[#f97316] text-xl" />
                <h3 className="font-bold text-[#0f2044] text-lg">Business Hours</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-slate-100 pb-2.5"><span className="text-slate-500">Mon – Fri</span><span className="text-[#0f2044] font-semibold">9:00 AM – 6:00 PM IST</span></div>
                <div className="flex justify-between border-b border-slate-100 pb-2.5"><span className="text-slate-500">Saturday</span><span className="text-[#0f2044] font-semibold">10:00 AM – 2:00 PM IST</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Sunday</span><span className="text-red-500 font-semibold">Closed</span></div>
              </div>
            </div>


          </motion.div>
        </section>

        {/* ─── FAQ ─── */}
        <section>
          <div className="text-center mb-10">
            <span className="section-tag mx-auto justify-center mb-3">Quick Answers</span>
            <h2 className="text-3xl font-bold text-[#0f2044]">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="gov-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-orange-50/50 transition-colors"
                >
                  <span className="font-semibold text-[#0f2044] pr-4">{item.q}</span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#f97316] text-2xl font-light shrink-0"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 border-t border-slate-100 pt-3 bg-slate-50"
                    >
                      <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>
      </div>


    </div>
  );
};

export default Contact;
