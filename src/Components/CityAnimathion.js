import React, { Component } from "react";
import "./CityAnimation.scss";
import kharkiv from "../assets/img/kharkiv.png";
import { Container } from "react-bootstrap";

class CityAnimathion extends Component {
  render() {
    return (
      <div className="container-rain">
        <h2>де нас можна знайти</h2>
        <div className="mainbox">
          <h3>Харків</h3>
        </div>
        <div className="mainbox kyiv">
          <h3>Київ</h3>
        </div>
        <div className="mainbox odessa">
          <h3>Одеса</h3>
        </div>
        <div className="mainbox lviv">
          <h3>Львів</h3>
        </div>
      </div>
    );
  }
}

export default CityAnimathion;
