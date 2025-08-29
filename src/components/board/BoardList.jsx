import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material"
import useSWR from "swr"
import { typicodeFetcher } from "@/swr"

export default function BoardList() {
  const { data, error, isLoading } = useSWR("/posts", typicodeFetcher, {
    refreshInterval: 3000,
    revalidateOnMount: true,
  })

  /*   useEffect(() => {
    // ;(async () => {
    //   const url = "https://jsonplaceholder.typicode.com/posts"
    //   const { data } = await axios.get(url)
    //   setList(data)
    // })()
    // getPosts() //swr 사용
  }, []) */

  if (error)
    return <Box sx={{ margin: 20, textAlign: "center" }}>Failed to load</Box>
  if (isLoading)
    return <Box sx={{ margin: 20, textAlign: "center" }}>Loading...</Box>

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
