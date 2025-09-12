import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8Mml1C2LAIb2if48asbz9gBmIAAUu3wU",
  authDomain: "login-register-502.firebaseapp.com",
  projectId: "login-register-502",
  storageBucket: "login-register-502.firebasestorage.app",
  messagingSenderId: "37865275134",
  appId: "1:37865275134:web:a9f4ebc9208718460fafaf",
  measurementId: "G-YE5M08RGET",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
