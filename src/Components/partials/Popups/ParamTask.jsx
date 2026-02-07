import { FaPencilRuler } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext";

export default function ParamTask({ task, idProject, openPopup }) {
  const { deleteTask } = useContext(ProjectContext);
  const handleBtnEdite = () => {
    openPopup({ ...task, idProject });
  };
  const handleBtnDelete = () => {
    deleteTask(idProject, task.id);
  };
  return (
    <div className="bg-gray-200 text[20px] max-w-fit absolute left-[50%] top-0 py-1 px-1 rounded-2xl min-w-30 z-90 shadow-2xl hover:shadow-lg">
      <div
        className="flex items-center mb-1 hover:bg-green-200 py-1 px-2 cursor-pointer rounded-2xl"
        onClick={handleBtnEdite}
      >
        <FaPencilRuler size={12} />
        <span className="font-semibold ms-3">edite</span>
      </div>
      <div
        className="flex items-center hover:bg-red-200 py-1 px-2 cursor-pointer rounded-2xl"
        onClick={handleBtnDelete}
      >
        <MdDelete size={12} />
        <span className="font-semibold ms-3">delete</span>
      </div>
    </div>
  );
}
