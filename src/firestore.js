import { initializeApp } from 'firebase/app'; // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxfq6hytPgW3HIaj24M0Nv4j-LJJStmnM",
  authDomain: "welldone-app-58642.firebaseapp.com",
  projectId: "welldone-app-58642",
  storageBucket: "welldone-app-58642.appspot.com",
  messagingSenderId: "36040764287",
  appId: "1:36040764287:web:c3bfc3f67f7ade77b8884a",
  measurementId: "G-C73FP5F2ND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);