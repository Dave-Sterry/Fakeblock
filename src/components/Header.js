import React from "react";
import Home from "./home";
import Messages from "./messages";
import Notifications from "./notifications";
import {Container, Row, Col} from "react-bootstrap"

function Header(){
  return(
    <React.Fragment>
      <Container>
        <Row>
          <Col>
          <h1>Fakeblock</h1>
          </Col>
          <Row>
            <Col>
              <Home />
            </Col>
            <Col>
              <Messages />
            </Col>
            <Col>
              <Notifications />
            </Col>
          </Row>
        </Row>
      </Container>
      </React.Fragment>
    );
}

export default Header;