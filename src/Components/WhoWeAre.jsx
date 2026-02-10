import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <section className="bg-white py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Company Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2 block">Who We Are</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Shaping the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Advertising Intelligence
              </span>
            </h2>
            
            <div className="prose prose-lg text-slate-600">
              <p className="mb-4">
                <strong className="text-slate-900">AIMARQUE TECHNOLOGIES PRIVATE LIMITED</strong> is an AI-driven AdTech company based in Andhra Pradesh, India.
              </p>
              <p className="mb-4">
                We specialize in building software that enhances how brands understand markets, craft creatives, and optimize ad campaigns.
              </p>
              <p>
                Our team blends deep technology expertise with creativity, enabling us to design solutions that simplify complex advertising processes.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Address Card (Sticky look) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 rounded-3xl border border-blue-100 shadow-xl shadow-blue-900/5 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <MapPin size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Registered Address</h3>
            </div>
            
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p className="font-semibold text-slate-900">AIMARQUE TECHNOLOGIES PRIVATE LIMITED</p>
              <p>
                R.L.Pet, 20-3-5/1, Tenali,<br/>
                Guntur, Andhra Pradesh,<br/>
                India – 522201
              </p>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-2">
                <Globe size={16} className="text-blue-500" />
                <span className="text-blue-600 font-medium">aimarquetech.in</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;