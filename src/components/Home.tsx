import React, { useEffect } from 'react'
import './Home.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Greeting } from '../models/greetingModel';
import { Link } from 'react-router-dom'
import { GiClick } from 'react-icons/gi'

interface Props {
    greeting: Greeting,
}

const Home: React.FC<Props> = ({ greeting }) => {

    const componentName = "Home"
    useEffect(() => {
        console.log(`${greeting.text} ${componentName}`)
    }, [])

    return (
        <Container>
            <Row>
                <Col className='circle-container'>
                    <Link to="/posts">
                        <div className='circle'>
                            <p>Q<span><GiClick /></span></p>
                        </div>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Home