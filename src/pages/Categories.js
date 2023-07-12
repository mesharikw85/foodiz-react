import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../images/360_F_378975954_G39M4ptXAjxKy80gbBIEo0wqBkk89gBF.jpg";
import { Box, Modal } from "@mui/material";
import {
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { addCategory, getAllCategories } from "../api/category";
import { NavLink } from "react-router-dom";

export default function MediaCard() {
  const [open, setOpen] = React.useState(false);
  const [cateInfo, setCateInfo] = React.useState({});
  const queryClient = useQueryClient();
  const { mutate: addCategoryFun } = useMutation({
    mutationFn: () => addCategory(cateInfo),
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
      handleClose();
    },
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handelOnChange = (e) => {
    if (e.target.files) {
      setCateInfo({ ...cateInfo, [e.target.name]: e.target.files[0] });
    } else {
      setCateInfo({ ...cateInfo, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = () => {
    addCategoryFun();
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          position: "absolute",
          top: "17%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Categories
        <Button onClick={handleOpen}>Add Category</Button>
      </div>
      <div className="flex flex-wrap gap-[15px] mt-[300px] ml-[300px]">
        {categories?.map((category) => {
          return (
            <Card
              sx={{
                maxWidth: 345,
                justifyContent: "center",
                textAlign: "center",
                display: "block",
                alignItems: "center",
                margin: "auto",
                width: "100%",

                transform: "translate(-50%, -50%)",
              }}
            >
              <CardMedia
                sx={{ height: 250 }}
                image={`http://localhost:8000/${category.image}`}
                title=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {category.name}
                </Typography>
                <Typography variant="body2" color="text.secondary"></Typography>
              </CardContent>
              <CardActions>
                <NavLink to="recipes">
                  <Button size="small">View Recipes</Button>
                </NavLink>
              </CardActions>
            </Card>
          );
        })}
      </div>

      <Modal
        className="flex justify-center items-center"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="bg-white rounded-2xl w-[300px] h-[250px] relative flex flex-col justify-center items-center">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Category
          </Typography>
          <Typography
            id="modal-modal-description"
            className="flex flex-col justify-center items-center"
            sx={{ mt: 2 }}
          >
            <input
              className="border-b"
              placeholder="Name"
              name="name"
              onChange={handelOnChange}
            />
            <input
              className=""
              placeholder="Image"
              type="file"
              name="image"
              onChange={handelOnChange}
            />
            <button
              className="absolute bottom-[5px] right-[5px]"
              onClick={handleSubmit}
            >
              Create
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
