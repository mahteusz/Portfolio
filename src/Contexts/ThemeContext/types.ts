enum Themes {
  DARK = "dark",
  LIGHT = "light"
}

type ThemeContextData = {
  theme: Themes,
  loading: boolean,
  toggleTheme(): void,
}

type ThemeProviderData = {
  children: React.ReactNode
}

export { Themes, type ThemeContextData, type ThemeProviderData }