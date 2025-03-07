import { ReactSVG } from 'react-svg';
const social = () => {
    const socialLinks = [
        {
            href: "https://api.whatsapp.com/send?phone=79964329699&text=%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%90%D0%BD%D0%BE%D0%BD%D0%B8%D0%BC",
            src: "/svg/whatsapp.svg",
            ariaLabel: "Contact via WhatsApp",
            title: "Связаться через Whatsapp",
        },
        {
            href: "https://t.me/tgxzz",
            src: "/svg/telegram.svg",
            ariaLabel: "Contact via Telegram",
            title: "Связаться через Telegram",
        },
        {
            href: "https://github.com/maxim-klenov",
            src: "/svg/github.svg",
            ariaLabel: "View GitHub Profile",
            title: "Перейти в Github",
        },
    ];

    return (
        <aside className="home__social">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    title={link.title}
                    className="home__social-icon react-icon"
                    target="_blank"
                    aria-label={link.ariaLabel}
                    rel="noopener noreferrer"
                >
                    <ReactSVG src={link.src} />
                </a>
            ))}
        </aside>
    );
};

export default social;
