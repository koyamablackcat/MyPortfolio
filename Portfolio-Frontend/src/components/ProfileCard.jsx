import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";
export default function ProfileCard({ profile }) {
  return (
    <Card sx={{ backgroundColor: "#e3f2fd", display: "flex", alignItems: "center", padding: 2 }}>
      <Avatar
        alt={profile.name}
        src={profile.avatar}
        sx={{ width: 80, height: 80, marginRight: 2 }}
      />
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
