import { createContext, useState, useEffect } from "react";
import { Themes, ThemeContextData, ThemeProviderData } from "./types";
import { useTheme } from "./useTheme";

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)
const initialTheme = Themes.LIGHT

const ThemeProvider = ({ children }: ThemeProviderData) => {
  const [theme, setTheme] = useState<Themes>(initialTheme)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme)
      setTheme(JSON.parse(savedTheme))

    setLoading(false)
  }, [])

  const toggleTheme = () => {
    let newTheme = theme
    if (newTheme === Themes.DARK) {
      newTheme = Themes.LIGHT
      setTheme(newTheme)
    }
    else {
      newTheme = Themes.DARK
      setTheme(newTheme)
    }
    localStorage.setItem("theme", JSON.stringify(newTheme))
  }

  return (
    <ThemeContext.Provider value={{ theme, loading, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
};

export { ThemeProvider, ThemeContext, initialTheme, useTheme };