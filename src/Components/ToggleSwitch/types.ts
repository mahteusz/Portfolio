import { ChangeEventHandler } from "react"

type ToggleSwitchProps = {
  onChange: ChangeEventHandler<HTMLInputElement>,
  initialChecked: boolean
}

export { type ToggleSwitchProps as default }