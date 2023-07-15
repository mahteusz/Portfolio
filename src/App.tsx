import Container from './Components/Container'
import ToggleSwitch from './Components/ToggleSwitch'
import { ThemeProvider } from './Contexts'
import { useTheme } from './Contexts/useTheme'

const App = () => {
  const themeData = useTheme()

  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  )
}

export default App
