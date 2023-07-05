import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box"
import NavbarDesktop from "./components/NavbarDesktop";
import NavbarMobile from "./components/NavbarMobile";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
    const desktop = useMediaQuery('(min-width:961px');
    return (
        <>
            <CssBaseline />
            <Box sx={{ m: 2 }}>
                {
                    desktop? (
                        <NavbarDesktop />
                    ):
                    (
                        <NavbarMobile />
                    )
                }
            </Box>
        </>
    );
}
{/*

*/}

export default Navbar;