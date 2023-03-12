import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

import Form from "react-bootstrap/Form";

import "./CarouselBox.scss";
import Button from "react-bootstrap/Button";
import bitcoin from "../assets/img/bitcoin.svg";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Row from "react-bootstrap/Row";
import card from "../assets/img/first-screen-card.png";

class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <div class="container-fluid">
            <div class="carousel__textbox">
              <div class="carousel__title">
                <h2>обмін криптовалют разом з onebit</h2>
                <h5>
                  Проводячи угоду з onebit, ви отримуєте найвигідніші умови
                  обміну криптовалют
                </h5>
              </div>
              <ul>
                <div>
                  <li>
                    фіксація курсу після фінального підтвердження blockchain
                  </li>
                  <li>цілодобова робота. видача готівки з 9:00 до 19:00</li>
                </div>
                <div>
                  <li>гарантована безпека всіх операцій</li>
                  <li>мінімальна комісія $15</li>
                </div>
              </ul>
              {["right"].map((placement) => (
                <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                      <Popover.Header as="h3">{`Best `}</Popover.Header>
                      <Popover.Body>
                        <ul>
                          <li>
                            <strong>Bitcoin - </strong>$37,487.00
                          </li>
                          <li>
                            <strong>Ethereum - </strong>$2,476.85
                          </li>
                          <li>
                            <strong>Bitcoin - </strong>Cash$608.87
                          </li>
                        </ul>
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="secondary">топ крипто-фіатних пар</Button>
                </OverlayTrigger>
              ))}
            </div>
            <div class="form-img-box">
              <label>віддаю</label>
              <Row className="g-2">
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid">
                    <Form.Control placeholder="1000" type="text" />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel controlId="floatingSelectGrid">
                    <Form.Select aria-label="Floating label select example">
                      <option>
                        <img src={bitcoin} alt="logo" />
                        Bitcoin
                      </option>
                      <option value="1">
                        <img src={bitcoin} alt="logo" />
                        One
                      </option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>

              <label>отримаю</label>
              <Row className="g-2">
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid">
                    <Form.Control placeholder="1000" type="text" />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel controlId="floatingSelectGrid">
                    <Form.Select aria-label="Floating label select example">
                      <option>гривня</option>
                      <option value="1" One data-thumbnail="src={bitcoin}">
                        долар
                      </option>
                      <option value="2">евро</option>
                      <option value="3">песи</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>

              <div ClassName="group-course">
                <label>курс обміну</label>
                <label>1 USD = 39 UAH</label>
              </div>

              <Button type="select" variant="btn">
                відправити заявку
              </Button>

              <Carousel.Caption></Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="container-fluid">
            <div class="carousel__textbox">
              <div class="carousel__title">
                <h2>грошові перекази по Україні разом з Onebit</h2>
                <h5>
                  проводячи угоду з onebit, ви отримуєте найвигідніші умови
                  переказу коштів
                </h5>
              </div>
              <ul>
                <div>
                  <li>фіксація комісії після занесення до нашого відділення</li>
                </div>
                <div>
                  <li>гарантована безпека всіх операцій</li>
                </div>
              </ul>
              <Button className="slide-button" variant="secondary">
                створити заявку
              </Button>
            </div>

            <div class="form-image">
              <img href="/home" class="img-fluid" src={card} alt="logo" />
              <Carousel.Caption></Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="container-fluid">
            <div class="carousel__textbox">
              <div class="carousel__title">
                <h2>міжнародні перекази разом з onebit</h2>
                <h5>
                  проводячи угоду з onebit, ви отримуєте найвигідніші умови
                  переказу коштів
                </h5>
              </div>
              <ul>
                <div>
                  <li>
                    фіксація курсу після фінального підтвердження blockchain
                  </li>
                </div>
                <div>
                  <li>гарантована безпека всіх операцій</li>
                </div>
              </ul>
              <Button className="slide-button" variant="secondary">
                створити заявку
              </Button>
            </div>

            <div class="form-image">
              <img href="/home" class="img-fluid" src={card} alt="logo" />
              <Carousel.Caption></Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="container-fluid">
            <div class="carousel__textbox">
              <div class="carousel__title">
                <h2>SWIFT/SEPA $/€ платежі разом з onebit</h2>
                <h5>
                  проводячи угоду з onebit, ви отримуєте найвигідніші умови
                  переказу коштів
                </h5>
              </div>
              <ul>
                <div>
                  <li>
                    фіксація курсу після фінального підтвердження blockchain
                  </li>
                </div>
                <div>
                  <li>цілодобова робота. видача готівки з 9:00 до 19:00</li>
                </div>
              </ul>
              <Button className="slide-button" variant="secondary">
                створити заявку
              </Button>
            </div>

            <div class="form-image">
              <img href="/home" class="img-fluid" src={card} alt="logo" />
              <Carousel.Caption></Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselBox;
