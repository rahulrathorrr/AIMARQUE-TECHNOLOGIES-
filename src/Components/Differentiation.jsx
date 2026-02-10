import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Workflow, Activity } from 'lucide-react';

const Differentiation = () => {
  const data = [
    {
      title: "Predictive Systems",
      desc: "Our AI anticipates shifts in user behavior, seasonal patterns, and ad fatigue - enabling brands to stay ahead.",
      icon: <BrainCircuit size={32} className="text-blue-600" />
    },
    {
      title: "End-to-End Automation",
      desc: "From creative assistance to budget balancing, our platform manages advertising cycles with minimal input.",
      icon: <Workflow size={32} className="text-purple-600" />
    },
    {
      title: "Performance Monitoring",
      desc: "Real-time intelligence helps advertisers measure impact, discover improvement areas, and broaden reach efficiently.",
      icon: <Activity size={32} className="text-green-600" />
    }
  ];

  return (
    <section className="bg-white py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Makes Us <span className="text-blue-600">Different</span>
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="mb-6 p-4 bg-white rounded-xl inline-block border border-slate-200 shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiation;