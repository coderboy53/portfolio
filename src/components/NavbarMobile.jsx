import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import ThemeToggleSwitch from './ThemeToggleSwitch';
import { List, ListItem, IconButton } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";

const NavbarMobile = () => {
    return (
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
    );
};

export default NavbarMobile;