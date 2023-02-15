import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

interface NavigationTextInterface {
  brand: string;
  link1: string;
  link2: string;
  dropdownOption1: string;
  dropdownOption2: string;
  btnText: string;
}

// Text for this component
const NavigationText: NavigationTextInterface = {
  brand: "ResumeYou",
  link1: "Feed",
  link2: "Options",
  dropdownOption1: "sample",
  dropdownOption2: "Sign Out",
  btnText: "Search",
};

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">{NavigationText.brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <Nav.Link href="#action1">{NavigationText.link1}</Nav.Link>
            <NavDropdown
              title={NavigationText.link2}
              id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                {NavigationText.dropdownOption1}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                {NavigationText.dropdownOption2}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">{NavigationText.btnText}</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
