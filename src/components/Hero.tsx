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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 aspect-square overflow-hidden rounded-full border-[12px] border-neutral-50 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200" 
                alt="Neural Network Visualization" 
                className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Globe size={80} className="text-brand mx-auto mb-4 animate-pulse" />
                  <div className="font-display text-2xl text-white font-bold tracking-tighter uppercase">Neural Mesh</div>
                  <div className="text-brand text-[10px] font-bold uppercase tracking-[0.3em]">Active Protocol</div>
                </div>
              </div>
            </div>
            
            {/* Floating Data Points */}
            <motion.div 
              animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -right-4 z-20 bg-white/90 backdrop-blur-sm p-3 shadow-lg border border-neutral-100 rounded-full px-5"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand rounded-full"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Synapse: 0.4ms</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -left-4 z-20 bg-white/90 backdrop-blur-sm p-3 shadow-lg border border-neutral-100 rounded-full px-5"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Nodes: 1.2M</span>
              </div>
            </motion.div>

            {/* Decorative Blobs */}
            <div className="absolute inset-0 bg-brand/5 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
