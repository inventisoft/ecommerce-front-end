
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from "@mui/material/Typography";
import { MenuList } from '@mui/material';




function  ListMenuIcon ({anchorElNav,setAnchorElNav, pages}) {
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return(
        <Menu    
            sx={{
            display: { xs: 'block', md: 'none',borderRadius:0},
            top:'-60px',
            left:'-16px',
            transition: '0.5s',
            }}
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
        >
            {pages.map((page) => (
            <MenuList>
                <Divider />
                <MenuItem  sx={{
                    width:'300px',
                    maxWidth:'100%',
                    
                }} key={page} onClick={handleCloseNavMenu}>
                    
                    <Typography textAlign="center">{page}</Typography>
                </MenuItem>
            </MenuList>
            ))}
        </Menu>
    );
}
export {ListMenuIcon}