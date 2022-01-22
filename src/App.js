import "./App.css";
import Newspage from "./pages/Newspage/Newspage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import NewspageMediaStack from "./pages/NewspageMediaStack/NewspageMediaStack";
function App() {
  const mode = useSelector((state) => state.theme.mode);

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<NewspageMediaStack category="top" />} />
            <Route
              path="sports"
              element={<NewspageMediaStack category="sports" />}
            />
            <Route
              path="business"
              element={<NewspageMediaStack category="business" />}
            />
            <Route
              path="technology"
              element={<NewspageMediaStack category="technology" />}
            />
            <Route
              path="science"
              element={<NewspageMediaStack category="science" />}
            />
            <Route
              path="health"
              element={<NewspageMediaStack category="health" />}
            />
            <Route
              path="entertainment"
              element={<NewspageMediaStack category="entertainment" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
