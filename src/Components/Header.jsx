import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo + Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-white font-bold text-xl uppercase">
                Aimarque
              </span>
            </Link>

            <p className="text-sm leading-relaxed">
              KRIMITAS SOLUTIONS PRIVATE LIMITED <br />
              Ward No-7, Anandpuri, Bibiganj, <br />
              M.I.T., Muzaffarpur, Mushahari, <br />
              Bihar, India - 842003
            </p>

            <p className="mt-3 text-sm">
              Email: support@krimitassolutions.in
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/connect" className="hover:text-white transition">
                  Connect Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/adcore-engine" className="hover:text-white transition">
                  AdCore Engine
                </Link>
              </li>

              <li>
                <Link to="/intelligence-stack" className="hover:text-white transition">
                  Intelligence Stack
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800 py-6 text-center text-sm">
        © {currentYear} Aimarque. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
