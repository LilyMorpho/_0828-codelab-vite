// import "font-awesome/css/font-awesome.min.css"
import { SWRConfig } from "swr"
import { BrowserRouter } from "react-router-dom"
import { Provider as StoreProvider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store"

import TestProvider from "./providers/TestProviders"

import Containers from "./Containers"
import { use } from "react"

import { swrValue } from "./swr"

import "@/assets/styles/app.scss"
import FirebaseProvider from "./providers/FirebaseProviders"

function App() {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SWRConfig value={swrValue}>
          <FirebaseProvider>
            <BrowserRouter>
              <TestProvider>
                <Containers />
              </TestProvider>
            </BrowserRouter>
          </FirebaseProvider>
        </SWRConfig>
      </PersistGate>
    </StoreProvider>
  )
}

export default App
