// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDaB3mWLfJuUmyJCD2BeBK977aue_ntpTk",
  authDomain: "signup-4df65.firebaseapp.com",
  projectId: "signup-4df65",
  storageBucket: "signup-4df65.appspot.com",
  messagingSenderId: "8025717378",
  appId: "1:8025717378:web:6cdd0ab5aae55f9703d29b",
  measurementId: "G-S30381606E"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };