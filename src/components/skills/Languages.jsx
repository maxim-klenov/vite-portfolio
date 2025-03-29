import React from 'react';

const Languages = () => {
    const languagesArray = [
        { width: '100%', name: 'Русский', level: 'Родной' },
        { width: '75%', name: 'Английский', level: 'B2 - Продвинутый' },
        { width: '15%', name: 'Французский', level: 'А2 - Базовый' },
    ];
    return (
        <div className="skills__content skills__content-language">
            <h3 className="skills__title">Языки:</h3>
            
            <div className="languages__box">
                {languagesArray.map((lang, index) => (
                    <div className="language" key={index} title={`Уровень: ~${lang.width}`}>
                        <p className="skills__name">{lang.name}</p>
                        <div className="level__bar">
                            <div className="level__bar__inner" style={{ width: lang.width }}></div>
                        </div>
                        
                        <div className="skills__level level__text">{lang.level}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Languages;


        // <div className="skills__content">
        //     <div className="skills__title">Языки</div>
        //     <div className="language" title="100%">
        //         <div className="skills__name">Русский</div>
        //         <div className="level__bar">
        //             <div
        //                 className="level__bar__inner"
        //                 style={{ width: "100%" }}
        //             ></div>
        //         </div>
        //         <div className="skills__level level__text">Родной</div>
        //     </div>
        //     <div className="language" title="75%">
        //         <div className="skills__name">Английский</div>
        //         <div className="level__bar">
        //             <div
        //                 className="level__bar__inner"
        //                 style={{ width: "70%" }}
        //             ></div>
        //         </div>
        //         <div className="skills__level level__text">
        //             B2 - Продвинутый
        //         </div>
        //     </div>
        //     <div className="language" title="15%">
        //         <div className="skills__name">Французский</div>
        //         <div className="level__bar">
        //             <div
        //                 className="level__bar__inner"
        //                 style={{ width: "15%" }}
        //             ></div>
        //         </div>
        //         <div className="skills__level level__text">А2 - Базовый</div>
        //     </div>
        // </div>