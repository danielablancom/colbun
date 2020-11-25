import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 


// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPA7ntZQ772ynEZiG_sy5efLJxsNfOrwc",
    authDomain: "colbun-16a6d.firebaseapp.com",
    databaseURL: "https://colbun-16a6d.firebaseio.com",
    projectId: "colbun-16a6d",
    storageBucket: "colbun-16a6d.appspot.com",
    messagingSenderId: "125399935962",
    appId: "1:125399935962:web:14b1bce49c3bb8ece42ee3"
  };



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth, firebase};