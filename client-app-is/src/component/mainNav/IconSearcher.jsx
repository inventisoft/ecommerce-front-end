import { Box, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";

function  IconSearcher () {
    return(
        <Box
        sx={{ display: { xs: 'flex', sm: 'none' } }}
        >
            <IconButton
            color="inherit"
            aria-label="menu"
            size="large"
            sx={{

            }}
            >
                <SearchIcon/>
            </IconButton>
        </Box>
    );
}
export {IconSearcher}
