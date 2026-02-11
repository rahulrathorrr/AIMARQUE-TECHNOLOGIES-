import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Send, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';

const Connect = () => {
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault(); // Page reload rokne ke liye
    setFormStatus('sending');

    // Fake API call simulation (2 seconds)
    setTimeout(() => {
      setFormStatus('success');
    }, 2000);
  };

  const resetForm = () => {
    setFormStatus('idle');
  };

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

              {/* Bottom Social/Extra */}
              <div className="mt-12 pt-8 border-t border-slate-800">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <MessageSquare size={16} />
                  <span>We reply within 24 hours</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Dynamic Form with Animation */}
            <div className="lg:w-3/5 p-10 md:p-14 bg-white relative">
              <AnimatePresence mode='wait'>
                
                {formStatus === 'success' ? (
                  // SUCCESS ANIMATION VIEW
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="h-full flex flex-col items-center justify-center text-center py-10"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 className="text-green-600 w-12 h-12" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500 mb-8 max-w-sm">
                      Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={resetForm}
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>

                ) : (
                  // FORM VIEW
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h3>
                    
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe" 
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@example.com" 
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                        <textarea 
                          required
                          rows="4" 
                          placeholder="Tell us about your project..." 
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 resize-none"
                        ></textarea>
                      </div>

                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={formStatus === 'sending'}
                        className={`w-full font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all ${
                          formStatus === 'sending' 
                            ? 'bg-blue-400 cursor-not-allowed text-white' 
                            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30'
                        }`}
                      >
                        {formStatus === 'sending' ? (
                          <>
                            <Loader2 className="animate-spin" size={20} /> Sending...
                          </>
                        ) : (
                          <>
                            Send Message <Send size={18} />
                          </>
                        )}
                      </motion.button>
                    </form>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Connect;