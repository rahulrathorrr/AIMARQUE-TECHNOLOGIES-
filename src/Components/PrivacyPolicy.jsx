import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#0B0F19] min-h-screen pt-24 pb-16 px-4 font-sans text-slate-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 border-b border-slate-800 pb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-blue-500" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
          </div>
          <p className="text-lg text-slate-400">
            AIMARQUE TECHNOLOGIES PRIVATE LIMITED (“Company,” “we,” “us,” or “our”) is committed to protecting your privacy. This policy explains how we collect, use, store, and safeguard information when you use our website and services.
          </p>
        </motion.div>

        {/* Content Blocks */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="bg-blue-900/30 text-blue-400 w-8 h-8 rounded-full flex items-center justify-center text-sm border border-blue-500/20">1</span>
              Information We Collect
            </h2>
            <p className="mb-4">We may collect the following:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-blue-500">
              <li>Basic contact information submitted by users</li>
              <li>Usage data generated from interactions with our platform</li>
              <li>Technical information such as browser type, IP address, device details</li>
              <li>Communication records submitted through forms or emails</li>
            </ul>
            <p className="text-sm italic text-slate-500 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
              Note: We do not collect financial or sensitive personal information unless voluntarily provided.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="bg-blue-900/30 text-blue-400 w-8 h-8 rounded-full flex items-center justify-center text-sm border border-blue-500/20">2</span>
              How We Use Information
            </h2>
            <p className="mb-4">We use collected data to:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Deliver and improve our digital advertising solutions", "Provide customer support", "Analyze platform usage", "Personalize user experience", "Maintain security and prevent misuse"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="bg-blue-900/30 text-blue-400 w-8 h-8 rounded-full flex items-center justify-center text-sm border border-blue-500/20">3</span>
              Sharing of Information
            </h2>
            <p className="mb-4">We do not sell or rent personal information.</p>
            <p className="mb-2">Data may be shared with:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
              <li>Service providers assisting in operations</li>
              <li>Regulatory or legal authorities (only when required by law)</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="bg-blue-900/30 text-blue-400 w-8 h-8 rounded-full flex items-center justify-center text-sm border border-blue-500/20">4</span>
              Cookies & Tracking
            </h2>
            <p>We use cookies solely to improve site functionality and optimize experience.</p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="bg-blue-900/30 text-blue-400 w-8 h-8 rounded-full flex items-center justify-center text-sm border border-blue-500/20">5</span>
              Data Security
            </h2>
            <div className="flex items-start gap-4 bg-blue-900/10 p-6 rounded-xl border border-blue-500/20">
              <Lock className="text-blue-400 shrink-0" size={24} />
              <div>
                <p className="mb-2 text-white font-semibold">All collected information is stored securely.</p>
                <p>We follow industry practices for data protection and encrypted communication.</p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="bg-blue-900/30 text-blue-400 w-8 h-8 rounded-full flex items-center justify-center text-sm border border-blue-500/20">6</span>
              User Rights
            </h2>
            <p className="mb-4">Users may request:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
              <li>Access to their data</li>
              <li>Correction or deletion</li>
              <li>Opt-out from communications</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="border-t border-slate-800 pt-8 mt-12">
            <h2 className="text-xl font-bold text-white mb-2">Updates to Privacy Policy</h2>
            <p className="text-sm text-slate-500">
              This policy may be updated periodically. The latest version will always be available on our website.
            </p>
          </section>

        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;