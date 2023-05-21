import Grid from "@mui/material/Grid"
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Outlet } from "react-router-dom"
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"

const Layout = () => {
  const ContentBox = styled(Box)(() => ({
    minHeight: '80vh',
    width: '100vw',
  }));
  return (

    <Box>
      <Grid container  >
        <Grid item xs={12}  >
          <Header />
        </Grid>
        <Grid item xs={12} >
          <ContentBox>
            <Grid container  >
              <Grid item xs={6} >
                <Outlet />
              </Grid>
            </Grid>
          </ContentBox>
        </Grid>
        <Grid item xs={12} >
          <Footer />
        </Grid>
      </Grid>
    </Box>
  )
}
export default Layout;