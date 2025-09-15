// ProjectsList.jsx
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function ProjectsList({ projects }) {
  return projects.map((proj, i) => (
    <Card key={i} sx={{ mb: 2 }} >
      <CardContent>
        <Typography variant="h6">{proj.name}</Typography>
        <Typography variant="body2">{proj.description}</Typography>
        <Typography variant="body2">{proj.tech}</Typography>
		<Typography variant="body2">{proj.imageUrl}</Typography>
		<Typography variant="body2">{proj.link}</Typography>
      </CardContent>
    </Card>
  ));
}
