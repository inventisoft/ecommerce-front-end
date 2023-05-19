import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { Box } from '@mui/material';



function  IconMenu ({setAnchorElNav}) {
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
    return(
        <Box
            sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
            <IconButton 
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
        </Box>
    );
}
export {IconMenu}

