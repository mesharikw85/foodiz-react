import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../images/gp4k2jro_burgers_625x300_20_June_22.jpg";
import image2 from "../images/hotdog.webp";

export default function MediaCard() {
  return (
    <>
      <div>
        <h1
          style={{
            color: "black",
            fontSize: 50,
            paddingTop: 25,
            paddingLeft: 720,
          }}
        >
          Recipes
        </h1>
      </div>
      <div>
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)",
            justifyContent: "center",
            width: 400,
          }}
        >
          <CardMedia sx={{ height: 250 }} image={image} title="Burger" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Burger
            </Typography>
            <Typography variant="body2" color="text.secondary">
              1 pound ground beef (80% lean), 1 teaspoon salt, 1/2 teaspoon
              black pepper, 4 hamburger buns, 4 slices of cheese (Cheddar,
              American, or your choice)
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div>
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            right: "50%",
            transform: "translate(-59%, -60%)",
            justifyContent: "center",
            width: 400,
          }}
        >
          <CardMedia sx={{ height: 250 }} image={image2} title="Hotdog" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hotdog
            </Typography>
            <Typography variant="body2" color="text.secondary">
              4 hotdog buns, 4 hotdog sausages, 1 small onion, finely diced,
              Ketchup, Mustard, Pickle relish, Optional toppings: shredded
              cheese, sauerkraut, jalapenos, etc.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
