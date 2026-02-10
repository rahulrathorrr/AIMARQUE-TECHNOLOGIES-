import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BrainCircuit, TrendingUp, Sliders, BarChart4, ShieldCheck, Lock, Server, ArrowRight } from 'lucide-react';

const IntelligenceStack = () => {
  const navigate = useNavigate();

  const components = [
    {
      title: "1. Learning Models",
      desc: "Neural networks that recognize patterns in creative assets, targeting behavior, and campaign outcomes.",
      icon: <BrainCircuit size={28} className="text-cyan-400" />,
      gradient: "from-cyan-500/20 to-cyan-600/5"
    },
    {
      title: "2. Behavioral Prediction Engine",
      desc: "Forecasts user response trends and helps advertisers prepare campaigns proactively.",
      icon: <TrendingUp size={28} className="text-pink-400" />,
      gradient: "from-pink-500/20 to-pink-600/5"
    },
    {
      title: "3. Optimization Framework",
      desc: "A rule-based and ML-driven engine that adjusts ads based on live market performance.",
      icon: <Sliders size={28} className="text-amber-400" />,
      gradient: "from-amber-500/20 to-amber-600/5"
    },
    {
      title: "4. Analytics Infrastructure",
      desc: "Dashboards, visual reports, and automated alerts offer full visibility into metrics that matter.",
      icon: <BarChart4 size={28} className="text-violet-400" />,
      gradient: "from-violet-500/20 to-violet-600/5"
    }
  ];

  const securityFeatures = [
    "Encrypted data pipelines",
    "Strict privacy enforcement",
    "Industry-standard governance",
    "Continuous monitoring"
  ];

  return (
    <section className="bg-[#0B0F19] min-h-screen pt-28 pb-20 px-4 relative overflow-hidden font-sans">
      
      {/* Background Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6"
        >
          <Server size={14} /> Technology Page
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Engineering the Backbone of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Intelligent Advertising
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Our technology stack combines machine learning, predictive modeling, automation frameworks, and real-time analytics to deliver reliable, high-performance solutions.
        </motion.p>
      </div>

      {/* 2. CORE COMPONENTS (Grid Layout) */}
      <div className="max-w-6xl mx-auto mb-32 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Core Components</h2>
          <div className="h-1 w-20 bg-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {components.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#111827] border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/40 transition-all overflow-hidden"
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {item.icon}
                  </div>
                  <span className="text-slate-600 text-xs font-mono uppercase tracking-widest group-hover:text-slate-400 transition-colors">
                    Module 0{idx + 1}
                  </span>
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

      {/* 3. SECURITY & COMPLIANCE SECTION */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0f1523] border border-slate-800 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute left-0 bottom-0 w-1/2 h-full bg-cyan-900/5 blur-3xl pointer-events-none" />

          {/* Left: Content */}
          <div className="lg:w-1/2 relative z-10">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-4 uppercase tracking-wider text-sm">
              <ShieldCheck size={18} /> Security & Compliance
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Safeguarding the Trust <br /> of All Our Users
            </h2>
            
            <p className="text-slate-400 mb-8 leading-relaxed">
              We prioritize secure data handling with enterprise-grade infrastructure.
            </p>

            <div className="grid grid-cols-1 gap-4 mb-10">
              {securityFeatures.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">
                  <Lock size={16} className="text-cyan-500 shrink-0" />
                  <span className="text-slate-300 font-medium text-sm">{feat}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => navigate('/connect')}
              className="bg-white text-slate-950 px-8 py-3 rounded-lg font-bold hover:bg-cyan-50 transition-colors flex items-center gap-2"
            >
              Get Technical Details <ArrowRight size={18} />
            </button>
          </div>

          {/* Right: Abstract Security Visualization */}
          <div className="lg:w-1/2 w-full relative z-10">
            <div className="bg-[#0B0F19] border border-slate-800 rounded-xl p-6 shadow-2xl relative">
              
              {/* Header of Mock Interface */}
              <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-green-500 text-xs font-mono flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  SYSTEM SECURE
                </div>
              </div>

              {/* Security Metrics Mockup */}
              <div className="space-y-6">
                
                {/* Metric 1 */}
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-2 font-mono">
                    <span>ENCRYPTION STATUS</span>
                    <span className="text-white">AES-256</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-cyan-500" 
                    />
                  </div>
                </div>

                {/* Metric 2 */}
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-2 font-mono">
                    <span>THREAT MONITORING</span>
                    <span className="text-white">ACTIVE</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(10)].map((_, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                        className="h-8 w-full bg-cyan-500/20 rounded-sm border border-cyan-500/30"
                      />
                    ))}
                  </div>
                </div>

                {/* Status Box */}
                <div className="bg-cyan-900/10 border border-cyan-500/20 rounded-lg p-4 flex items-center gap-4">
                  <ShieldCheck size={24} className="text-cyan-400" />
                  <div>
                    <div className="text-white text-sm font-bold">Privacy Governance</div>
                    <div className="text-slate-500 text-xs">GDPR/CCPA Compliant protocols active.</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </motion.div>
      </div>

    </section>
  );
};

export default IntelligenceStack;