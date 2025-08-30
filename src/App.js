// App.jsx
import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import profile_image from './Iamage/profile.jpg';
// --- SVG Icons ---
const GhIcon = () => <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.s54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>;
const GmIcon = () => <svg height="24" width="24" viewBox="0 0 512 512" fill="currentColor"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1-7.9 2.9-11.3l140.6-225.1-205.8 100c-12.1 6-26.9 3.5-36.8-5.5-12.8-11.5-12.8-30.6 .1-42.2L472.3 2.1C482 .7 492.2 .6 498.1 5.6z" /></svg>;
const WaIcon = () => <svg height="24" width="24" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 221.9-99.6 221.9-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.2-27.2l-6.7-4-71.6 18.7L57.9 351l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>;

// --- Configuration Object ---
const portfolioConfig = {
  name: "Ashingshana Ishan",
  profilePhotoUrl: profile_image,
  tagline: "React & Java enthusiast building for the web.",
  about: "I'm a passionate undergraduate at Sabaragamuwa University, deeply interested in web development, design, and gaming. I love building clean, user-friendly interfaces and solving problems with code.",
  dynamicRoles: ["a Coder", "a Gamer", "a Designer", "an Enthusiast"],
  contact: {
    gmail: "ashingshanac@gmail.com",
    whatsapp: "94759428249",
    github: "https://github.com/Ashiy-Ishan",
  },
  // UPDATED: Added a 'color' property to each skill for its icon
  skills: [
    { name: "React", icon: "devicon-react-original", level: 90, color: "#61DAFB" },
    { name: "Java", icon: "devicon-java-plain", level: 75, color: "#f89820" },
    { name: "Python", icon: "devicon-python-plain", level: 70, color: "#3776AB" },
    { name: "HTML5", icon: "devicon-html5-plain", level: 95, color: "#E34F26" },
    { name: "CSS3", icon: "devicon-css3-plain", level: 95, color: "#1572B6" },
    { name: "JavaScript", icon: "devicon-javascript-plain", level: 85, color: "#F7DF1E" },
    { name: "Figma", icon: "devicon-figma-plain", level: 95, color: "#F24E1E" },
    { name: "Arduino", icon: "devicon-arduino-plain", level: 65, color: "#00979D" },
  ],
  projects: [
    { title: "Java Maths", description: "This Java program is an interactive math quiz that runs in the command line, generating random arithmetic problems based on the user's chosen difficulty. It then checks the user's answers, provides immediate feedback, and displays the final score at the end of the quiz.", githubLink: "https://github.com/Ashiy-Ishan/Java_mini-Project.git" },
    { title: "Funny Web", description: "Website that act like funny page, educational page and Chatbot AI Tool", githubLink: "https://github.com/Ashiy-Ishan/funweb-vercel-release.git" },
    { title: "Ballerina Bank Syatem", description: "Bank system that design using ballerina Cloud language", githubLink: "https://github.com/Ashiy-Ishan/iwb096-slithering.git" },
    // { title: "Project Four", description: "Showcasing another skill or technology stack.", githubLink: "https://github.com/Ashiy-Ishan/" },
    // { title: "Project Five", description: "A fifth project to demonstrate the scrolling container.", githubLink: "https://github.com/Ashiy-Ishan/" },
    // { title: "Project Six", description: "A sixth project for even more content.", githubLink: "https://github.com/Ashiy-Ishan/" },
  ]
};

// --- Components ---
const FloatingLogos = () => (
  <div className="floating-logos-bg">
    <i className="devicon-react-original"></i> <i className="devicon-java-plain"></i>
    <i className="devicon-python-plain"></i> <i className="devicon-html5-plain"></i>
  </div>
);

const Typewriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) setDisplayedText(text.substring(0, i + 1), i++);
      else clearInterval(typingInterval);
    }, speed);
    return () => clearInterval(typingInterval);
  }, [text, speed]);
  return <span className="typewriter">{displayedText}</span>;
};

const DynamicRole = ({ roles }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex(prev => (prev + 1) % roles.length), 2000);
    return () => clearInterval(intervalId);
  }, [roles.length]);
  return (
    <p className="dynamic-role">I am <span className="role-text-container"><span className="role-text" key={index}>{roles[index]}</span></span></p>
  );
};

// --- Main App Component ---
function App() {
  const [activeSection, setActiveSection] = useState('skills');
  const [theme, setTheme] = useState('dark');
  const sections = ['skills', 'projects', 'contact'];
  const contentRef = useRef(null);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate-in');
      });
    }, { threshold: 0.1 });
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  useEffect(() => {
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { root: contentRef.current, rootMargin: "-40% 0px -60% 0px" });
    const sectionElements = contentRef.current.querySelectorAll('.content-section');
    sectionElements.forEach(el => spyObserver.observe(el));
    return () => sectionElements.forEach(el => spyObserver.unobserve(el));
  }, []);

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    const subject = `Message from ${name.value} via Portfolio`;
    const body = `Name: ${name.value}\nEmail: ${email.value}\n\nMessage:\n${message.value}`;
    window.location.href = `mailto:${portfolioConfig.contact.gmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <FloatingLogos />
      <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      <div className="portfolio-container">
        <header className="left-pane">
          <div>
            <div className="profile-header">
              <img src={portfolioConfig.profilePhotoUrl} alt={portfolioConfig.name} className="profile-photo" />
              <div className="profile-details">
                <h1 className="name"><Typewriter text={portfolioConfig.name} /></h1>
                <DynamicRole roles={portfolioConfig.dynamicRoles} />
                <nav className="navigation">
                  <ul>
                    {sections.map(section => (
                      <li key={section}>
                        <a href={`#${section}`} className={activeSection === section ? 'active' : ''}>
                          {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <p className="about-text">{portfolioConfig.about}</p>
          </div>
          <div className="social-links">
            <a href={portfolioConfig.contact.github} target="_blank" rel="noopener noreferrer"><GhIcon /></a>
            <a href={`mailto:${portfolioConfig.contact.gmail}`}><GmIcon /></a>
            <a href={`https://wa.me/${portfolioConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer"><WaIcon /></a>
          </div>
        </header>

        <main className="right-pane" ref={contentRef}>
          <section id="skills" className="content-section">
            <h3 className="section-title">Skills</h3>
            <div className="skills-grid">
              {portfolioConfig.skills.map((skill, index) => (
                <div className="skill-card animate-on-scroll" key={skill.name} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="skill-progress-circle" style={{ '--level': skill.level }}>
                    {/* The inline style here applies the unique color to each icon */}
                    <i className={skill.icon} style={{ color: skill.color }}></i>
                  </div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="content-section">
            <h3 className="section-title">Projects</h3>
            <div className={`projects-grid ${portfolioConfig.projects.length > 4 ? 'scrollable' : ''}`}>
              {portfolioConfig.projects.map((project, index) => (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={`project-card animate-on-scroll delay-${index}`} key={project.title}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </a>
              ))}
            </div>
          </section>

          <section id="contact" className="content-section">
            <h3 className="section-title">Contact Me</h3>
            <form className="contact-form" onSubmit={handleContactFormSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;