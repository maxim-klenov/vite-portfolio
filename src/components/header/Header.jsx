import { useState, useEffect } from 'react'
import { ReactSVG } from 'react-svg'
import './header.css'

const Header = () => {
    /*---------------  nav links ---------------- */
    const navLinks = [
        {href: "#home", iconSrc: "/svg/estate.svg", text: "Главная"},
        {href: "#about", iconSrc: "/svg/user.svg", text: "Обо мне"},
        {href: "#skills", iconSrc: "/svg/file-alt.svg", text: "Навыки"},
        {href: "#portfolio", iconSrc: "/svg/scenery.svg", text: "Проекты"},
        {href: "#contact", iconSrc: "/svg/message.svg", text: "Написать"},
    ]
    /*--------------- toggle menu --------------- */
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    /*--------------- bottom line --------------- */
    const [borBottom, setBorBottom] = useState(false);
    useEffect(() => {
        const toggleScrollBor = () => {
            const w = window.scrollY;
            if (parseInt(window.scrollY) > 80) {
                if (!borBottom) {
                    setBorBottom(!borBottom)
                }
            }
            else {
                if (borBottom) {
                    setBorBottom(borBottom === false)
                }
            }
        }

        window.addEventListener('scroll', toggleScrollBor);
        return () => {
            window.removeEventListener('scroll', toggleScrollBor);
        }
    }, [borBottom])

    return (
        <header className="header">
            <nav className={`nav container ${borBottom ? 'nav-border-bottom' : ''} `}>
                <a href="index.html" className="nav__logo">
                    Klenov
                </a>

                <div className={isMenuOpen ? 'nav__menu show-menu' : 'nav__menu'}>
                    <ul className="nav__list grid">
                        {navLinks.map((navLink, i) => (
                            <li key={i} className='nav__item'>
                                <a href={navLink.href} className='nav__link'>
                                <ReactSVG src={navLink.iconSrc} className="nav__icon react-icon"/>
                                {navLink.text}
                                </a>
                            </li>
                        ))}  
                    </ul>
                    <ReactSVG src="/svg/close-burger.svg" className='nav__close react-icon' onClick={handleToggleMenu}/>
                </div>

                {/*--------------- media toggle nav btn --------------- */}
                    <ReactSVG src="/svg/burger.svg" className='nav__toggle react-icon' onClick={handleToggleMenu}/>
            </nav>
        </header>
    )
}

export default Header