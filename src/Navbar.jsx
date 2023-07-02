import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box"
import NavbarDesktop from "./components/NavbarDesktop";
import NavbarMobile from "./components/NavbarMobile";
import { useState } from "react";

const Navbar = () => {
    return (
        <>
            <CssBaseline />
            <Box sx={{m: 2}}>
                <NavbarDesktop />
            </Box>
        </>
    );
}
{/*

*/}

export default Navbar;