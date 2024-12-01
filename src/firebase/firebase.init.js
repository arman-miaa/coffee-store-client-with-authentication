import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4RRojgaGdgjtAtpDzTsu--2RJxPby0ZY",
  authDomain: "coffee-store-3315c.firebaseapp.com",
  projectId: "coffee-store-3315c",
  storageBucket: "coffee-store-3315c.firebasestorage.app",
  messagingSenderId: "699780205736",
  appId: "1:699780205736:web:f46ec0f3553f5435d5c69d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;