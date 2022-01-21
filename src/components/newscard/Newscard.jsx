import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
function Newscard({ imgUrl, desc, title }) {

  return (
    <Card
      elevation={5}
   
      sx={{ maxWidth: "380px",backgroundColor:"rgba(0,0,0,0)" }}
    >
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
  );
}

export default Newscard;
