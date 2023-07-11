import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../images/360_F_378975954_G39M4ptXAjxKy80gbBIEo0wqBkk89gBF.jpg";

export default function MediaCard() {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "17%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Categories
      </div>
      <Card
        sx={{
          maxWidth: 345,
          justifyContent: "center",
          textAlign: "center",
          display: "block",
          alignItems: "center",
          margin: "auto",
          width: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CardMedia sx={{ height: 250 }} image={image} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 345,
          justifyContent: "center",
          textAlign: "center",
          display: "block",
          alignItems: "center",
          margin: "auto",
          width: "100%",
          position: "absolute",
          top: "50%",
          right: "52%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CardMedia sx={{ height: 250 }} image={image} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 345,
          justifyContent: "center",
          textAlign: "center",
          display: "block",
          alignItems: "center",
          margin: "auto",
          width: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(59%, -50%)",
        }}
      >
        <CardMedia sx={{ height: 250 }} image={image} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
