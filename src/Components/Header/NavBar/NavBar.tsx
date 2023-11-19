import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import "./NavBar.css";

interface NavBarProps {
    onModelLinkClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

function NavBar({ onModelLinkClick }: NavBarProps) {
    return (
        <>
            <div className='nav navHome'>
                <div className="container">
                    <div className="row">
                        <div className="col navLinkHome">
                            {/* Pass the onModelLinkClick function to the Models link */}
                            <Nav.Link className='linkHome' onClick={onModelLinkClick} href="Models">
                                Models
                            </Nav.Link>
                            <Nav.Link className='linkHome' href="Discover">
                                Discover
                            </Nav.Link>
                        </div>
                        <div className="col navIconsHome">
                            <Navbar.Brand className='icons' href="" style={{ fontSize: "30px" }}>
                                <AiOutlineSearch />
                            </Navbar.Brand>
                            <Navbar.Brand className='icons' href="" style={{ fontSize: "30px" }}>
                                <CiLocationOn />
                            </Navbar.Brand>
                            <Navbar.Brand className='logo' href="Home">
                                <img
                                    src="/public/img/BMW_White_Logo.svg.asset.1670245093434.svg"
                                    width="45"
                                    height="45"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Navbar.Brand>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;




// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { AiOutlineSearch } from "react-icons/ai";
// import { CiLocationOn } from "react-icons/ci";
// import "./NavBar.css"


// function NavBar() {
//     return (
//         <>
//             <div className='nav navHome'>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col navLinkHome">
//                             <Nav.Link className='linkHome' href="Models">Models</Nav.Link>
//                             <Nav.Link className='linkHome' href="Discover">Discover</Nav.Link>
//                         </div>
//                         <div className="col navIconsHome">
//                             <Navbar.Brand className='icons' href="" style={{ fontSize: "30px" }}>
//                                 <AiOutlineSearch />
//                             </Navbar.Brand>
//                             <Navbar.Brand className='icons' href="" style={{ fontSize: "30px" }}>
//                                 <CiLocationOn />
//                             </Navbar.Brand>
//                             <Navbar.Brand className='logo' href="Home">
//                                 <img
//                                     src="/public/img/BMW_White_Logo.svg.asset.1670245093434.svg"
//                                     width="45"
//                                     height="45"
//                                     className="d-inline-block align-top"
//                                     alt="React Bootstrap logo"
//                                 />
//                             </Navbar.Brand>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default NavBar;