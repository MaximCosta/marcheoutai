// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_MARCHEOUTAI_API_KEY,
  authDomain: process.env.REACT_APP_MARCHEOUTAI_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_MARCHEOUTAI_PROJECT_ID,
  storageBucket: process.env.REACT_APP_MARCHEOUTAI_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MARCHEOUTAI_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_MARCHEOUTAI_APP_ID,
  measurementId: process.env.REACT_APP_MARCHEOUTAI_MEASUREMENT_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);
