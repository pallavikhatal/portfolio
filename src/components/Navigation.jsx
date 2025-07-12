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
import './Navigation.css';

function Navigation() {
  return (
    <Navbar expand="lg" className="custom-navbar fixed-top" bg='white'>
      <Container>
        <Navbar.Brand href="#home" className='logo'>PALLAVI<span style={{color:'#720e9e'}}>.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
