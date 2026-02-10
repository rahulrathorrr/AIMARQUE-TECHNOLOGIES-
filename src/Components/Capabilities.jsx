import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Layers } from 'lucide-react';

const Capabilities = () => {
  const list = [
    "Smart creative suggestions",
    "Audience intent modeling",
    "Multi-channel campaign analysis",
    "Automated optimization loops",
    "Real-time ad diagnostics",
    "Data-driven performance recommendations"
  ];

  return (
    <section className="bg-slate-900 py-24 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left Side: Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <div className="flex items-center gap-2 text-blue-400 font-semibold mb-4 uppercase tracking-wider">
            <Layers size={20} /> Capabilities
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Industry-Ready <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Capabilities
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Powerful tools designed to scale with your business needs.
          </p>
        </motion.div>

        {/* Right Side: List */}
        <motion.div 
          className="md:w-1/2 w-full grid gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {list.map((item, index) => (
            <motion.div 
              key={index}
              variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } }}
              className="flex items-center gap-4 p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-blue-500/30 transition-colors"
            >
              <CheckCircle2 className="text-blue-500 shrink-0" size={24} />
              <span className="text-slate-200 font-medium text-lg">{item}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Capabilities;