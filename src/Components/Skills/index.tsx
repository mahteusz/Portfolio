import './styles.scss'
import { useTheme } from '../../Contexts'
import HTML5 from '../../assets/icons/html5.svg'

const Skills = () => {

  const themeData = useTheme()

  return (
    <section className={`skills-container ${themeData.theme}`}>
      <h1 className={`skills-container__title ${themeData.theme}`}>
        habilidades
      </h1>
      <div className={`skills-container__cards ${themeData.theme}`}>
        <div className={`skills-container__card ${themeData.theme}`}>
          <h1 className={`skills-container__card-name ${themeData.theme}`}>
            HTML5
          </h1>
          <img className={`skills-container__card-icon ${themeData.theme}`} src={HTML5} />
        </div>
      </div>
    </section>
  )
}

export default Skills