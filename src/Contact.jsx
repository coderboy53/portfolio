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
                    <Typography variant=""></Typography>
                </Paper>
            </Box>
        </>
    );
}

export default Contact;