import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ShieldCheck, Eye } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      title: "Innovation with Purpose",
      desc: "We don’t build tools - we build transformational systems that empower businesses.",
      icon: <Lightbulb size={32} className="text-blue-600" />,
      color: "bg-blue-50"
    },
    {
      title: "Reliability Through Technology",
      desc: "Stable models, dependable infrastructure, and a user-first approach define our development practices.",
      icon: <ShieldCheck size={32} className="text-purple-600" />,
      color: "bg-purple-50"
    },
    {
      title: "Transparency & Trust",
      desc: "Our platform provides clear performance visibility, ensuring advertisers understand how decisions are made.",
      icon: <Eye size={32} className="text-indigo-600" />,
      color: "bg-indigo-50"
    }
  ];

  return (
    <section className="bg-slate-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Core Values</h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;