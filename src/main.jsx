import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Braces, Check, Code2, Database,
  ExternalLink, Github, GraduationCap, Layers3, Mail, MapPin, Menu, Phone,
  Sparkles, Terminal, Trophy, X, Zap, ChartNoAxesCombined, Globe, Cpu, BriefcaseBusiness,
  Users, ScanFace, ListChecks, Search, Server
} from 'lucide-react';
import './styles.css';

const projects = [
  {
    id: '01',
    category: 'WEB DEVELOPMENT',
    title: 'Dynamic Blog Application',
    subtitle: 'PHP · MySQL · Apache',
    description: 'Built a dynamic blog application in a local server environment with database setup, user authentication, CRUD functionality, and security enhancements.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'XAMPP'],
    icon: Globe,
    color: 'mint',
    link: 'https://github.com/kaukurthiprem/APEXPLANET_INTERNSHIP_WEB-DEVELOPER-IN-PHP-MYSQL',
    linkLabel: 'View repository',
    note: 'ApexPlanet internship project'
  },
  {
    id: '02',
    category: 'COMPUTER VISION · DATA ANALYSIS',
    title: 'Real-Time Face Emotion Recognition',
    subtitle: 'Python · CNN · Jupyter Notebook',
    description: 'Worked in a team of four on a CNN-based emotion recognition project, exploring live scenarios and analyzing image data. The supplied resume reports 90% model accuracy.',
    tags: ['Python', 'CNN', 'Jupyter Notebook', 'Data Analysis'],
    icon: Cpu,
    color: 'lilac',
    link: '',
    linkLabel: '',
    note: 'Academic project · Oct–Dec 2024'
  },
  {
    id: '03',
    category: 'FULL-STACK DEVELOPMENT',
    title: 'Flask + Redis Systems',
    subtitle: 'Python · Flask · Redis',
    description: 'As part of Prodigy InfoTech internship tasks, implemented and tested Flask–Redis caching workflows and integrated machine-learning APIs into web-based systems.',
    tags: ['Python', 'Flask', 'Redis', 'API integration'],
    icon: Layers3,
    color: 'blue',
    link: '',
    linkLabel: '',
    note: 'Prodigy InfoTech internship tasks'
  },
  {
    id: '04',
    category: 'AUTOMATION',
    title: 'Python Automation Tasks',
    subtitle: 'Python · System workflows',
    description: 'Completed backend and system-level automation tasks, testing the resulting workflows and verifying that assigned solutions worked as expected.',
    tags: ['Python', 'Automation', 'Testing'],
    icon: Terminal,
    color: 'peach',
    link: '',
    linkLabel: '',
    note: 'Prodigy InfoTech internship tasks'
  },
  {
    id: '05',
    category: 'AI & PRODUCTIVITY',
    title: 'AI-Driven Recruitment System',
    subtitle: 'HTML · Recruitment workflow project',
    description: 'A recruitment and interview management project from your public GitHub profile. Review the repository code and README for the exact implemented features before presenting technical details.',
    tags: ['HTML', 'Recruitment workflow', 'Interview management'],
    icon: Users,
    color: 'lilac',
    link: 'https://github.com/kaukurthiprem/AI_Driven-Automated-Recruitment-and-Interview-Management-System',
    linkLabel: 'View repository',
    note: 'Public GitHub project'
  },
  {
    id: '06',
    category: 'COMPUTER VISION',
    title: 'Face Recognition Attendance System',
    subtitle: 'Face recognition · Attendance workflow',
    description: 'A face-recognition attendance project listed in your public repositories. The link lets recruiters inspect the actual implementation and technical stack.',
    tags: ['Face recognition', 'Attendance system', 'Computer vision'],
    icon: ScanFace,
    color: 'blue',
    link: 'https://github.com/kaukurthiprem/Face-Recognition-Attendance-System-main',
    linkLabel: 'View repository',
    note: 'Public GitHub project'
  },
  {
    id: '07',
    category: 'AI & PRODUCTIVITY',
    title: 'Smart Task Analyzer',
    subtitle: 'Python · Task analysis',
    description: 'A Python repository focused on task analysis. Explore the source code to see the exact features and workflow implemented in the project.',
    tags: ['Python', 'Task analysis', 'Problem solving'],
    icon: ListChecks,
    color: 'mint',
    link: 'https://github.com/kaukurthiprem/Smart_task_Analyzer',
    linkLabel: 'View repository',
    note: 'Public GitHub project'
  },
  {
    id: '08',
    category: 'FULL-STACK DEVELOPMENT',
    title: 'MERN OAuth Image Search',
    subtitle: 'JavaScript · MERN · OAuth',
    description: 'A JavaScript repository for an OAuth-enabled image search application. Use the repository to review its architecture, authentication flow, and implemented features.',
    tags: ['JavaScript', 'MERN', 'OAuth', 'Image search'],
    icon: Search,
    color: 'peach',
    link: 'https://github.com/kaukurthiprem/MERN-OAuth-Image-Search-Application-UD-STUDIOS-',
    linkLabel: 'View repository',
    note: 'Public GitHub project'
  },
  {
    id: '09',
    category: 'BACKEND DEVELOPMENT',
    title: 'Swigg Backend',
    subtitle: 'JavaScript · Backend repository',
    description: 'A JavaScript backend repository from your GitHub profile. The source code is linked so recruiters can review the actual API and server-side implementation.',
    tags: ['JavaScript', 'Backend', 'API review'],
    icon: Server,
    color: 'lilac',
    link: 'https://github.com/kaukurthiprem/Swigg_BackEnd',
    linkLabel: 'View repository',
    note: 'Public GitHub project'
  },
  {
    id: '10',
    category: 'ANDROID DEVELOPMENT',
    title: 'Android App Development Tasks',
    subtitle: 'Mobile application development',
    description: 'Completed Android app development work among the assigned Prodigy InfoTech internship tasks. Detailed app name and repository link were not supplied.',
    tags: ['Android', 'App development'],
    icon: Code2,
    color: 'mint',
    link: '',
    linkLabel: '',
    note: 'Prodigy InfoTech internship tasks'
  }
];

const skillGroups = [
  { title: 'Programming', icon: Braces, items: ['Python', 'PHP', 'SQL', 'HTML', 'CSS'] },
  { title: 'Web development', icon: Globe, items: ['PHP backend', 'HTML & CSS', 'CRUD', 'Authentication'] },
  { title: 'Database & tools', icon: Database, items: ['MySQL', 'MongoDB', 'XAMPP', 'VS Code', 'GitHub'] },
  { title: 'Data & analytics', icon: ChartNoAxesCombined, items: ['Jupyter Notebook', 'Power BI', 'Data analysis', 'CNN basics'] },
];

const experiences = [
  {
    company: 'ApexPlanet',
    role: 'Software Intern — Web Developer (PHP & MySQL)',
    date: 'MAY — JUN 2025',
    type: 'WEB DEVELOPMENT',
    bullets: [
      'Configured a local development environment using PHP, MySQL, and Apache.',
      'Built a dynamic blog application with database setup, user authentication, and CRUD functionality.',
      'Added advanced features and security enhancements to the application.',
    ],
  },
  {
    company: 'Prodigy InfoTech',
    role: 'Freelancer / Full Stack Developer Internship',
    date: 'JUN — JUL 2025',
    type: 'FULL-STACK & AUTOMATION',
    bullets: [
      'Completed assigned full-stack development internship tasks across frontend and backend workflows.',
      'Worked on machine-learning API integration and Flask–Redis caching systems.',
      'Completed Android app development and system-level Python automation tasks, with functional verification.',
    ],
  },
];

const education = [
  { qualification: 'B.Tech', specialization: 'Computer Science & Engineering', institute: 'QIS College of Engineering', year: '2022–Present', score: 'CPI 6.03' },
  { qualification: 'Intermediate (AP BIEAP)', specialization: 'Physics, Chemistry & Mathematics', institute: 'Narayana College', year: '2022', score: '7.00' },
  { qualification: 'SSC', specialization: 'Secondary School Certificate', institute: 'B.V. Subbaiah School', year: '2020', score: '10.0' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('ALL');
  const [contactForm, setContactForm] = useState({ name: '', email: '', workType: 'Freelance project', message: '', website: '' });
  const [contactStatus, setContactStatus] = useState({ state: 'idle', message: '' });
  const [contactSending, setContactSending] = useState(false);

  const updateContact = (event) => setContactForm(current => ({ ...current, [event.target.name]: event.target.value }));
  const submitContact = async (event) => {
    event.preventDefault();
    if (contactSending) return;
    setContactSending(true);
    setContactStatus({ state: 'loading', message: 'Sending your message securely…' });
    try {
      const apiBase = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || 'We could not send your message. Please try again or email directly.');
      setContactStatus({ state: 'success', message: 'Thanks! Your message has been sent. I’ll get back to you as soon as I can.' });
      setContactForm({ name: '', email: '', workType: 'Freelance project', message: '', website: '' });
    } catch (error) {
      setContactStatus({ state: 'error', message: error.message || 'Could not connect to the contact service. Please email me directly.' });
    } finally { setContactSending(false); }
  };
  const categories = ['ALL', 'WEB DEVELOPMENT', 'COMPUTER VISION · DATA ANALYSIS', 'COMPUTER VISION', 'AI & PRODUCTIVITY', 'FULL-STACK DEVELOPMENT', 'BACKEND DEVELOPMENT', 'AUTOMATION', 'ANDROID DEVELOPMENT'];
  const visibleProjects = filter === 'ALL' ? projects : projects.filter(p => p.category === filter);
  const nav = [['Work', '#work'], ['Experience', '#experience'], ['Skills', '#skills'], ['About', '#about'], ['Contact', '#contact']];
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(node => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, [filter]);
  const downloadResume = () => {
    const a = document.createElement('a');
    a.href = '/resume.pdf';
    a.download = 'K-Prem-Kumar-Resume.pdf';
    a.click();
  };

  return <div className="app">
    <div className="top-note"><span className="top-note-dot"/> OPEN TO ENTRY-LEVEL ROLES & FREELANCE PROJECTS <span className="top-note-right">Bengaluru</span></div>
    <header className="header">
      <a className="logo" href="#home" onClick={closeMenu}><span className="logo-icon"> •°•<span></span></span><span className="logo-name">Kasukurthi Prem Kumar</span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        {nav.map(([label, href]) => <a href={href} key={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero page-width" id="home">
        <div className="hero-left">
          <div className="eyebrow"><span className="eyebrow-line"/> SOFTWARE DEVELOPER · PORTFOLIO 2026</div>
          <h1>Building digital<br/>things with <span className="highlight">purpose.</span></h1>
          <p className="hero-intro">I'm <strong>Kasukurthi Prem Kumar</strong> — a developer interested in web applications, backend systems, data analysis, and machine learning. I like making ideas work, not just look good.</p>
          <div className="hero-buttons">
            <a className="btn btn-primary" href="#work">Explore my projects <ArrowRight size={16}/></a>
            <button className="btn btn-quiet" onClick={downloadResume}>Download resume <ArrowDownRight size={16}/></button>
          </div>
          <div className="hero-contact-row">
            <a href="mailto:kasukurthiprem1835@gmail.com"><Mail size={15}/> kasukurthiprem1835@gmail.com</a>
            <span><MapPin size={15}/> Bengaluru</span>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-orbit orbit-a"/><div className="hero-orbit orbit-b"/>
          <div className="hero-visual-label label-one"><span className="tiny-square"/> BACKEND + WEB</div>
          <div className="hero-visual-label label-two"><span className="tiny-square purple-square"/> DATA + ML</div>
          <div className="terminal-window">
            <div className="terminal-top"><div className="traffic"><i/><i/><i/></div><span>prem-kumar / profile</span><span className="terminal-status">● live</span></div>
            <div className="terminal-content">
              <p className="terminal-muted"># A little about me</p>
              <p><span className="term-purple">developer</span> = {'{'}</p>
              <p className="term-indent"><span className="term-blue">name</span>: <span className="term-green">'K. Prem Kumar'</span>,</p>
              <p className="term-indent"><span className="term-blue">focus</span>: [</p>
              <p className="term-indent term-more"><span className="term-green">'Web development'</span>,</p>
              <p className="term-indent term-more"><span className="term-green">'Data & machine learning'</span></p>
              <p className="term-indent">],</p>
              <p className="term-indent"><span className="term-blue">approach</span>: <span className="term-green">'Learn by building'</span></p>
              <p>{'}'}</p>
              <div className="terminal-rule"/><p className="terminal-muted terminal-comment"># Keep shipping. Keep learning. <span className="cursor">▋</span></p>
            </div>
            <div className="terminal-footer"><span><span className="green-dot"/> Available for opportunities</span><span>v1.0.0</span></div>
          </div>
          <div className="floating-stat stat-left"><span className="stat-icon"><Code2 size={17}/></span><span><b>5 project areas</b><small>Across web, ML & automation</small></span></div>
          <div className="floating-stat stat-right"><span className="stat-icon stat-icon-lilac"><Zap size={17}/></span><span><b>Hands-on learner</b><small>Build · test · improve</small></span></div>
          <div className="hero-glow"/>
        </div>
        <a className="scroll-link" href="#about">SCROLL TO EXPLORE <span>↓</span></a>
      </section>

      <section className="metrics-band">
        <div className="page-width metrics-inner">
          <div className="metric"><span className="metric-number">02</span><span className="metric-label">Internship experiences</span></div>
          <div className="metric"><span className="metric-number">10</span><span className="metric-label">Projects & work areas</span></div>
          <div className="metric"><span className="metric-number">04</span><span className="metric-label">Technical skill groups</span></div>
          <div className="metric"><span className="metric-number">01</span><span className="metric-label">Mindset: keep learning</span></div>
        </div>
      </section>

      <section className="section page-width about-section reveal" id="about">
        <div className="section-kicker">01 / ABOUT</div>
        <div className="about-layout">
          <h2>Practical skills.<br/><span className="serif-highlight">Curious mindset.</span></h2>
          <div className="about-copy"><p>My experience spans PHP and MySQL web development, full-stack internship tasks, backend workflows, and a computer vision project. I enjoy exploring how different parts of a system work together — from a user interface and database to automation and data analysis.</p><p>I'm looking for opportunities where I can contribute to real projects, learn from a team, and keep improving as a software developer.</p>
            <div className="about-tags"><span><Check size={14}/> Web application development</span><span><Check size={14}/> API & backend workflows</span><span><Check size={14}/> Data & ML exploration</span></div>
          </div>
        </div>
      </section>

      <section className="work-section reveal" id="work">
        <div className="page-width section">
          <div className="section-head-row"><div><div className="section-kicker">02 / SELECTED WORK</div><h2>Projects that show<br/><span className="serif-highlight">how I build.</span></h2></div><p className="section-side-copy">A selection of work and task areas<br/>from my internships and academics.</p></div>
          <div className="filter-row" aria-label="Filter projects">{categories.map(c => <button key={c} className={filter === c ? 'filter-chip active' : 'filter-chip'} onClick={() => setFilter(c)}>{c === 'ALL' ? 'All work' : c.replace(' · ', ' + ')}</button>)}</div>
          <div className="projects-grid">
            {visibleProjects.map(project => {
              const Icon = project.icon;
              return <article className="project-card" key={project.id}>
                <div className={`project-art ${project.color}`}>
                  <div className="art-grid"/>
                  <div className="project-art-top"><span>PROJECT / {project.id}</span><span>{project.category}</span></div>
                  <div className="project-art-icon"><Icon size={35} strokeWidth={1.4}/></div>
                  <div className="art-bottom-line"><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/></div>
                  <span className="art-id">{project.id}</span>
                </div>
                <div className="project-content">
                  <div className="project-subtitle">{project.subtitle}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
                  <div className="project-card-bottom"><span className="project-note"><span className="note-dot"/>{project.note}</span>{project.link ? <a href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ExternalLink size={14}/></a> : <span className="no-link">Details listed from resume</span>}</div>
                </div>
              </article>;
            })}
          </div>
          <div className="repo-callout"><div className="repo-callout-icon"><Github size={22}/></div><div><b>Explore the code</b><p>Explore more of my work on GitHub, including web development, computer vision, productivity, and backend projects.</p></div><a href="https://github.com/kaukurthiprem" target="_blank" rel="noreferrer">Open GitHub <ArrowUpRight size={15}/></a></div>
        </div>
      </section>

      <section className="section page-width experience-section reveal" id="experience">
        <div className="section-kicker">03 / EXPERIENCE</div>
        <div className="section-head-row experience-title"><h2>Where I got<br/><span className="serif-highlight">hands-on.</span></h2><p className="section-side-copy">Learning by building, testing,<br/>and completing real tasks.</p></div>
        <div className="experience-list">
          {experiences.map((e, i) => <article className="experience-item" key={e.company}>
            <div className="experience-number">0{i + 1}</div><div className="experience-company"><span>{e.type}</span><h3>{e.company}</h3><p>{e.role}</p></div><div className="experience-detail"><span className="experience-date">{e.date}</span><ul>{e.bullets.map(b => <li key={b}>{b}</li>)}</ul></div>
          </article>)}
        </div>
      </section>

      <section className="skills-section reveal" id="skills">
        <div className="page-width section">
          <div className="section-kicker">04 / TOOLKIT</div>
          <div className="section-head-row"><h2>Tools I work<br/><span className="serif-highlight">with.</span></h2><p className="section-side-copy">Grouped by the way I use them.<br/>Comfort grows with practice.</p></div>
          <div className="skill-grid">{skillGroups.map((s, i) => {const Icon = s.icon; return <article className="skill-card" key={s.title}><div className="skill-card-head"><span className="skill-icon"><Icon size={20}/></span><span className="skill-index">0{i + 1}</span></div><h3>{s.title}</h3><div className="skill-list">{s.items.map(item => <span key={item}>{item}</span>)}</div></article>})}</div>
          <div className="courses-strip"><div className="courses-icon"><GraduationCap size={21}/></div><div><span>CONTINUOUS LEARNING</span><b>MOOCs & courses listed on resume</b><p>Python · Financial Analyst Course · The Complete Data Analyst Course</p></div></div>
        </div>
      </section>

      <section className="section page-width education-section reveal" id="education">
        <div className="section-kicker">05 / EDUCATION & ACTIVITIES</div>
        <div className="section-head-row"><h2>Grounded in learning.<br/><span className="serif-highlight">Powered by teamwork.</span></h2></div>
        <div className="education-list">{education.map(e => <div className="education-row" key={e.qualification}><div className="education-icon"><GraduationCap size={19}/></div><div className="education-main"><h3>{e.qualification}</h3><p>{e.specialization} · {e.institute}</p></div><span className="education-year">{e.year}</span><span className="education-score">{e.score}</span></div>)}</div>
        <div className="achievement-grid">
          <article className="achievement-card"><span className="achievement-icon"><Trophy size={20}/></span><div className="achievement-type">LEADERSHIP · QISFEST 2025</div><h3>Event Coordinator</h3><p>Organized indoor and volleyball games for men and women, coordinating schedules for 60+ registered teams with a team of four and supporting logistics and crowd management.</p></article>
          <article className="achievement-card achievement-purple"><span className="achievement-icon"><Trophy size={20}/></span><div className="achievement-type">SPORTS ACHIEVEMENTS</div><h3>Teamwork & competition</h3><p>First position in Gully Cricket and Volleyball at QISFEST 2025; runner-up in inter-school Volleyball and Cricket in 2019 as team captain.</p></article>
        </div>
      </section>

      <section className="contact-section reveal" id="contact"><div className="page-width contact-inner"><div className="contact-glow"/><div className="section-kicker">06 / CONTACT</div><h2>Have a project<br/>or opportunity? <span className="serif-highlight">Let's talk.</span></h2><p>Tell me a little about your opportunity or project. Your message is sent to my contact system, where the enquiry can be stored securely in MySQL.</p><div className="contact-layout"><form className="contact-form" onSubmit={submitContact}>
          <div className="contact-form-grid"><label>Your name<input name="name" value={contactForm.name} onChange={updateContact} autoComplete="name" maxLength="100" placeholder="Enter your name" required /></label><label>Email address<input name="email" type="email" value={contactForm.email} onChange={updateContact} autoComplete="email" maxLength="254" placeholder="you@example.com" required /></label></div>
          <label>What are you contacting me about?<select name="workType" value={contactForm.workType} onChange={updateContact}><option>Freelance project</option><option>Full-time job opportunity</option><option>Internship opportunity</option><option>Collaboration</option><option>Other</option></select></label>
          <label>Your message<textarea name="message" value={contactForm.message} onChange={updateContact} rows="5" minLength="10" maxLength="5000" placeholder="Tell me about the work, timeline, or opportunity…" required /></label>
          <div className="contact-honeypot" aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex="-1" autoComplete="off" value={contactForm.website} onChange={updateContact} /></label></div>
          <button className="btn btn-primary contact-submit" type="submit" disabled={contactSending}>{contactSending ? 'Sending…' : 'Send enquiry'} <ArrowUpRight size={15}/></button>
          <p className={`contact-status ${contactStatus.state}`} role="status" aria-live="polite">{contactStatus.message || 'Your details are used only to respond to your enquiry.'}</p>
        </form><aside className="contact-side"><div className="contact-side-icon"><Mail size={21}/></div><h3>Prefer email?</h3><p>You can also contact me directly. I welcome software job opportunities and suitable freelance work.</p><a className="contact-direct-link" href="mailto:kasukurthiprem1835@gmail.com">kasukurthiprem1835@gmail.com <ArrowUpRight size={14}/></a><a className="contact-direct-link" href="tel:+919959911859">+91 99599 11859 <ArrowUpRight size={14}/></a><div className="contact-privacy"><Database size={15}/><span>Messages are stored in your configured MySQL database. Email alerts work after SMTP is configured.</span></div></aside></div><div className="contact-bottom"><span><MapPin size={15}/> Bengaluru</span><a href="https://github.com/kaukurthiprem" target="_blank" rel="noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={14}/></a><a href="mailto:kasukurthiprem1835@gmail.com"><Mail size={15}/> Email <ArrowUpRight size={14}/></a></div></div></section>
    </main>
    <footer className="footer page-width"><a className="logo" href="#home"><span className="logo-icon"> •°•<span></span></span><span className="logo-name">Kasukurthi Prem Kumar</span></a><p>Designed & built to show the work behind the name.</p><a className="footer-top" href="#home">Back to top ↑</a></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
