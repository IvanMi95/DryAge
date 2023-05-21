import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import Layout from "./layout/Layout";
import { useThemeContext } from "./theme/ThemeContextProvider";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

function App() {

  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
