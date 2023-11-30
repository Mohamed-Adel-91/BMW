import { AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import "./NavBar.module.css";
import style from "./NavBar.module.css";
import { Nav, NavbarBrand } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Form, Input } from "reactstrap";
import Login from "../../Login/Login";

function NavBar() {
    const [isBlockVisible, setIsBlockVisible] = useState(false);
    const [isMoved, setIsMoved] = useState(false);

    const handleIconClick = () => {
        setIsBlockVisible(!isBlockVisible);
        setIsMoved(!isMoved);
    };
    return (
        <Nav className={style.navBar}>
            <Nav className={style.navDetails}>
                <Nav className={style.navLinks}>
                    <NavLink className={style.link} to="/Models">
                        Models
                    </NavLink>
                    <NavLink className={style.link} to="/Discover">
                        Discover
                    </NavLink>
                </Nav>
                {isBlockVisible && (
                    <Form
                        id="active"
                        className={`${style.searchBar}
                    ${isMoved ? "move-right" : ""}`}
                    >
                        <Input
                            name="search"
                            type="search"
                            className={`${style.search} 
                            `}
                            placeholder="Search..."
                        />
                    </Form>
                )}
                <Nav className={style.navIcons}>
                    <Link
                        className={style.icons}
                        onClick={handleIconClick}
                        id="moveButton"
                        to=""
                    >
                        <AiOutlineSearch />
                    </Link>
                    <Link className={style.icons} to="">
                        <CiLocationOn />
                    </Link>
                    <Link className={style.icons} to="">
                        <Login args={undefined} />
                    </Link>
                </Nav>
            </Nav>
            <NavbarBrand className={style.logo} href="/">
                <img
                    src="/public/img/BMW_White_Logo.svg.asset.1670245093434.svg"
                    width="45"
                    height="45"
                    className="d-inline-block align-top"
                    alt="logo"
                />
            </NavbarBrand>
        </Nav>
    );
}

export default NavBar;
