import React from "react";
import { NavLink } from "react-router-dom"
import { Nav, NavItem } from 'reactstrap';

const MainNav = () => {
    return (
        <Nav className="sticky-top ms-3 me-3 mt-2 bg-light" tabs >
            <NavLink className={"navbar-brand me-4 mt-2"} to="/">
                STELLAR
            </NavLink>
            <NavItem>
                <NavLink className={"nav-link"} to="/exams">
                    Exams
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={"nav-link"} to="/leaderboard">
                    Leaderboards
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={"nav-link"} to="/docs">
                    Docs
                </NavLink>
            </NavItem>
        </Nav>
    )
}

export default MainNav;