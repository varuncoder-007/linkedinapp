import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBGksVPbC-LprMeuSWq_A_mPc2gkR4cWho",
    authDomain: "linkedin-2486a.firebaseapp.com",
    projectId: "linkedin-2486a",
    storageBucket: "linkedin-2486a.appspot.com",
    messagingSenderId: "681216188500",
    appId: "1:681216188500:web:3b812f24c40bbe7def8dc1"
  };

const firbebaseApp = firebase.initializeApp(firebaseConfig);
const db= firbebaseApp.firestore();
const auth= firebase.auth();

export {db, auth};