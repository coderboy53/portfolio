import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import ThemeToggleSwitch from './ThemeToggleSwitch';
import { List, ListItem, IconButton } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";

const NavbarMobile = () => {
    return (
        <>
            <AppBar position="static" sx={{ display: 'flex', justifyContent: 'space-between', border: 3, borderRadius: 5, width: '100%' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="" variant="h4">Soham&apos;s portfolio</Typography>
                    <List component="nav">
                        <ListItem component="div">
                            <ThemeToggleSwitch />
                            <IconButton>
                                <MenuIcon />
                            </IconButton>
                        </ListItem>
                    </List>
                </Toolbar>
            </AppBar>
            <Drawer open={open}>

            </Drawer>
        </>
    );
};

export default NavbarMobile;