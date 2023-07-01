import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar";
import NavbarDesktop from "./components/NavbarDesktop";
const Navbar = () => {
    return (
        <>
            <CssBaseline />
            <Box sx={{m: 2}}>
                <AppBar position="static" sx={{ display: 'flex', justifyContent: 'space-between', border: 3, borderRadius: 5, width: '100%'}}>
                    <NavbarDesktop />
                </AppBar>
            </Box>
        </>
    );
}
{/*

*/}

export default Navbar;