import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Header(){
    return (
        <Navbar expand="lg" className=" justify-content-between ">
          <Container>
            <Navbar.Brand href="#home" >CORPORATE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"className="justify-content-end" >
              <Nav >
                <Nav.Link href="#home" id="hero">Home</Nav.Link>
                <Nav.Link href="#About" id="about">About</Nav.Link>
                <Nav.Link href="#Services"  id="services">Services</Nav.Link>
                <Nav.Link href="#Work"  id="works">Works</Nav.Link>
                <Nav.Link href="#teams"  id="about">Teams</Nav.Link>
                <Nav.Link href="#testimonials"  id="about">Testimonials</Nav.Link>
                <Nav.Link href="#pricing"  id="about">Pricing</Nav.Link>
                <Nav.Link href="#blog"  id="about">Blog</Nav.Link>
                <Nav.Link href="#Contact"  id="about">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
   
      );
    

}