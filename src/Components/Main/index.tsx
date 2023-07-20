import { useState, useEffect } from 'react'
import useTyping from '../../Hooks/UseTyping'
import './styles.scss'

const Main = () => {
  const nameTyping = useTyping("Olá, me chamo Mateus Marques", 75)
  const devTyping = useTyping("Desenvolvedor Front-end", 75)

  useEffect(() => {
    nameTyping.start()
  }, [])

  useEffect(() => {
    if(nameTyping.finished)
      devTyping.start()
  }, [nameTyping.finished])

  return (
    <>
      <h1>{nameTyping.text}</h1>
      <h2>{devTyping.text}</h2>
    </>
  )
}

export default Main