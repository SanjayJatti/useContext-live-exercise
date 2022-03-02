import { createContext, useContext, useState } from "react";

const LocaliseContext = createContext();

const LocalisationProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");
  const changeLanguage = () =>
    setLanguage((language) => (language === "english" ? "marathi" : "english"));
  return (
    <LocaliseContext.Provider value={(language, changeLanguage)}>
      {children}
    </LocaliseContext.Provider>
  );
};

const useLanguage = () => useContext(LocaliseContext);

export { useLanguage, LocalisationProvider };
