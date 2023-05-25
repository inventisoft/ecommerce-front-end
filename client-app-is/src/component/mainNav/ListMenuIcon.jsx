
import * as React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer } from '@mui/material';




function  ListMenuIcon ({anchorMenu, setAnchorMenu, pages}) {
    
    const toggleDrawer = (open) => (event) => {
        if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
    ) {
        return;
    }

    setAnchorMenu({ ...anchorMenu, open });
    }

    const list = () => (
    <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
    >
        <List>
            {pages.map((page) => (
            <ListItem key={page} disablePadding>
                <ListItemButton>
                    <ListItemText primary={page} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
    </Box>
    );
    return(
    <>
        <SwipeableDrawer
            anchor={'left'}
            open={anchorMenu}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
        >
        {list()}
        </SwipeableDrawer>
        {/*<Menu    
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
            </Menu>*/}
    </>
        
    );
}
export {ListMenuIcon}