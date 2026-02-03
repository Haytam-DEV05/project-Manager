import { useNavigate, useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { ProjectContext } from "../Context/ProjectContext";
import CreateTask from "../partials/Popups/CreateTask";

export default function ProjectDetaille() {
  const { id } = useParams();
  const { cartProjects } = useContext(ProjectContext);
  const [project, setProject] = useState(null);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    const found = cartProjects.find((p) => p.id == id);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProject(found);
  }, [id, cartProjects]);
  const navigate = useNavigate();
  const handleBtnReturn = () => {
    navigate("/");
  };

  const closeCart = () => {
    setOpenCart(false);
  };

  if (!project) {
    return (
      <div className="ms-20 my-10">
        <button
          className="text-white bg-green-300 cursor-pointer py-1 px-5 mb-5"
          onClick={handleBtnReturn}
        >
          Return Home
        </button>
        <h2 className="text-gray-400 text-[30px] font-black">
          No Project Found
        </h2>
      </div>
    );
  }

  const doneTasks = project.tasks.filter((ele) => ele.done);
  const todoTasks = project.tasks.filter((ele) => !ele.done);

  return (
    <section className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8 relative">
        <button
          className="text-white bg-green-300 cursor-pointer py-1 px-5 mb-5"
          onClick={handleBtnReturn}
        >
          Return Home
        </button>
        <h1 className="text-4xl font-bold">{project.titleProject}</h1>
        <p className="text-gray-500 mt-2">{project.descriptionProject}</p>
        <button
          className="text-[16px] bg-green-300 text-green-600 absolute right-0 cursor-pointer rounded-2xl px-5 py-1"
          onClick={() => setOpenCart(!openCart)}
        >
          + new Task
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-6 my-10">
        <Stat title="Todo" value={todoTasks.length} color="red" />
        <Stat title="Done" value={doneTasks.length} color="green" />
      </div>

      {/* Tasks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TaskColumn title="Todo" tasks={todoTasks} />
        <TaskColumn title="Done" tasks={doneTasks} />
      </div>
      {openCart && <CreateTask closeCart={closeCart} />}
    </section>
  );
}

/* Small Components */

function Stat({ title, value, color }) {
  const colors = {
    red: "bg-red-100 text-red-600",
    green: "bg-green-100 text-green-600",
  };

  return (
    <div className={`p-6 rounded-xl ${colors[color]}`}>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

function TaskColumn({ title, tasks }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h3 className="font-semibold text-lg mb-4">{title}</h3>

      {tasks.length === 0 ? (
        <p className="text-sm text-gray-400">No tasks</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="p-3 bg-gray-100 rounded-lg text-sm"
            >
              <span className="cursor-pointer bg-red-500 block relative">
                <BsThreeDots className="absolute right-0"/>
              </span>
              <p className="mt-5">{task.task}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
