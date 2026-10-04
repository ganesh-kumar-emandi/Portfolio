import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export default function Experience() {
  const experiences = [
    {
      title: "Java Intern",
      company: "Internz Learn",
      date: "September 2024 – October 2024",
      description: [
        "Developed Java applications using OOP principles.",
        "Collaborated on modules and resolved bugs through testing.",
        "Gained practical experience in the SDLC."
      ]
    },
    {
      title: "Projects Developer",
      company: "Self-Directed",
      date: "August 2024 – Present",
      description: [
        "Developed full-stack web applications using Java, Spring Boot, React.js, MySQL.",
        "Designed and integrated RESTful APIs.",
        "Built AI chatbots using Python, LangChain, FAISS."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8 shrink-0">
      <h3 className="text-xs uppercase tracking-[0.2em] text-sky-500 mb-6 font-bold">Experience</h3>
      
      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border-l-2 border-slate-700 pl-4 relative"
          >
            <div className="absolute w-2 h-2 rounded-full bg-slate-700 -left-[5px] top-1.5"></div>
            <div className="text-sm font-bold text-slate-50 mb-1">{exp.title}</div>
            <div className="text-[11px] text-slate-400 mb-3">{exp.company} &bull; {exp.date}</div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-sky-500 mr-2 mt-0.5">&bull;</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
