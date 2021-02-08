import React from "react";
import Header from "./Header";
import './App.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Feedlist from './Feedlist';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Jumbotron>
          <Header />
        </Jumbotron>
        <Feedlist />
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
