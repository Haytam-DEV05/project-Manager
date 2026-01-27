import { GrProjects } from "react-icons/gr";
import InfoBox from "../partials/InfoBox";
import Project from "../partials/Project";
import CreateProject from "../partials/Popups/CreateProject";
import { useContext, useState } from "react";
import { ProjectContext } from "../Context/ProjectContext";

export default function Home() {
  const { cartProjects } = useContext(ProjectContext);
  const [openCreateProject, setOpenCreateProject] = useState(false);
  const closePopup = () => {
    setOpenCreateProject(false);
  };
  return (
    <section id="home" className="home relative">
      {openCreateProject && <CreateProject closePopup={closePopup} />}
      <div className="contqiner-box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        <InfoBox icon={<GrProjects />} number="2" description="projects" />
        <InfoBox icon={<GrProjects />} number="5" description="To Do" />
        <InfoBox icon={<GrProjects />} number="6" description="In Progress" />
        <InfoBox icon={<GrProjects />} number="1" description="complete" />
      </div>
      <div className="haeder flex justify-between items-center">
        <h2 className="text-[40px] font-bold">Your Projects</h2>
        <button
          className="bg-green-300 py-2 px-6 cursor-pointer text-white rounded-md"
          onClick={() => setOpenCreateProject(true)}
        >
          + new Project
        </button>
      </div>
      <div className="projects mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {cartProjects.map((p) => {
          return <Project data={p} key={p.id} />;
        })}
      </div>
    </section>
  );
}
