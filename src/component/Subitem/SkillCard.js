import {Button, Container,Row,Col,ListGroup,Table,Card, Carousel} from 'react-bootstrap'
import thailand from '../../pic/thailand.png'
import './Mcard.css'


function SkillCard(props) {

    
    return(
        
      <div>
        <Card border="danger" style={{ width: '18rem' }}>
    <Card.Header>{props.icon}</Card.Header>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
      {props.description}
      </Card.Text>
    </Card.Body>
  </Card>
      </div>
      
    );
    
  }
  
  

  export default SkillCard;