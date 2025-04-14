import "./about.css";
// import CV from "/cv/cv_maxim-klenov.pdf";

const Info = () => {
    const infoItems = [
        {
            title: "Во фронтенде",
            subtitle: "1 год",
        },
        {
            title: "Выполнено",
            subtitle: "3+ Проекта",
        },
        {
            title: "FAQ",
            subtitle: "Онлайн 24/7",
        },
    ];
    return (
        <div className="about__data">
            <div className="about__info grid">
                {infoItems.map((item, index) => (
                    <div key={index} className="about__box">
                        <h3 className="about__title">{item.title}</h3>
                        <span className="about__subtitle">{item.subtitle}</span>
                    </div>
                ))}
            </div>
            {/* =============== */}
            {/* <p className="about__description">
                Я умею эффективно работать в команде, используя свои навыки работы с Git-системой. 
                Основным преимуществом моей разработки является качественная разработка веб интерфейса.
            </p> */}
           
            <address className="about__content">
                <table className="about__content-table">
                    <tbody>
                        <tr className="about__content-row">
                            <td className="about__content-column">Имя:</td>
                            <td className="about__content-column">Максим</td>
                        </tr>
                        <tr className="about__content-row">
                            <td className="about__content-column">Возраст:</td>
                            <td className="about__content-column">17</td>
                        </tr>
                        <tr className="about__content-row">
                            <td className="about__content-column">Специальность:</td>
                            <td className="about__content-column">Frontend разработка</td>
                        </tr>
                        <tr className="about__content-row">
                            <td className="about__content-column">Местоположение:</td>
                            <td className="about__content-column">Россия, Тула</td>
                        </tr>
                        <tr className="about__content-row">
                            <td className="about__content-column">Образование:</td>
                            <td className="about__content-column">среднее</td>
                        </tr>
                    </tbody>
                </table>
            </address>

            {/* <a
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
            </a> */}
        </div>
    );
};

export default Info;
