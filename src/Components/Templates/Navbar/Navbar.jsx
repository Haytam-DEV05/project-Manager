import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="bg-green-500 text-white px-3 py-2 rounded-xl text-lg font-black">
            PM
          </span>
          <h1 className="text-2xl font-black text-gray-800">Project Manager</h1>
        </div>

        <div className="hidden md:flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-xl">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search projects or tasks..."
            className="
              bg-transparent outline-none text-sm
              placeholder-gray-400 w-56
            "
          />
        </div>
      </div>
    </nav>
  );
}
