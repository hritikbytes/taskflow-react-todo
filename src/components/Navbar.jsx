
const Navbar = () => {
  return (
    <nav className="flex justify-between bg-linear-to-br from-indigo-900 to-slate-900 backdrop-blur-md py-4 text-white items-center shadow-lg sticky top-0 z-50 border-b border-white/10">
      <div className="logo">
        <span className="font-bold text-2xl mx-4 sm:mx-8 bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent cursor-pointer">TaskFlow</span>
      </div>
      <ul className="flex gap-8 mx-4 sm:mx-8 text-lg font-medium">
        <li className="cursor-pointer hover:text-purple-400 transition-colors duration-300">Home</li>
        <li className="cursor-pointer hover:text-purple-400 transition-colors duration-300">About</li>
      </ul>
    </nav>
  )
}

export default Navbar