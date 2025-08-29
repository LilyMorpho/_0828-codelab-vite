// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2Y3WZlNhctclLAIgrAzeXJE3OFJAwy4w",
  authDomain: "lilymorpho-store.firebaseapp.com",
  projectId: "lilymorpho-store",
  storageBucket: "lilymorpho-store.firebasestorage.app",
  messagingSenderId: "604936574256",
  appId: "1:604936574256:web:f015ec263dc1a75a0264f5",
  measurementId: "G-4CJG5T26B2",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const GoogleProvider = new GoogleAuthProvider()
export { signInWithPopup, signOut }

const analytics = getAnalytics(app)
