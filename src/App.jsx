import {useEffect,useRef,useState} from "react";
import {ArrowUp,ArrowUpRight,BrainCircuit,BriefcaseBusiness,Check,Code2,Copy,Database,ExternalLink,GraduationCap,Mail,Menu,Rocket,Sparkles,X} from "lucide-react";

const profile={name:"Ganesh Kumar Emandi",email:"ganeshkumaremandi@gmail.com",github:"https://github.com/ganesh-kumar-emandi",linkedin:"https://linkedin.com/in/emandi-ganesh-kumar-383469301"};

const skills=[
["Java",Code2,["Java","OOP","Data Structures & Algorithms"]],
["Frontend",Code2,["HTML5","CSS3","JavaScript","React.js"]],
["Backend",Code2,["Spring Boot","RESTful APIs"]],
["Database",Database,["MySQL","DBMS"]],
["AI",BrainCircuit,["Python","LangChain","Streamlit","FAISS","OpenAI API"]],
["Tools",Rocket,["Git","GitHub","Postman","VS Code","IntelliJ IDEA"]]
];

const projects=[
{title:"Full-Stack E-Commerce Website",type:"Full-Stack Application",desc:"A full-stack web application using React.js, Java, Spring Boot, RESTful APIs and MySQL.",tech:["React.js","Java","Spring Boot","MySQL"]},
{title:"AI-Powered NoteBot",type:"AI Project",desc:"An AI-powered chatbot for intelligent document retrieval using Python, LangChain, Streamlit, FAISS and OpenAI API.",tech:["Python","LangChain","Streamlit","FAISS","OpenAI API"]}
];

const codeLines=`const ganesh = {
  role: "Software Engineer",
  graduation: 2027,
  primary: ["Java", "React.js"],
  backend: "Spring Boot",
  database: "MySQL",
  interests: ["DSA", "AI"]
};`;

const navItems=["About","Skills","Experience","Projects","Contact"];

function GitHub({size=20}){
 return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.5-.4 7.2-1.7 7.2-7.8a6 6 0 0 0-1.6-4.2 5.6 5.6 0 0 0-.1-4.2s-1.3-.4-4.2 1.6a14.4 14.4 0 0 0-7.2 0C5.6-1.2 4.3-.8 4.3-.8a5.6 5.6 0 0 0-.1 4.2A6 6 0 0 0 2.6 7.2c0 6 3.7 7.4 7.2 7.8a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-4.5-2.2-6.3-2.5"/></svg>;
}

function Linkedin({size=20}){
 return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
}

function useReducedMotion(){
 const [reduced,setReduced]=useState(false);
 useEffect(()=>{
  const mq=window.matchMedia("(prefers-reduced-motion: reduce)");
  const sync=()=>setReduced(mq.matches);
  sync();
  mq.addEventListener("change",sync);
  return()=>mq.removeEventListener("change",sync);
 },[]);
 return reduced;
}

function SectionTitle({num,title,text}){
 return <div className="section-title reveal-child"><span>{num} /</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>;
}

function Reveal({children,className="",delay=0}){
 const ref=useRef(null);
 const [on,setOn]=useState(false);
 useEffect(()=>{
  const el=ref.current;
  if(!el) return;
  const obs=new IntersectionObserver(([entry])=>{
   if(entry.isIntersecting){setOn(true);obs.disconnect();}
  },{threshold:0.14,rootMargin:"0px 0px -8% 0px"});
  obs.observe(el);
  return()=>obs.disconnect();
 },[]);
 return <div ref={ref} className={`reveal ${on?"in":""} ${className}`} style={{"--d":`${delay}ms`}}>{children}</div>;
}

function TiltCard({as:Tag="article",className="",children}){
 const ref=useRef(null);
 const reduced=useReducedMotion();
 const move=e=>{
  if(reduced) return;
  const el=ref.current;
  const r=el.getBoundingClientRect();
  const x=(e.clientX-r.left)/r.width;
  const y=(e.clientY-r.top)/r.height;
  el.style.setProperty("--gx",`${x*100}%`);
  el.style.setProperty("--gy",`${y*100}%`);
  el.style.transform=`perspective(920px) rotateX(${(0.5-y)*9}deg) rotateY(${(x-0.5)*12}deg) translateY(-6px)`;
 };
 const leave=()=>{
  const el=ref.current;
  el.style.transform="";
 };
 return <Tag ref={ref} className={`tilt ${className}`} onMouseMove={move} onMouseLeave={leave}>{children}</Tag>;
}

function Typewriter({text,reduced}){
 if(reduced) return <pre>{text}</pre>;
 return <TypedCode text={text}/>;
}

function TypedCode({text}){
 const [out,setOut]=useState("");
 useEffect(()=>{
  let i=0;
  const id=setInterval(()=>{
   i+=1;
   setOut(text.slice(0,i));
   if(i>=text.length) clearInterval(id);
  },16);
  return()=>clearInterval(id);
 },[text]);
 return <pre>{out}<span className="caret" aria-hidden="true"/></pre>;
}

function CustomCursor(){
 const dot=useRef(null);
 const ring=useRef(null);
 useEffect(()=>{
  const fine=window.matchMedia("(pointer:fine)").matches;
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(!fine||reduced) return;
  document.body.classList.add("has-cursor");
  let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my,hover=false;
  const move=e=>{mx=e.clientX;my=e.clientY;hover=!!e.target.closest("a,button,.tilt,.magnetic");};
  const loop=()=>{
   rx+=(mx-rx)*0.16;ry+=(my-ry)*0.16;
   if(dot.current) dot.current.style.transform=`translate(${mx}px,${my}px)`;
   if(ring.current){
    ring.current.style.transform=`translate(${rx}px,${ry}px)`;
    ring.current.dataset.hover=hover?"1":"0";
   }
   raf=requestAnimationFrame(loop);
  };
  let raf=requestAnimationFrame(loop);
  window.addEventListener("mousemove",move,{passive:true});
  return()=>{
   cancelAnimationFrame(raf);
   window.removeEventListener("mousemove",move);
   document.body.classList.remove("has-cursor");
  };
 },[]);
 return <>
  <div className="cursor-dot" ref={dot}/>
  <div className="cursor-ring" ref={ring}/>
 </>;
}

export default function App(){
 const [open,setOpen]=useState(false);
 const [active,setActive]=useState("home");
 const [progress,setProgress]=useState(0);
 const [scrolled,setScrolled]=useState(false);
 const [toast,setToast]=useState("");
 const [copied,setCopied]=useState(false);
 const reduced=useReducedMotion();
 const close=()=>setOpen(false);

 useEffect(()=>{
  const ids=["home","about","skills","experience","projects","contact"];
  const obs=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{if(entry.isIntersecting) setActive(entry.target.id);});
  },{rootMargin:"-42% 0px -50% 0px",threshold:0});
  ids.forEach(id=>{const el=document.getElementById(id);if(el) obs.observe(el);});
  return()=>obs.disconnect();
 },[]);

 useEffect(()=>{
  const onScroll=()=>{
   const h=document.documentElement;
   const max=h.scrollHeight-h.clientHeight;
   setProgress(max? (h.scrollTop/max)*100 :0);
   setScrolled(h.scrollTop>24);
  };
  onScroll();
  window.addEventListener("scroll",onScroll,{passive:true});
  return()=>window.removeEventListener("scroll",onScroll);
 },[]);

 useEffect(()=>{
  if(!toast) return;
  const t=setTimeout(()=>setToast(""),2200);
  return()=>clearTimeout(t);
 },[toast]);

 useEffect(()=>{
  if(reduced) return;
  const nodes=[...document.querySelectorAll(".magnetic")];
  const onEnter=e=>{
   const el=e.currentTarget;
   const move=ev=>{
    const r=el.getBoundingClientRect();
    el.style.transform=`translate(${(ev.clientX-(r.left+r.width/2))*0.22}px,${(ev.clientY-(r.top+r.height/2))*0.28}px)`;
   };
   const leave=()=>{
    el.style.transform="";
    el.removeEventListener("mousemove",move);
    el.removeEventListener("mouseleave",leave);
   };
   el.addEventListener("mousemove",move);
   el.addEventListener("mouseleave",leave);
  };
  nodes.forEach(el=>el.addEventListener("mouseenter",onEnter));
  return()=>nodes.forEach(el=>el.removeEventListener("mouseenter",onEnter));
 },[reduced]);

 const copyEmail=async()=>{
  try{
   await navigator.clipboard.writeText(profile.email);
   setCopied(true);
   setToast("Email copied to clipboard");
   setTimeout(()=>setCopied(false),2000);
  }catch{
   setToast("Could not copy — use the email button");
  }
 };

 const heroMove=e=>{
  if(reduced) return;
  const r=e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx",`${e.clientX-r.left}px`);
  e.currentTarget.style.setProperty("--my",`${e.clientY-r.top}px`);
 };

 return <div className="app">
  <CustomCursor/>
  <div className="progress" style={{transform:`scaleX(${progress/100})`}} aria-hidden="true"/>
  <a className="skip" href="#home">Skip to content</a>

  <header className={scrolled?"navbar scrolled":"navbar"}>
   <a className="brand" href="#home" onClick={close}><b>E</b> Ganesh Kumar</a>
   <button className="menu" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
   <nav className={open?"nav open":"nav"}>
    {navItems.map(x=>{
     const id=x.toLowerCase();
     return <a key={x} href={"#"+id} className={active===id?"on":""} onClick={close}>{x}</a>;
    })}
   </nav>
   <a className="github magnetic" href={profile.github} target="_blank" rel="noreferrer"><GitHub size={16}/> GitHub</a>
  </header>

  <main>
   <section id="home" className="hero wrap" onMouseMove={heroMove}>
    <div className="hero-copy">
     <div className="pill"><i/> Open to software engineering opportunities</div>
     <small>Hello, I’m</small>
     <h1>Ganesh Kumar <em>Emandi.</em></h1>
     <h3>Software Engineering Aspirant</h3>
     <p className="lead">Computer Science Engineering student focused on Java, React.js, Spring Boot, Data Structures & Algorithms, and AI-powered applications.</p>
     <div className="actions">
      <a className="primary magnetic" href="#projects">View Projects <ArrowUpRight size={17}/></a>
      <a className="secondary magnetic" href="#contact">Contact Me <Mail size={17}/></a>
     </div>
     <div className="social">
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHub/></a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
      <a href={"mailto:"+profile.email} aria-label="Email"><Mail/></a>
     </div>
    </div>
    <div className="hero-art">
     <div className="glow"/>
     <div className="orb o1"/><div className="orb o2"/>
     <div className="terminal">
      <div className="dots"><i/><i/><i/><span>ganesh.js</span></div>
      <Typewriter text={codeLines} reduced={reduced}/>
     </div>
     <div className="float one"><Sparkles size={15}/> Always learning</div>
     <div className="float two"><Code2 size={15}/> Java + React</div>
    </div>
   </section>

   <section id="about" className="section wrap">
    <Reveal><SectionTitle num="01" title="A developer who enjoys building and solving." text="My focus is practical software engineering: clean code, problem solving, full-stack development and AI-powered applications."/></Reveal>
    <div className="about">
     <Reveal delay={80}>
      <p>I am a Computer Science Engineering student at Malla Reddy Institute of Technology and Science, Hyderabad, graduating in 2027.</p>
      <p>I enjoy turning ideas into working applications and continuously improving my engineering fundamentals with Java, React.js, Spring Boot, MySQL, REST APIs, DSA and AI technologies.</p>
     </Reveal>
     <Reveal delay={140}>
      <div className="facts">
       <div><GraduationCap/> <span>B.Tech CSE</span><b>2027</b></div>
       <div><BriefcaseBusiness/> <span>Java Intern</span><b>Internz Learn</b></div>
       <div><Rocket/> <span>Location</span><b>Hyderabad</b></div>
      </div>
     </Reveal>
    </div>
   </section>

   <section id="skills" className="section wrap">
    <Reveal><SectionTitle num="02" title="Tools I use to build." text="A focused stack based on my current software engineering and AI work."/></Reveal>
    <div className="skills">{skills.map(([t,I,items],i)=>(
     <Reveal key={t} delay={i*70}>
      <TiltCard>
       <div className="icon"><I/></div>
       <h3>{t}</h3>
       <div className="tags">{items.map(x=><span key={x}>{x}</span>)}</div>
      </TiltCard>
     </Reveal>
    ))}</div>
   </section>

   <section id="experience" className="section wrap">
    <Reveal><SectionTitle num="03" title="Where I’ve learned by doing."/></Reveal>
    <Reveal delay={90}>
     <TiltCard className="experience">
      <div className="exphead"><div><small>SEP 2024 — OCT 2024</small><h3>Java Intern</h3><p>Internz Learn</p></div><BriefcaseBusiness/></div>
      <ul>
       <li>Developed Java applications using Object-Oriented Programming principles.</li>
       <li>Collaborated on project modules and resolved application bugs through debugging and testing.</li>
       <li>Gained practical experience in the Software Development Life Cycle.</li>
       <li>Improved code quality by following coding standards and best practices.</li>
      </ul>
     </TiltCard>
    </Reveal>
   </section>

   <section id="projects" className="section wrap">
    <Reveal><SectionTitle num="04" title="Things I’ve built." text="Selected projects from my resume."/></Reveal>
    <div className="projects">{projects.map((p,i)=>(
     <Reveal key={p.title} delay={i*90}>
      <TiltCard className="project">
       <div className={"visual v"+i}><span>{p.type}</span>{i?<BrainCircuit size={52}/>:<Code2 size={52}/>}</div>
       <div className="projectbody">
        <small>{p.type}</small>
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <div className="tags">{p.tech.map(x=><span key={x}>{x}</span>)}</div>
        <div className="projectlinks">
         <button type="button" onClick={()=>setToast("GitHub link coming soon")}><GitHub size={16}/> GitHub</button>
         <button type="button" onClick={()=>setToast("Live demo coming soon")}><ExternalLink size={16}/> Live Demo</button>
        </div>
       </div>
      </TiltCard>
     </Reveal>
    ))}</div>
   </section>

   <section id="contact" className="contact wrap">
    <Reveal>
     <div>
      <small>05 / CONTACT</small>
      <h2>Let’s build something useful.</h2>
      <p>I’m interested in software engineering opportunities, internships, collaborations and challenging projects.</p>
     </div>
    </Reveal>
    <Reveal delay={120}>
     <div className="actions">
      <a className="primary magnetic" href={"mailto:"+profile.email}><Mail size={17}/> Email Me</a>
      <button type="button" className="secondary magnetic" onClick={copyEmail}>{copied?<Check size={17}/>:<Copy size={17}/>} {copied?"Copied":"Copy Email"}</button>
      <a className="secondary magnetic" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
     </div>
    </Reveal>
   </section>
  </main>

  <footer>
   <span>© 2026 Ganesh Kumar Emandi</span>
   <span>Java · React.js · Spring Boot · AI</span>
  </footer>

  <button className={scrolled?"totop show":"totop"} aria-label="Back to top" onClick={()=>window.scrollTo({top:0,behavior:reduced?"auto":"smooth"})}><ArrowUp size={18}/></button>
  {toast&&<div className="toast" role="status">{toast}</div>}
 </div>;
}
