import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Users, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} />
              <span>Building the Future</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8">
              Agentic AI <br />
              <span className="text-brand">For Everyone.</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-10 max-w-lg leading-relaxed">
              A global foundation dedicated to making AI innovation and education open to everyone through open-source agentic AI systems. Join 100K+ members building the future.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#join" className="btn-primary flex items-center gap-2 group">
                Join the Community
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="px-6 py-2 border border-neutral-200 font-display uppercase tracking-wider hover:bg-neutral-50 transition-colors">
                Learn More
              </a>
            </div>
            
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-neutral-100 pt-8">
              <div>
                <div className="text-3xl font-display font-bold">100K+</div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Members</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold">50+</div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold">12</div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Projects</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-neutral-900 aspect-square rounded-full p-12 flex items-center justify-center overflow-hidden border-[16px] border-neutral-50">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://picsum.photos/seed/agentics/800/800" 
                  alt="AI Visualization" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative z-20 text-center">
                <Globe size={120} className="text-brand mx-auto mb-6 animate-pulse" />
                <div className="font-display text-4xl text-white font-bold tracking-tighter uppercase">Global Network</div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
