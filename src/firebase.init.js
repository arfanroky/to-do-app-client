// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAycmInWjrkNzPcar28AoHNhGEKytp2NQA",
  authDomain: "to-do-app-d8fa9.firebaseapp.com",
  projectId: "to-do-app-d8fa9",
  storageBucket: "to-do-app-d8fa9.appspot.com",
  messagingSenderId: "224603155545",
  appId: "1:224603155545:web:991b5732694db4711e1548"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;