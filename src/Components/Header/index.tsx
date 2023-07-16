import { useState } from 'react'
import { useTheme } from '../../Contexts/useTheme'
import './styles.scss'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false) 
  const themeData = useTheme()

  return (
    <header className={`${themeData.theme}`} onClick={() => setNavbarOpen(!navbarOpen)}>
      <div className={`hamburguer-container ${navbarOpen ? 'active' : ''}`}>
        <div className={`hamburguer-line ${themeData.theme}`} />
        <div className={`hamburguer-line ${themeData.theme}`} />
        <div className={`hamburguer-line ${themeData.theme}`} />
      </div>
    </header>
  )
}

export default Header