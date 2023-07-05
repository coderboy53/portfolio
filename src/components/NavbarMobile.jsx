import { useState } from "react";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import ThemeToggleSwitch from '../assets/ThemeToggleSwitch';
import { List, ListItem, IconButton, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import themeSetter from "../assets/themeSetter";
import { Cookies } from "react-cookie";

const NavbarMobile = () => {
    const [drawer, setDrawer] = useState(false);
    const cookie = new Cookies;
    let set = cookie.get('theme');
    return (
        <>
            <AppBar position="static" sx={{ display: 'flex', justifyContent: 'space-between', border: 3, borderRadius: 5, width: '100%' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="" variant="h5">Soham&apos;s portfolio</Typography>
                    <List component="nav">
                        <ListItem component="div">
                            <ThemeToggleSwitch onChange={themeSetter} checked={set==='dark'}/>
                            {/* eslint-disable-next-line no-unused-vars */}
                            <IconButton onClick={(_e) => { setDrawer((prev) => !prev) }}>
                                <MenuIcon />
                            </IconButton>
                        </ListItem>
                    </List>
                </Toolbar>
            </AppBar>
            {/* eslint-disable-next-line no-unused-vars */}
            <Drawer open={drawer} anchor="right" variant="temporary" onClose={(_e) => { setDrawer((prev) => !prev) }}>
                <List >
                    <ListItem>
                        <ListItemButton component="a" href="./about">
                            <ListItemText>About Me</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component="a" href="./skills">
                            <ListItemText>Skills</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component="a" href="./projects">
                            <ListItemText>Projects</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component="a" href="./contact">
                            <ListItemText>Contact Me!</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default NavbarMobile;