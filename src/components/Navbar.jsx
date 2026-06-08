// export default function Navbar() {
//   return (
//     <nav className="bg-slate-900 text-white px-10 py-5 flex justify-between items-center">

//       <h1 className="text-2xl font-bold text-sky-400">
//         Portfolio
//       </h1>

//       <ul className="hidden md:flex gap-8">
//         <li className="cursor-pointer hover:text-sky-400">
//           Home
//         </li>

//         <li className="cursor-pointer hover:text-sky-400">
//           About
//         </li>

//         <li className="cursor-pointer hover:text-sky-400">
//           Skills
//         </li>

//         <li className="cursor-pointer hover:text-sky-400">
//           Projects
//         </li>

//         <li className="cursor-pointer hover:text-sky-400">
//           Contact
//         </li>
//       </ul>
//     </nav>
//   );
// }
// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-8 py-5 bg-slate-900">

//       <h1 className="text-sky-400 font-bold text-2xl">
//         Portfolio
//       </h1>

//       <div className="flex gap-6 text-gray-300">
//         <a className="hover:text-sky-400">Home</a>
//         <a className="hover:text-sky-400">About</a>
//         <a className="hover:text-sky-400">Skills</a>
//         <a className="hover:text-sky-400">Projects</a>
//         <a className="hover:text-sky-400">Contact</a>
//       </div>

//     </nav>
//   );
// }
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-slate-900 sticky top-0 z-50">

      <h1 className="text-sky-400 font-bold text-2xl">
        Portfolio
      </h1>

      <div className="flex gap-6 text-gray-300">

        <a href="#home" className="hover:text-sky-400 transition">
          Home
        </a>

        <a href="#about" className="hover:text-sky-400 transition">
          About
        </a>

        <a href="#skills" className="hover:text-sky-400 transition">
          Skills
        </a>

        <a href="#projects" className="hover:text-sky-400 transition">
          Projects
        </a>

        <a href="#contact" className="hover:text-sky-400 transition">
          Contact
        </a>

      </div>
    </nav>
  );
}