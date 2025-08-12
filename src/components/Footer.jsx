
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-light py-4 mt-5" style={{backgroundColor:"#720e9e"}}>
      <Container>
        <Row className="align-items-center text-center text-md-start">
         
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Pallavi Khatal. All Rights Reserved.
            </p>
          </Col>

          
          <Col md={6} className="text-md-end">
            <a
              href="https://github.com/pallavikhatal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-3 fs-5"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/pallavi-khatal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-3 fs-5"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:pallavikhatal2106@gmail.com"
              target="_blank" 
              rel="noreferrer"
              className="text-light fs-5"
            >
              <FaEnvelope />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
