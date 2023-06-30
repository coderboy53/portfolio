import Navbar from "./Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
const Contact = () => {
    return (
        <>
            <CssBaseline />
            <Navbar />
            <Box sx={{m:3}}>
                <Typography variant="h4">Contact Me!</Typography>
                <Paper elevation={2}>
                    <Typography variant="body1">
                        Hey, I would like to get to know you guys. You can connect with me on
                    </Typography>
                </Paper>
            </Box>
        </>
    );
}

export default Contact;