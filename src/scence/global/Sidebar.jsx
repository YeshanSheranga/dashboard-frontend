import { Avatar, Box, Icon, IconButton, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import TerrainOutlinedIcon from "@mui/icons-material/TerrainOutlined";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useContext } from "react";
import { toggleSideContext } from "../../context/context";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { toggleSideBar, setToggleSideBar } = useContext(toggleSideContext);
  console.log("toggleSideBar - ", toggleSideBar);
  console.log("setToggleSideBar - ", setToggleSideBar);
  const sidebarProps = [
    {
      icon: GroupOutlinedIcon,
      name: "Manage Team",
      url: "/dashboard/team",
    },
    {
      icon: ContactsOutlinedIcon,
      name: "Contact Information",
      url: "/dashboard/contacts",
    },
    {
      icon: ReceiptOutlinedIcon,
      name: "Invoice Balances",
    },
    {
      icon: Person2OutlinedIcon,
      name: "Profile Form",
    },
    {
      icon: CalendarMonthOutlinedIcon,
      name: "Calender",
    },
    {
      icon: HelpOutlineOutlinedIcon,
      name: "FAQ Page",
    },
    {
      icon: BarChartOutlinedIcon,
      name: "Bar Chart",
    },
    {
      icon: PieChartOutlineOutlinedIcon,
      name: "Pie Chart",
    },
    {
      icon: TimelineOutlinedIcon,
      name: "Line Chart",
    },
    {
      icon: TerrainOutlinedIcon,
      name: "Geography Chart",
    },
  ];

  //Toggle close side bar
  const toggleCloseFunction = () => {
    setToggleSideBar(true);
  };

  //toggle open side bar
  const toggleOpenFunction = () => {
    setToggleSideBar(false);
  };

  return (
    <Box sx={{ border: "1px solid green" }}>
      {/* admin and hamberg section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ border: "1px solid red" }}
      >
        <Box sx={{ border: "1px solid yellow" }}>
          <Typography
            variant="h4"
            component="h4"
            sx={{ display: toggleSideBar ? "none" : "visible" }}
          >
            ADMIN
          </Typography>
        </Box>
        <Box sx={{ border: "1px solid yellow" }}>
          {toggleSideBar ? (
            <IconButton
              onClick={() => {
                toggleOpenFunction(toggleSideBar);
              }}
            >
              <DoubleArrowIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                toggleCloseFunction(toggleSideBar);
              }}
            >
              <MenuOutlinedIcon />
            </IconButton>
          )}
        </Box>
      </Box>
      {/* avatar section */}

      <Box sx={{ border: "1px solid yellow", marginTop: "10px" }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          {toggleSideBar ? (
            <AccountCircleIcon />
          ) : (
            <Avatar
              sx={{ width: 100, height: 100 }}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
          )}
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ border: "1px solid yellow" }}
          height={20}
        >
          <Typography
            variant="h5"
            component="h5"
            sx={{ display: toggleSideBar ? "none" : "visible" }}
          >
            IDP Yeshan
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ border: "1px solid yellow" }}
          height={20}
        >
          <Typography
            variant="h6"
            component="h6"
            sx={{ display: toggleSideBar ? "none" : "visible" }}
          >
            Research Admin
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Box>
          <IconButton>
            <HomeOutlinedIcon />
          </IconButton>
        </Box>
        <Box>
          {/* sx={{ display: toggleSideBar ? "none" : "visible" }} */}
          {toggleSideBar && (
            <Typography variant="h5" component="h5">
              {/* Dashboard */}
            </Typography>
          )}
        </Box>
      </Box>
      {/* Mapping */}
      {sidebarProps.map((props, index) => (
        <Box>
          <Box Link to key={index} display="flex" alignItems="center">
            <Box>
              <IconButton>
                <props.icon />
              </IconButton>
            </Box>
            <Box>
              <Typography
                variant="h5"
                component="h5"
                sx={{ display: toggleSideBar ? "none" : "visible" }}
              >
                <Link href={props.url}>{props.name}</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
