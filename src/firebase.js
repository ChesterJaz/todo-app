// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3hTH559CxDMJE2rey4U-PoYb5fkT0Bpk",
  authDomain: "todo-app-927bb.firebaseapp.com",
  projectId: "todo-app-927bb",
  storageBucket: "todo-app-927bb.appspot.com",
  messagingSenderId: "528887830726",
  appId: "1:528887830726:web:446e1246db017c96d45fc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)