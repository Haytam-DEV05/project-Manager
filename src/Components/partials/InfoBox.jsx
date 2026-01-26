
export default function InfoBox({ icon, number, description }) {
  return (
    <div className="box bg-red-400 py-10 px-7 rounded-3xl flex justify-center items-center gap-2">
      <div className="icon bg-green-300 py-2 px-4 rounded-md">{icon}</div>
      <div className="info">
        <h1>{number}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
