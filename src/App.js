import {Button, Container,Dropdown,Navbar,Nav,NavDropdown,Form,FormControl,Col} from 'react-bootstrap'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Main from "./component/Main"
import Skill from "./component/Skill"
import Picture from "./component/Picture"
import Footer from "./component/Footer"
import profilepic from './pic/001.jpg'

/*
function Main() {

  return(
    <div>
      <h1>
        <Navbar/>
      </h1>
    </div>
    
  );
  
}
*/

function App(){
  return(
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/Main">
            <Main />
          </Route>
          <Route path="/Picture">
            <Picture />
          </Route>
          <Route path="/Footer">
            <Footer />
          </Route>
        </Switch>
    </Router>
  );
}
function Welcome() {
  return (

  <div className ="App-header">
  <section class="#home" id='home'>
  <Navbar bg="light" expand="lg" sticky="top">
  <Navbar.Brand>
    <img src={profilepic} class ="logopic"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link a href="#home">Home</Nav.Link>
      <Nav.Link a href="#aboutme">About me</Nav.Link>
      <Nav.Link a href="#skill">Skill</Nav.Link>
      <Nav.Link a href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


    <div className="firstBG"></div>
    <div class= "bg-text">
    <Container className="firstContainer">
      <h1 className="textG">
        Hello People!
        <br></br>
        I'm Apinun Saartiamm
      </h1>
      <h2 className="textG">
        Welcome to my Portfolio
      </h2>
      <div class="pic">
      
      </div>
    </Container>
    </div>
    </section>
    <section class="aboutme" id='aboutme'>
    <Main/>
    </section>
    <section class="skill" id='skill'>
    <Skill/>
    </section>

    <Footer/>




  
  </div>
  

  
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    ***************************************************************************
    <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
    ****************************************************************************
    */
  );
}

export default App;


