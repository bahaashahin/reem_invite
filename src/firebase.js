import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_ssD_OlNwWhv8gto6hwb1705CAdea3mg",
  authDomain: "reem-d7ae0.firebaseapp.com",
  projectId: "reem-d7ae0",
  storageBucket: "reem-d7ae0.firebasestorage.app",
  messagingSenderId: "291667385820",
  appId: "1:291667385820:web:47f113ff331830e26a0319",
  measurementId: "G-L6R9SGJ2MB",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const analytics = getAnalytics(app);
