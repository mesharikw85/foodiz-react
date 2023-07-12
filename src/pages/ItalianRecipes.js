import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../images/gp4k2jro_burgers_625x300_20_June_22.jpg";
import image2 from "../images/hotdog.webp";
import image3 from "../images/pizza.webp";
import image4 from "../images/pasta.jpg";
import image5 from "../images/taco.jpg";
import image6 from "../images/Pozole.jpg";

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
            right: "50%",
            transform: "translate(-70%, -60%)",
            justifyContent: "center",
            width: 400,
          }}
        >
          <CardMedia sx={{ height: 250 }} image={image3} title="Pizza" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pizza
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2 ¼ teaspoons (1 packet) active dry yeast, 1 teaspoon sugar, 1 cup
              warm water, 2 ½ cups all-purpose flour, 2 tablespoons olive oil, 1
              teaspoon salt,
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
            left: "50%",
            transform: "translate(-59%, -60%)",
            justifyContent: "center",
            width: 400,
          }}
        >
          <CardMedia sx={{ height: 250 }} image={image4} title="Pasta" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pasta
            </Typography>
            <Typography variant="body2" color="text.secondary">
              8 ounces (225 grams) pasta of your choice (e.g., spaghetti, penne,
              fettuccine), 2 tablespoons olive oil, 3 cloves garlic, minced, 1
              small onion, finely chopped
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
