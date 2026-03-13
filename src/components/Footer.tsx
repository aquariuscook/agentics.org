import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: About / Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand flex items-center justify-center text-white font-display text-xl font-bold">A</div>
              <span className="font-display text-xl font-bold tracking-tighter uppercase">Agentics</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Agentics Foundation is dedicated to making AI innovation and education open to everyone through open-source agentic AI systems.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-brand transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-brand transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-brand transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-brand transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-display text-sm font-bold uppercase tracking-widest text-neutral-500">Explore</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
                <li><Link to="/education" className="hover:text-white transition-colors">Education</Link></li>
                <li><Link to="/jobs" className="hover:text-white transition-colors">Jobs</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-display text-sm font-bold uppercase tracking-widest text-neutral-500">Connect</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><Link to="/community" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link to="/merchandise" className="hover:text-white transition-colors">Merchandise</Link></li>
                <li><Link to="/membership" className="hover:text-white transition-colors">Join</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Utility */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-neutral-500">Legal</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
            </ul>
            <div className="pt-8 text-xs text-neutral-600">
              © 2026 Agentics Foundation. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

