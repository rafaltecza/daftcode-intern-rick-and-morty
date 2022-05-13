import React from 'react';
import {Bars, Nav, NavBtnLink, NavLink, NavMenu} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Rick & Morty</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/characters">Characters</NavLink>
                    <NavLink to="/favourite-characters">Favourites</NavLink>
                </NavMenu>
                {/*<NavBtn>*/}
                {/*    <NavBtnLink to="/sign-in">Sign In</NavBtnLink>*/}
                {/*</NavBtn>*/}
            </Nav>
        </>
    );
};

export default Navbar;
