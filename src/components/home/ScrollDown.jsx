import "./home.css";
import { ReactSVG } from 'react-svg';

const ScrollDown = () => {
    return (
        <nav className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
                <span className="home__scroll-name">Посмотреть резюме</span>
                <ReactSVG src="/svg/arrow-down.svg" className="home__scroll-arrow"/>
            </a>
        </nav>
    );
};

export default ScrollDown;
