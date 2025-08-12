// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
// import './Navigation.css';

// function Navigation() {
//   return (
//     <Navbar expand="lg" className="custom-navbar fixed-top" bg='white'>
//       <Container>
//         <Navbar.Brand as={Link} to={"/"} className='logo'>PALLAVI<span style={{color:'#720e9e'}}>.</span></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto nav-links">
//             <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
//             <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
//             <Nav.Link as={Link} to={"/skills"}>Skills</Nav.Link>
//             <Nav.Link as={Link} to={"/projects"}>Projects</Nav.Link>
//             <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navigation;


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillHome } from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import './Navigation.css';

function Navigation() {
  return (
    <Navbar expand="lg" className="custom-navbar fixed-top" bg='white'>
      <Container>
        <Navbar.Brand href="#home" className='logo'>PALLAVI<span style={{color:'#720e9e'}}>.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="#home"><AiFillHome size={18} /> Home</Nav.Link>
            <Nav.Link href="#about"><FaInfoCircle size={18} /> About</Nav.Link>
            <Nav.Link href="#skills"><FaLightbulb size={18} /> Skills</Nav.Link>
            <Nav.Link href="#projects"><BsFillRocketTakeoffFill size={18} /> Projects</Nav.Link>
            <Nav.Link href="#contact"><FaPhone size={18} /> Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
