import React, { useEffect } from "react"
import firebase from 'firebase'
import 'firebase/storage'

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
/* Get DATA */

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
              <a href={user.avatar} alt={user.name}>{user.name}</a>
            </li>
          );
        })}
      </ul>


    </>
  );
}

export default Upload;


/*GET DATA 


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


        <ul>
        {users.map((user) => {
          return (
            <li key={user.name}>
              <a href={user.avatar} alt={user.name}>{user.name}</a>
            </li>
          );
        })}
      </ul>

*/