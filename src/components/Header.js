import React from "react";
import Home from "./Home";
import Messages from "./Messages";
import Notifications from "./Notifications";
import {Container, Row, Col} from "react-bootstrap";

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