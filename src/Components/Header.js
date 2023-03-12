import React, { Component } from "react";
import { Nav, NavDropdown, Button, Container, Navbar } from "react-bootstrap";
import logonav from "../assets/img/logo.svg";
import "./Header.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Buy from "../Pages/Buy";
import Howitswork from "../Pages/Howitswork";
import Wherefind from "../Pages/Wherefind";
import Services from "../Pages/Services";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="/home" className="group-logo">
              <img href="/home" src={logonav} alt="logo" />
              <NavDropdown title="україна" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">англия</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">германия</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">франция</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <NavDropdown title="послуги" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/buy">покупка</NavDropdown.Item>
                  <NavDropdown.Item href="/sale-usd">продажа</NavDropdown.Item>
                  <NavDropdown.Item href="/pre-sale">
                    предзаказ сейчас
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/money">валюта</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/how-its-work">як це працює</Nav.Link>
                <Nav.Link href="/contacts">де нас знайти</Nav.Link>
                <NavDropdown title="клієнтам" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/services">послугі</NavDropdown.Item>
                  <NavDropdown.Item href="/about-as">о нас</NavDropdown.Item>
                  <NavDropdown.Item href="/contacsts">
                    контакти
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">ua</Nav.Link>
                <Button variant="outline-info">реєстрація</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route exact path="/home" element={<Home />} />

            <Route exact path="/buy" element={<Buy />} />
            <Route exact path="/buy" element={<Buy />} />
            <Route exact path="/buy" element={<Buy />} />
            <Route exact path="/buy" element={<Buy />} />

            <Route exact path="/how-its-work" element={<Howitswork />} />
            <Route exact path="/contacts" element={<Wherefind />} />

            <Route exact path="/services" element={<Services />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/services" element={<Services />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default Header;
