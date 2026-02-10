import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ScanEye, Target, Zap, BarChart2, CheckCircle, ArrowRight } from 'lucide-react';

const AdCoreEngine = () => {
  const navigate = useNavigate();

  const modules = [
    {
      title: "AdVision Analyzer",
      desc: "Evaluates creative assets, predicts performance, suggests enhancements, and identifies potential audience resonance.",
      icon: <ScanEye size={28} className="text-blue-400" />,
      gradient: "from-blue-500/20 to-blue-600/5"
    },
    {
      title: "TargetSphere AI",
      desc: "Analyzes user interests, purchase intent, demographics, and behavioral patterns to suggest the ideal audience clusters.",
      icon: <Target size={28} className="text-purple-400" />,
      gradient: "from-purple-500/20 to-purple-600/5"
    },
    {
      title: "FlowPilot Optimizer",
      desc: "Monitors campaigns continuously and automatically adjusts bidding, budgets, and placements for improved outcomes.",
      icon: <Zap size={28} className="text-amber-400" />,
      gradient: "from-amber-500/20 to-amber-600/5"
    },
    {
      title: "ReachMatrix Insights",
      desc: "Provides deep analytics, comparative performance reports, and real-time tracking for informed decision-making.",
      icon: <BarChart2 size={28} className="text-emerald-400" />,
      gradient: "from-emerald-500/20 to-emerald-600/5"
    }
  ];

  const benefits = [
    "Multi-platform compatibility",
    "Automated learning loops",
    "Data ethics and privacy compliance",
    "Intuitive dashboards for all skill levels",
    "Scalable architecture for future expansion"
  ];

  return (
    <section className="bg-[#0B0F19] min-h-screen pt-28 pb-20 px-4 relative overflow-hidden font-sans">
      
      {/* Background Gradients (To match screenshot vibe) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6"
        >
          ● AdCore Engine Ecosystem
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          A Unified System for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Smarter Advertising Decisions
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          The AdCore Engine is our integrated AI suite designed to assist businesses through every stage of campaign creation and optimization.
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/connect')}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-blue-900/50 flex items-center gap-2 mx-auto hover:shadow-indigo-500/40 transition-all"
        >
          Get Started Now <ArrowRight size={20} />
        </motion.button>
      </div>

      {/* 2. ADCORE MODULES (Grid Layout) */}
      <div className="max-w-6xl mx-auto mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">AdCore Modules</h2>
          <p className="text-slate-500">Powering your campaigns with specialized AI agents.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#111827] border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 transition-all overflow-hidden"
            >
              {/* Hover Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 border border-slate-800 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. WHY CHOOSE SECTION (Dashboard Style) */}
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0f1523] border border-slate-800 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-purple-900/10 blur-3xl pointer-events-none" />

          {/* Left: Content */}
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Why Businesses Choose <br/> <span className="text-indigo-400">AdCore</span>
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle size={14} className="text-indigo-400" />
                  </div>
                  <span className="text-slate-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => navigate('/connect')}
              className="mt-10 text-indigo-400 font-semibold hover:text-indigo-300 flex items-center gap-2 transition-colors"
            >
              Connect with us <ArrowRight size={18} />
            </button>
          </div>

          {/* Right: Abstract UI Visualization (CSS Drawing) */}
          <div className="lg:w-1/2 w-full relative z-10">
            <div className="bg-[#1a2236] border border-slate-700 rounded-xl p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <div className="h-3 w-24 bg-slate-600 rounded-full animate-pulse"></div>
                <div className="h-6 w-6 bg-green-500/20 rounded-full text-green-400 text-xs flex items-center justify-center">AI</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end h-32 gap-4">
                  {[40, 70, 45, 90, 65, 85].map((h, i) => (
                    <div key={i} className="w-full bg-indigo-500/20 rounded-t-sm relative group">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="absolute bottom-0 w-full bg-indigo-500 rounded-t-sm group-hover:bg-indigo-400 transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    transition={{ duration: 1.5 }}
                    className="h-full bg-blue-500" 
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-500 font-mono mt-2">
                  <span>Performance</span>
                  <span className="text-green-400">+124% Growth</span>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>

    </section>
  );
};

export default AdCoreEngine;