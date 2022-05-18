import React from 'react';
import {Bars, Nav, NavLink, NavMenu} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img className={"img-fluid h-100"} src={"images/logo.svg"} alt={""}/>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/characters">Characters</NavLink>
                    <NavLink to="/favourite-characters">Favourites</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
