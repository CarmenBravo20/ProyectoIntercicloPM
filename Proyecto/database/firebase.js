import firebase from 'firebase/compat/app'; import 'firebase/compat/auth'; import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAW45adQ-i5GEpO-h4totRo6luqgrYVv7Q",
  authDomain: "proyectointerciclopm.firebaseapp.com",
  projectId: "proyectointerciclopm",
  storageBucket: "proyectointerciclopm.appspot.com",
  messagingSenderId: "899647107216",
  appId: "1:899647107216:web:90a30645113c95c3c42815"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
