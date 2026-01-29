import { GrProjects } from "react-icons/gr";
import InfoBox from "../partials/InfoBox";
import Project from "../partials/Project";
import CreateProject from "../partials/Popups/CreateProject";
import { useContext, useState } from "react";
import { ProjectContext } from "../Context/ProjectContext";

export default function Home() {
  const { cartProjects } = useContext(ProjectContext);
  const [openCreateProject, setOpenCreateProject] = useState(false);

  const closePopup = () => setOpenCreateProject(false);

  // 🔢 Stats logic
  const totalProjects = cartProjects.length;

  const totalTasks = cartProjects.reduce((acc, p) => acc + p.tasks.length, 0);

  const totalDone = cartProjects.reduce((acc, p) => acc + p.done.length, 0);

  const totalTodo = totalTasks - totalDone;

  return (
    <section className="p-8 max-w-7xl mx-auto relative">
      {openCreateProject && <CreateProject closePopup={closePopup} />}

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <InfoBox
          icon={<GrProjects />}
          number={totalProjects}
          description="Projects"
        />
        <InfoBox icon={<GrProjects />} number={totalTodo} description="To Do" />
        <InfoBox
          icon={<GrProjects />}
          number={totalDone}
          description="Completed"
        />
      </div>

      {/* Header */}
      <div className="sm:flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-gray-800">Your Projects</h2>

        <button
          className="bg-green-500 hover:bg-green-600 transition
                     py-2 px-6 text-white rounded-lg shadow min-w-full mt-3 sm:min-w-fit sm:mt-0"
          onClick={() => setOpenCreateProject(true)}
        >
          + New Project
        </button>
      </div>

      {/* Projects */}
      {cartProjects.length === 0 ? (
        <p className="text-gray-400 text-center mt-20">No projects yet</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartProjects.map((p) => (
            <Project data={p} key={p.id} />
          ))}
        </div>
      )}
    </section>
  );
}
