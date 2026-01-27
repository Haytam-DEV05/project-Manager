import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-red-900 border-b-3 border-black">
      <div className="container min-h-20 md:flex justify-between items-center max-w-[98%] mx-auto">
        <div className="logo flex items-center">
          <span className="bg-green-400 p-2 rounded-2xl text-[20px] font-black me-1">
            PM
          </span>
          <h1 className="text-[25px] font-black">Project Manager</h1>
        </div>
        <div className="flex bg-green-500 items-center py-2 px-5 rounded-4xl mt-4 md:mt-0">
          <FaSearch size={25} className="me-2" />
          <input
            type="text"
            placeholder="Search Tasks..."
            className="outline-0 py-1"
          />
        </div>
      </div>
    </nav>
  );
}
