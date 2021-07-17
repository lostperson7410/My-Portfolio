import Navbar from './Navbar'
import {Button, Container,Row,Col,ListGroup,Table,Card, Carousel} from 'react-bootstrap'
import profilepic from '../pic/001.jpg'
import thailand from '../pic/thailand.png'
import Mcard from './Subitem/Mcard'
import './Main.css'
import './Subitem/Mcard.css'

function Main() {


    return(
      <div >
        <Container>
          <Row class='center'>
            <Container class= 'center'>
            <div class='pic'>
            <img src={profilepic} className='box'/>
            </div>
            <div class='hyellow'>
            <h1>About Me</h1>
            </div>
            </Container>
          </Row>
          <Row>
            <Col>
            <Mcard/>
            </Col>
            <Col>

            <Row>
              
            </Row>

            </Col>
          </Row>
        </Container>
        
      </div>
      
    );
    
  }
  
  

  export default Main;
          /*  <Carousel>
                <Carousel.Item >
                  <img
                    src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/66476314_2261549130587928_2186526674542133248_o.jpg?_nc_cat=106&ccb=2&_nc_sid=05277f&_nc_eui2=AeHR8qqZwZvQYlawUrLjvuxxMYPqRkg58k8xg-pGSDnyT6ScvJa4cTV_hBHOLPmC4Hq-XWYYSBUaeY1qgMzYwwke&_nc_ohc=ELLYbbyEDGUAX-Jj8iu&_nc_ht=scontent.fbkk14-1.fna&oh=c2dfb7f5c926181d413c3b01a41521ef&oe=5FE3D08C"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/p960x960/116697157_3176683719074460_2162386733671845285_o.jpg?_nc_cat=110&ccb=2&_nc_sid=dd9801&_nc_eui2=AeEjJfnmnqtcxXE3sV3O8j3rYwRltxmuWNRjBGW3Ga5Y1FWvEqH_8UaIEuj0EU3axtEYv3v-JDFw5b89GH9UCB5D&_nc_ohc=hbV54IqzjXsAX8XkoTG&_nc_ht=scontent.fbkk10-1.fna&tp=6&oh=fe5fece191896a4c009d17afd0c615cd&oe=5FE52A0A"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/90884407_2787154294694073_2410059617557020672_n.jpg?_nc_cat=107&ccb=2&_nc_sid=05277f&_nc_eui2=AeExKFfo8bzRB3S4u0q3cyxMmqf1aHqbiDmap_VoepuIOTbR-OsZdlwBAsHhCFo6CYtGtV6yEPkGb4ItsjGim5HH&_nc_ohc=8qI2KIqnW6UAX-rxUpL&_nc_ht=scontent.fbkk10-1.fna&oh=bb90eee9952a7ee25d5f3970902f5955&oe=5FE4CE3C"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
           </Carousel>
  */