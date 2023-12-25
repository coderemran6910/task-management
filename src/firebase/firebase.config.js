// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwbebVsszQLc7Q5JMSs4zB5xk71nbbQMM",
  authDomain: "task-management-7af84.firebaseapp.com",
  projectId: "task-management-7af84",
  storageBucket: "task-management-7af84.appspot.com",
  messagingSenderId: "691586142576",
  appId: "1:691586142576:web:e6c25b643fdd427bea3fb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth