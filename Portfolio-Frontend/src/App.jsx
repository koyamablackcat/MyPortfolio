import React, { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import SkillsList from "./components/SkillsList";
import ProjectsList from "./components/ProjectsList";
import { Container, Typography, Box } from "@mui/material";

export default function App() {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/profile")
      .then((res) => res.json())
      .then(setProfile);

    fetch("http://localhost:8080/api/skills")
      .then((res) => res.json())
      .then(setSkills);

    fetch("http://localhost:8080/api/projects")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h3" align="center" color="primary" gutterBottom>
        My Portfolio
      </Typography>

      {/* Profile Section */}
      <Box mb={5}>
        {profile && <ProfileCard profile={profile} />}
      </Box>

      {/* Skills Section */}
      <Box mb={5}>
        <Typography variant="h5" color="secondary" gutterBottom>
          Skills
        </Typography>
        <SkillsList skills={skills} />
      </Box>

      {/* Projects Section */}
      <Box>
        <Typography variant="h5" color="secondary" gutterBottom>
          Projects
        </Typography>
        <ProjectsList projects={projects} />
      </Box>
    </Container>
  );
}
