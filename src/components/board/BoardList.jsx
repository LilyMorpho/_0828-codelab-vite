import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material"
import useSWR from "swr"
import { typicodeFetcher } from "@/swr"

export default function BoardList() {
  const [list, setList] = useState([])

  const { data } = useSWR("/posts", typicodeFetcher)

  /**   useEffect(() => {
    // ;(async () => {
    //   const url = "https://jsonplaceholder.typicode.com/posts"
    //   const { data } = await axios.get(url)
    //   setList(data)
    // })()
    // getPosts() //swr 사용
  }, []) */

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>제목</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(data || []).map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
