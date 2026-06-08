// export default function Hero() {
//   return (
//     <section className="min-h-screen bg-slate-900 text-white flex items-center">
//       <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-10 items-center">

//         {/* Left Side */}
//         <div>
//           <p className="text-sky-400 text-lg mb-3">
//             👋 Hello, I'm
//           </p>

//           <h1 className="text-6xl font-bold mb-4">
//             Riya Verma
//           </h1>

//           <h2 className="text-2xl text-gray-300 mb-6">
//             Software Developer & Problem Solver
//           </h2>

//           <p className="text-gray-400 leading-8 max-w-xl">
//             Building modern web applications, solving coding
//             challenges, and creating impactful digital
//             experiences with React, JavaScript, and modern
//             technologies.
//           </p>

//           <div className="flex gap-4 mt-8">
//             <button className="bg-sky-500 px-6 py-3 rounded-xl hover:bg-sky-600 transition">
//               Download Resume
//             </button>

//             <button className="border border-sky-500 px-6 py-3 rounded-xl hover:bg-sky-500 transition">
//               View Projects
//             </button>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="flex justify-center">
//           <img
//             src="/profile.jpg"
//             alt="profile"
//             className="w-96 h-96 object-cover rounded-full border-4 border-sky-500 shadow-lg"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }
// export default function Hero() {
//   return (
//     <section className="min-h-screen bg-slate-900 text-white flex items-center px-6">

//       <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">

//         {/* LEFT SIDE */}
//         <div className="flex-1">
//           <p className="text-sky-400 text-lg">
//             👋 Hello, I'm
//           </p>

//           <h1 className="text-5xl font-bold mt-3">
//             Riya Verma
//           </h1>

//           <h2 className="text-xl text-gray-300 mt-3">
//             Software Developer | B.Tech Student
//           </h2>

//           <p className="text-gray-400 mt-5 leading-7 max-w-xl">
//             I build modern web applications using React, Node.js
//             and love solving DSA problems. I focus on clean UI,
//             performance and real-world projects.
//           </p>

//           {/* BUTTONS */}
//           <div className="flex gap-4 mt-8">
//             <button className="bg-sky-500 px-6 py-3 rounded-xl hover:bg-sky-600">
//               Download Resume
//             </button>

//             <button className="border border-sky-500 px-6 py-3 rounded-xl hover:bg-sky-500">
//               View Projects
//             </button>
//           </div>

//           {/* SOCIAL */}
//           <div className="flex gap-5 mt-6 text-gray-400">
//             <a href="#">GitHub</a>
//             <a href="#">LinkedIn</a>
//             <a href="#">GFG</a>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex-1 flex justify-center">
//           <img
//             src="/profile.jpg"
//             className="w-80 h-80 rounded-full border-4 border-sky-500 shadow-xl"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }
// export default function Hero() {
//   return (
//     <section className="min-h-screen bg-slate-900 text-white flex items-center px-6">

//       <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">

//         {/* LEFT */}
//         <div className="flex-1">
//           <p className="text-sky-400 text-lg">👋 Hello, I'm</p>

//           <h1 className="text-5xl font-bold mt-3">
//             Riya Verma
//           </h1>

//           <h2 className="text-xl text-gray-300 mt-3">
//             Software Developer | B.Tech Student
//           </h2>

//           <p className="text-gray-400 mt-5 leading-7">
//             I build modern web applications and love solving coding problems.
//           </p>

//           {/* BUTTON (CLICKABLE FIXED) */}
//           <div className="flex gap-4 mt-8">

//             <a
//               href="/resume.pdf"
//               className="bg-sky-500 px-6 py-3 rounded-xl hover:bg-sky-600 transition"
//               download
//             >
//               Download Resume
//             </a>

//             <a
//               href="#projects"
//               className="border border-sky-500 px-6 py-3 rounded-xl hover:bg-sky-500 transition"
//             >
//               View Projects
//             </a>

//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="flex-1 flex justify-center">
//           <img
//             src="/profile.jpg"
//             className="w-80 h-80 rounded-full border-4 border-sky-500 shadow-lg"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }
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
                href="https://auth.geeksforgeeks.org/riyaverma/riya-verma"
                target="_blank"
            >
                GFG
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