import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5IprJAs1Z0xXvf44ev1gyn9KPh2U6gqY",
  authDomain: "app-mundu-verde.firebaseapp.com",
  projectId: "app-mundu-verde",
  storageBucket: "app-mundu-verde.firebasestorage.app",
  messagingSenderId: "28157299950",
  appId: "1:28157299950:web:0d514a7f011e8df49cb7ff",
  measurementId: "G-WMQVHZTNF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export let analytics: any = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      try {
        analytics = getAnalytics(app);
      } catch (e) {
        console.warn("Analytics not initialized:", e);
      }
    }
  }).catch(() => {});
}

