import { Box} from "@mui/material";
import React from "react";
import { IconCart } from "./IconCart";
import { IconMenu } from "./IconMenu";
import { IconSearcher } from "./IconSearcher";
import { ListMenuBar } from "./ListaMenuBar";
import { Login } from "./Login";
import { Logo } from "./Logo";
import { Price } from "./Price";
import { Searcher } from "./Searcher";
import { AppBar} from "@mui/material";
import { Toolbar } from "@mui/material";

function  MainNav ({theme, anchorMenu, setAnchorMenu, pages,searchValue,setSearchValue}) {
    
    return(
        <AppBar
        position="static" 
        sx={{
            minWidth:'360px',
            boxSizing: "border-box",
            margin: '0',
            padding: '0 16px',
        }}
        >   
            <Toolbar
            disableGutters
            sx={{
                justifyContent: 'space-between',
                height:'100%',
                width:'100%',
                padding:'0',
                margin: '0',
            }}
            >
                <Box sx={{ display: 'flex'}}>
                    <IconMenu 
                    anchorMenu={anchorMenu} 
                    setAnchorMenu={setAnchorMenu} 
                    pages={pages}
                    />
                    <Box sx={{display: { xs: 'none', sm: 'flex',md: 'flex'} }}>
                        <Logo/>
                    </Box>
                    <ListMenuBar 
                    anchorMenu={anchorMenu} 
                    setAnchorMenu={setAnchorMenu} 
                    pages={pages}/>
                </Box>  
                <Box sx={{display: { xs: 'flex', sm: 'none'} }}>
                    <Logo/>
                </Box>
                <Box
                sx={{ display: 'flex'}}
                >
                    <IconSearcher/>
                    <Searcher
                    searchValue={searchValue} 
                    setSearchValue={setSearchValue}
                    />
                    <Login/>
                    <Price/>
                    <IconCart/>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export {MainNav}