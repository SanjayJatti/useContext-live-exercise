import "./styles.css";
import { Cart } from "./Cart";
import { ProductListing } from "./ProductListing";
import { Navbar } from "./Navbar";
import { useTheme } from "./ThemeContext";

export default function App() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white"
      }}
      className="App"
    >
      <h1 className="app-header">eCommerce</h1>
      <div className="app-body">
        <Navbar />
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
