// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c76f5.firebaseapp.com",
  projectId: "mern-estate-c76f5",
  storageBucket: "mern-estate-c76f5.appspot.com",
  messagingSenderId: "654505120185",
  appId: "1:654505120185:web:42b9ed189b7daebc676668"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);