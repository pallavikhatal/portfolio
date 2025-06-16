import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Projects.css';

const projects = [
  {
    title: "E-commerce Website",
    description: "Built a responsive e-commerce platform with product filtering and cart functionality.",
    image: "/images/ecommerce.png",
    github: "https://github.com/pallavikhatal/Shoping-Cart.git",
    live: "#"
  },
  {
    title: "Weather App",
    description: "Displays current weather data by fetching from an API.",
    image: "/images/weather_app.png",
    github: "https://github.com/pallavikhatal/Weather-App.git",
    live: "#"
  },
  {
    title: "Tic Tac Toe",
    description: "Classic 2-player game built using HTML, CSS, and JavaScript.",
    image: "/images/tictactoe.png",
    github: "https://github.com/pallavikhatal/Tic-Tac-Toe-Game.git",
    live: "#"
  },
  {
    title: "Password Generator",
    description: "Generates strong random passwords with options for length and symbols.",
    image: "/images/passgenerator.png",
    github: "https://github.com/pallavikhatal/Password-Generator-App.git",
    live: "#"
  },
  {
    title: "Stopwatch",
    description: "Simple stopwatch app built with JavaScript and modern UI.",
    image: "/images/Stopwatch.png",
    github: "https://github.com/pallavikhatal/Stopwatch-App.git",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <h2 className="text-center mb-5 section-title">Projects</h2>
        <Row className="g-4">
          {projects.map((proj, idx) => (
            <Col md={4} sm={6} key={idx}>
              <div className="project-card">
                <img src={proj.image} alt={proj.title} className="project-img" />
                <div className="project-overlay">
                  <h5>{proj.title}</h5>
                  <p>{proj.description}</p>
                  <div className="project-links">
                    <Button variant="outline-light" size="sm" href={proj.github} target="_blank">View on GitHub</Button>
                    <Button variant="primary" size="sm" href={proj.live} target="_blank">View Project</Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
