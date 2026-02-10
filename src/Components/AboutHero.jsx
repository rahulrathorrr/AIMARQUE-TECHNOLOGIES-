import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative bg-[#0B1120] py-24 px-4 overflow-hidden">
      {/* Background decoration to match image style */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/50"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4 uppercase">
            About Us
          </h1>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
            Innovating Advertising Technology from the Heart of India
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;