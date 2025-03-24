import "./about.css";
import CV from "/cv/cv_maxim-klenov.pdf";

const Info = () => {
    const infoItems = [
        {
            icon: "bx bx-award",
            title: "Во фронтенде",
            subtitle: "1 год",
        },
        {
            icon: "bx bx-briefcase-alt",
            title: "Выполнено",
            subtitle: "3+ Проекта",
        },
        {
            icon: "bx bx-support",
            title: "FAQ",
            subtitle: "Онлайн 24/7",
        },
    ];
    return (
        <div className="about__data">
            <div className="about__info grid">
                {infoItems.map((item, index) => (
                    <div key={index} className="about__box">
                        <i className={`${item.icon} about__icon`}></i>
                        <h3 className="about__title">{item.title}</h3>
                        <span className="about__subtitle">{item.subtitle}</span>
                    </div>
                ))}
            </div>

            <p className="about__description">
                Привет! Меня зовут Максим и я выступаю в роли фронтэнд разработчика.
            </p>
            <p className="about__description">
                Я умею эффективно работать в команде, используя свои навыки работы с Git-системой. 
                Основным преимуществом моей разработки является качественная разработка веб интерфейса.
            </p>

            <a
                download="cv_max-klenov.pdf"
                href={CV}
                className="about__button button button--flex"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg
                    className="button__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 304 384"
                >
                    <path
                        fill="var(--container-color)"
                        d="M299 128L149 277L0 128h85V0h128v128zM0 320h299v43H0z"
                    />
                </svg>
                <span> Скачать резюме</span>
            </a>
        </div>
    );
};

export default Info;
