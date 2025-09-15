import React from "react";

export default function ProfileCard({ profile }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold">{profile.name}</h1>
      <h2 className="text-lg text-gray-600">{profile.title}</h2>
      <p className="mt-3 text-gray-800">{profile.summary}</p>
    </div>
  );
}