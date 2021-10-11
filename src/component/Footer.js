import { Col,Container,Row } from 'react-bootstrap'
import { MDBBtn, MDBIcon,MDBFooter,MDBContainer,MDBRow,MDBCol, } from 'mdb-react-ui-kit';
import { SocialIcon } from 'react-social-icons';
import {Button,Dropdown,Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap'

import './Contact.css'


function Footer() {

    return(
      <div className="ma1">
        <footer>
          <div class="bg">
            <Container class="bg">
              <Row>

              <Col>
                <Row >
                <SocialIcon url="https://facebook.com/kunchecksound" a href="#"/>
                <SocialIcon url="https://github.com/lostperson7410" a href="#"/>
                <SocialIcon url="https://instagram.com/apn_sfilm/"a href="#" />
                </Row>
              </Col>

              <Col>
                <p>Built my Apinun Saartiam.</p>
                <p>Copyright © by Apinun Saartiam.</p>
              </Col>


              </Row>

            </Container>
          </div>
        </footer>
      </div>
    );
    
  }
  export default Footer;


  /*
                <Col>
              <Navbar expand="sm">
                <Navbar>
                  <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link a href="#home" class = "Button">Home</Nav.Link>
                    <Nav.Link a href="#aboutme">About me</Nav.Link>
                    <Nav.Link a href="#skill">Skill</Nav.Link>
                    <Nav.Link a href="#contact">Contact</Nav.Link>
                  </Nav>
                  </Navbar>
                </Navbar>
              </Col>
  */ 