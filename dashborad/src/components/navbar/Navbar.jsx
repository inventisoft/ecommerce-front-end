// import {
//   AppBar,
//   Box,
//   Button,
//   Drawer,
//   IconButton,
//   Toolbar,
//   Typography,
// } from "@mui/material";
// import NavaList from "./NavList";
// import { useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import { NavLink } from "react-router-dom";




// export default function Navbar({navArrayLinks}) {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             size="large"
//             onClick={() => setOpen(true)}
//             // sx={{display: {sx: 'flex', sm:'none'}}}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Admin
//           </Typography>
//               <Box sx={{display:{xs:'none', sm: 'block'}}}>      
//               {
//                 navArrayLinks.map((iten) => (
//                   <Button
//                     color="inherit"
//                     key={iten.title}
//                     component={NavLink}
//                     to={iten.path}  
//                   >
//                     {iten.title}
//                   </Button>
//               ))}
//               </Box>
//         </Toolbar>
//       </AppBar>
//       <Drawer open={open} anchor="left" onClose={() => setOpen(false)} 
//           // sx={{display: {sx: 'flex', sm:'none'}}}
//           >
//         <NavaList  navArrayLinks={navArrayLinks} NavLink={NavLink} setOpen={setOpen}/>
//       </Drawer>
//     </>
//   );
// }
