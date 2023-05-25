import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { Box } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemText, SwipeableDrawer } from '@mui/material';



function  IconMenu ({anchorMenu,setAnchorMenu, pages}) {
    
    const toggleDrawer = (open) => (event) => {
        if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return
        }
        setAnchorMenu(open);
    }
    const list = () => (
        <Box
            sx={{ width:300 }}
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
            <Box
            sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' }, alignSelf: 'center' }}>
                <IconButton 
                    size="large"
                    onClick={toggleDrawer(true)}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
            </Box>
            <SwipeableDrawer
            anchor={'left'}
            open={anchorMenu}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            >
                {list()}
            </SwipeableDrawer>
        
        </>
    )
}
export {IconMenu}

