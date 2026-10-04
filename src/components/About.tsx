import { Code2, Server, Database, Brain } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const interests = [
    { name: 'Software Development', icon: <Code2 className="w-4 h-4" /> },
    { name: 'Java & Spring Boot', icon: <Server className="w-4 h-4" /> },
    { name: 'React.js', icon: <Code2 className="w-4 h-4" /> },
    { name: 'Data Structures & Algorithms', icon: <Brain className="w-4 h-4" /> },
    { name: 'Database Management', icon: <Database className="w-4 h-4" /> },
    { name: 'Problem Solving', icon: <Brain className="w-4 h-4" /> },
  ];

  return (
    <section id="about" className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8 shrink-0">
      <h3 className="text-xs uppercase tracking-[0.2em] text-sky-500 mb-6 font-bold">About Me</h3>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-sm md:text-base text-slate-300 leading-relaxed mb-8 space-y-4">
          <p>
            I am a Computer Science Engineering student graduating in 2027, with a strong foundation in Java, Data Structures & Algorithms, React.js, Spring Boot, and MySQL. 
          </p>
          <p>
            Passionate about designing scalable software solutions and building full-stack web applications. I am eager to contribute my technical skills, problem-solving abilities, and continuous learning mindset to a Software Engineer role while delivering impactful solutions.
          </p>
          <p>
            My focus is on writing clean, efficient code and building real-world applications that solve actual problems. I thrive in collaborative environments and enjoy tackling complex logical challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {interests.map((interest) => (
            <div key={interest.name} className="flex items-center gap-3 bg-slate-950 border border-slate-800 p-3 rounded-lg text-slate-300">
              <div className="text-sky-500">
                {interest.icon}
              </div>
              <span className="font-medium text-xs md:text-sm">{interest.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
