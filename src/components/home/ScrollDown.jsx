import "./home.css";

const ScrollDown = () => {
    return (
        <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
                <span className="home__scroll-name">Посмотреть резюме</span>
                <i className="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
        </div>
    );
};

export default ScrollDown;
