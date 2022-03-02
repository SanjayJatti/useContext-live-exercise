import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./CartContext";
import { ThemeProvider } from "./ThemeContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
