// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a9078.firebaseapp.com",
  projectId: "mern-estate-a9078",
  storageBucket: "mern-estate-a9078.appspot.com",
  messagingSenderId: "165068695982",
  appId: "1:165068695982:web:c48909ab5afe1df7db003f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);