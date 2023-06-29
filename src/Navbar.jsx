import Button from "@mui/material/Button";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
const Navbar = () => {
    return (
        <>
            <CssBaseline /> {/*implements the css baseline for normalization*/}
            <AppBar position="static">
                <Typography variant="h4">Soham&apos;s portfolio</Typography>
                <List>

                </List>
            </AppBar>
        </>
    );
}

export default Navbar;