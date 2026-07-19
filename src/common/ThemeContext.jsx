import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const THEME_IDS = ["bauhaus", "jdm"];

export const DEFAULT_THEME = "bauhaus";

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    const stored = localStorage.getItem("portfolio-theme");
    return THEME_IDS.includes(stored) ? stored : DEFAULT_THEME;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const setTheme = (themeId) => {
    if (THEME_IDS.includes(themeId)) {
      setThemeState(themeId);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEME_IDS }}>
      {children}
    </ThemeContext.Provider>
  );
};
