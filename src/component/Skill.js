import Navbar from './Navbar'
import {Button, Container,Row,Col,ListGroup,Table,Card, Carousel} from 'react-bootstrap'
import profilepic from '../pic/001.jpg'
import thailand from '../pic/thailand.png'
import SkillCard from './Subitem/SkillCard'
import DBcard from './Subitem/DBcard'
import MLcard from './Subitem/MLcard'

import './Skill.css'
import './Subitem/Mcard.css'
import LanguageIcon from '@material-ui/icons/Language';
import WebIcon from '@material-ui/icons/Web';
import AndroidIcon from '@material-ui/icons/Android';
import StorageIcon from '@material-ui/icons/Storage';
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
          <Row> 
            <Col className="SpaceContentSkills"><SkillCard title="WEB DEV" description="C,C+,Java,JavaScript,Dart,Fluter,React"/></Col>
            <Col className="SpaceContentSkills"><MLcard  title="MACHINE LEARING & IMAGE PROCESSING" description="Python,OpenCV,Tensorflow"/></Col>
            <Col className="SpaceContentSkills"><DBcard title="DATABASE & DEVOPS" description="MongaDB,Tensorflow"/></Col>
          </Row>
        </Container>
      </div>
      
    );
    
  }
  
  

  export default Skill;

  /* <MLcard  title="MACHINE LEARING & IMAGE PROCESSING" description="Python,OpenCV,Tensorflow"/> 
  
              <DBcard title="DATABASE & DEVOPS" description="MongaDB,Tensorflow"/>

  */