import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB8rAhh04DYYc9nYZ-znYJsZSV5tf5bT_4",
    authDomain: "challenge-8907a.firebaseapp.com",
    projectId: "challenge-8907a",
    storageBucket: "challenge-8907a.appspot.com",
    messagingSenderId: "1072214537234",
    appId: "1:1072214537234:web:43a5aa627d92c7ee6c54cb",
    measurementid: "G-QG5L57BW42"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};