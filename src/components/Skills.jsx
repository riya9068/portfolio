const skills = [
  { name: "HTML", desc: "Structure of web pages" },
  { name: "CSS", desc: "Design and styling of UI" },
  { name: "JavaScript", desc: "Dynamic web functionality" },
  { name: "React.js", desc: "Frontend component development" },
  { name: "Node.js", desc: "Backend runtime environment" },
  { name: "Express.js", desc: "Server-side framework" },
  { name: "MongoDB", desc: "NoSQL database management" },
  { name: "DSA", desc: "Problem solving & algorithms" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-900 text-white px-6 py-16"
    >
      <h2 className="text-4xl font-bold text-center text-sky-400 mb-12">
        My Skills
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE TEXT */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            What I Can Do
          </h3>

          <p className="text-gray-400 leading-7">
            I specialize in building full-stack web applications using MERN stack.
            I focus on clean UI, scalable backend systems, and strong problem-solving
            skills using Data Structures and Algorithms.
          </p>

          <p className="text-gray-400 mt-4 leading-7">
            My goal is to become a highly skilled software engineer capable of
            building real-world production-level applications.
          </p>
        </div>

        {/* RIGHT SIDE SKILLS */}
        <div className="grid sm:grid-cols-2 gap-4">

          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-slate-800 p-5 rounded-xl hover:bg-slate-700 transition duration-300 shadow-lg"
            >
              <h4 className="text-sky-400 text-xl font-bold">
                {skill.name}
              </h4>

              <p className="text-gray-400 text-sm mt-2">
                {skill.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}