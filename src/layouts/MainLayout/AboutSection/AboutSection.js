import cx from 'classnames';
import { useThemeContext } from '~/contexts/ThemeContext';

import './AboutSection.scss';
import { GPA, aboutInfos, achievements, title_about, url_cv } from '~/configs/About';

function AboutSection() {
    const { isLightTheme, setIsLightTheme } = useThemeContext();

    return (
        <section id="about" className="section">
            <div className="elementor-spacer-inner-background">
                <div className={cx('elementor-spacer-inner', 'space1', isLightTheme ? 'light' : 'dark')}></div>
            </div>

            <h1 className={cx('title-section', isLightTheme ? 'light' : 'dark')}>about</h1>
            <div className={cx('about-info', 'text-main', isLightTheme ? 'light' : 'dark')}>
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
            <div className={cx('about-achie', 'text-main', isLightTheme ? 'light' : 'dark')}>
                <div className="about-achie-head">
                    {achievements.map((achieve, index) => (
                        <div key={index} className="about-achie-box">
                            <h3 className="about-achie-box-title">{achieve.name}</h3>
                            <h1 className={cx('about-achie-box-content', )}>{achieve.value}</h1>
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

                    <a
                        id="button-downloadcv"
                        className={cx('background-main', isLightTheme ? 'light' : 'dark')}
                        href={url_cv}
                        target="_blank"
                    >
                        Download My CV
                        <i className="fa-solid fa-download"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
