// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // voor later gebruik in login
// import { getAnalytics } from "firebase/analytics"; // optioneel

const firebaseConfig = {
  apiKey: "AIzaSyC1LZ0_I9QZUlVWq5ea-phX2C89ZBsOvsI",
  authDomain: "crux-connect-auth.firebaseapp.com",
  projectId: "crux-connect-auth",
  storageBucket: "crux-connect-auth.firebasestorage.app",
  messagingSenderId: "174603004602",
  appId: "1:174603004602:web:616c725d84be904427f083",
  measurementId: "G-N4NKSRRWJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app); // optioneel

export { app, auth };
