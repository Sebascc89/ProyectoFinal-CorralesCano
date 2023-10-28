// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqR4TGqy-ZIxfdV9FXPplvYPQ_lmUd97c",
  authDomain: "proyecto-final-react-coderhose.firebaseapp.com",
  projectId: "proyecto-final-react-coderhose",
  storageBucket: "proyecto-final-react-coderhose.appspot.com",
  messagingSenderId: "989980106876",
  appId: "1:989980106876:web:792525daff04f5ea0829f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);