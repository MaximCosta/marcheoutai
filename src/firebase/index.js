import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_MARCHEOUTAI_API_KEY,
    authDomain: process.env.REACT_APP_MARCHEOUTAI_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_MARCHEOUTAI_PROJECT_ID,
    storageBucket: process.env.REACT_APP_MARCHEOUTAI_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MARCHEOUTAI_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_MARCHEOUTAI_APP_ID,
    measurementId: process.env.REACT_APP_MARCHEOUTAI_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
