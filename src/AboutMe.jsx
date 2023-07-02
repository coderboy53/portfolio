import Navbar from "./Navbar";
import { CssBaseline, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
const AboutMe = () => {
    return (
        <>
            <CssBaseline />
            <Navbar />
            <Box sx={{p:2, m: 2 }}>
                <Grid container spacing={3} >
                    <Grid item md={7} lg={4}>
                        <Paper elevation={5} sx={{ p: 3 }}>
                            <img src="/IMG_20230328_121509.jpg" alt="my-image" width={'100%'} />
                        </Paper>
                    </Grid>
                    <Grid container item spacing={3} md lg direction={'column'}>
                        <Grid item >
                            <Paper elevation={5} sx={{ p: 5 }}>
                                <Typography variant="h4" gutterBottom>Hey there! This is me</Typography>
                                <Typography variant="subtitle1">Soham Mitra, an aspiring Software Developer</Typography>
                            </Paper>
                        </Grid>
                        <Grid item >
                            <Paper elevation={5} sx={{ p: 5 }}>
                                <Typography variant="h4" gutterBottom>About Me</Typography>
                                <Typography variant="body1">I am a Computer Science and Engineering Under Graduate. My interests in Computer Science are in the fields of Software Development, Web Development. I live in Kolkata, India. My hobbies are working out and listening to music.</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default AboutMe;