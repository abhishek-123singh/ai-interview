
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiinterview-fb8cd.firebaseapp.com",
  projectId: "aiinterview-fb8cd",
  storageBucket: "aiinterview-fb8cd.firebasestorage.app",
  messagingSenderId: "169479805363",
  appId: "1:169479805363:web:82d06bb9c2024984e353c6"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}