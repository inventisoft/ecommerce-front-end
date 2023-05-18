import React from 'react'
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box';


export default function Categori() {
  return (
    <>
    <Navbar />
    <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>Categoria</h1>
          </Box>
      </Box>
    </>
  )
}