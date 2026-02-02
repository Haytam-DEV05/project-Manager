import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext";
import { useParams } from "react-router";

export default function CreateTask({ closeCart }) {
  const { id } = useParams();
  const { createTasks } = useContext(ProjectContext);
  const [formInputs, setFormInputs] = useState({
    task: "",
    genre: "",
    done: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTasks(id, {
      id: Date.now(),
      task: formInputs.task,
      done: formInputs.genre === "complete" ? true : false,
    });
  };
  function handleClosePopup(e) {
    e.preventDefault();
    closeCart();
  }
  return (
    <div className="min-h-screen fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm">
      <form className="bg-gray-100 min-w-[95%] md:min-w-150 p-10 rounded-2xl">
        <div className="bg-red-900 relative mb-5">
          <IoMdClose
            size={26}
            className="absolute right-0 hover:text-red-500 cursor-pointer"
            onClick={handleClosePopup}
          />
        </div>
        <h2 className="text-[30px] font-semibold">Create Task</h2>
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
            value={formInputs.task}
            onChange={(e) =>
              setFormInputs({ ...formInputs, task: e.target.value })
            }
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
            className="w-full border border-black rounded-full py-1 px-5
          outline-0"
            value={formInputs.genre}
            onChange={(e) =>
              setFormInputs({ ...formInputs, genre: e.target.value })
            }
          >
            <option>--choice--</option>
            <option>todo</option>
            <option>complete</option>
          </select>
        </div>
        <button
          className="text-[18px] mt-4 cursor-pointer bg-green-400 text-white py-1 px-5 rounded-2xl "
          onClick={handleSubmit}
        >
          Create Task
        </button>
        <button
          className="text-[18px] mt-4 cursor-pointer bg-gray-400 py-1 px-5 rounded-2xl ms-5"
          onClick={handleClosePopup}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
