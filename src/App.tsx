import { ThemeProvider } from './Contexts'
import { Home } from './Pages'

const App = () => {

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App