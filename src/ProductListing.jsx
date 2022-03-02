import { useCart } from "./CartContext";

export const ProductListing = () => {
  const { addToCart } = useCart();
  return ["1", "2", "3", "4"].map((item) => (
    <div key={item}>
      <h2>Product {item}</h2>
      <button onClick={() => addToCart()}>Add to Cart</button>
    </div>
  ));
};
