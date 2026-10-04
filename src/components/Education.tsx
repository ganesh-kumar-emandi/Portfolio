import { GraduationCap, Award, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export default function Education() {
  const certifications = [
    {
      title: "Java Development Internship",
      issuer: "Internz Learn",
      year: "2024"
    },
    {
      title: "AI-Powered NoteBot Project",
      issuer: "Python, LangChain & OpenAI API",
      year: "2024"
    }
  ];

  return (
    <section id="education" className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8 shrink-0">
      <h3 className="text-xs uppercase tracking-[0.2em] text-sky-500 mb-6 font-bold">Education</h3>
      
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="border-l-2 border-slate-700 pl-4 relative mb-8"
      >
        <div className="absolute w-2 h-2 rounded-full bg-slate-700 -left-[5px] top-1.5"></div>
        <div className="text-sm font-bold text-slate-50 mb-1">
          B.Tech Computer Science Engineering
        </div>
        <div className="text-[11px] text-slate-400">
          Malla Reddy Institute of Technology and Science &bull; Graduating 2027
        </div>
      </motion.div>

      <h3 className="text-xs uppercase tracking-[0.2em] text-sky-500 mb-6 font-bold">Certifications</h3>
      
      <div className="flex flex-col gap-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-slate-950 border border-slate-800 p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <div className="text-sm font-bold text-slate-50 mb-1">{cert.title}</div>
              <div className="text-[11px] text-slate-400">{cert.issuer}</div>
            </div>
            <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded">
              {cert.year}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
