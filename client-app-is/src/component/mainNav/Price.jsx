import { Typography } from "@mui/material";
import React from "react";

function  Price () {
    return(
        <Typography 
            fontSize={"14px"}
            color="inherit" 
            sx={{ 
                alignSelf: 'center' ,
                display: { xs: 'none', md: 'inline-block' },
                paddingLeft:'16px'
            }}
        >
            BS.0,00
        </Typography>
    );
}
export {Price}
