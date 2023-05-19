import { Typography } from "@mui/material";
import React from "react";

function  Price () {
    return(
        <Typography 
            variant="button" 
            color="inherit" 
            sx={{ 
                alignSelf: 'center' ,
                display: { xs: 'none', md: 'flex' },
                paddingLeft:'16px'
            }}
        >
            BS. 0,00
        </Typography>
    );
}
export {Price}
