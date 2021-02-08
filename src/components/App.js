import React from "react";
import Header from "./Header";
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Feedlist from './Feedlist';
import Profile from "./Profile";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Jumbotron>
          <Header />
        </Jumbotron>

        <Row>
          <Col>
        <Profile />
        </Col>
        <Col>
        <Feedlist />
        </Col>
        </Row>

      </Container>
    </React.Fragment>
  );
}

export default App;


// const App = () => (
//   <Container className="p-3">
//     <Jumbotron>
//       <h1 className="header">Welcome To React-Bootstrap</h1>
//       <ExampleToast>
//         We now have Toasts
//         <span role="img" aria-label="tada">
//           🎉
//         </span>
//       </ExampleToast>
//     </Jumbotron>
//   </Container>
// );
