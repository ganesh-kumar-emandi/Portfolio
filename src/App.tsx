/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-50 h-screen flex flex-col md:flex-row overflow-hidden font-sans selection:bg-sky-500/30">
      <Navbar />
      <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
        <Hero />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <Experience />
          <Education />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <Skills />
          <Projects />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <About />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}
