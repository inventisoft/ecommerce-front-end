import { Button } from "@mui/material";
import React from "react";

function  Login () {
    return(
        <Button      
        sx={{ my: 2, color: 'white', display: { xs: 'none', md: 'block' } }}
        >
            LOGIN
        </Button>
    );
}
export {Login}
