import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { toggleSideContext } from "./context/context";
import Topbar from "./scence/global/Topbar";
import Sidebar from "./scence/global/Sidebar";
import Layout from "./scence/global/Layout";
import { useState } from "react";

function App() {
  const [themes, colorMode] = useMode();
  const [toggleSideBar, setToggleSideBar] = useState(false);
  console.log("useModeTheme", themes);
  console.log("colorMode", colorMode);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <toggleSideContext.Provider value={{toggleSideBar, setToggleSideBar}}>
        <ThemeProvider theme={themes}>
          <CssBaseline />
          <div className="app">
            <Layout />
          </div>
        </ThemeProvider>
      </toggleSideContext.Provider>
    </ColorModeContext.Provider>
  );
}

export default App;
