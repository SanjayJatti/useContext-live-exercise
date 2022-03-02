import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./CartContext";
import { ThemeProvider } from "./ThemeContext";
import { LocalisationProvider } from "./LocaliseContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LocalisationProvider>
      <ThemeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    </LocalisationProvider>
  </StrictMode>,
  rootElement
);
