// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: //input your own API Key Here,
  authDomain: "clone-874e4.firebaseapp.com",
  projectId: "clone-874e4",
  storageBucket: "clone-874e4.appspot.com",
  messagingSenderId: "1002530567990",
  appId: "1:1002530567990:web:d9810990eb1f25c5ba2597",
  measurementId: "G-WR5YZ5NDF4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
