import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";

import * as routes from "./../../constants/routes";
import headerStyle from "./style.module.css";

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const [sticky, setSticky] = useState("");

  const callFun = () => {
    if (window.scrollY >= 70) {
      setColorchange(true);
      setSticky("top");
    } else {
      setColorchange(false);
      setSticky("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", callFun);
  });

  return (
    <>
      <Container>
        <div className={headerStyle.header}>
          <h4 className={headerStyle.title}>Its Home Craft</h4>
        </div>
        <Navbar
          collapseOnSelect
          fixed={sticky}
          expand="sm"
          className={headerStyle.navbar}
          id="myNavbar"
        >
          <Container>
            <Navbar.Brand as={NavLink} to="/" className={headerStyle.navbrand}>
              IHC
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={NavLink} to="/" className={headerStyle.navLink}>
                  New
                </Nav.Link>
                <Nav.Link as={NavLink} to="/" className={headerStyle.navLink}>
                  Gift
                </Nav.Link>
                <Nav.Link as={NavLink} to="/" className={headerStyle.navLink}>
                  Trending
                </Nav.Link>
                <NavDropdown title="Categories" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Mom Item</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Metal Item
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Wooden Item
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Button variant="primary" size="sm" as={NavLink} to="/signin">
                SignIn
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
