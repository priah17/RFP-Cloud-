export default function RfpCard({ title, description }) {
  return (
    <div className="border rounded-lg p-4 shadow-md m-2 bg-white w-72">
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="mt-2">{description}</p>
      <button className="mt-3 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
        View RFP
      </button>
    </div>
  );
}
