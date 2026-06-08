export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-800 text-white flex items-center px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE / ICON */}
        <div className="flex justify-center">
          <img
            src="/profile.jpeg"
            alt="profile"
            className="w-72 h-72 rounded-2xl object-cover border-4 border-sky-500 shadow-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-sky-400 mb-6">
            About Me
          </h2>

          <p className="text-gray-300 leading-7 mb-4">
            I am a Full-Stack Web Developer (MERN Stack). I am currently
            pursuing B.Tech in Computer Science & Engineering.
          </p>

          <p className="text-gray-300 leading-7 mb-4">
            I enjoy building scalable web applications and solving real-world
            problems using modern technologies like React, Node.js, and MongoDB.
          </p>

          <p className="text-gray-300 leading-7 mb-6">
            I am also improving my skills in Data Structures & Algorithms (DSA)
            to become a strong problem solver.
          </p>

          {/* STATS BOX */}
          <div className="grid grid-cols-3 gap-4 text-center">

            <div className="bg-slate-900 p-4 rounded-xl">
              <h3 className="text-2xl font-bold text-sky-400">6+</h3>
              <p className="text-sm text-gray-400">Projects</p>
            </div>

            <div className="bg-slate-900 p-4 rounded-xl">
              <h3 className="text-2xl font-bold text-sky-400">200+</h3>
              <p className="text-sm text-gray-400">DSA Problems</p>
            </div>

            <div className="bg-slate-900 p-4 rounded-xl">
              <h3 className="text-2xl font-bold text-sky-400">8 CGPA</h3>
              <p className="text-sm text-gray-400">Academic</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}