import { useNavigate } from "react-router";

export default function Project({ data }) {
  const navigate = useNavigate();
  const handleBtnDetaille = (id) => {
    navigate(`/Projects/${id}`);
  };
  return (
    <div
      className="project bg-red-700 px-7 py-12 rounded-md cursor-pointer"
      onClick={() => handleBtnDetaille(data.id)}
    >
      {/* icon */}
      <h1 className="text-[22px] font-semibold">{data.titleProject}</h1>
      <p className="text-[18px] font-normal line-clamp-1 mt-3">
        {data.descriptionProject}
      </p>
      <div className="bottom-project flex justify-between my-4">
        <p className="text-[17px] font-medium">Tasks :{data.tasks.length}</p>
        <p className="text-[17px] font-medium">Done : {data.done.length}</p>
      </div>
    </div>
  );
}
