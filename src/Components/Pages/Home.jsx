import InfoBox from "../partials/InfoBox";
import { GrProjects } from "react-icons/gr";
import Project from "../partials/Project";
export default function Home() {
  return (
    <section id="home" className="home">
      <div className="contqiner-box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        <InfoBox icon={<GrProjects />} number="2" description="projects" />
        <InfoBox icon={<GrProjects />} number="5" description="To Do" />
        <InfoBox icon={<GrProjects />} number="6" description="In Progress" />
        <InfoBox icon={<GrProjects />} number="1" description="complete" />
      </div>
      <div className="haeder flex justify-between">
        <h2 className="text-[40px] font-bold">Your Projects</h2>
        <button className="bg-green-300 py-2 px-6 cursor-pointer text-white rounded-md">
          + new Project
        </button>
      </div>
      <div className="projects mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
}
