import {Button, Container,Dropdown,Navbar,Nav,NavDropdown,Form,FormControl,Col} from 'react-bootstrap'
import './App.css';
import firebase from 'firebase'
import 'firebase/storage'
import React ,{useEffect}from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';

import Upload from './Upload'
import Main from "./component/Main"
import Skill from "./component/Skill"
import Picture from "./component/Picture"
import Footer from "./component/Footer"
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
          <Route path="/Footer">
            <Footer />
          </Route>
        </Switch>
    </Router>
  );
}
/* FireBaseconfig */ 
/*
var firebaseConfig = {
  apiKey: "AIzaSyCo-fVeZ9CEws83Ek_po0pLUAuBFuS7dZI",
  authDomain: "portfolio-76fb2.firebaseapp.com",
  databaseURL: "https://portfolio-76fb2.firebaseio.com",
  projectId: "portfolio-76fb2",
  storageBucket: "portfolio-76fb2.appspot.com",
  messagingSenderId: "400998346493",
  appId: "1:400998346493:web:57f08938bde7fa5a0a5894",
  measurementId: "G-GE02HD3ZZX"
};
// Initialize Firebase

const app =  firebase.initializeApp(firebaseConfig)


const db = app.firestore();

function Upload() {
const [fileUrl, setFileUrl] = React.useState(null);
const [users, setUsers] = React.useState([]);

const onFileChange = async (e) => {
  const file = e.target.files[0];
  const storageRef = app.storage().ref();
  const fileRef = storageRef.child(file.name);
  await fileRef.put(file);
  setFileUrl(await fileRef.getDownloadURL());
};

const onSubmit = async (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  if (!username || !fileUrl) {
    return;
  }
  await db.collection("users").doc(username).set({
    name: username,
    avatar: fileUrl,
  });
};

useEffect(() => {
  const fetchUsers = async () => {
    const usersCollection = await db.collection("users").get();
    setUsers(
      usersCollection.docs.map((doc) => {
        return doc.data();
      })
    );
  };
  fetchUsers();
}, []);

return (
  <>
    <form onSubmit={onSubmit}>
      <input type="file" onChange={onFileChange} />
      <input type="text" name="username" placeholder="NAME" />
      <button>Submit</button>
    </form>
    <ul>
      {users.map((user) => {
        return (
          <li key={user.name}>
            <img width="100" height="100" src={user.avatar} alt={user.name} />
            <p>{user.name}</p>
          </li>
        );
      })}
    </ul>
  </>
);
}
*/
/*End fireBaseconfig */






function Welcome() {
  return (

  <div className ="App-header">
  <section class="#home" id='home'>
  <Navbar bg="light" expand="lg" sticky="top">
  <Navbar.Brand>
    <img src="https://scontent.fbkk17-1.fna.fbcdn.net/v/t1.6435-9/211006731_4179318902144265_2107520589350827328_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHMvG9h9M2Ppd4Eecbdao4RfEQnOXtjAXN8RCc5e2MBc-YHCTRBgSE1FnS2tDRBIavvBLBVhokHtstqkxjICDN4&_nc_ohc=ba71vkaabA0AX_Oo_2X&tn=n2oItdT4TCnaGnKk&_nc_ht=scontent.fbkk17-1.fna&oh=898a8bd522a31d93cc2a066005dc752c&oe=60F756E4" class ="logopic"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link a href="#home">Home</Nav.Link>
      <Nav.Link a href="#aboutme">About me</Nav.Link>
      <Nav.Link a href="#skill">Skill</Nav.Link>
      <Nav.Link a href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


    <div className="firstBG"></div>
    <div class= "bg-text">
    <LightSpeed cascade>
    <Container className="firstContainer">
      <h1 className="textG">
        Hello People!
        <br></br>
        I'm Apinun Saartiamm
      </h1>
      <div class="pic">
      
      </div>
    </Container>
    </LightSpeed>
    </div>
    </section>
    <section class="aboutme" id='aboutme'>
    <Main/>
    </section>
    <section class="skill" id='skill'>
    <Skill/>
    </section>
    <section class="contact" id='contact'>
    <Footer/>
    </section>




  
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
    ***************************************************************************
    <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
    ****************************************************************************
    */
  );
}

export default App;


