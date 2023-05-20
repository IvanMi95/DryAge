import { Grid } from "@mui/material"
import { Outlet } from "react-router-dom"
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"

export const Layout = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Header />
      </Grid>
      <Outlet />
      <Grid xs={12}>
        <Footer />
      </Grid>
    </Grid>
  )
}