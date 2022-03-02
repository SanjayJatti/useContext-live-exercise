import { useCart } from "./CartContext";
import { useLanguage } from "./LocaliseContext";
import { LanguageLib } from "./LanguageLib";

export const Cart = () => {
  const { items } = useCart();
  const { language } = useLanguage();
  return <h1>{`${LanguageLib[language]["cart"]} ${items}`}</h1>;
};
