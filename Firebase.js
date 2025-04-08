import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD2f61s7rgFP96wrqWOSUEb1MkqGx0-djs",
  authDomain: "fir-estudo-848d1.firebaseapp.com",
  projectId: "fir-estudo-848d1",
  storageBucket: "fir-estudo-848d1.firebasestorage.app",
  messagingSenderId: "677262071366",
  appId: "1:677262071366:web:2cef2561df94c7c6e25c47"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);