
export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center px-6">

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT SIDE */}
        <div className="flex-1">
          <p className="text-sky-400 text-lg">👋 Hello, I'm</p>

          <h1 className="text-5xl font-bold mt-3">
            Riya Verma
          </h1>

          <h2 className="text-xl text-gray-300 mt-3">
            Software Developer | B.Tech Student
          </h2>

          <p className="text-gray-400 mt-5 leading-7 max-w-xl">
            I build modern web applications using React, Node.js and love solving DSA problems. I focus on clean UI and real-world projects.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <a
              href="/resume.pdf"
              className="bg-sky-500 px-6 py-3 rounded-xl hover:bg-sky-600 transition"
              download
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="border border-sky-500 px-6 py-3 rounded-xl hover:bg-sky-500 transition"
            >
              View Projects
            </a>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-6 mt-6 text-gray-400">

            <a
                href="https://github.com/riya9068"
                target="_blank"
            >
                GitHub
            </a>

            <a
                href="https://www.linkedin.com/in/riya-verma-a87869302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
            >
                LinkedIn
            </a>

            <a
                href="https://leetcode.com/u/rhia-verma/"
                target="_blank"
            >
                LeetCode
            </a>

        </div>

        {/* RIGHT SIDE
        <div className="flex-1 flex justify-center">
          <img
            src="/profile.jpeg"
            className="w-80 h-80 rounded-full border-4 border-sky-500 shadow-lg"
          />
        </div> */}

      </div>
      </div>
    </section>
  );
}
