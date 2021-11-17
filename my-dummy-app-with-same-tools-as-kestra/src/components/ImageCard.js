import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

// import Box from "@mui/material/Box";
// import Fab from "@mui/material/Fab";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import screenshot from "../assets/images/Capture.PNG";

const ImageCard = () => {
  return (
    // Below the "sx" prop is for the custom styling in the mui v5
    <Card sx={{ maxWidth: "100%", mt: 4, mb: 4 }}>
      <CardMedia
        component="img"
        height="140"
        image={screenshot}
        alt="screenshot"
      />
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
        <Button color="primary" size="small" variant="contained">
          Share
        </Button>
        <Button color="secondary" size="small" variant="contained">
          Learn More
        </Button>
        <Button color="error" size="small" variant="outlined">
          Red
        </Button>
        {/* <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            Navigate
          </Fab>
          <Fab disabled aria-label="like">
            <FavoriteIcon />
          </Fab>
        </Box> */}
      </CardActions>
    </Card>
  );
};

export default ImageCard;
