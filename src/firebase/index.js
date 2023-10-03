// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR2OwTNSHZ1RmzIPLzJO_8xikPgj_qUK8",
  authDomain: "marcheoutai.firebaseapp.com",
  projectId: "marcheoutai",
  storageBucket: "marcheoutai.appspot.com",
  messagingSenderId: "143444344041",
  appId: "1:143444344041:web:0dce919c575055fb7c0478",
  measurementId: "G-DVDY46TT34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
