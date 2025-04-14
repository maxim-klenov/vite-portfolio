import "./home.css";
import { ReactSVG } from 'react-svg';

const ScrollDown = () => {
    return (
        <nav className="home__scroll">
            <a href="#portfolio" className="home__scroll-button button--flex">
                <span className="home__scroll-name">Перейти к проектам</span>
                <ReactSVG src="/svg/arrow-down.svg" className="home__scroll-arrow"/>
            </a>
        </nav>
    );
};

export default ScrollDown;
