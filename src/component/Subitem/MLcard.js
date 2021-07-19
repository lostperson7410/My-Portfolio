import {Button, Container,Row,Col,ListGroup,Table,Card, Carousel} from 'react-bootstrap'
import thailand from '../../pic/thailand.png'
import './Mcard.css'

import LanguageIcon from '@material-ui/icons/Language';
import WebIcon from '@material-ui/icons/Web';
import AndroidIcon from '@material-ui/icons/Android';
import StorageIcon from '@material-ui/icons/Storage';

function MLcard(props) {

    return(
        
      <div>
      <Card border="danger"   style={{ width: '18rem' }}>
        <Card.Header class = 'icons'>
          <div>
          <AndroidIcon style={{ fontSize: 60,color: 'white'}} className='sizeicon'/>
          </div>
          </Card.Header>
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
  
  export default MLcard;