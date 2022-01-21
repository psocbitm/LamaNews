import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

function Newscard({ imgUrl, desc, title, url }) {
  return (
    <a href={url} style={{textDecoration:"none"}}>
      <Card elevation={5} sx={{ maxWidth: "380px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={imgUrl}
            alt="green iguana"
            style={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
}

export default Newscard;
