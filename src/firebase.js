// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './firebaseconfig';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// Initializing the data base
const db = app.firestore();

const auth = firebase.auth();

export { db, auth };
