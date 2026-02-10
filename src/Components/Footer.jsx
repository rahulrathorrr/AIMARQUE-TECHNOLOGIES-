import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#050914] border-t border-slate-800 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              
              {/* Logo */}
              <img 
                src={logo} 
                alt="Aimarque Logo"
                className="w-11 h-11 object-contain"
              />

              <span className="font-bold text-xl tracking-tighter text-white uppercase">
                AIMARQUE
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed">
              Building reliable, scalable, and intelligent advertising technology solutions for the digital economy.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/connect" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Products</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/adcore-engine" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">AdCore Engine</Link>
              </li>
              <li>
                <Link to="/intelligence-stack" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Intelligence Stack</Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Analytics & Reporting</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Get In Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 shrink-0 mt-1" size={18} />
                <span className="text-slate-400 text-sm leading-relaxed">
                  R.L.Pet, 20-3-5/1,<br />
                  Tenali, Guntur, Andhra Pradesh,<br />
                  India – 522201
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 shrink-0" size={18} />
                <a href="mailto:contact@aimarquetech.in" className="text-slate-400 hover:text-white transition-colors text-sm">
                  contact@aimarquetech.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} AIMARQUE TECHNOLOGIES PRIVATE LIMITED. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-slate-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
