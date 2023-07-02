import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import navButtonComp from "../styles/navButtonComp";
import ThemeToggleSwitch from './ThemeToggleSwitch';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
const NavbarDesktop = () => {
    return (
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography color="" variant="h4">Soham&apos;s portfolio</Typography>
            <List component="nav">
                <ListItem component="div">
                    <ThemeToggleSwitch />
                    <ListItemButton component="a" href='/about' sx={navButtonComp} >
                        <ListItemText primary="About Me" />
                    </ListItemButton>
                    <ListItemButton component="a" href='/skills' sx={navButtonComp} >
                        <ListItemText primary="Skills" />
                    </ListItemButton>
                    <ListItemButton component='a' href='/projects' sx={navButtonComp}>
                        <ListItemText primary="Projects" />
                    </ListItemButton>
                    <ListItemButton component='a' href='/projects' sx={navButtonComp}>
                        <ListItemText primary="Contact Me!" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Toolbar>
    );
}
export default NavbarDesktop;