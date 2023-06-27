import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navTab.css";

function NavTab() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link className="link" to={"/"}>
            Ygor Carmo
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Projects</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTab;
