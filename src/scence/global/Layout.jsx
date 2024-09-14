import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { toggleSideContext } from "../../context/context";
import ComponentRoutes from "../../routes/index";
import { makeStyles } from "@mui/material";
import { useMode } from "../../theme";

const Layout = () => {
  const[themes] = useMode();
  const { toggleSideBar } = useContext(toggleSideContext);
  console.log("toggleSideBarLyt - ", toggleSideBar);
  const useStyles = makeStyles((themes) => ({}));
  return (
    <main className={toggleSideBar ? "content-left-toggle" : "content"}>
      <div className="left-grid">
        <Sidebar />
      </div>
      <div className="right-grid">
        <div className="right-grid-col-one">
          <Topbar />
        </div>
        <div className="right-grid-col-two">
          <ComponentRoutes />
        </div>
      </div>
    </main>
  );
};

export default Layout;