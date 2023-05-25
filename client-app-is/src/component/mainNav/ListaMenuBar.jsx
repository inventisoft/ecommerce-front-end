import * as React from 'react';
import { Box, Button} from '@mui/material';

function  ListMenuBar ({anchorMenu,setAnchorMenu, pages}) {


    return(
        <Box 
        sx={{
        display: { xs: 'none', md: 'flex' } }}
        >
            {pages.map((page) => (
                <Button
                key={page}
                
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page}
                </Button>
            ))}
        </Box>
    );
}
export {ListMenuBar}