import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { GitHub, LinkedIn, Twitter, Email } from "@mui/icons-material";
const Contact = () => {
    return (
        <>
            <CssBaseline />
            <Box sx={{ p: 2, m: 2, justifyContent: 'center' }}>
                <Paper sx={{ p: 3 }} elevation={5}>
                    <Typography variant="h4" gutterBottom>Contact Me!</Typography>
                    <Typography variant="h5">
                        Hey, I would like to get to know you guys. You can connect with me at my socials through the following links
                    </Typography>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <List sx={{ width:'50%',justifyContent: 'space-between' }}>
                            <ListItem alignItems="center">
                                <ListItemButton alignItems="center" component='a' href="https://github.com/coderboy53" sx={{ width: '4%', justifyContent:'center', height:'8%'  }}>
                                    <ListItemIcon sx={{justifyContent:'center'}}>
                                        <GitHub sx={{fontSize:70}}/>
                                    </ListItemIcon>
                                </ListItemButton>
                                <ListItemButton alignItems="center" component="a" href="https://twitter.com/coderboy53" sx={{ width: '4%', justifyContent:'center', height:'8%'  }}>
                                    <ListItemIcon sx={{justifyContent:'center'}}>
                                        <Twitter sx={{fontSize:70}}/>
                                    </ListItemIcon>
                                </ListItemButton>
                                <ListItemButton component="a" href="https://linkedin.com/in/soham-mitra53/" sx={{ width: '4%', justifyContent:'center', height:'8%' }}>
                                    <ListItemIcon sx={{justifyContent:'center'}}>
                                        <LinkedIn sx={{fontSize:70}}/>
                                    </ListItemIcon>
                                </ListItemButton>
                                <ListItemButton component="a" href="mailto:mitra.soham53@gmail.com" sx={{ width: '4%', justifyContent:'center', height:'8%' }}>
                                    <ListItemIcon sx={{justifyContent:'center'}}>
                                        <Email sx={{fontSize:70}}/>
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