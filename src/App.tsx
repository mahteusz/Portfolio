import ToggleSwitch from './Components/ToggleSwitch'
import { ThemeProvider } from './Contexts'

const App = () => {

  return (
    <ThemeProvider>
      <ToggleSwitch onChange={() => {}}/>
    </ThemeProvider>
  )
}

export default App
