import React from "react";

export default function ProjectsList({ projects }) {
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">Projects</h2>
      <ul className="list-disc list-inside space-y-2">
	  	{projects.map((project, index) => (
	          <div key={index} className="bg-white p-5 rounded-lg shadow">
	            <h3 className="text-xl font-bold">{project.title}</h3>
	            <p className="text-gray-700 mt-1">{project.description}</p>
	            <p className="text-sm text-gray-500 mt-2">
	              <span className="font-semibold">Tech:</span> {project.tech}
	            </p>
	          </div>
	        ))}
      </ul>
    </div>
  );
}
