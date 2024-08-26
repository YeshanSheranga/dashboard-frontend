import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scence/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();
  console.log("useModeTheme", theme);
  console.log("colorMode", colorMode);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* <h2>Dashboard application is here</h2> */}
        <div className="app">
          <main className="content">
            <h2>Main page is in here!!</h2>
          </main>
          {/* <Topbar /> */}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
