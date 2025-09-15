// SkillsList.jsx
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function SkillsList({ skills }) {
  return skills.map((skill, i) => (
    <Card key={i} sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{skill.name}</Typography>
        <Typography variant="body2">{skill.details}</Typography>
      </CardContent>
    </Card>
  ));
}