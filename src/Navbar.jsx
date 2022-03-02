import { useTheme } from "./ThemeContext";

export const Navbar = () => {
  const { changeTheme } = useTheme();

  return (
    <div>
      <button onClick={() => changeTheme()}>Toggle Theme</button>
    </div>
  );
};
