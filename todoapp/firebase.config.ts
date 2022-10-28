// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_APP_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_APP_FIREBASE_MESSEGING_SENDER_ID,
  appId: process.env.NEXT_APP_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_APP_FIREBASE_MEASUREMENT_ID,

  // apiKey: "AIzaSyCti4zzuxw5ADmfllKKy32wO3regZcri_w",

  // authDomain: "todoapp-c38bd.firebaseapp.com",

  // projectId: "todoapp-c38bd",

  // storageBucket: "todoapp-c38bd.appspot.com",

  // messagingSenderId: "552610280577",

  // appId: "1:552610280577:web:73ed173ea3b7d829838980",

  // measurementId: "G-4F4F3SK2MT",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
