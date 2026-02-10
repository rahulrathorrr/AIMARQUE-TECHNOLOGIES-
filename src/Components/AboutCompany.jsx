import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const AboutCompany = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-8 border-t border-slate-100" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Who We Are</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">About the Company</h2>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold text-slate-800 mb-2">AIMARQUE TECHNOLOGIES PRIVATE LIMITED</h4>
              <p className="text-slate-500 leading-relaxed text-lg">
                We are committed to building reliable, scalable, and intelligent advertising technology solutions for the digital economy. Headquartered in Andhra Pradesh, India, we bridge the gap between traditional marketing and AI-driven automation.
              </p>
            </div>
            
            <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start gap-6"
          >
            <div className="p-4 bg-white rounded-2xl shadow-sm text-blue-600 border border-slate-100 shrink-0">
              <MapPin size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Registered Address</h3>
              <p className="text-slate-600 leading-relaxed">
                R.L.Pet, 20-3-5/1, Tenali,<br/>
                Guntur, Andhra Pradesh,<br/>
                India – 522201
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-slate-500 text-sm">Website: aimarquetech.in</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;