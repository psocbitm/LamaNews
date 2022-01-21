import "./App.css";
import Newspage from "./pages/Newspage/Newspage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const mode = useSelector((state) => state.theme.mode);

  const theme = createTheme({
    palette: {
      mode: mode,
    }
  });
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route
              path="/"
              element={<Newspage category="general" pagesize={7} />}
            />
            <Route
              path="sports"
              element={<Newspage category="sports" pagesize={7} />}
            />
            <Route
              path="business"
              element={<Newspage category="business" pagesize={7} />}
            />
            <Route
              path="technology"
              element={<Newspage category="technology" pagesize={7} />}
            />
            <Route
              path="science"
              element={<Newspage category="science" pagesize={7} />}
            />
            <Route
              path="health"
              element={<Newspage category="health" pagesize={7} />}
            />
            <Route
              path="entertainment"
              element={<Newspage category="entertainment" pagesize={7} />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
