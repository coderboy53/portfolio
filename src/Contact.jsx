import Navbar from "./Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
const Contact = () => {
    return (
        <>
            <CssBaseline />
            <Navbar />
            <Box sx={{ p: 2, m: 2, justifyContent: 'center' }}>
                <Paper sx={{ p: 3 }} elevation={5}>
                    <Typography variant="h4" gutterBottom>Contact Me!</Typography>
                    <Typography variant="h6">
                        Hey, I would like to get to know you guys. You can connect with me at my socials through the following links
                    </Typography>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <List sx={{ width:'50%',justifyContent: 'space-between' }}>
                            <ListItem alignItems="center">
                                <ListItemButton alignItems="center" component='a' href="https://github.com/coderboy53" sx={{ width: '2%', justifyContent:'center'  }}>
                                    <ListItemIcon sx={{justifyContent:'center'}}>
                                        <GitHub fontSize="large"/>
                                    </ListItemIcon>
                                </ListItemButton>
                                <ListItemButton alignItems="center" component="a" href="https://twitter.com/coderboy53" sx={{ width: '2%', justifyContent:'center'  }}>
                                    <ListItemIcon sx={{justifyContent:'center'}}>
                                        <Twitter fontSize="large"/>
                                    </ListItemIcon>
                                </ListItemButton>
                                <ListItemButton component="a" href="https://linkedin.com/in/soham-mitra53/" sx={{ width: '2%', justifyContent:'center' }}>
                                    <ListItemIcon sx={{justifyContent:'center'}}>
                                        <LinkedIn fontSize="large"/>
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Paper>
            </Box>
        </>
    );
}

export default Contact;