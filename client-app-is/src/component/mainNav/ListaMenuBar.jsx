import * as React from 'react';
import { Box, Button} from '@mui/material';

function  ListMenuBar ({setAnchorElNav, pages}) {
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return(
        <Box 
        sx={{
        display: { xs: 'none', md: 'flex' } }}
        >
            {pages.map((page) => (
                <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page}
                </Button>
            ))} 
        </Box>
    );
}
export {ListMenuBar}