// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "todo-85f23.firebaseapp.com",
  projectId: "todo-85f23",
  storageBucket: "todo-85f23.firebasestorage.app",
  messagingSenderId: "635700393076",
  appId: "1:635700393076:web:2a176f0f6da00187d68d21"
};

export const app = initializeApp(firebaseConfig);
