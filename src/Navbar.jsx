import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LocaliseContext";

export const Navbar = () => {
  const { changeTheme } = useTheme();
  const { setLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => changeTheme()}>Toggle Theme</button>
      <button onClick={() => setLanguage("english")}>English</button>
      <button onClick={() => setLanguage("marathi")}>मराठी</button>
    </div>
  );
};
