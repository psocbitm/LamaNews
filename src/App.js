import "./App.css";
import Newspage from "./pages/Newspage/Newspage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route
              path="/"
              element={<Newspage category="general" country="in" limit={5} />}
            />
            <Route
              path="sports"
              element={<Newspage category="sports" country="in" limit={5} />}
            />
            <Route
              path="business"
              element={<Newspage category="business" country="in" limit={5} />}
            />
            <Route
              path="technology"
              element={<Newspage category="technology" limit={5} />}
            />
            <Route
              path="science"
              element={<Newspage category="science" limit={5} />}
            />
            <Route
              path="health"
              element={<Newspage category="health" limit={5} />}
            />
            <Route
              path="entertainment"
              element={<Newspage category="entertainment" limit={5} />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
