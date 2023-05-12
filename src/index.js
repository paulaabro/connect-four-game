import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { THEME } from "./themes/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
