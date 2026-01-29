import { useState, useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { ProjectContext } from "../../Context/ProjectContext";

export default function CreateProject({ closePopup }) {
  const { createProject } = useContext(ProjectContext);

  const [formInputs, setFormInputs] = useState({
    titleProject: "",
    descriptionProject: "",
    tasks: [],
    done: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formInputs.titleProject || !formInputs.descriptionProject) return;

    createProject({
      id: Date.now(),
      ...formInputs,
    });

    closePopup();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      
      {/* Modal */}
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 animate-fadeIn">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">
            Create New Project
          </h3>
          <IoMdClose
            size={26}
            className="cursor-pointer text-gray-500 hover:text-red-500"
            onClick={closePopup}
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="text-sm font-medium text-gray-600">
              Project Title
            </label>
            <input
              type="text"
              placeholder="Enter project title..."
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
              value={formInputs.titleProject}
              onChange={(e) =>
                setFormInputs({
                  ...formInputs,
                  titleProject: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              placeholder="Describe your project..."
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none resize-none focus:ring-2 focus:ring-green-400"
              rows={4}
              value={formInputs.descriptionProject}
              onChange={(e) =>
                setFormInputs({
                  ...formInputs,
                  descriptionProject: e.target.value,
                })
              }
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={closePopup}
              className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
