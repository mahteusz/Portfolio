import "./styles.scss"
import { useTheme } from '../../Contexts/useTheme'
import ToggleSwitchProps from "./types"

const ToggleSwitch = ({ onChange }: ToggleSwitchProps) => {
  const themeData = useTheme()

  return (
    <input type='checkbox' className={`${themeData.theme}`} onChange={onChange}/>
  )
}

export default ToggleSwitch