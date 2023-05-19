import { Box} from "@mui/material";
import React from "react";
import { IconCart } from "./IconCart";
import { IconMenu } from "./IconMenu";
import { IconSearcher } from "./IconSearcher";
import { ListMenuBar } from "./ListaMenuBar";
import { ListMenuIcon } from "./ListMenuIcon";
import { Login } from "./Login";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { Price } from "./Price";
import { Searcher } from "./Searcher";

function  MainNav ({anchorElNav, setAnchorElNav, pages}) {
    return(
        <NavBar>
            <Box  sx={{ display: 'flex'}}>
                <IconMenu setAnchorElNav={setAnchorElNav}/>
                <Box sx={{display: { xs: 'none', sm: 'flex',md: 'flex'} }}>
                    <Logo/>
                </Box>
                <ListMenuBar setAnchorElNav={setAnchorElNav} pages={pages}/>
            </Box>
            <ListMenuIcon anchorElNav={anchorElNav} setAnchorElNav={setAnchorElNav} pages={pages}/>     
            <Box sx={{display: { xs: 'flex', sm: 'none'} }}>
                <Logo/>
            </Box>
            <Box
            sx={{ display: 'flex'}}
            >
                <IconSearcher/>
                <Searcher/>
                <Login/>
                <Price/>
                <IconCart/>
            </Box>
        </NavBar>
    )
}
export {MainNav}