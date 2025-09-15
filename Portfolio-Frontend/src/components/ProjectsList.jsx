export default function ProjectsList({ projects }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <div key={i} className="border rounded-xl p-4 hover:shadow-lg transition">
            <h3 className="font-bold">{p.name}</h3>
            <p>{p.description}</p>
            <span className="text-sm text-gray-500">{p.tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
