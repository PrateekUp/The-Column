// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-5ab01.firebaseapp.com",
  projectId: "blog-5ab01",
  storageBucket: "blog-5ab01.appspot.com",
  messagingSenderId: "1021701320612",
  appId: "1:1021701320612:web:030acc5ef7b32d26cc9b31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);