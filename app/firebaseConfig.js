// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW6NaQ9yejuZFHx7byExx8U7P9F2cFPJY",
  authDomain: "nefes-web.firebaseapp.com",
  projectId: "nefes-web",
  storageBucket: "nefes-web.appspot.com",
  messagingSenderId: "481312005280",
  appId: "1:481312005280:web:b3214369a2c13c25337dc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage =  getStorage(app)
const auth = getAuth(app);

export {db, storage, auth}