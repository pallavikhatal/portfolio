
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Projects.css';
import ecommerce from "../../assets/ecommerce.png";
import weather from "../../assets/weather_app.png";
import tictactoe from "../../assets/tictactoe.png";
import password from "../../assets/passgenerator.png";
import stopwatch from "../../assets/Stopwatch.png";
import vjone from "../../assets/vjone.png";
import people from "../../assets/people.png";
import softdrink from "../../assets/softdrink.png";

const projects = [
   {
    title: "VJONE Parivaar - Product Listing Dashboard",
    description: "Responsive product dashboard with filters for category, price, and rating using React.js.",
    image: vjone, 
    github: "https://github.com/pallavikhatal/productswebsite.git",
    live: "https://your-live-site-link.com" 
  },
  {
    title: "People Directory - Team Management App",
    description: "A modern team directory with search, filtering, and member CRUD operations, inspired by People.co UI using React.js .",
    image: people, 
    github: "https://github.com/pallavikhatal/PEOPLE.CO-website.git", 
    live: "https://your-live-site-link.com" 
  },
  {
    title: "SoftDrink Manager – Mini CRUD App",
    description: "Simple CRUD app to manage soft drinks using React with add/edit/delete functionality using React.js.",
    image: softdrink,
    github: "https://github.com/pallavikhatal/CRUD-Operation-in-Single-Page.git", 
    live: "https://your-live-site-link.com" 
  },
  {
    title: "E-commerce Website",
    description: "Built a responsive e-commerce platform with product filtering and cart functionality using JavaScript.",
    image: ecommerce,
    github: "https://github.com/pallavikhatal/Shoping-Cart.git",
    live: "#"
  },
  {
    title: "Weather App",
    description: "Displays current weather data by fetching from an API using JavaScript.",
    image: weather,
    github: "https://github.com/pallavikhatal/Weather-App.git",
    live: "#"
  },
  {
    title: "Tic Tac Toe",
    description: "Classic 2-player game built using HTML, CSS, and JavaScript.",
    image: tictactoe,
    github: "https://github.com/pallavikhatal/Tic-Tac-Toe-Game.git",
    live: "#"
  },
  {
    title: "Password Generator",
    description: "Generates strong random passwords with options for length and symbols using JavaScript.",
    image: password,
    github: "https://github.com/pallavikhatal/Password-Generator-App.git",
    live: "#"
  },
  {
    title: "Stopwatch",
    description: "Simple stopwatch app built with JavaScript and modern UI.",
    image: stopwatch,
    github: "https://github.com/pallavikhatal/Stopwatch-App.git",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <p className="project-subtitle">PROJECTS</p>
        <h2 className="text-center mb-5 section-title">My Projects</h2>
        <Row className="g-4">
          {projects.map((proj, idx) => (
            <Col md={4} sm={6} key={idx}>
              <div className="project-card">
                <img src={proj.image} alt={proj.title} className="project-img" />
                <div className="project-overlay">
                  <h5>{proj.title}</h5>
                  <p style={{fontSize:'0.9rem'}}>{proj.description}</p>
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
