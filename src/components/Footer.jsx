import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdSolarPower, MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import logoImg from '../assets/logo.png';

const QUICK_LINKS = [
  { label: 'About Us',     path: '/about' },
  { label: 'Our Projects', path: '/projects' },
  { label: 'Tenders',      path: '/tenders' },
  { label: 'Contact',      path: '/contact' },
];

const SERVICES = [
  'Utility Solar Parks',
  'Industrial EPC',
  'Rooftop Solar',
  'Government Projects',
  'O&M Services',
];

const SOCIALS = [
  { icon: <FaFacebookF />,  href: '#', label: 'Facebook' },
  { icon: <FaTwitter />,    href: '#', label: 'Twitter' },
  { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
  { icon: <FaInstagram />,  href: '#', label: 'Instagram' },
  { icon: <FaYoutube />,    href: '#', label: 'YouTube' },
];

const Footer = () => {


  return (
    <footer className="bg-[#0f2044] text-white relative overflow-hidden">
      {/* Saffron top accent stripe */}
      <div className="w-full h-[3px] bg-gradient-to-r from-[#f97316] via-[#fbbf24] to-[#f97316]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b border-white/10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img
                src={logoImg}
                alt="Jyoti Solar Logo"
                className="h-16 w-auto object-contain drop-shadow-lg"
              />
            </Link>
            <p className="text-blue-100/60 text-sm leading-relaxed mb-5">
              India's trusted solar infrastructure partner — delivering clean, reliable, and scalable renewable energy solutions since 2010. Partner of national solar mission.
            </p>
            <div className="flex gap-2">
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-md bg-white/8 border border-white/10 flex items-center justify-center text-blue-100/60 hover:text-white hover:bg-[#f97316] hover:border-[#f97316] transition-all text-xs"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-xs tracking-widest uppercase mb-5 pb-2 border-b border-[#f97316]/40">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    className="text-blue-100/60 hover:text-[#f97316] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]/50 group-hover:bg-[#f97316] transition-colors shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-xs tracking-widest uppercase mb-5 pb-2 border-b border-[#f97316]/40">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s} className="text-blue-100/60 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300/30 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

        </div>


        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-blue-100/40">
          <p>© {new Date().getFullYear()} Jyoti Solar Pvt. Ltd. All rights reserved. | CIN: U40100OR2010PTC001234</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#f97316] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#f97316] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#f97316] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
