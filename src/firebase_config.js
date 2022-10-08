// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo9ee4EZxE-tZzdjFRAtQMWi_5yegareo",
  authDomain: "golbuy.firebaseapp.com",
  projectId: "golbuy",
  storageBucket: "golbuy.appspot.com",
  messagingSenderId: "560376425457",
  appId: "1:560376425457:web:6d7884c7f4be553b6eb250",
  measurementId: "G-TX2514XKX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);