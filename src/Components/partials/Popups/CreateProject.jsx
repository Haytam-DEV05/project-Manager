import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

export default function CreateProject({ closePopup }) {
  const [formInputs, setFormInputs] = useState({
    textProject: "",
    descriptionProject: "",
  });
  const handleBtnForm = (e) => {
    e.preventDefault();
    const { textProject, descriptionProject } = formInputs;
    console.log(textProject);
    console.log(descriptionProject);
  };
  return (
    <div className="flex absolute justify-center items-center flex-col min-h-screen min-w-[95%] md:-top-[50%]">
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
            <label htmlFor="" className="text-[15px]">
              Project Name
            </label>
            <input
              type="text"
              placeholder="Enter Project Name..."
              className="w-full border border-black py-1 px-3 outline-0"
              required
              value={formInputs.textProject}
              onChange={(e) =>
                setFormInputs({ ...formInputs, textProject: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="" className="text-[15px]">
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
            <button className="border border-white text-white bg-transparent py-1 px-4 rounded-3xl cursor-pointer me-5">
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
