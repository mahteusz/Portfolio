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
        <SvgIcon innerText='HTML5' Icon={HTML5} href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" />
        <SvgIcon innerText='CSS3' Icon={CSS3} href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"/>
        <SvgIcon innerText='JavaScript' Icon={JS} href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"/>
        <SvgIcon innerText='TypeScript' Icon={TS} href="https://www.typescriptlang.org/"/>
        <SvgIcon innerText='React' Icon={ReactLogo} href="https://react.dev/"/>
        <SvgIcon innerText='Styled Components' Icon={StyledComponents} href="https://styled-components.com/"/>
        <SvgIcon innerText='SASS' Icon={SASS} href="https://sass-lang.com/"/>
        <SvgIcon innerText='Node' Icon={Node} href="https://nodejs.org/"/>
        <SvgIcon innerText='Express' Icon={Express} href="https://expressjs.com/pt-br/"/>
        <SvgIcon innerText='MongoDB' Icon={MongoDB} href="https://www.mongodb.com/pt-br"/>
        <SvgIcon innerText='Git' Icon={Git} href="https://git-scm.com/"/>
        <SvgIcon innerText='Jest' Icon={Jest} href="https://jestjs.io/pt-BR/"/>
      </div>
    </section>
  )
}

const SvgIcon = ({ innerText, Icon, href }: SvgIconProps) => {

  const themeData = useTheme()

  return (
    <div className={`skills-container__card ${themeData.theme}`}>
      <h1 className={`skills-container__card-name ${themeData.theme}`}>
        {innerText}
      </h1>
      <Icon className={`skills-container__card-icon`} />
      <a className='skills-container__card-link' href={href} target='_blank' />
    </div>
  )
}

export default Skills