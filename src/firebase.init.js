// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWI1EKensp2ZzQ1qh9_3Iv2HHZNeiLtXY",
  authDomain: "iparts-22194.firebaseapp.com",
  projectId: "iparts-22194",
  storageBucket: "iparts-22194.appspot.com",
  messagingSenderId: "384523436683",
  appId: "1:384523436683:web:551d651134cfa0f5964a8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;