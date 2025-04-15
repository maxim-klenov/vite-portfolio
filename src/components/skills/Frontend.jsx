import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

const Frontend = ({title, skills, showIcon, showLevel }) => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">{title}</h3>
            
            <div className="skills__box">
                {skills.map((skill, index) => (
                    <div className="skills__data" key={index}>
                        {showIcon && <ReactSVG src={skill.src} className="skills__data-svg"/>}
                        <div>
                            <div className="skills__name">
                                <span className="tooltip" data-content={skill.description}>
                                    {skill.name}
                                </span>
                            </div>
                            {showLevel && <span className="skills__level">{skill.level}</span>}
                            {/* ================ */}
                            {/* <div className="skills__modal">
                                <div className="skills-modal-content">
                                    <p className="modal__description">{skill.description}</p>
                                </div>
                            </div> */}
                            {/* ============== */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

Frontend.propTypes = {
    title: PropTypes.string.isRequired,
    showIcon: PropTypes.bool.isRequired,
    showLevel: PropTypes.bool.isRequired,
};

export default Frontend;