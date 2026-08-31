import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { initAuth, googleSignIn, getAccessToken } from '../lib/auth';
import { sendEmail } from '../lib/gmail';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [needsAuth, setNeedsAuth] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    const unsubscribe = initAuth(
      () => setNeedsAuth(false),
      () => setNeedsAuth(true)
    );
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setStatusMsg({ text: 'Please fill out all fields.', type: 'error' });
      return;
    }

    if (needsAuth) {
      const confirmAuth = window.confirm('You need to sign in with Google to send a message. This allows me to reply to your email address.');
      if (!confirmAuth) return;
      try {
        const authResult = await googleSignIn();
        if (!authResult) return;
        setNeedsAuth(false);
        // Automatically proceed to send after auth
        await proceedWithSend(authResult.accessToken);
      } catch (err) {
        setStatusMsg({ text: 'Authentication failed. Could not send message.', type: 'error' });
      }
      return;
    }

    const token = await getAccessToken();
    if (token) {
      await proceedWithSend(token);
    }
  };

  const proceedWithSend = async (token: string) => {
    setIsSending(true);
    setStatusMsg(null);
    try {
      const confirmSend = window.confirm(`Send message to Ganesh Kumar using your Google account?`);
      if (!confirmSend) {
        setIsSending(false);
        return;
      }
      
      await sendEmail(
        token,
        'ganeshkumaremandi@gmail.com', // To: Portfolio owner
        `Portfolio Contact: ${subject}`,
        `From: ${name} <${email}>\n\n${message}`,
        email, // Use the user-provided email in the From line (text only, real from is auth user)
        name
      );
      setStatusMsg({ text: 'Message sent successfully!', type: 'success' });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err: any) {
      setStatusMsg({ text: err.message || 'Failed to send message.', type: 'error' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8 shrink-0">
      <h3 className="text-xs uppercase tracking-[0.2em] text-sky-500 mb-6 font-bold">Get In Touch</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <p className="text-sm text-slate-400 mb-8 leading-relaxed">
            I'm currently looking for internship and full-time opportunities. My inbox is always open.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-center text-sky-500">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Email</div>
              <a href="mailto:ganeshkumaremandi@gmail.com" className="text-sm font-medium text-slate-50 hover:text-sky-500 transition-colors">
                ganeshkumaremandi@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-center text-sky-500">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Phone</div>
              <a href="tel:+919542006683" className="text-sm font-medium text-slate-50 hover:text-sky-500 transition-colors">
                +91 9542006683
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-center text-sky-500">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Location</div>
              <div className="text-sm font-medium text-slate-50">
                Hyderabad, Telangana
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            {statusMsg && (
              <div className={`p-3 rounded-md text-sm font-medium ${
                statusMsg.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}>
                {statusMsg.text}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-2.5 text-sm text-slate-50 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-2.5 text-sm text-slate-50 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600"
                />
              </div>
            </div>
            
            <div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-2.5 text-sm text-slate-50 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600"
              />
            </div>
            
            <div>
              <textarea
                rows={4}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-2.5 text-sm text-slate-50 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all resize-none placeholder:text-slate-600"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSending}
              className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-md text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 focus:outline-none transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>Sending... <Loader2 className="w-4 h-4 ml-2 animate-spin" /></>
              ) : (
                <>
                  {needsAuth ? 'Sign in to Send Message' : 'Send Message'}
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
