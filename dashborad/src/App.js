import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import AppBar from "./components/appBar";
import appTheme, { palette } from './styles/theme';
import AppState from "./state/appState";
import { useMemo, useState } from "react";
import AppDrawer from "./components/appDrawer";
import { BrowserRouter } from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleMode: () => {
        setMode( prevMode => prevMode === 'light' ? 'dark' : 'light' );
      }
    }),[]
  );


  const theme = createTheme({
    palette: {...palette, mode: mode},
    ...appTheme
  })
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <AppState>
            <Box sx={{ display: 'flex', flexDirection: 'column'}} >
              <CssBaseline/>
                <AppDrawer />
                <AppBar switchColorMode={ colorMode.toggleMode} />
            </Box>
          </AppState>
      </BrowserRouter>
    </ThemeProvider>
  )

}

export default App;