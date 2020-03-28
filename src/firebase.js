import firebase from 'firebase/app'
import firestore from 'firebase/firestore'
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAZ74Ft3nuL1HkcnfYiz-XfQ1atUnS0gjg",
    authDomain: "crud-firebase-y-vuejs.firebaseapp.com",
    databaseURL: "https://crud-firebase-y-vuejs.firebaseio.com",
    projectId: "crud-firebase-y-vuejs",
    storageBucket: "crud-firebase-y-vuejs.appspot.com",
    messagingSenderId: "684776443116",
    appId: "1:684776443116:web:edfcea59f71a78b24269c9",
    measurementId: "G-RTJV1LN7W8"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

export default firebaseApp.firestore();