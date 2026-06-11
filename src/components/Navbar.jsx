import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdOutlineVerified } from 'react-icons/md';
import logoImg from '../assets/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Projects', path: '/projects' },
  // { name: 'Tenders',   path: '/tenders' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 overflow-visible ${scrolled
          ? 'bg-[#0f2044] shadow-xl py-3 border-b border-white/10'
          : 'bg-[#0f2044] py-4'
        }`}
    >
      {/* Top accent stripe — India saffron */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#f97316] via-[#fbbf24] to-[#f97316]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        {/* Logo — overflows navbar intentionally so tagline is visible */}
        <Link to="/" className="relative h-12 w-52 block group z-[110]">
          <img
            src="/logo.png"
            alt="Jyoti Solar — Energizing Tomorrow"
            className="absolute top-1/2 -translate-y-[45%] left-0 h-[5.5rem] w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] rounded-full"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors rounded-md ${active
                    ? 'text-white bg-white/10'
                    : 'text-blue-100/80 hover:text-white hover:bg-white/8'
                  }`}
              >
                {link.name}
                {active && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#f97316] rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:block px-5 py-2 text-sm font-bold bg-[#f97316] text-white rounded-lg hover:bg-[#ea6a0a] transition-colors shadow-lg shadow-orange-900/30"
          >
            Get Quote
          </Link>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#0d1c38] border-t border-white/10"
          >
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-6 py-3 text-sm font-semibold transition-colors border-l-4 ${location.pathname === link.path
                      ? 'text-white border-[#f97316] bg-white/5'
                      : 'text-blue-100/80 border-transparent hover:text-white hover:border-[#f97316]/50'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-6 pt-4 pb-2">
                <Link
                  to="/contact"
                  className="block text-center py-3 text-sm font-bold bg-[#f97316] text-white rounded-lg hover:bg-[#ea6a0a] transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
