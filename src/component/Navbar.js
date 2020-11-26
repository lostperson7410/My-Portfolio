import {Container,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Main.css'

function Navbar() {
  return (
  <div>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
         <Link to="/Main">
         <a class="nav-link" >Home</a>  
         </Link> 
        </li>
        <li class="nav-item">
        <Link to="/Picture">
          <a class="nav-link" >Picture</a>
          </Link>
        </li>
        <li class="nav-item">
        <Link to="/Contact">
          <a class="nav-link" >Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
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

export default Navbar;


