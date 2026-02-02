import { useNavigate } from "react-router";

export default function Project({ data }) {
  const navigate = useNavigate();
  console.log(data);

  const totalTasks = data.tasks.length;
  let doneTasks = 0;
  if (data.tasks.length > 0) {
    data.tasks.foreach((ele) => {
      if (ele.done) {
        ++doneTasks;
      }
    });
  }
  const progress =
    totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

  return (
    <div
      onClick={() => navigate(`/Projects/${data.id}`)}
      className="
        bg-white p-6 rounded-xl shadow
        hover:shadow-lg transition cursor-pointer
        border border-gray-100
      "
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {data.titleProject}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mt-1">
          {data.descriptionProject}
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-between text-sm text-gray-600 mb-3">
        <span>Tasks: {totalTasks}</span>
        <span>Done: {doneTasks}</span>
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-500">Progress</span>
          <span className="font-semibold">{progress}%</span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-green-500 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
