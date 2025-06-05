import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0r1yEUT-Uz8S5lMl9oKvWjAuR7r8nzlw",
  authDomain: "netflix-react-clone-f64e0.firebaseapp.com",
  projectId: "netflix-react-clone-f64e0",
  storageBucket: "netflix-react-clone-f64e0.firebasestorage.app",
  messagingSenderId: "977211562678",
  appId: "1:977211562678:web:e3f5224a71947879dde417",
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);
