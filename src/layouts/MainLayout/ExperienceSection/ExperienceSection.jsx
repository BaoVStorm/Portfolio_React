import './ExperienceSection.scss';

import { experiences } from '~/configs/ExperiencesConfig';

function ExperienceSection() {
    return (
        <section id="experience" class="section">
            <div class="elementor-spacer-inner-background">
                <div class="elementor-spacer-inner space3"></div>
            </div>

            <h1 class="title-section">exp.</h1>
            <div class="box-exp">
                {experiences.map((experience, index) => (
                    <div class="detail-box-exp text-main light">
                        <div class="time-detail-box-exp">
                            <div class="spe-box-exp">
                                <div class="spe1-exp spe-exp"></div>{' '}
                                <h4 class="from-time-detail-box-exp">{experience.from}</h4>{' '}
                                <div class="spe2-exp spe-exp"></div>
                            </div>
                            <div class="spe-box-exp">
                                <div class="spe2-exp spe-exp"></div>{' '}
                                <h4 class="to-time-detail-box-exp">{experience.to}</h4>{' '}
                                <div class="spe1-exp spe-exp"></div>
                            </div>
                        </div>

                        <div class="content-box-exp">
                            <div class="block-content-box-exp">
                                <p class="name-company-box-exp">
                                    {experience.name_company}
                                    <span class="fullname-company-box-exp">{experience.full_name}</span>
                                </p>
                                <p class="location-company-box-exp">{experience.location}</p>
                            </div>
                            <div class="block-content-box-exp">
                                <p class="job-box-exp">{experience.job}</p>
                                <p class="description">{experience.des_job}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ExperienceSection;
