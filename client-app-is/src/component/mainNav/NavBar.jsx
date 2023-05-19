
import { AppBar} from "@mui/material";
import { Toolbar } from "@mui/material";

function  NavBar (props) {
    return(
        <AppBar
        position="static" 
        sx={{
            height:'72px',
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
            }}
            >
                {props.children}
            </Toolbar>
        </AppBar>
    )
}
export {NavBar}