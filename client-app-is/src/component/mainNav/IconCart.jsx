import { Box, IconButton } from "@mui/material";
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

function  IconCart () {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
        padding: '0 4px'
        },
    }));
    return(
        <Box
        sx={{ 
            alignSelf: 'center' 
        }}>
            <IconButton
            color="inherit"
            aria-label="menu"
            size="large"
            sx={{

            }}
            >
                <StyledBadge 
                badgeContent={1} 
                color="secondary"
                >
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </Box>
    );
}
export {IconCart}

