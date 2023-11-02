import { Nav } from "react-bootstrap"
import { Facebook, Instagram, Twitter, Pinterest } from "react-bootstrap-icons"

export default function Footer(){
    return(
        <div className="footer py-5" id="contact">
            <h1 className="fw-bold text-center text-success">sunnyside</h1>
            <div className="nav d-flex justify-content-center">
                <Nav>
                    <Nav.Link className="text-success"  href="#about">About</Nav.Link>
                    <Nav.Link className="text-success"  href="#services">Services</Nav.Link>
                    <Nav.Link className="text-success"  href="#projects">Projects</Nav.Link>
                </Nav>
            </div>
            <div className="footer-icon my-5 d-flex justify-content-center gap-4">
                <Facebook  className="text-success fs-3"/>
                <Instagram className="text-success fs-3"/>
                <Twitter   className="text-success fs-3"/>
                <Pinterest className="text-success fs-3"/>
            </div>
        </div>
    )
}