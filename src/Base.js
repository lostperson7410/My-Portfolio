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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
