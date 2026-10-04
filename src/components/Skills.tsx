import { motion } from 'motion/react';
import { 
  Code2, 
  Layout, 
  Database, 
  Server, 
  Terminal,
  Cpu
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Java", "JavaScript", "Python", "C", "C++"]
    },
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "React.js", "Vite"]
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "RESTful APIs", "Node.js"]
    },
    {
      title: "Database",
      skills: ["MySQL", "SQL"]
    },
    {
      title: "Tools & AI",
      skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "LangChain", "OpenAI API"]
    },
    {
      title: "Core Concepts",
      skills: ["DSA", "OOP", "DBMS", "Operating Systems"]
    }
  ];

  return (
    <section id="skills" className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8 shrink-0">
      <h3 className="text-xs uppercase tracking-[0.2em] text-sky-500 mb-6 font-bold">Technical Arsenal</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-3 font-semibold">
              {category.title}
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="text-[11px] bg-slate-950 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
