import { useState, useEffect } from 'react'
import { useTheme } from '../../Contexts/'
import { ToggleSwitch } from '..'
import './styles.scss'
import { initialTheme } from '../../Contexts/'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false)
  const [toggleSwitchChecked, setToggleSwitchChecked] = useState<boolean>(false)
  const themeData = useTheme()

  useEffect(() => {
    setToggleSwitchChecked(themeData.theme != initialTheme)
  }, [themeData.theme])

  const exitOnOuterClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target != e.currentTarget)
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
      <ToggleSwitch
        onChange={themeData.toggleTheme}
        initialChecked={toggleSwitchChecked}
      />
    </header>
  )
}

export default Header