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
            left: "50%",
            transform: "translate(-170%, -60%)",
            justifyContent: "center",
            width: 400,
          }}
        >
          <CardMedia sx={{ height: 250 }} image={image5} title="Taco" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Taco
            </Typography>
            <Typography variant="body2" color="text.secondary">
              1 pound (450 grams) ground beef, 1 small onion, diced, 2 cloves
              garlic, minced, 1 tablespoon chili powder, 1 teaspoon ground
              cumin, 1/2 teaspoon paprika, 1/2 teaspoon dried oregano, 1/4
              teaspoon cayenne pepper
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
          <CardMedia sx={{ height: 250 }} image={image6} title="Pozole" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pozole
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2 pounds (900 grams) pork shoulder, cut into chunks, 1 onion,
              quartered, 4 cloves garlic, minced, 2 cans (15 ounces each) white
              hominy, drained and rinsed, 4 cups chicken or pork broth, 2 dried
              guajillo or ancho chilies
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
