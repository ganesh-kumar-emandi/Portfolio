import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-10 relative overflow-hidden shrink-0">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.15),transparent)] rounded-tr-xl pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-50 tracking-tight leading-tight mb-4">
            Hi, I am <span className="text-sky-500">Ganesh Kumar</span>
          </h1>
          
          <p className="text-lg md:text-xl font-medium text-slate-400 mb-6">
            Software Developer | Java | React | DSA
          </p>
          
          <p className="text-sm md:text-base text-slate-300 max-w-lg mb-8 leading-relaxed">
            I build scalable and user-friendly applications while continuously improving my problem-solving and software development skills. Eager to deliver impactful solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 border border-sky-500 text-sky-500 rounded-md font-semibold text-sm hover:bg-sky-500/10 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-slate-800 text-white border border-slate-700 rounded-md font-semibold text-sm hover:bg-slate-700 transition-colors"
            >
              Contact Me
            </a>
          </div>
          
          <div className="mt-8 flex gap-4">
            <a href="https://github.com/ganesh-kumar-emandi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/emandi-ganesh-kumar-383469301" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#0A66C2] transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
        
        {/* Geometric Abstract Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block w-72 h-72 relative bg-slate-950 border border-slate-800 rounded-xl p-4 overflow-hidden shadow-inner"
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative z-10 bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 w-3/4 animate-[float_6s_ease-in-out_infinite]">
            <div className="flex gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            </div>
            <div className="space-y-2">
              <div className="h-1.5 w-full bg-slate-700 rounded"></div>
              <div className="h-1.5 w-5/6 bg-sky-500/50 rounded"></div>
              <div className="h-1.5 w-4/6 bg-slate-700 rounded"></div>
            </div>
          </div>
          
          <div className="relative z-10 bg-slate-900 border border-slate-700 rounded-lg p-4 w-3/4 ml-auto animate-[float_8s_ease-in-out_infinite_reverse]">
            <div className="space-y-2">
              <div className="h-1.5 w-4/6 bg-indigo-500/50 rounded"></div>
              <div className="h-1.5 w-full bg-slate-700 rounded"></div>
              <div className="h-1.5 w-5/6 bg-slate-700 rounded"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
