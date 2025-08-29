import {
  Typography,
  Breadcrumbs,
  Box,
  Button,
  FormControlLabel,
  Switch,
} from "@mui/material"
import { Link } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "@/Store/reducers/ui-slice"
import { toggleTheme } from "../../Store/reducers/ui-slice"
import { useContext } from "react"

import { FirebaseContext } from "@/providers/FirebaseProviders"
import { GoogleProvider } from "../../modules/firebase"

export default function HeaderWrapper() {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.ui.theme)
  const { signInWithPopup, auth, googleProvider } = useContext(FirebaseContext)

  const onGoogleLogin = async (e) => {
    const rs = await signInWithPopup(auth, GoogleProvider)
    console.log(rs)
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1em",
      }}
    >
      <Typography variant="h4" component={Link} to="/">
        LilyMorpho
      </Typography>
      <Breadcrumbs>
        <Typography component={Link} to="/shop">
          SHOP
        </Typography>
        <Typography component={Link} to="/board">
          BOARD
        </Typography>
        <Typography component={Link} to="/chat">
          CHAT
        </Typography>
      </Breadcrumbs>
      <Box>
        <Button variant="contained" sx={{ mr: 1 }} onClick={onGoogleLogin}>
          Google Login
        </Button>
        <Button variant="contained" sx={{ mr: 1 }}>
          Logout
        </Button>
        <Button variant="outlined">SignUp</Button>
        <FormControlLabel
          control={
            <Switch
              checked={theme === "light"}
              onChange={() => {
                dispatch(toggleTheme())
              }}
              name="theme"
            />
          }
          label="Theme"
        />
      </Box>
    </Box>
  )
}
