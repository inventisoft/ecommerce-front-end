import { Box, Button, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import AppBar from "./components/appBar";
// import PrimaryAppbar from './components/primaryAppbar';
import appTheme, { palette } from './styles/theme';
import AppState from "./state/appState";
// import AppState from './state/appState';
// import { useMemo, useState } from 'react';
// import AppDrawer from './components/appDrawer';



function app() {

  const theme = createTheme({
    palette: {...palette},
    ...appTheme
  })
  
  return (
    <ThemeProvider theme={theme}>
      <AppState>
        <Box sx={{ display: 'flex', flexDirection: 'column'}} >
          <CssBaseline/>
            <AppBar />
        </Box>
      </AppState>
    </ThemeProvider>
  )

}


export default app;