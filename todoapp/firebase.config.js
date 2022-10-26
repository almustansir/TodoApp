import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: process.env.NEXT_APP_FIREBASE_API_KEY,
  authDomain: NEXT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: NEXT_APP_FIREBASE_PROJECT_ID,
  storageBucket: NEXT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: NEXT_APP_FIREBASE_MESSEGING_SENDER_ID,
  appId: NEXT_APP_FIREBASE_APP_ID,
  measurementId: NEXT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);