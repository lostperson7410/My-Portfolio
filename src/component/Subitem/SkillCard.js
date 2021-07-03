import {Button, Container,Row,Col,ListGroup,Table,Card, Carousel} from 'react-bootstrap'
import thailand from '../../pic/thailand.png'
import './Mcard.css'

function SkillCard() {

    
    return(
        
      <div>
        <Card border="danger" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Danger Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
      </div>
      
    );
    
  }
  
  

  export default SkillCard;