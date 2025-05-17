// src/firebase/firebase.config.js

// তোমার Firebase config অনুযায়ী নিচের info গুলো বসাও
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,  // Check if this is the correct key from your .env file
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
//   measurementId: import.meta.env.VITE_measurementId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBHmLGDpwGqYyaN2SSK_6a4w4XFgKyGUKM",
  authDomain: "tutorhub-f34a7.firebaseapp.com",
  projectId: "tutorhub-f34a7",
  storageBucket: "tutorhub-f34a7.firebasestorage.app",
  messagingSenderId: "293928299011",
  appId: "1:293928299011:web:75d11ce5fc7afaa0a6fc36",
  measurementId: "G-8133PCQ2F3"
};
const app = initializeApp(firebaseConfig);

// ✅ এই লাইনটা ব্যবহার করতে হবে
const auth = getAuth(app);

export { app, auth };
