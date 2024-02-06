import { Container, Nav, Navbar } from "react-bootstrap";
import './navbar.css';
import useSmoothScroll from "../../hooks/useSmoothScroll";

const NavbarComponent = () => {
  const smoothScrollToSection = useSmoothScroll();

  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-lg-end">
      <Container fluid className="p-0">
        <Navbar.Brand className="fw-bold ms-3" onClick={() => smoothScrollToSection('main')} style={{cursor:'pointer'}}>Dachi G.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="toggle-btn"/>
        <Navbar.Collapse id="navbarScroll" className="justify-content-lg-end">
          <div className="d-md-flex direction-column">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <div className="d-flex gap-3 components-div">
                <p onClick={() => smoothScrollToSection('main')}>Home</p>
                <p onClick={() => smoothScrollToSection('about')}>About Me</p>
                <p onClick={() => smoothScrollToSection('projects')}>Projects</p>
                <p onClick={() => smoothScrollToSection('contact')}>Contact me</p>
              </div>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
