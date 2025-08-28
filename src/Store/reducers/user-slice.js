import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  greeting: "",
  theme: "light",
  user: { isLogging: false, isLogOn: false, data: {} },
}
const fetchUser = createAsyncThunk("user/fetchUser", async (userId) => {
  const url = "https://jsonplaceholder.typicode.com/users/"
  const { data } = await axios.get(url + userId)
  return data
})

const globalSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //sync
    setGreeting: (state, action) => {
      state.setGreeting = action.payload
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light"
    },
  },
  //async
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.user.isLogging = true
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user.isLogging = false
        state.user.data = action.payload.data
      })
      .addCase(fetchUser.rejected, (state) => {
        state.user.data = {}
        state.user.isLogging = false
        state.user.isLogOn = false
      })
  },
})

export default globalSlice.reducer
export { fetchUser }
