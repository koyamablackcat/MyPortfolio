import React from "react";
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Card, CardContent, Typography, Avatar} from "@mui/material";


export default function ProfileCard({ profile }) {
  return (
    <Card sx={{ backgroundColor: "#e3f2fd", display: "flex", alignItems: "center", padding: 2 }}>
      <Avatar
        alt={profile.name}
        src={profile.avatar}
        sx={{ width: 120, height: 120, marginLeft: 4, marginRight: 5 }}
      />
      <CardContent>
        <Typography variant="h3" color="primary" gutterBottom>
			{profile.name}
		</Typography>

        <Typography variant="subtitle1" >
			{profile.title}
		</Typography>
		
        <Typography variant="body1" gutterBottom>
			{profile.summary}
		</Typography>
		
		<Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
			<IoMail size={22} color="purple"/>
			<a href={`mailto:${profile.email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
		    	{profile.email}
		    </a>
        </Typography>
		
		<Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
			<FaPhoneAlt size={18} color="gray"/>
			<a href={`tel:${profile.phone}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    			{profile.phone}
			</a>
		</Typography>
		
		<Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
			<FaGithub size={22}/>
			<a href={profile.github} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
				{profile.github}
			</a>
		</Typography>
      </CardContent>
    </Card>
  );
}
