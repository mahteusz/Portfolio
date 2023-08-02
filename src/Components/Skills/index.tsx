import './styles.scss'
import { useTheme } from '../../Contexts'
import { HTML5, CSS3, JS, TS, ReactLogo, StyledComponents, SASS, Node, Express, MongoDB, Git, Jest }
  from '../../assets/icons'
import { SvgIconProps } from './types'

const Skills = () => {

  const themeData = useTheme()

  return (
    <section className={`skills-container ${themeData.theme}`}>
      <h1 className={`skills-container__title ${themeData.theme}`}>
        habilidades
      </h1>
      <div className={`skills-container__cards ${themeData.theme}`}>
        <SvgIcon innerText='HTML5' Icon={HTML5} />
        <SvgIcon innerText='CSS3' Icon={CSS3} />
        <SvgIcon innerText='JavaScript' Icon={JS} />
        <SvgIcon innerText='TypeScript' Icon={TS} />
        <SvgIcon innerText='React' Icon={ReactLogo} />
        <SvgIcon innerText='Styled Components' Icon={StyledComponents} />
        <SvgIcon innerText='SASS' Icon={SASS} />
        <SvgIcon innerText='Node' Icon={Node} />
        <SvgIcon innerText='Express' Icon={Express} />
        <SvgIcon innerText='MongoDB' Icon={MongoDB} />
        <SvgIcon innerText='Git' Icon={Git} />
        <SvgIcon innerText='Jest' Icon={Jest} />
      </div>
    </section>
  )
}

const SvgIcon = ({ innerText, Icon }: SvgIconProps) => {

  const themeData = useTheme()

  return (
    <div className={`skills-container__card ${themeData.theme}`}>
      <h1 className={`skills-container__card-name ${themeData.theme}`}>
        {innerText}
      </h1>
      <Icon className={`skills-container__card-icon`} />
    </div>
  )
}

export default Skills