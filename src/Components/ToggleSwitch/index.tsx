import { useState, useEffect } from 'react'
import "./styles.scss"
import { useTheme } from '../../Contexts/'
import ToggleSwitchProps from "./types"

const ToggleSwitch = ({ onChange, initialChecked }: ToggleSwitchProps) => {
  const [checked, setChecked] = useState<boolean>(false)
  const themeData = useTheme()

  useEffect(() => {
    setChecked(initialChecked)
  }, [initialChecked])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    setChecked(!checked)
  }

  return (
    <input 
      type='checkbox'
      checked={checked}
      className={`${themeData.theme}`}
      onChange={handleOnChange}
    />
  )
}

export default ToggleSwitch