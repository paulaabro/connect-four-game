import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MenuPage from "./pages/MenuPage";
import GamePage from "./pages/GamePage";
import RulesPage from "./pages/RulesPage";

import { THEME } from "./themes/theme";

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/rules" element={<RulesPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
