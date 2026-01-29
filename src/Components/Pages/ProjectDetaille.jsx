import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../Context/ProjectContext";

export default function ProjectDetaille() {
  const { id } = useParams();
  const { cartProjects } = useContext(ProjectContext);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const found = cartProjects.find((p) => p.id == id);
    setProject(found);
  }, [id, cartProjects]);

  if (!project) {
    return <div className="p-10 text-center">No Project Found</div>;
  }

  const doneIds = project.done.map((d) => d.id);

  const doneTasks = project.tasks.filter((t) => doneIds.includes(t.id));

  const todoTasks = project.tasks.filter((t) => !doneIds.includes(t.id));

  return (
    <section className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{project.titleProject}</h1>
        <p className="text-gray-500 mt-2">{project.descriptionProject}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <Stat title="Todo" value={todoTasks.length} color="red" />
        <Stat title="In Progress" value={0} color="yellow" />
        <Stat title="Done" value={doneTasks.length} color="green" />
      </div>

      {/* Tasks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TaskColumn title="Todo" tasks={todoTasks} />
        <TaskColumn title="In Progress" tasks={[]} />
        <TaskColumn title="Done" tasks={doneTasks} />
      </div>
    </section>
  );
}

/* Small Components */

function Stat({ title, value, color }) {
  const colors = {
    red: "bg-red-100 text-red-600",
    yellow: "bg-yellow-100 text-yellow-600",
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
            <li key={task.id} className="p-3 bg-gray-100 rounded-lg text-sm">
              {task.task}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
