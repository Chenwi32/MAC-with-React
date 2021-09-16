// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4qjTqizMwoYccmwJ-_LOxEHXLqL4efX4",
  authDomain: "mafriculture.firebaseapp.com",
  projectId: "mafriculture",
  storageBucket: "mafriculture.appspot.com",
  messagingSenderId: "817562706849",
  appId: "1:817562706849:web:6aa5fb704c86603bed61e0",
  measurementId: "G-CBL90X5VN9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
