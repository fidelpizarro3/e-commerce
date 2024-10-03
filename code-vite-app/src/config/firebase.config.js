import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaTuBGnyWnY7FNKNxHc6gq5AknV3VjdJ4",
  authDomain: "cdh-react-proyecto.firebaseapp.com",
  projectId: "cdh-react-proyecto",
  storageBucket: "cdh-react-proyecto.appspot.com",
  messagingSenderId: "686926980250",
  appId: "1:686926980250:web:1b9f45a529bc0d6526eb23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);