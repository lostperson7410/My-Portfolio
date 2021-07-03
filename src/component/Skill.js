import Navbar from './Navbar'
import {Button, Container,Row,Col,ListGroup,Table,Card, Carousel} from 'react-bootstrap'
import profilepic from '../pic/001.jpg'
import thailand from '../pic/thailand.png'
import SkillCard from './Subitem/SkillCard'
import './Skill.css'
import './Subitem/Mcard.css'

function Skill() {

//Row object max 3 item

    return(
      <div >
        <Container>
          
          <Row className="center">
            <div class='textColor'>
              <h1>My Skill</h1>    
            </div>
          </Row>
        </Container>
        <Container>
          <Row className="SpaceContent"> 
            <SkillCard/>
            <SkillCard/>
            <SkillCard/>
          </Row>
        </Container>
        
      </div>
      
    );
    
  }
  
  

  export default Skill;