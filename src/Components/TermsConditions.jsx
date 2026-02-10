import React from 'react';
import { motion } from 'framer-motion';
import { Scale, AlertTriangle, Copyright, FileCheck } from 'lucide-react';

const TermsConditions = () => {
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
            <Scale className="text-blue-500" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Terms & Conditions</h1>
          </div>
          <p className="text-lg text-slate-400">
            These Terms & Conditions govern your use of AIMARQUE TECHNOLOGIES PRIVATE LIMITED’s website and platform.
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
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 flex items-center gap-3">
              <FileCheck className="text-green-500 shrink-0" />
              <p>By accessing our website, you agree to these Terms & Conditions.</p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Use of Services</h2>
            <p className="mb-4">Users must not:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-red-500">
              <li>Misuse the platform</li>
              <li>Attempt unauthorized access</li>
              <li>Interfere with service functionality</li>
            </ul>
            <p className="text-blue-400 font-medium">
              Our solutions are provided for legitimate business and advertising purposes only.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
            <div className="flex items-start gap-4">
              <Copyright className="text-slate-500 mt-1 shrink-0" size={20} />
              <div>
                <p className="mb-2">
                  All trademarks, content, product names, and platform features belong to <span className="text-white font-semibold">AIMARQUE TECHNOLOGIES PRIVATE LIMITED</span>.
                </p>
                <p className="text-red-400 text-sm">Unauthorized reproduction is prohibited.</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
            <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4 text-red-400">
                <AlertTriangle size={20} />
                <span className="font-bold">We are not responsible for:</span>
              </div>
              <ul className="list-disc pl-6 space-y-2 marker:text-red-500">
                <li>Losses due to external service failures</li>
                <li>Errors caused by third-party platforms</li>
                <li>Misuse or misinterpretation of generated insights</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Service Modifications</h2>
            <p>We may update or modify any part of the platform without prior notice.</p>
          </section>

          {/* Section 6 */}
          <section className="border-t border-slate-800 pt-8 mt-12">
            <h2 className="text-xl font-bold text-white mb-2">6. Governing Law</h2>
            <p className="text-slate-400">
              These terms are governed by the laws of <span className="text-white font-semibold">India</span>.
            </p>
          </section>

        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;