import { CssBaseline, Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
const Skills = () => {
    return (
        <>
            <CssBaseline />
            <Box sx={{ p: 2, m: 2, justifyContent: 'center' }}>
                <Grid container spacing={3}>
                    <Paper sx={{ p: 3 }} elevation={5}>
                        <Typography variant="h6">
                            Programming Languages
                        </Typography>
                    </Paper>
                </Grid>
            </Box>
        </>
    );

}

export default Skills;