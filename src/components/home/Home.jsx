import './home.css'
import Social from './Social'
import Data from './data/Data'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social />
                <Data />
            </div>
            <ScrollDown />
        </div>
    </section>
  )
}

export default Home