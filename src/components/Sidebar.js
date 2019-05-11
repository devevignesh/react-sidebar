import React from 'react';
import { NavItem, NavLink, Nav } from 'reactstrap';
import { FaTimesCircle, FaBriefcase, FaMoneyBill, FaAddressBook, FaAddressCard } from "react-icons/fa";

const navList = [
    { icon: <FaBriefcase />, link: "#", menu: "Menu 1" },
    { icon: <FaMoneyBill />, link: "#", menu: "Menu 2" },
    { icon: <FaAddressBook />, link: "#", menu: "Menu 3" },
    { icon: <FaAddressCard />, link: "#", menu: "Menu 4" }
];

const SidebarComponent = props => {

    return (
        <div className={`sidebar ${props.isOpen ? 'sidebar-visible' : ''}`}>
            <FaTimesCircle className="sidebar__close" onClick={props.toggle} />
            <div className="sidebar__menu">
                <Nav vertical className="list-unstyled pb-3">
                    {navList.map((nav, i) => (
                        <NavItem key={i}>
                            <NavLink href={nav.link}>
                                <span className="mr-3">{nav.icon}</span> {nav.menu}
                            </NavLink>
                        </NavItem>
                    ))}
                </Nav>
            </div>
        </div>
    );
}

export default SidebarComponent;
