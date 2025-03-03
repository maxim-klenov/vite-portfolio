const social = () => {
    const socialLinks = [
        {
            href: "https://api.whatsapp.com/send?phone=79964329699&text=%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%90%D0%BD%D0%BE%D0%BD%D0%B8%D0%BC",
            className: "bx bxl-whatsapp",
            ariaLabel: "Contact via WhatsApp",
            title: "Связаться через Whatsapp",
        },
        {
            href: "https://t.me/tgxzz",
            className: "uil uil-telegram",
            ariaLabel: "Contact via Telegram",
            title: "Связаться через Telegram",
        },
        {
            href: "https://github.com/maxim-klenov",
            className: "uil uil-github-alt",
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
                    className="home__social-icon"
                    target="_blank"
                    aria-label={link.ariaLabel}
                    rel="noopener noreferrer"
                >
                    <i className={link.className} />
                </a>
            ))}
        </aside>
    );
};

export default social;
