import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered NoteBot",
      description: "Intelligent chatbot application for document retrieval using RAG allowing conversational queries.",
      tech: ["Python", "Streamlit", "LangChain", "OpenAI"],
      github: "https://github.com/ganesh-kumar-emandi",
      live: "#"
    },
    {
      title: "Student Management",
      description: "Java-based application for managing student records, courses, and grades with a robust database.",
      tech: ["Java", "Spring Boot", "MySQL", "REST"],
      github: "https://github.com/ganesh-kumar-emandi",
      live: "#"
    },
    {
      title: "Developer Portfolio",
      description: "Modern, responsive personal portfolio website built to showcase projects, skills, and experience.",
      tech: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/ganesh-kumar-emandi",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8 shrink-0">
      <h3 className="text-xs uppercase tracking-[0.2em] text-sky-500 mb-6 font-bold">Featured Projects</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-slate-950 border border-slate-800 p-5 rounded-lg flex flex-col h-full hover:border-slate-700 transition-colors group"
          >
            <div className="font-bold text-slate-50 text-sm mb-2 group-hover:text-sky-500 transition-colors">
              {project.title}
            </div>
            
            <p className="text-xs text-slate-400 mb-4 flex-grow leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span key={tech} className="text-[10px] text-sky-500 font-medium">
                  #{tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-4 mt-auto border-t border-slate-800 pt-3">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[11px] font-medium text-slate-400 hover:text-slate-50 transition-colors"
              >
                <Github className="w-3.5 h-3.5 mr-1.5" />
                Code
              </a>
              <a 
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[11px] font-medium text-slate-400 hover:text-slate-50 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <a href="https://github.com/ganesh-kumar-emandi" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-slate-400 hover:text-sky-500 transition-colors">
          View all on GitHub &rarr;
        </a>
      </div>
    </section>
  );
}
