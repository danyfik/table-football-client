import React from "react";

import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to="/">
                        PLAYERS
                    </NavLink>
                    <NavLink to="/teams">
                        TEAMS
                    </NavLink>
                    <NavLink to="/games">
                        GAMES
                    </NavLink>
                    <NavLink to="/dashboard">
                        DASHBOARD
                    </NavLink>
                    <NavLink to="/history">
                        HISTORY
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;