import React from 'react';
import Sidenav from '../../components/Sidenav';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Navbar from '../../components/Navbar';
import TableProduct from '../../components/product/TableProduct';
import { createTheme, ThemeProvider } from "@mui/material";

export default function ProductIndex() {

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
                <Box height={80} />
                  <Box sx={{ display: 'flex' }}>
                    <Sidenav setMode={setMode} mode={mode} />
                      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>    
                        <TableProduct />
                      </Box>
                </Box>
            </div>
        </ThemeProvider>
    </>
  )
}