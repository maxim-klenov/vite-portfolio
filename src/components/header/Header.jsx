import { useState, useEffect } from 'react'
import './header.css'

const Header = () => {
    /*---------------  nav links ---------------- */
    const navLinks = [
        {href: "#home", icon: "uil-estate", text: "Главная"},
        {href: "#about", icon: "uil-user", text: "Обо мне"},
        {href: "#skills", icon: "uil-file-alt", text: "Навыки"},
        {href: "#portfolio", icon: "uil-scenery", text: "Проекты"},
        {href: "#contact", icon: "uil-message", text: "Написать"},
    ]
    /*--------------- toggle menu --------------- */
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    /*--------------- bottom line --------------- */
    const [borBottom, setBorBottom] = useState(false);
    const [height, setHeight] = useState();
//  parseInt(window.scrollY);
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
                                <i className={`uil ${navLink.icon} nav__icon`}></i>
                                {navLink.text}
                                </a>
                            </li>
                        ))}  
                    </ul>
                    <i className="uil uil-times nav__close" onClick={handleToggleMenu} ></i>
                </div>

                {/*--------------- media toggle nav btn --------------- */}
                <div className="nav__toggle" onClick={handleToggleMenu}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header