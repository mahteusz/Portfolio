import './styles.scss'
import { Header, Main } from '../../Components'
import { useTheme } from '../../Contexts/'

const Home = () => {
  const themeData = useTheme()

  return (
    <div className={`container ${themeData.theme}`}>
      <Header />
      <Main />
    </div>
  )
}

export default Home