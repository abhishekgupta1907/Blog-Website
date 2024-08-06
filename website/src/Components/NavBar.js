// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// function NavBar() {
//     return (
//         <Navbar expand="lg" className="bg-body-tertiary">
//             <Container>
//                 <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link href="#home">Home</Nav.Link>
//                         <Nav.Link href="#link">Link</Nav.Link>
//                         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                             <NavDropdown.Item href="#action/3.1">
//                                 Action
//                             </NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.2">
//                                 Another action
//                             </NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.3">
//                                 Something
//                             </NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action/3.4">
//                                 Separated link
//                             </NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default NavBar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import {
    FaFacebook,
    FaDribbble,
    FaTwitter,
    FaBars,
    FaXmark,
} from "react-icons/fa6";
import ModalExample from "./ModalExample";
// import classNames from "classnames";
const NavBar = () => {
    const [isMenuOpen, SetMenuOpen] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleMenu = () => {
        SetMenuOpen(!isMenuOpen);
    };
    const NavBarItems = [
        { path: "/", link: "Home" },
        { path: "/services", link: "Services" },
        { path: "/about", link: "About" },
        { path: "/blogs", link: "Blogs" },
        { path: "/contact", link: "Contact" },
    ];
    //Modal Deatils
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <header className=" bg-blue-300 text-white fixed top-0 left-0 right-0">
            <nav className="px-4 py-2 max-w-7xl mx-auto flex justify-between items-center">
                <a
                    href="/"
                    className="text-xl font-bold text-white text-decoration-none"
                >
                    BLOG<span className="text-gray-400"> Website</span>
                </a>
                <ul className="md:flex gap-12 text-lg hidden m-2 " id="navbar">
                    {NavBarItems.map(({ path, link }) => (
                        <li
                            id="navlink"
                            className="text-decoration-none text-white"
                            key={path}
                        >
                            <NavLink
                                style={({
                                    isActive,
                                    isPending,
                                    isTransitioning,
                                }) => {
                                    return {
                                        textDecoration: isActive
                                            ? "underline"
                                            : "none", // Underline when active
                                        fontWeight: isActive
                                            ? "bold,underlined"
                                            : "",

                                        color: isActive ? "blue" : "white",
                                        viewTransitionName: isTransitioning
                                            ? "slide"
                                            : "",
                                    };
                                }}
                                to={path}
                            >
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="text-white lg:flex gap-4 items-center hidden">
                    <a href="/" className="text-white">
                        <FaFacebook className=" hover:text-blue-800" />
                    </a>
                    <a href="/" className="text-white">
                        <FaDribbble className=" hover:text-blue-800" />
                    </a>
                    <a href="/" className="text-white">
                        <FaTwitter className=" hover:text-blue-800" />
                    </a>
                    <button
                        onClick={openModal}
                        className="bg-blue-400 px-6 py-2 font-medium rounded hover:bg-slate-50 hover:text-blue-400 transition-all duration-400 ease-in"
                    >
                        Log In
                    </button>
                </div>
                {/* our Modal Componenet is here */}
                <ModalExample isOpen={isModalOpen} onClose={closeModal} />
                {/* Mobile menu Button, it will only display on mobile divices */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="cursor-pointer ">
                        {isMenuOpen ? (
                            <FaXmark className="w-5 h-5" />
                        ) : (
                            <FaBars className="w-5 h-5"></FaBars>
                        )}
                    </button>
                </div>
            </nav>
            {/* Menu Items for Mobile Items/*/}
            <div>
                <ul
                    className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14  bg-white  ${
                        isMenuOpen
                            ? "fixed top-0  left-0 w-full transition-all ease-out duration-200"
                            : "hidden"
                    }`}
                >
                    {NavBarItems.map(({ path, link }) => (
                        <li className="" key={path}>
                            <NavLink
                                onClick={toggleMenu}
                                style={({
                                    isActive,
                                    isPending,
                                    isTransitioning,
                                }) => {
                                    return {
                                        textDecoration: isActive
                                            ? "underline"
                                            : "none", // Underline when active
                                        fontWeight: isActive
                                            ? "bold,underlined"
                                            : "",

                                        color: isActive ? "blue" : "black",
                                        viewTransitionName: isTransitioning
                                            ? "slide"
                                            : "",
                                    };
                                }}
                                to={path}
                            >
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default NavBar;
