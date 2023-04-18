import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

export default function NavaListDracer() {

  return (

    <Box sx={{width: 250}}>
      <nav>
        <List>
          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="inbox" />
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav>
        <List>
          <ListItem disablePadding> 
            <ListItemButton component='a' href="#Trahs">
                <ListItemText>Trahs</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <nav>
        <List>
          <ListItem disablePadding> 
            <ListItemButton component='a' href="#Span">
                <ListItemText>Spam</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>

    </Box>
  )
}