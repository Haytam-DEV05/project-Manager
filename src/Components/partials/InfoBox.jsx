export default function InfoBox({ icon, number, description }) {
  return (
    <div className="p-10 bg-white rounded-xl shadow flex items-center gap-4 hover:shadow-2xl">
      <div className="text-3xl text-green-500">{icon}</div>
      <div>
        <p className="text-2xl font-bold">{number}</p>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
}
