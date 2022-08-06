// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK_1GWLJi0Zm4-kEYWW9Ha194v1gRlyH8",
  authDomain: "farmacia-f12b5.firebaseapp.com",
  projectId: "farmacia-f12b5",
  storageBucket: "farmacia-f12b5.appspot.com",
  messagingSenderId: "478108948144",
  appId: "1:478108948144:web:d02b8230e5b2ac9d910d75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

