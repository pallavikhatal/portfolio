
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Skills.css';

const skillsData = [
    {
        category: "Frontend 💻",
        skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
    },
    {
        category: "Tools & Platforms 🛠️",
        skills: ["Git & GitHub", "VS Code", "Figma", "Postman"]
    },
    {
        category: "Database 🗄️",
        skills: ["MySQL", "MongoDB"]
    }
];

const Skills = () => {
    return (
        <section className="skills-section py-5" id="skills">
            <Container>
                <p className="skills-subtitle">SKILLS</p>
                <h2 className="section-title text-center mb-4">My Skills</h2>
                <Row className="justify-content-center">
                    {skillsData.map((group, idx) => (
                        <Col md={4} sm={6} xs={12} key={idx} className="mb-4 d-flex justify-content-center">
                            <Card className="skill-card h-100 shadow-sm" style={{width:'80%'}}>
                                <Card.Body>
                                    <Card.Title className="skill-category">{group.category}</Card.Title>
                                    <ul className="skill-list">
                                        {group.skills.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>
        </section>
    );
};

export default Skills;
