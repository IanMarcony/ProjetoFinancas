import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyCyOwY9ZWqaeKWAm51OkphJjRxBUn6Aios",
  authDomain: "project-financas-123b6.firebaseapp.com",
  databaseURL: "https://project-financas-123b6.firebaseio.com",
  projectId: "project-financas-123b6",
  storageBucket: "project-financas-123b6.appspot.com",
  messagingSenderId: "1017534639147",
  appId: "1:1017534639147:web:72fc47b3a55dbdc180ce6e",
  measurementId: "G-B5WV3HP6QK",
};

if (!firebase.apps) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

export default firebase;
