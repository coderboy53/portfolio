import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box"
import NavbarDesktop from "./components/NavbarDesktop";
import NavbarMobile from "./components/NavbarMobile";

const Navbar = () => {
    return (
        <>
            <CssBaseline />
            <Box sx={{ m: 2 }}>
                <NavbarMobile />
            </Box>
        </>
    );
}
{/*

*/}

export default Navbar;