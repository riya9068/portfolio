import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About"; 
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />
      

      <section id="home">
        <Hero />
      </section>
      <About />
      <Skills />
      {/* <section id="about" className="min-h-screen bg-slate-800 text-white p-10">
        <h2 className="text-4xl">About Section</h2>
        <p className="text-gray-300 max-w-3xl">
          I am a Full-Stack Web Developer (MERN Stack). I am currently pursuing B.Tech in Computer Science & Engineering.
          I focus on building scalable web applications and improving my DSA skills.
        </p>
      </section> */}

      {/* <section id="skills" className="min-h-screen bg-slate-900 text-white p-10">
        <h2 className="text-4xl">Skills Section</h2>
        <p><b>Frontend:</b> HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS</p>

        <p className="mt-3"><b>Backend:</b> Node.js, Express.js, Mongoose, SQL</p>

        <p className="mt-3"><b>Database:</b> MongoDB</p>

        <p className="mt-3"><b>Tools:</b> Git, VS Code</p>

        <p className="mt-3"><b>Other:</b> REST APIs, CI/CD Pipelines</p>
      </section> */}
    <Projects />
    <Contact />
      <section id="education" className="min-h-screen bg-slate-900 text-white p-10">

        <h2 className="text-4xl font-bold mb-6">Education</h2>

        <p>B.Tech CSE (CGPA: 8)</p>
        <p>Meerut Institute of Technology, AKTU Lucknow</p>

      </section>

      
    </>
  );
}

export default App;