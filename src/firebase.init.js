// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYm2q69ut0Xt6E0dSJaCrecz8T-K-6zNE",
  authDomain: "project-1-693ef.firebaseapp.com",
  projectId: "project-1-693ef",
  storageBucket: "project-1-693ef.appspot.com",
  messagingSenderId: "352693411405",
  appId: "1:352693411405:web:80e9991d1e3058d04b8604"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
export default auth
