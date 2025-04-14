import './skills.css'
import Frontend from './Frontend';
import Languages from './Languages';

const skills = () => {
    const mainSkills = [
        {id: 1, name: 'HTML', src: '/svg/skills/html.svg', description: 'Язык гипертекстовой разметки', level: 'Изучен'},
        {id: 2, name: 'React', src: '/svg/skills/react.svg', description: 'Библиотека для создания пользовательских интерфейсов', level: 'В процессе'},
        {id: 3, name: 'CSS', src: '/svg/skills/css.svg', description: 'Язык таблиц стилей', level: 'Изучен'},
        {id: 4, name: 'Git', src: '/svg/skills/git.svg', description: 'Система контроля версий', level: 'Изучен'},
        {id: 5, name: 'JavaScript', src: '/svg/skills/js.svg', description: 'Язык скриптов и сценариев', level: 'Изучен'},
        {id: 5, name: 'TypeScript', src: '/svg/skills/ts.svg', description: 'Типизированный язык', level: 'В процессе'},
    ];

    const skillsPlus = [
        {id: 6, name: 'Figma', description: 'Инструмент создания дизайна'},
        {id: 7, name: 'Vite', description: 'Сборщик проектов'},
        {id: 8, name: 'SASS / SCSS', description: 'Препроцессоры CSS'},
        {id: 9, name: 'PixelPerfect', description: 'Инструмент поиска неточностей'},
        {id: 10, name: 'Adobe Photoshop', description: 'Программа редактирования изображений / дизайна'},
        {id: 11, name: 'PostCSS', description: 'Препроцессор CSS'},
        {id: 12, name: 'ESLint / Prettier', description: 'Инструменты проверки и форматирования кода'},
        {id: 13, name: 'PostgreSQL', description: 'Pеляционная СУБД'},
    ];
    return (
        <section className="section skills" id="skills">
            <h2 className="section__title">Навыки</h2>
            <span className="section__subtitle">Hard skills </span>
            <div className="skills__container container grid">
                <Frontend title='Основные технологии:' skills={mainSkills} showIcon={ true } showLevel={ true }/>
                <Languages />
                <Frontend title='Еще немного того, чем я пользуюсь:' skills={skillsPlus} showIcon={ false } showLevel={ false }/>
            </div>
        </section>
    );
};

export default skills;
