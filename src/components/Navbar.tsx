import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950 shrink-0">
        <div className="text-2xl font-extrabold tracking-tighter text-sky-500">GK.</div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-400">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-slate-950 border-r border-slate-800 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 flex flex-col justify-between p-8 shrink-0 overflow-y-auto`}
      >
        <div>
          <div className="hidden md:block text-3xl font-extrabold tracking-tighter text-sky-500 mb-12">
            GK.
          </div>
          
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-400 hover:text-slate-50 flex items-center gap-3 group"
              >
                <span className="w-2 h-2 rounded-full bg-slate-800 group-hover:bg-sky-500 transition-colors"></span>
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 mt-12">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full bg-sky-500 text-white rounded-md py-3 text-sm font-semibold hover:bg-sky-600 transition-colors text-center inline-block"
          >
            Download Resume
          </a>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
