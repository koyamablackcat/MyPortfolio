import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function ProfileCard({ profile }) {
  return (
    <Card sx={{ backgroundColor: "#e3f2fd" }}>
      <CardContent>
        <Typography variant="h5" color="primary" gutterBottom>
          {profile.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {profile.title}
        </Typography>
        <Typography variant="body1">{profile.summary}</Typography>
      </CardContent>
    </Card>
  );
}
