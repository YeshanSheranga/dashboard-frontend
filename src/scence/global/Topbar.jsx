import {
  Box,
  createTheme,
  IconButton,
  InputBase,
  useTheme,
} from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext, tokens, useMode } from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";

const Topbar = () => {
  const theme = useTheme();
  const [themes] = useMode();
  console.log("Topbarthems", themes);
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  //breakpoints
  const Points = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height={80}
      // p={2}
      // border="1px solid green"
    >
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        backgroundColor={colors.primary[400]}
        // sx={{ border: "1px solid red" }}
        width={350}
        height={60}
        borderRadius={7}
        sx={{
          ml: 3,
          [Points.breakpoints.up("xs")]: {
            border: "2px solid red",
            width: 200,
            height: 50,
          },
          [Points.breakpoints.up("sm")]: {
            border: "2px solid green",
            width: 230,
            height: 50,
          },
          [Points.breakpoints.up("md")]: {
            border: "2px solid yellow",
            width: 250,
            height: 50,
          },
          [Points.breakpoints.up("lg")]: {
            border: "2px solid blue",
            width: 270,
            height: 50,
          },
          [Points.breakpoints.up("xl")]: {
            border: "2px solid purple",
            width: 320,
            height: 50
          },
        }}
      >
        <Box width={290}>
          <InputBase
            sx={{ width: "100%", m: 2, border: "2px dotted green" }}
            placeholder="Search"
          />
        </Box>
        <Box>
          <IconButton>
            <SearchIcon sx={{ m: 2 }} />
          </IconButton>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        marginRight={3}
        paddingTop={1}
        paddingBottom={1}
        paddingLeft={2}
        paddingRight={2}
      >
        <Box
          sx={{
            m: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton onClick={colorMode.toggleColorMode}>
            {" "}
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon sx={{ cursor: "pointer" }} />
            ) : (
              <LightModeOutlinedIcon sx={{ cursor: "pointer" }} />
            )}
          </IconButton>
        </Box>
        <Box
          sx={{
            m: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton>
            <NotificationsNoneOutlinedIcon sx={{ cursor: "pointer" }} />
          </IconButton>
        </Box>
        <Box
          sx={{
            m: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton>
            <SettingsOutlinedIcon sx={{ cursor: "pointer" }} />
          </IconButton>
        </Box>
        <Box
          sx={{
            m: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton>
            <Person3OutlinedIcon sx={{ cursor: "pointer" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
