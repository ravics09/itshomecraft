import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <hr />
        <Row>
          <Col>
            <b>NEED HELP ?</b>
            <br />
            <br />
            <div>Delivery</div>
            <div>Return</div>
            <div>Payment Method</div>
            <div>Terms & Conditions</div>
            <div>Selling Issues</div>
          </Col>
          <Col>
            <b>About</b>
            <br />
            <br />
            <div>About IHC</div>
            <div>Stores</div>
            <div>The Creative Process</div>
          </Col>
          <Col>
            <b>Get In Touch</b>
            <br />
            <br />
            <div>Contact Us</div>
            <div>Become An Affiliate</div>
          </Col>
          <Col>
            <b>Social Contact</b>
          </Col>
          <Col>
            <b>Stay In Loop</b>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center pb-3">
            Copyright &copy; 2021 ItsHomeCraft
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
