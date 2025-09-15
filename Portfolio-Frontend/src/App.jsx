import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import SkillsList from "./components/SkillsList";
import ProjectsList from "./components/ProjectsList";

export default function App() {
  const [profile, setProfile] = useState({});
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/profile")
      .then(res => res.json())
      .then(data => setProfile(data));

    fetch("http://localhost:8080/api/skills")
      .then(res => res.json())
      .then(data => setSkills(data));

    fetch("http://localhost:8080/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-8">
      <ProfileCard profile={profile} />
      <SkillsList skills={skills} />
      <ProjectsList projects={projects} />
    </div>
  );
}
