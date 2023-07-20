import { useState, useEffect } from 'react'

const useTyping = (desiredText: string, timeToWrite: number) => {
  const [text, setText] = useState<string>('')
  const [finished, setFinished] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)
  const [started, setStarted] = useState<boolean>(false)

  const start = () => {
    setStarted(true)
  }

  useEffect(() => {
    if(!started) return

    if (text === desiredText) {
      setFinished(true)
      return
    }

    const interval = setInterval(() => {
      setText(text + desiredText[index])
      setIndex(index + 1)
    }, timeToWrite)

    return () => clearInterval(interval)
  }, [text, start])

  return { text, finished, start }
}

export default useTyping