import { createContext } from "react"
import {
  auth,
  GoogleProvider,
  signInWithPopup,
  signOut,
} from "@/modules/firebase"

export const FirebaseContext = createContext(null)

export default function FirebaseProvider({ children }) {
  const value = { auth, GoogleProvider, signInWithPopup, signOut }
  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  )
}
