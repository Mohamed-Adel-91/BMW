import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

function NavBar() {
    return (
    <>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Nav className="me-auto">
            <Nav.Link href="#Models">Models</Nav.Link>
            <Nav.Link href="#Discover">Discover</Nav.Link>
            </Nav>
        </Container>
        <Navbar className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#search">
            <AiOutlineSearch/>
            </Navbar.Brand>
            <Navbar.Brand href="#location">
            <CiLocationOn/>
            </Navbar.Brand>
            <Navbar.Brand href="#home">
                <img
                src="/src/assets/img/BMW_Grey-Colour_RGB.SVG.asset.1697707041685.SVG"
                width="45"
                height="45"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
            </Navbar.Brand>
        </Container>
        </Navbar>
    </Navbar>
    </>
    );
}

export default NavBar;