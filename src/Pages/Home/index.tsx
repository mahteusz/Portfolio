import './styles.scss'
import { Header } from '../../Components'
import { useTheme } from '../../Contexts/'

const Home = () => {
  const themeData = useTheme()

  return (
    <div className={`container ${themeData.theme}`}>
      <Header />
    </div>
  )
}

export default Home