import React, { useState } from 'react'
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from "@mui/material";
import '../Dash.css'


export default function Home() {
  
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <div className='bgcolor'>
          <Navbar setMode={setMode} mode={mode} />
          <Box height={30} />
            <Box sx={{ display: 'flex' }}>
              <Sidenav setMode={setMode} mode={mode} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                  <h1>Home</h1>
                </Box>
            </Box>
        </div>
      </ThemeProvider>
    </>
  )
}
