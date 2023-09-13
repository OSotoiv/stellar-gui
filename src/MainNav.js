import React from "react";
import { NavLink } from "react-router-dom"
import { Nav, NavItem } from 'reactstrap';

const MainNav = () => {
    return (
        <Nav className="ms-3 me-3 mt-2" tabs >
            <NavLink className={"navbar-brand me-4 mt-2"} to="/exams">
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
        </Nav>
    )
}

export default MainNav;