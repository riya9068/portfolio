const projects = [
  {
    title: "WebMeet",
    desc: "Full-stack video meeting app using MERN + WebRTC",
    tech: "React, Node.js, Socket.io, WebRTC",
  },
  {
    title: "GPT Chat App",
    desc: "AI chat app with OpenAI API and chat history",
    tech: "React, OpenAI API, MongoDB, Node.js",
  },
  {
    title: "Password Tracker",
    desc: "Secure password manager with SQL database",
    tech: "HTML, CSS, JS, SQL",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-900 text-white p-10"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-slate-800 p-6 rounded-2xl shadow-lg 
            hover:scale-105 hover:shadow-sky-500/30 transition duration-300"
          >
            <h3 className="text-2xl font-bold text-sky-400">
              {p.title}
            </h3>

            <p className="text-gray-300 mt-3">{p.desc}</p>

            <p className="text-sm text-gray-500 mt-4">
              {p.tech}
            </p>

            <button className="mt-5 px-4 py-2 bg-sky-500 rounded-lg hover:bg-sky-600 transition">
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}