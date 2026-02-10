import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from "../assets/logo.png";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between h-20 items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            
            <img
              src={logo}
              alt="Aimarque Logo"
              className="w-11 h-11 object-contain"
            />

            <span className="font-bold text-xl tracking-tighter text-white uppercase">
              AIMARQUE
            </span>
          </Link>


          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            
            <Link to="/" className="text-slate-300 hover:text-white transition font-medium">
              Home
            </Link>

            <Link to="/about" className="text-slate-300 hover:text-white transition font-medium">
              About
            </Link>
            

            {/* Product Dropdown */}
            <div
              className="relative group h-20 flex items-center"
              onMouseEnter={() => setIsProductOpen(true)}
              onMouseLeave={() => setIsProductOpen(false)}
            >

              <div className="flex items-center gap-1 cursor-pointer">
                
                <Link
                  to="/products"
                  className="text-slate-300 group-hover:text-white transition font-medium"
                >
                  Product
                </Link>

                <ChevronDown
                  size={16}
                  className={`text-slate-300 group-hover:text-white transition-transform ${
                    isProductOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {/* Dropdown */}
              {isProductOpen && (
                <div className="absolute top-16 left-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 animate-in fade-in slide-in-from-top-2">

                  <Link
                    to="/adcore-engine"
                    className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition"
                  >
                    AdCore Engine
                  </Link>

                  <Link
                    to="/intelligence-stack"
                    className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition"
                  >
                    Intelligence Stack
                  </Link>

                </div>
              )}
            </div>


            <Link
              to="/connect"
              className="bg-white text-slate-950 px-6 py-2.5 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all shadow-lg shadow-white/5"
            >
              Connect Us
            </Link>

          </div>


          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 p-4 space-y-4 shadow-xl">
          
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-slate-300 py-2">
            Home
          </Link>

          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-slate-300 py-2">
            About
          </Link>

          <Link to="/products" onClick={() => setIsOpen(false)} className="block text-slate-300 py-2 font-semibold">
            All Products
          </Link>

          <div className="pl-4 border-l border-slate-700 space-y-2">
            <Link to="/adcore-engine" onClick={() => setIsOpen(false)} className="block text-slate-400 text-sm">
              AdCore Engine
            </Link>

            <Link to="/intelligence-stack" onClick={() => setIsOpen(false)} className="block text-slate-400 text-sm">
              Intelligence Stack
            </Link>
          </div>

          <Link
            to="/connect"
            onClick={() => setIsOpen(false)}
            className="block bg-white text-slate-950 px-6 py-3 rounded-xl font-bold text-center mt-4"
          >
            Connect Us
          </Link>

        </div>
      )}

    </nav>
  );
};

export default Header;
