import Grid from "@mui/material/Grid"
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Outlet } from "react-router-dom"
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"

const Layout = () => {
  const ContentBox = styled(Box)(() => ({
    minHeight: '80vh',
    width: '100%',
    paddingTop:"20px"
  }));
  const PageBox = styled(Box)(() => ({
    minHeight: '100vh',
    width: '100%',
  }));
  return (
 
  
    <PageBox>
      <Grid container p={2} >
        <Grid item xs={12}  >
          <Header />
        </Grid>
          <ContentBox>
        <Grid item xs={12} >
            <Grid container  >
              <Grid item xs={12} >
                <Outlet />
              </Grid>
            </Grid>
        </Grid>
          </ContentBox>
        <Grid item xs={12} >
          <Footer />
        </Grid>
      </Grid>
    </PageBox>
  )
}
export default Layout;