import React from 'react';
import './skills.css'
import Frontend from './Frontend';
import Languages from './Languages';

const skills = () => {
    const mainSkills = [
        {id: 1, name: 'HTML', description: 'Язык гипертекстовой разметки', level: 'Изучен'},
        {id: 2, name: 'React', description: 'Библиотека для создания пользовательских интерфейсов', level: 'В процессе'},
        {id: 3, name: 'CSS', description: 'Язык таблиц стилей', level: 'Изучен'},
        {id: 4, name: 'Git', description: 'Система контроля версий', level: 'Изучен'},
        {id: 5, name: 'JavaScript', description: 'Язык скриптов и сценариев', level: 'Изучен'},
    ];

    const skillsPlus = [
        {id: 6, name: 'Figma', description: 'Инструмент создания дизайна'},
        // {id: 7, name: 'Tailwind', description: 'Фреймворк для создания пользовательских интерфейсов'},
        {id: 8, name: 'SASS / SCSS', description: 'Препроцессоры CSS'},
        {id: 9, name: 'EmailJS', description: 'Библиотека отправки электронной почты'},
        {id: 10, name: 'Adobe Photoshop', description: 'Программа редактирования изображений / дизайна'},
        {id: 11, name: 'PostCSS', description: 'Препроцессор CSS'},
        {id: 12, name: 'ESLint / Prettier', description: 'Инструменты проверки и форматирования кода'},
        {id: 13, name: 'SwiperJS', description: 'Библиотека создания слайдеров'},
    ];
    return (
        <section className="section skills" id="skills">
            <h2 className="section__title">Навыки</h2>
            <span className="section__subtitle">Hard skills </span>
            <div className="skills__container container grid">
                <Frontend title='Технологии:' skills={mainSkills} showIcon={ true } showLevel={ true }/>
                <Languages />
                <Frontend title='Доп. инструменты:' skills={skillsPlus} showIcon={ false } showLevel={ false }/>
            </div>
        </section>
    );
};

export default skills;
