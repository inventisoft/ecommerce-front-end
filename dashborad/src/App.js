import { Box, ThemeProvider, createTheme } from "@mui/material"
import AppBar from "./components/appBar";
import appTheme, { palette } from './styles/theme';
import AppState from "./state/appState";
import { useMemo, useState } from "react";
import AppDrawer from "./components/appDrawer";
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Producto from "./page/Producto";
import Home from "./page/Home";
import Categoria from "./page/Categoria";
import { styled } from "@mui/material/styles"



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

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
  
  return ( 
    <ThemeProvider theme={theme}>

    <Box sx={{ display: 'flex' }}>
      <AppState>
            <AppDrawer />
            <AppBar switchColorMode={ colorMode.toggleMode} />
            <Box component="main">
                <DrawerHeader />
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/producto" element={<Producto />} />
                        <Route path="/categoria" element={<Categoria />} />
                    </Routes>
                </BrowserRouter>
            </Box>
      </AppState>
    </Box>
</ThemeProvider>
  )

}

export default App;