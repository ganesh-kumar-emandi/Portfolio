import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-4 text-xs text-slate-500">
      &copy; {currentYear} Ganesh Kumar Emandi. Built with React & Vite.
    </footer>
  );
}
