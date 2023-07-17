import { useState } from 'react'
import { useTheme } from '../../Contexts/useTheme'
import { ToggleSwitch } from '..'
import './styles.scss'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false)
  const themeData = useTheme()

  const exitOnOuterClick = (e: React.MouseEvent<HTMLElement>) => {
    if(e.target != e.currentTarget) 
      return
    
    setNavbarOpen(false)
  }

  return (
    <header className={`${themeData.theme}`}>
      <div 
        className={`hamburguer`}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className={`hamburguer__line ${themeData.theme}`} />
        <div className={`hamburguer__line ${themeData.theme}`} />
        <div className={`hamburguer__line ${themeData.theme}`} />
      </div>
      <div 
        className={`menu ${navbarOpen ? 'open' : ''}`}
        onClick={exitOnOuterClick}
      >
        <nav className={`menu__navigation ${themeData.theme} ${navbarOpen ? 'open' : ''}`}>
          <li className={`menu__navigation-item`}>Projetos</li>
          <li className={`menu__navigation-item`}>Projetos</li>
          <li className={`menu__navigation-item`}>Projetos</li>
          <li className={`menu__navigation-item`}>Projetos</li>
        </nav>
      </div>
      <h1>LOGO</h1>
      <ToggleSwitch onChange={themeData.toggleTheme}/>
    </header>
  )
}

export default Header