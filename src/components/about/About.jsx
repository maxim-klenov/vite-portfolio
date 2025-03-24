import "./about.css";
import Info from "./Info";
import AboutImg from "/images/about.webp";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">Обо мне</h2>
            <span className="section__subtitle">Навыки, опыт</span>
            <div className="about__container container grid">
                <img src={AboutImg} className="about__img" alt="my face" />
                <Info />
            </div>
        </section>
    );
};

export default About;
