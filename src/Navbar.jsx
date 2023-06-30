import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import navButtonComp from './styles/navButtonComp';
const Navbar = () => {
    return (
        <>
            <CssBaseline />
            <Box sx={{m: 2}}>
                <AppBar position="static" sx={{ display: 'flex', justifyContent: 'space-between', border: 3, borderRadius: 5, width: '100%'}}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography color="" variant="h4">Soham&apos;s portfolio</Typography>
                        <List component="nav">
                            <ListItem component="div">
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
                </AppBar>
            </Box>
        </>
    );
}
{/*

*/}

export default Navbar;