import { Box, FormControlLabel, FormGroup, IconButton, Menu, MenuItem, Switch, Toolbar, Typography, colors, useMediaQuery } from "@mui/material"
import { useTheme, styled, alpha } from "@mui/material/styles"
import MuiAppBar from "@mui/material/AppBar"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEffect, useState } from "react";
import { Colors } from '../styles/colors'
import InputBase from "@mui/material/InputBase";
import { useAppState } from "../state/appState";


const drawerWidth = 240;

const AppNabar = styled(MuiAppBar)(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer * 1,
  transition: theme.transitions.create(['width', 'margin'],{
    easing: theme.transitions.easing.shart,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'],{
      easing: theme.transitions.easing.shart,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.searchbar.borderRadius,
  backgroundColor: alpha(Colors.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(Colors.white, 0.25),
  },
  width:'100%',
  display: 'nome',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
    marginLeft: theme.spacing(1),
    width:'auto'
  }

}));

export default function AppBar(){

  const theme = useTheme()
  const [ drawer, setDrawer] = useState(false)

  return (
        <Box>
          <AppNabar position="fixed" open={drawer}>
          <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            edge="start"
            sx={{
              marginRight: 5,
              ...(drawer && { display: 'none'})
            }}
            onClick={()=> setDrawer( s => !s)}
          
          >
            <MenuIcon />
            </IconButton>
              <Typography variant="h6" 
                  sx={{fontFamily: "'Play', sans-serif", 
                        flexGrow: 1,
                        display: {sx:'none', sm: 'block'} 
                        
                      }}>
              Admin Store
              </Typography>
              <Search>
              {/* <SearchIconWrapper> */}
                  <SearchIcon />
              {/* </SearchIconWrapper> */}
              {/* <SttledSearchInputBase /> */}
            </Search>
            </Toolbar>
          </AppNabar>

        </Box>
  )
}