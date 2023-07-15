import "./styles.scss"
import { useTheme } from '../../Contexts/useTheme'

const ToggleSwitch = () => {
  const themeData = useTheme()
  return (
    <input type='checkbox' className={`${themeData.theme}`}/>
  )
}

export default ToggleSwitch