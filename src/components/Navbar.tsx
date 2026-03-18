import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Education', href: '/education' },
  { name: 'Events', href: '/events' },
  { name: 'Jobs', href: '/jobs' },
  { name: 'Community', href: '/community' },
  { name: 'Merchandise', href: '/merchandise' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Logo className="w-12 h-6 text-brand" />
              <span className="font-display text-2xl font-bold tracking-tighter uppercase hidden sm:block">Agentics</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.href} 
                className="nav-link py-8"
              >
                {item.name}
              </Link>
            ))}
            
            <Link to="/membership" className="btn-primary">
              Join
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-600 hover:text-brand p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 overflow-hidden">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-4 text-lg font-display uppercase tracking-wide border-b border-neutral-100"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link to="/membership" className="btn-primary block text-center py-4" onClick={() => setIsOpen(false)}>
                Join
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}


