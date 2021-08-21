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
                    <NavLink to="/" activeStyle>
                        PLAYERS
                    </NavLink>
                    <NavLink to="/teams" activeStyle>
                        TEAMS
                    </NavLink>
                    <NavLink to="/games" activeStyle>
                        GAMES
                    </NavLink>
                    <NavLink to="/dashboard" activeStyle>
                        DASHBOARD
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;