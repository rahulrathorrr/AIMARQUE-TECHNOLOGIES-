import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, MessageSquare } from 'lucide-react';

const Connect = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-20 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 py-20 px-4 mb-[-80px] z-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white pb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight"
          >
            Engage With Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg max-w-2xl mx-auto font-light"
          >
            Partner with us for Intelligent Advertising Solutions. We work with businesses, agencies, and technology partners who want to leverage AI in advertising.
          </motion.p>
        </div>
      </section>

      {/* 2. CONTACT CARD SECTION */}
      <section className="px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl shadow-slate-200 overflow-hidden flex flex-col lg:flex-row min-h-[600px]"
          >
            
            {/* LEFT SIDE: Contact Info (Dark Blue) */}
            <div className="lg:w-2/5 bg-[#0B1120] p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-tr-full pointer-events-none"></div>

              <div>
                <h3 className="text-3xl font-bold mb-2">Let's Chat</h3>
                <p className="text-slate-400 mb-10 text-sm leading-relaxed">
                  Ready to start your next project with <span className="text-blue-400 font-semibold">AIMARQUE</span>? Fill out the form or reach out to us directly.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email Us</h4>
                      <p className="text-slate-400 text-sm">contact@aimarquetech.in</p>
                      <p className="text-slate-400 text-sm">support@aimarquetech.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Our Office</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        AIMARQUE TECHNOLOGIES PRIVATE LIMITED<br />
                        R.L.Pet, 20-3-5/1,<br />
                        Tenali, Guntur, Andhra Pradesh<br />
                        India – 522201
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Social/Extra (Optional) */}
              <div className="mt-12 pt-8 border-t border-slate-800">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <MessageSquare size={16} />
                  <span>We reply within 24 hours</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Contact Form (White) */}
            <div className="lg:w-3/5 p-10 md:p-14 bg-white">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us about your project..." 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 resize-none"
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all"
                >
                  Send Message <Send size={18} />
                </motion.button>
              </form>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Connect;