import React, { useEffect } from 'react'
import './Navigation.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Greeting } from '../models/greetingModel';

interface Props {
    greeting: Greeting,
}

const Navigation: React.FC<Props> = ({ greeting }) => {

    const componentName = "Navigation"
    useEffect(() => {
        console.log(`${greeting.text} ${componentName}`)
    }, [])

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='brand'><span>Q</span>Posts</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/posts" className='nav-link'>Posts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation