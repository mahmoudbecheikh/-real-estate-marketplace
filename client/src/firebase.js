// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey : import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "freestate-fe40a.firebaseapp.com",
  projectId: "freestate-fe40a",
  storageBucket: "freestate-fe40a.appspot.com",
  messagingSenderId: "189199405010",
  appId: "1:189199405010:web:797519df3159e2ce16420b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);