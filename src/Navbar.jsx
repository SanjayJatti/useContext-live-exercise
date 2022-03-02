import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LocaliseContext";

export const Navbar = () => {
  const { changeTheme } = useTheme();
  const { changeLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => changeTheme()}>Toggle Theme</button>
      <button onClick={() => changeLanguage()}>English</button>
      <button onClick={() => changeLanguage()}>मराठी</button>
    </div>
  );
};
