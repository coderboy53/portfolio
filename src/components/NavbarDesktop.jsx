import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import navButtonComp from "../styles/navButtonComp";
import ThemeToggleSwitch from '../assets/ThemeToggleSwitch';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import AppBar from "@mui/material/AppBar";
import themeSetter from "../assets/themeSetter";
import { Cookies } from "react-cookie";
const NavbarDesktop = () => {
    const cookies = new Cookies;
    let set = cookies.get('theme');
    return (
        <>
            <AppBar position="static" sx={{ display: 'flex', justifyContent: 'space-between', border: 3, borderRadius: 5, width: '100%' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="" variant="h4">Sam&apos;s portfolio</Typography>
                    <List component="nav">
                        <ListItem component="div">
                            <ThemeToggleSwitch onChange={themeSetter} checked={set==='dark'}/>
                            <ListItemButton component="a" href='./about' sx={navButtonComp} >
                                <ListItemText primary="About Me" />
                            </ListItemButton>
                            <ListItemButton component="a" href='./skills' sx={navButtonComp} >
                                <ListItemText primary="Skills" />
                            </ListItemButton>
                            <ListItemButton component='a' href='./projects' sx={navButtonComp}>
                                <ListItemText primary="Projects" />
                            </ListItemButton>
                            <ListItemButton component='a' href='./contact' sx={navButtonComp}>
                                <ListItemText primary="Contact Me!" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Toolbar>
            </AppBar>
        </>
    );
}
export default NavbarDesktop;

{/*

*/
}