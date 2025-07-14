import './ExperienceSection.scss';

import { experiences } from '~/configs/ExperiencesConfig';

function ExperienceSection() {
    return (
        <section id="experience" className="section">
            <div className="elementor-spacer-inner-background">
                <div className="elementor-spacer-inner space3"></div>
            </div>

            <h1 className="title-section">exp.</h1>
            <div className="box-exp">
                {experiences.map((experience, index) => (
                    <div key={index} className="detail-box-exp text-main light">
                        <div className="time-detail-box-exp">
                            <div className="spe-box-exp">
                                <div className="spe1-exp spe-exp"></div>{' '}
                                <h4 className="from-time-detail-box-exp">{experience.from}</h4>{' '}
                                <div className="spe2-exp spe-exp"></div>
                            </div>
                            <div className="spe-box-exp">
                                <div className="spe2-exp spe-exp"></div>{' '}
                                <h4 className="to-time-detail-box-exp">{experience.to}</h4>{' '}
                                <div className="spe1-exp spe-exp"></div>
                            </div>
                        </div>

                        <div className="content-box-exp">
                            <div className="block-content-box-exp">
                                <p className="name-company-box-exp">
                                    {experience.name_company}
                                    <span className="fullname-company-box-exp">{experience.full_name}</span>
                                </p>
                                <p className="location-company-box-exp">{experience.location}</p>
                            </div>
                            <div className="block-content-box-exp">
                                <p className="job-box-exp">{experience.job}</p>
                                <p className="description">{experience.des_job}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ExperienceSection;
