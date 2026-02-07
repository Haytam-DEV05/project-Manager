// import { useState } from "react";
import { IoMdClose } from "react-icons/io";
// import { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext";
import { useState } from "react";
// import { useParams } from "react-router";

export default function UpdateTask({ closePopup, task }) {
  const [value, setValue] = useState(task.task);
  const [done, setDone] = useState(task.done);
  return (
    <div className="h-screen fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm z-99">
      <form className="bg-gray-100 min-w-[95%] md:min-w-150 p-10 rounded-2xl">
        <div className="bg-red-900 relative mb-5">
          <IoMdClose
            size={26}
            className="absolute right-0 hover:text-red-500 cursor-pointer"
            onClick={closePopup}
          />
        </div>
        <h2 className="text-[30px] font-semibold">Update Task</h2>
        <div className="my-5">
          <label
            htmlFor="task"
            className="text-[20px] font-semibold block mb-2"
          >
            Task
          </label>
          <input
            className="w-full border border-black rounded-full py-2 px-5 outline-0"
            type="text"
            name="task"
            id="task"
            placeholder="Enter Your Task..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="genre"
            className="text-[20px] font-semibold block mb-2"
          >
            Genre
          </label>
          <select
            value={done ? "complete" : "todo"}
            onChange={(e) => setDone(e.target.value)}
            className="w-full border border-black rounded-full py-1 px-5
          outline-0"
          >
            <option>--choice--</option>
            <option>todo</option>
            <option>complete</option>
          </select>
        </div>
        <button className="text-[18px] mt-4 cursor-pointer bg-green-400 text-white py-1 px-5 rounded-2xl ">
          Update Task
        </button>
        <button className="text-[18px] mt-4 cursor-pointer bg-gray-400 py-1 px-5 rounded-2xl ms-5">
          Cancel
        </button>
      </form>
    </div>
  );
}
