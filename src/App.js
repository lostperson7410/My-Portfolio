import {Button, Container} from 'react-bootstrap'
import './App.css';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Main from "./component/Main"
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
    
<Navbar/>
    <div className="firstBG"></div>
    <div class= "bg-text">
    <Container className="firstContainer">
      <h2>
       Hi ,I'm
      </h2>
      <h1 class = "text">
        Apinun Saartiam
      </h1>
      <h2>
        Welcome to my Portfolio
      </h2>
      <div class="pic">
      
      </div>
      <Link to="/Main"><Button>ENTER</Button></Link>
    </Container>
    </div>

    <Main/>
  
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
    */
  );
}

export default App;


