// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJJ11JvchJYHc8bqV1qfvDGXvArfh5Oes",
  authDomain: "portfolio1-63aa8.firebaseapp.com",
  projectId: "portfolio1-63aa8",
  storageBucket: "portfolio1-63aa8.appspot.com",
  messagingSenderId: "891639103711",
  appId: "1:891639103711:web:45a51ba3f1c13e3f4fe96a",
  measurementId: "G-0P9X82EDMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);