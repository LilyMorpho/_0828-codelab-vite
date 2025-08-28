import axios from "axios"

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 5000,
})

api.interceptors.request.use(
  (config) => {
    const userData = localStorage.getItem("persist:auth")
    const auth = JSON.parse(userData || "{}")
    const { token } = auth?.data?.token || {}
    if (token) {
      configs.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    error.MY_REQUEST = "REQUEST"
    Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    response.my_message = "RESPONSE"
    return response
  },
  (error) => {
    if (error.response?.status === 503) {
      //TODO :: Refresh Token 요청 코드
    }
    error.MY_RESPONSE = "RESPONSE"
    return Promise.reject(error)
  }
)

export { api }
