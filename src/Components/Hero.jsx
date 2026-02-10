import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 pt-20 overflow-hidden">
      {/* Dark Gradient Background Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-slate-900/50 border border-slate-800 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-10"
        >
          <Activity size={16} className="animate-pulse" /> AI-Powered Advertising Precision
        </motion.div>

        {/* Main Content */}
        <div className="space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tight"
          >
            Transforming <br />
            Digital Advertising with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Intelligent Automation
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto text-xl text-slate-400 leading-relaxed font-light"
          >
            <span className="text-white font-semibold">AIMARQUE TECHNOLOGIES PRIVATE LIMITED</span> builds 
            next-generation AI systems that help brands create, launch, optimize, and scale 
            advertising campaigns with precision.
          </motion.p>
        </div>

        {/* Bottom Detail Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 p-8 rounded-3xl bg-slate-900/30 border border-slate-800 backdrop-blur-sm max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 text-blue-400 mb-4">
            <Sparkles size={20} />
            <h2 className="text-lg font-bold uppercase tracking-widest">Adaptive Advertising</h2>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed">
            Our AI models process millions of data points to generate insights, predictions, 
            and campaign strategies tailored to each business segment. Whether you're a startup 
            or an established company, our technology ensures ads reach the right customers 
            at the right moment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;