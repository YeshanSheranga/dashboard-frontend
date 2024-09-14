import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Points = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});


export const useStyles = makeStyles((theme) => ({
  searchBox: {
    [Points.breakpoints.up("tablet")]: {
      // width: "80%",
      // backgroundColor: "lightblue",
      border: "2px solid red",
    },
  },
}));
