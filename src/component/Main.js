import Navbar from './Navbar'
import {Button, Container,Row,Col,ListGroup} from 'react-bootstrap'
import profilepic from '../pic/001.jpg'
import './Main.css'
function Main() {

    return(
      <div>
          <Navbar/>
        <h1 class='center'>
            <p class= 'text'>Main</p>
        </h1>
        <div class='center'>
          <img src={profilepic}/>
        </div>

        <div class="container" class="center">
            <div class="row">
              <div class="col-sm">
                One of three columns
              </div>
              <div class="col-sm">
                One of three columns
              </div>g
              <div class="col-sm">
                One of three columns
              </div>
            </div>
         </div>


      </div>
      
    );
    
  }
  export default Main;
