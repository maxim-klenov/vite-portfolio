import { useState, useEffect } from 'react'
import { ReactSVG } from 'react-svg'
import { socialLinks } from '../home/resources/socialLinks'
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
        if (!isMenuOpen) {
            document.body.classList.toggle('body__hidden');
        } else {
            document.body.classList.toggle('body__hidden');
        }
    };
    const handleNavLinkClick = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('body__hidden');
      };
    /*--------------- bottom line --------------- */
    const [borBottom, setBorBottom] = useState(false);
    useEffect(() => {
        const toggleScrollBor = () => {
            const w = window.scrollY;
            if (parseInt(w) > 80) {
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
                    <ReactSVG src="/svg/close-burger.svg" className='nav__close react-icon' onClick={handleToggleMenu}/>
                    <ul className="nav__list grid">
                        {navLinks.map((navLink, i) => (
                            <li key={i} className='nav__item'>
                                <a href={navLink.href} onClick={handleNavLinkClick} className='nav__link'>
                                <ReactSVG src={navLink.iconSrc} className="nav__icon react-icon"/>
                                {navLink.text}
                                </a>
                            </li>
                        ))}  
                    </ul>
                    <ul className="nav__menu-social">
                        {socialLinks.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.href} 
                                aria-label={link.ariaLabel} 
                                title={link.title}
                                className="nav__menu-social__link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ReactSVG src={link.src} alt={link.title} className="react-icon"/>
                            </a>
                        ))}
                    </ul>
                </div>

                {/*--------------- media toggle nav btn --------------- */}
                    <ReactSVG src="/svg/burger.svg" className='nav__toggle react-icon' onClick={handleToggleMenu}/>
            </nav>
        </header>
    )
}

export default Header