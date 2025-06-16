// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import pallaviimg from '../assets/pallaviimg.png'
// import './About.css';
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithubSquare } from "react-icons/fa";
// import { IoMdMailUnread } from "react-icons/io";
// import { IoCall } from "react-icons/io5";

// const About = () => {
//     return (
//         <section className="about-section py-5">
//             <Container>
//                 <Row className="align-items-center">
//                     {/* Left Image */}
//                     <Col md={6}>
//                         <img src={pallaviimg} alt="About Pallavi" className="img-fluid rounded" />
//                     </Col>

//                     {/* Right Content */}
//                     <Col md={6}>
//                         <p className="section-subtitle">MY INTRO</p>
//                         <h2 className="section-title">About Me</h2>
//                         <p className="section-description">
//                             Driven frontend developer with hands-on experience in modern web technologies, aiming to make a significant impact in a dynamic organization. Proficient in crafting responsive user interfaces using HTML, CSS and JavaScript, along with experience in React.js and Bootstrap. Committed to delivering high-quality code and innovative design solutions that enhance user experience. Eager to contribute to team success through collaboration and a strong work ethic, while continuously expanding technical skills and knowledge.
//                         </p>

//                         <div className="about-details">
//                             <p><strong>Name:</strong> <span>Pallavi Khatal</span></p>
//                             <p><strong>Date of birth:</strong> <span>June 21, 2002</span></p>
//                             <p><strong>Address:</strong> <span>Hinjawadi Phase 1, Pune</span></p>
//                             <p><strong>Email:</strong> <span>pallavikhatal2106@gmail.com</span></p>
//                             <p><strong>Phone:</strong> <span>+91 9552224460</span></p>
//                         </div>

//                         <div className="icon-group">
//                             <div className="icon-item">
//                                 <span className="divider">|</span>
//                                 <a href="mailto:pallavikhatal2106@gmail.com" className="icon-link" target="_blank" rel="noreferrer">
//                                     <span className="icon-circle"><IoMdMailUnread size={20} /></span>
//                                     <span className="icon-label">Email</span>
//                                 </a>
//                             </div>

//                             <div className="icon-item">
//                                 <span className="divider">|</span>
//                                 <a href="tel:+919552224460" className="icon-link" target="_blank" rel="noreferrer">
//                                     <span className="icon-circle"><IoCall size={20} /></span>
//                                     <span className="icon-label">Call</span>
//                                 </a>
//                             </div>

//                             <div className="icon-item">
//                                 <span className="divider">|</span>
//                                 <a href="https://github.com/pallavikhatal" className="icon-link" target="_blank" rel="noreferrer">
//                                     <span className="icon-circle"><FaGithubSquare size={20} /></span>
//                                     <span className="icon-label">GitHub</span>
//                                 </a>
//                             </div>

//                             <div className="icon-item">
//                                 <span className="divider">|</span>
//                                 <a href="https://linkedin.com/in/pallavi-khatal" className="icon-link" target="_blank" rel="noreferrer">
//                                     <span className="icon-circle"><FaLinkedin size={20} /></span>
//                                     <span className="icon-label">LinkedIn</span>
//                                 </a>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// };

// export default About;



import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import Skills from './Skills';

const About = () => {
    return (
        <section className="about-section py-5">
            <Container>
                <Row className="align-items-center container-row">
                   
                    <Col md={6} className="about-intro">
                        <p className="section-subtitle">MY INTRO</p>
                        <h2 className="section-title">About Me</h2>
                        <p className="section-description">
                            Passionate frontend developer skilled in <b> HTML, CSS, JavaScript, React.js, and Bootstrap</b>. I specialize in creating clean, responsive user interfaces that enhance user experience. Committed to writing high-quality code, collaborating effectively in teams, and continuously learning new technologies to grow as a developer.
                        </p>
                    </Col>

                   
                    <Col md={6} style={{paddingLeft:'3rem'}}>
                        <div className="about-details">
                            <p><strong>Name:</strong> <span>Pallavi Khatal</span></p>
                            <p><strong>Date of birth:</strong> <span>June 21, 2002</span></p>
                            <p><strong>Address:</strong> <span>Hinjawadi Phase 1, Pune</span></p>
                            <p><strong>Email:</strong> <span>pallavikhatal2106@gmail.com</span></p>
                            <p><strong>Phone:</strong> <span>+91 9552224460</span></p>
                        </div>

                        <div className="icon-group mt-4">
                            <div className="icon-item">
                                <span className="divider">|</span>
                                <a href="mailto:pallavikhatal2106@gmail.com" className="icon-link" target="_blank" rel="noreferrer">
                                    <span className="icon-circle"><IoMdMailUnread size={20} color='white' /></span>
                                    <span className="icon-label">Email</span>
                                </a>
                            </div>

                            <div className="icon-item">
                                <span className="divider">|</span>
                                <a href="tel:+919552224460" className="icon-link" target="_blank" rel="noreferrer">
                                    <span className="icon-circle"><IoCall size={20} color='white' /></span>
                                    <span className="icon-label">Call</span>
                                </a>
                            </div>

                            <div className="icon-item">
                                <span className="divider">|</span>
                                <a href="https://github.com/pallavikhatal" className="icon-link" target="_blank" rel="noreferrer">
                                    <span className="icon-circle"><FaGithubSquare size={20} color='white' /></span>
                                    <span className="icon-label">GitHub</span>
                                </a>
                            </div>

                            <div className="icon-item">
                                <span className="divider">|</span>
                                <a href="https://linkedin.com/in/pallavi-khatal" className="icon-link" target="_blank" rel="noreferrer">
                                    <span className="icon-circle"><FaLinkedin size={20} color='white' /></span>
                                    <span className="icon-label">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default About;
