import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CharacterAnimationsProvider } from "./contexts/CharacterAnimations.jsx";
import { CharacterCustomizationProvider } from "./contexts/characterCustomizationContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CharacterCustomizationProvider>
      <CharacterAnimationsProvider>
        <App />
      </CharacterAnimationsProvider>
    </CharacterCustomizationProvider>
  </StrictMode>
);
