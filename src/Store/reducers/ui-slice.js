import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  greeting: "",
  theme: "light",
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setGreeting: (state, action) => {
      state.greeting = action.payload
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light"
    },
    setTheme: (state, action) => {
      state.theme = action.payload
    },
  },
})

export default uiSlice.reducer
export const { setGreeting, toggleTheme, setTheme } = uiSlice.actions
