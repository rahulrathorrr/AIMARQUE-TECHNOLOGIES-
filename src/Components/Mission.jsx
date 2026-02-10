import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const Mission = () => {
  return (
    <section className="bg-slate-50 py-24 px-4 border-t border-slate-200">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <Target className="text-blue-600" size={32} />
          </div>
          
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6">Our Mission</h2>
          
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            "To make advertising intelligent, accessible, and measurable for all businesses - regardless of size, experience, or resources."
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;