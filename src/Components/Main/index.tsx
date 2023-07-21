import { useState, useEffect } from 'react'
import useTyping from '../../Hooks/UseTyping'
import './styles.scss'
import { useTheme } from '../../Contexts'

const Main = () => {
  const introTyping = useTyping("Olá, me chamo Mateus Marques", 50)
  const devTyping = useTyping("Desenvolvedor Front-end", 50)
  const [showContent, setShowContent] = useState<boolean>(false)

  const themeData = useTheme()

  useEffect(() => {
    introTyping.start()
  }, [])

  useEffect(() => {
    if (introTyping.finished)
      devTyping.start()
  }, [introTyping.finished])

  useEffect(() => {
    if(devTyping.finished)
      setShowContent(true)

  }, [devTyping.finished])

  return (
    <main className={`main-container ${themeData.theme}`}>
      <h1 className={`main-container__title ${themeData.theme}`}>{introTyping.text}</h1>
      <h2 className={`main-container__subtitle ${themeData.theme}`}>{devTyping.text}</h2>
      <span className={`main-container__content ${themeData.theme} ${showContent ? 'visible' : ''}`}>
        Sou um Desenvolvedor Front-end com experiência em React.js, JavaScript, TypeScript,
        Styled Components, Sass e consumo de APIs REST. Também escrevo código back-end, utilizando 
        principalmente Node, Express e MongoDB. Sou apaixonado por tecnologia e por programação
        em geral e possuo graduação e mestrado em Ciência da Computação.
      </span>
    </main>
  )
}

export default Main