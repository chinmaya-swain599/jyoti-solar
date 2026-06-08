import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex items-center justify-center relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#00d9ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#7b61ff]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,217,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          {/* Big 404 */}
          <h1
            className="text-[160px] sm:text-[200px] font-bold leading-none select-none"
            style={{
              background: 'linear-gradient(135deg, #00d9ff, #7b61ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: 'none',
              filter: 'drop-shadow(0 0 40px rgba(0,217,255,0.3))',
            }}
          >
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Signal Lost</h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto mb-3">
            This section of the grid is offline. The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-[#00d9ff] font-semibold text-sm mb-10 tracking-wider">
            🌞 Reconnecting to solar network...
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d9ff] to-[#7b61ff] text-white font-bold rounded-full hover:opacity-90 transition-all shadow-[0_0_25px_rgba(0,217,255,0.3)]"
          >
            <FiArrowLeft /> Return to Home
          </Link>
        </motion.div>

        {/* Floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#00d9ff]"
            style={{
              width: Math.random() * 6 + 3,
              height: Math.random() * 6 + 3,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              opacity: 0.4,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFound;
