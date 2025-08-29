import { api } from "@/modules/api"

/** Custom Hook */
// const useSWR = (url, fetcher) => {
//   const [data, setData] = useState([])
//   const [error, setError] = useState(null)
//   const [isLoading, setIsLoading] = useState(true)
//   fetcher(url)
//     .then((res) => setData(res))
//     .catch((err) => setError(err))
//     .finally(() => {
//       setIsLoading(false)
//     })
//   return { data, error, isLoading }
// }
// const fetcher = (url) => axios.get(url).then(response => response.data)
// const { data, error, isLoading } = useSWR("https://.../posts", fetcher)

export const typicodeFetcher = (url) => {
  const baseURL = "https://jsonplaceholder.typicode.com"
  return api.get(baseURL + url).then((res) => res.data)
}
