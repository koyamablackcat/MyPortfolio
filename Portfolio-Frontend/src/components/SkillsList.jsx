export default function SkillsList({ skills }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <ul className="list-disc list-inside">
        {skills.map((s, i) => (
          <li key={i}><strong>{s.name}</strong>: {s.description}</li>
        ))}
      </ul>
    </div>
  );
}
