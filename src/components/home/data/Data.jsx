import "./data.css";
import { TypeAnimation } from "react-type-animation";
import RotatingText from "../RotatingText/RotatingText";

const Data = () => {
    return (
        <main className="home__data">
            <hgroup>
                <h1>
                    <TypeAnimation
                        sequence={["Portfolio", 5000]}
                        speed={1}
                        cursor={false}
                        className="home__title"
                    ></TypeAnimation>
                </h1>
                <h2 className="home__subtitle">
                    <RotatingText
                        texts={["Фронтэнд", "React", "Креативного"]}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={3000}
                    /> 
                    разработчика
                </h2>
            </hgroup>
            <p className="home__description">
                В настоящее время специализируюсь на разработке React Typescript
                проектов / статичных сайтов. Разработчик-самоучка.
            </p>
            <a href="#contact" className="button button--flex">
                Связаться
                <svg
                    className="button__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--container-color)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
            </a>
        </main>
    );
};

export default Data;
