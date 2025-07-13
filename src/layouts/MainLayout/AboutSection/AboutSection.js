import { Fragment } from 'react';

import './AboutSection.scss';

const GPA = '3.6x';

const aboutInfos = [
    {
        name: 'name',
        value: 'Tran Vu Bao',
    },
    {
        name: 'birthday',
        value: '27. 11. 2004.',
    },
    {
        name: 'email',
        value: 'tranvubao2004@gmail.com',
    },
    {
        name: 'phone',
        value: '(+84)915014470',
    },
    {
        name: 'location',
        value: 'Viet Nam, Quang Ngai',
    },
    {
        name: 'interests',
        value: 'Games, Code, Music',
    },
    {
        name: 'interests',
        value: 'Games, Code, Music',
    },
];

const achievements = [
    {
        name: 'awards',
        value: 19,
    },
    {
        name: 'xp years',
        value: '0+',
    },
    {
        name: 'projects',
        value: 10,
    },
    {
        name: 'gpa',
        value: GPA,
    },
];

const title_about = {
    title: 'Passionate Developer & Innovator',
    content:
        'I am always looking for ways to optimize and develop software to deliver the best user experience. With over a year of hands-on experience in personal projects and coding competitions, I constantly strive to learn and improve my skills.',
};

const url_cv = 'https://drive.google.com/file/d/1r6y_HA7CEfGvXZrtEGg5j2vPDdVZyWIo/view?usp=sharing';

function AboutSection() {
    return (
        <section id="about" className="section">
            <div className="elementor-spacer-inner-background">
                <div className="elementor-spacer-inner space1"></div>
            </div>

            <h1 className="title-section">about</h1>
            <div className="about-info text-main">
                {aboutInfos.map((info, index) => (
                    <div key={index}>
                        <h3 className="info-title">{info.name}</h3>
                        <ul className="info-content">
                            <li>{info.value}</li>
                        </ul>
                    </div>
                ))}
                <h3 className="info-title">educate</h3>
                <ul className="info-content">
                    <li>Good Student Certificates (Grade 1-12), </li>
                    <li>
                        GPA: <span id="gpa">{GPA}</span>
                    </li>
                </ul>
            </div>
            <div className="about-achie text-main">
                <div className="about-achie-head">
                    {achievements.map((achieve, index) => (
                        <div key={index} className="about-achie-box">
                            <h3 className="about-achie-box-title">{achieve.name}</h3>
                            <h1 className="about-achie-box-content light">{achieve.value}</h1>
                        </div>
                    ))}
                </div>
                <div className="about-achie-body">
                    <div className="about-chie-des-title">
                        <h1 id="about-des-title">{title_about.title}</h1>
                    </div>
                    <div className="about-chie-des-content">
                        <p id="about-des-content">{title_about.content}</p>
                    </div>

                    <a id="button-downloadcv" className="background-main" href={url_cv} target="_blank">
                        Download My CV
                        <i className="fa-solid fa-download"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
