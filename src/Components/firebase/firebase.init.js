// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADKZWXdAcBeKq15sjvwmva831pZ98Ovjg",
  authDomain: "joss-car.firebaseapp.com",
  projectId: "joss-car",
  storageBucket: "joss-car.appspot.com",
  messagingSenderId: "931649026",
  appId: "1:931649026:web:9e2ed3e43bacceb5ca391b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
