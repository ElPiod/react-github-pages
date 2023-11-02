import { useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

export default function NavBar(){


    //scroll function
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 50){
            setColor(true)
        } else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    return(
        <div className='navbar'>
             <Navbar expand="lg" className={color ? 'navbar navbar-bg' : 'navbar w-100 fixed-top fs-5'}>
                <Container className="container-fluid">
                    <Navbar.Brand href="#home" className="text-white fs-4">sunnyside</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav text-white">
                    <Nav>
                        <Nav.Link className="text-white" href="#about">About</Nav.Link>
                        <Nav.Link className="text-white" href="#services">Services</Nav.Link>
                        <Nav.Link className="text-white" href="#projects">Projects</Nav.Link>
                        <Nav.Link className="text-center contact" href="#contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}