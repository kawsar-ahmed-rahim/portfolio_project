import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();


const ThemeProvider = ({ children }) =>  {
      const [isDark, setIsDark] = useState(false);
      const toggleTheme = () => {
        setIsDark((prev) => !prev);
      };
      useEffect(() => {
        document.documentElement.setAttribute(
          "data-theme",
          isDark ? "dark" : "light"
        );
      },[isDark]);
      return(
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
          <div className={isDark ? "dark" : ""}>{children}</div>
        </ThemeContext.Provider>
      );
};

export default ThemeProvider;
