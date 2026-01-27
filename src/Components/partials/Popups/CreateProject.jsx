import { useState, useContext } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { ProjectContext } from "../../Context/ProjectContext";

export default function CreateProject({ closePopup }) {
  const { createProject } = useContext(ProjectContext);
  const [formInputs, setFormInputs] = useState({
    titleProject: "",
    descriptionProject: "",
    tasks: 0,
    done: 0,
  });

  //   HANDLE FORM =>
  const handleBtnForm = (e) => {
    e.preventDefault();
    const { titleProject, descriptionProject } = formInputs;
    if (titleProject && descriptionProject) {
      createProject({ id: Date.now(), ...formInputs });
      closePopup();
    } else {
      return alert("pelas all the field");
    }
  };

  return (
    <div className="flex absolute justify-center items-center flex-col min-h-screen min-w-[95%] md:-top-[20%]">
      <div className="container-create bg-green-400 p-10">
        <div className="header flex items-center justify-between">
          <h3>Create New Project</h3>
          <IoMdCloseCircle
            size={25}
            className="cursor-pointer"
            onClick={closePopup}
          />
        </div>
        <form className="mt-5" onSubmit={handleBtnForm}>
          <div className="my-3">
            <label htmlFor="" className="text-[18px] font-semibold">
              Project Title
            </label>
            <input
              type="text"
              placeholder="Enter Project Name..."
              className="w-full border border-black py-1 px-3 outline-0"
              required
              value={formInputs.titleProject}
              onChange={(e) =>
                setFormInputs({ ...formInputs, titleProject: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="" className="text-[18px] font-semibold">
              Description
            </label>
            <textarea
              className="w-full border border-black py-1 px-3 outline-0"
              name="description"
              id="description"
              placeholder="Describe Your Project..."
              value={formInputs.descriptionProject}
              onChange={(e) =>
                setFormInputs({
                  ...formInputs,
                  descriptionProject: e.target.value,
                })
              }
            ></textarea>
          </div>
          <div className="buttons mt-4">
            <button
              className="border border-white text-white bg-transparent py-1 px-4 rounded-3xl cursor-pointer me-5"
              onClick={(e) => {
                closePopup();
                e.stopPropagation();
              }}
            >
              Cancel
            </button>
            <button className="bg-green-300 text-black rounded-2xl py-1 px-6 cursor-pointer">
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
