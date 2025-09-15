import React from "react";

export default function SkillsList({ skills }) {
  return (
    <div>
      <h2 className="text-xl font-bold">Skills</h2>
      <ul className="list-disc pl-5">
        {skills.map((skill, index) => (
          <li key={index}>
            {skill.name} - {skill.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
