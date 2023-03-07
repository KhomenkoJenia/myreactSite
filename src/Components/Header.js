import React, { Component } from "react";
import { Nav, NavDropdown, Button, Container, Navbar } from "react-bootstrap";
import logonav from "../assets/img/logo.svg";

import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand className="group-logo">
            <img href="#home" src={logonav} alt="logo" />
            <NavDropdown title="україна" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">english</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">doitch</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">france</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <NavDropdown title="послуги" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">покупка</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">продажа</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  предзаказ сейчас
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">валюта</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">як це працює</Nav.Link>
              <Nav.Link href="#pricing">де нас знайти</Nav.Link>
              <NavDropdown title="клієнтам" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">послугі</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">о нас</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">контакти</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">ua</Nav.Link>
              <Button variant="outline-info">реєстрація</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
