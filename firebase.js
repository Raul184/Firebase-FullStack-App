require("firebase/firestore");
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAT5wmpnY7AA_vImiJ5iR9Xl7JHyHCyPFw",
  authDomain: "posts-d421f.firebaseapp.com",
  databaseURL: "https://posts-d421f.firebaseio.com",
  projectId: "posts-d421f",
  storageBucket: "posts-d421f.appspot.com",
  messagingSenderId: "1027778535436",
  appId: "1:1027778535436:web:97a446877fd382ce37ce29"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;

