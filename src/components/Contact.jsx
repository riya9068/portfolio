export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-800 text-white px-6 py-16"
    >
      <h2 className="text-4xl font-bold text-center text-sky-400 mb-12">
        Contact Me
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT INFO */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Let’s Connect 🚀
          </h3>

          <p className="text-gray-400 leading-7 mb-6">
            I’m open to internships, freelance work, and collaboration
            on web development projects.
          </p>

          <div className="space-y-3 text-gray-300">

            <p>
              📧 Email: <span className="text-sky-400">riya.verma.cs.2023@mitmeerut.ac.in</span>
            </p>

            <p>
              💻 GitHub:
              <a
                href="https://github.com/riya9068"
                target="_blank"
                className="text-sky-400 ml-2"
              >
                Visit
              </a>
            </p>

            <p>
              🔗 LinkedIn:
              <a
                href="https://www.linkedin.com/in/riya-verma-a87869302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="text-sky-400 ml-2"
              >
                Connect
              </a>
            </p>

            <p>
              🧠 Leetcode:
              <a
                href="https://leetcode.com/u/rhia-verma/"
                target="_blank"
                className="text-sky-400 ml-2"
              >
                 Profile
              </a>
            </p>

          </div>
        </div>

        {/* RIGHT FORM */
        /* <div className="bg-slate-900 p-6 rounded-xl shadow-lg">

          <input
            type="text"
            placeholder="your name"
            className="w-full p-3 mb-4 rounded bg-slate-800 text-white outline-none"
          />

          <input
            type="email"
            placeholder="yourmail@gmail.com"
            className="w-full p-3 mb-4 rounded bg-slate-800 text-white outline-none"
          />

          <textarea
            placeholder="message"
            className="w-full p-3 mb-4 rounded bg-slate-800 text-white outline-none h-32"
          ></textarea>

          <button className="w-full bg-sky-500 py-3 rounded hover:bg-sky-600 transition">
            Send Message
          </button>

        </div> */}

      </div>
    </section>
  );
}
