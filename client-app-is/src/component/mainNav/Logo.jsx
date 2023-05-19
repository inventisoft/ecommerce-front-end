
import { IconButton } from "@mui/material";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Typography } from "@mui/material";
import React from "react";
import { Box } from '@mui/material';



function  Logo () {
    return(
        <>
            <IconButton
            color="inherit"
            aria-label="menu"
            size="large"
            sx={{

            }}
            >
                <StorefrontIcon
                sx={{fontSize: 30}}
                >
                </StorefrontIcon>
            </IconButton>

            <Typography 
            variant="h5" 
            color="inherit" 
            sx={{ 
                alignSelf: 'center',
                paddingRight:'16px'
            }}
            >
                STORE
            </Typography>
        </>
    );
}
export {Logo}