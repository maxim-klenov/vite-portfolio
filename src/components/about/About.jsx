import "./about.css";
import Info from "./Info";
import AboutImg from "/images/about.webp";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">Обо мне</h2>
            <span className="section__subtitle">About me</span>
            <div className="about__container container grid">
                <img src={AboutImg} className="about__img" alt="Мое лицо на голубом фоне" loading="lazy" />
                <Info />
            </div>
        </section>
    );
};

export default About;
