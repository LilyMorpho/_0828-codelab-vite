import { createContext, useContext, useState } from "react"

export const TestContext = createContext()

export default function TestProvider({ children }) {
  const [value, setValue] = useState("ABCD")
  // const value = { value, setValue }
  setTimeout(() => {
    // setTest("Hello")
  }, 2000)

  return (
    <TestContext.Provider value={{ value, setValue }}>
      {children}
    </TestContext.Provider>
  )
}
