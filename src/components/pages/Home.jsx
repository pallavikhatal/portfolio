import { Button } from 'react-bootstrap'
import { Col, Container, Row } from 'react-bootstrap'
import pallaviimg from '../../assets/pallaviimg.png'

import './Home.css';

const Home = () => {

  return (
    <section className='hero-section'>
        <Container fluid>
            <Row className='align-items-center min-vh-100'>
                <Col md={6} className='text-center text-md-start py-5' style={{paddingLeft:'5rem'}}>
                    <p className='subtitle'>HELLO! THIS IS PALLAVI</p>
                    <h1 className='hero-title'>
                        Creative <span className='highlight'>Frontend</span><br/> Developer.
                    </h1>
                    <div className='mt-4'>
                        <Button variant="outline-dark" className='me-3 custom-btn' onClick={() => window.location.href = '#about'}>
                        About Me
                        </Button>
                        <a href="/public/Pallavi Vijay Khatal Resume.pdf" download className="btn btn-outline-secondary custom-btn-cv">
                        Download CV
                        </a>
                    </div>
                </Col>

                <Col md={6} className='hero-image-container'>
                    <img src={pallaviimg} alt="pallavi-image" className='img-fluid hero-img' />
                </Col>
            </Row>
        </Container>

    </section>   
  )
}

export default Home
