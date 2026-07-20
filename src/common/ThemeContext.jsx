import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const THEME_IDS = ["bauhaus", "jdm", "ethereal"];

export const DEFAULT_THEME = "bauhaus";

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    const stored = localStorage.getItem("portfolio-theme");
    const initialTheme = THEME_IDS.includes(stored) ? stored : DEFAULT_THEME;
    // Set synchronously during the first render pass (not in an effect,
    // which only runs after paint) so there's no flash of the :root
    // default theme -- e.g. PageLoader briefly rendering turquoise
    // before the real theme's data-theme attribute lands.
    document.documentElement.setAttribute("data-theme", initialTheme);
    return initialTheme;
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
