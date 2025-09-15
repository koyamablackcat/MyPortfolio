export default function ProfileCard({ profile }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h1 className="text-2xl font-bold">{profile.name}</h1>
      <h2 className="text-lg text-gray-600">{profile.title}</h2>
      <p className="mt-4">{profile.summary}</p>
    </div>
  );
}
