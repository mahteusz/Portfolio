import { ThemeProvider } from './Contexts/ThemeContext'
import { Home } from './Pages'

const App = () => {

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App