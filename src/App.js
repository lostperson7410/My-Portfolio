import {Button, Container,Dropdown,Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap'
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
import Contact from "./component/Contact"
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
          <Route path="/Contact">
            <Contact />
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
  <Navbar.Brand href="#">
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
      <h2>
       Hi ,I'm
      </h2>
      <h1 class = "text">
        Apinun Saartiamm
      </h1>
      <h2>
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
    <section class="contact" id='contact'>
    <Contact/>
    </section>




  
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


