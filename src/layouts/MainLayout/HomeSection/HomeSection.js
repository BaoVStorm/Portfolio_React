import './HomeSection.scss';
import './AnimationHome.scss';
import { Facebook, Github, Zalo } from '~/assets/logo';
import BoxCount from './BoxCount';

import defaultAvatar from '~/assets/images/origin-avatar.jpg';
import defaultAvatar2 from '~/assets/images/avatar.jpeg';

import { name, job, description } from '~/configs/userConfig';

function AnimationJob() {
    return (
        <div id="animation-job">
            <div className="job_drow1 hightlight-job-color"></div>
            <div className="job_drow2 hightlight-job-color"></div>
            <div className="job_drow3 hightlight-job-color"></div>
            <div className="job_drow4 hightlight-job-color"></div>
            <div className="job_drow5 hightlight-job-color"></div>
            <div className="job_drow6 hightlight-job-color"></div>
            <div className="job_drow7 hightlight-job-color"></div>
            <div className="job_drow8 hightlight-job-color"></div>
            <div className="job_drow9 hightlight-job-color"></div>
            <div className="job_drow10 hightlight-job-color"></div>
            <div className="job_drow11 hightlight-job-color"></div>
        </div>
    );
}

function HomeSection() {
    return (
        <section id="home">
            <div id="head-decorate"></div>
            <div id="head-content">
                <div id="count">
                    <BoxCount value={0} type={'Visits'} id={'total-visit'} />
                    <BoxCount value={0} type={'Engagements'} id={'total-engagement'} />
                </div>

                <div id="introduce-text">
                    <p className="hi text-hello">
                        <span className="fa-beat">Hello !</span>
                    </p>
                    <p className="intro text-intro text-main">
                        {"I'm "}
                        <span id="name">{name}</span>.
                    </p>
                    <p className="intro text-intro text-main">
                        {'a '}
                        <span id="job">{job}</span>
                    </p>

                    <AnimationJob />

                    <p id="description" className="des text-des text-main">
                        {description}
                    </p>

                    <div className="follow-container">
                        <p className="des text-des text-main">Follow Me</p>

                        {/* https://icons8.com/icon/DrWXvmB9ORxE/zalo */}
                        <a href="https://www.facebook.com/VStorm.TVB" className="element-icon" target="_blank">
                            <Facebook />
                        </a>
                        <a href="https://github.com/BaoVStorm" className="element-icon" target="_blank">
                            <Github />
                        </a>
                        <a href="https://zalo.me/0915014470" className="element-icon" target="_blank">
                            <Zalo />
                        </a>
                    </div>
                </div>
                <div className="avatar-container">
                    <div className="dot-pattern"></div>
                    <div id="introduce-avatar">
                        <img
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = defaultAvatar;
                            }}
                            src={defaultAvatar}
                            alt="avatar"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeSection;
