import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isLightTheme, setIsLightTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{ isLightTheme, setIsLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);