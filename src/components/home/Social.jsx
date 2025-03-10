import { ReactSVG } from 'react-svg';
import { socialLinks } from './resources/socialLinks.js';
const social = () => {
    return (
        <aside className="home__social">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    title={link.title}
                    className="home__social-icon"
                    target="_blank"
                    aria-label={link.ariaLabel}
                    rel="noopener noreferrer"
                >
                    <ReactSVG src={link.src} className="react-icon"/>
                </a>
            ))}
        </aside>
    );
};

export default social;
