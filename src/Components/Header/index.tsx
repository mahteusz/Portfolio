import { useState } from 'react'
import { useTheme } from '../../Contexts/useTheme'
import './styles.scss'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false) 
  const themeData = useTheme()

  return (
    <header className={`${themeData.theme}`} onClick={() => setNavbarOpen(!navbarOpen)}>
      <div className={`hamburguer ${navbarOpen ? 'active' : ''}`}>
        <div className={`hamburguer__line ${themeData.theme}`} />
        <div className={`hamburguer__line ${themeData.theme}`} />
        <div className={`hamburguer__line ${themeData.theme}`} />
      </div>
    </header>
  )
}

export default Header