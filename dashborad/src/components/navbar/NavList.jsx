// import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

// export default function NavaList({navArrayLinks, NavLink, setOpen}) {

//   return (

//     <Box sx={{width: 250}}>
//       <nav>
//         <List>
//           {
//             navArrayLinks.map(iten => (
//               <ListItem disablePadding key={iten.title}> 
//                 <ListItemButton  component={NavLink} to={iten.path} onClick={()=> setOpen(false)}>
//                     <ListItemText>{iten.title}</ListItemText>
//                     <ListItemIcon>{iten.icon}</ListItemIcon>
//                 </ListItemButton>
//               </ListItem>
//             ))
//           }
//         </List>
//       </nav>
//     </Box>
//   )
// }