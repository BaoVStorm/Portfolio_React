import cx from 'classnames';

import './HomeSection.scss';
import './AnimationHome.scss';
import { Facebook, Github, Zalo } from '~/assets/logo';
import BoxCount from './BoxCount';

import defaultAvatar from '~/assets/images/origin-avatar.jpg';
import AnimationJob from './AnimationJob';
import { name, job, description } from '~/configs/userConfig';
import { useThemeContext } from '~/contexts/ThemeContext';
// import defaultAvatar2 from '~/assets/images/avatar.jpeg';

function HomeSection() {
    const { isLightTheme } = useThemeContext();

    return (
        <section id="home">
            <div id="head-decorate"></div>
            <div id="head-content">
                <div id="count" className={cx(isLightTheme ? 'light' : 'dark')}>
                    <BoxCount value={0} type={'Visits'} id={'total-visit'} />
                    <BoxCount value={0} type={'Engagements'} id={'total-engagement'} />
                </div>

                <div id="introduce-text">
                    <p className={cx('hi', 'text-hello', isLightTheme ? 'light' : 'dark')}>
                        <span className="fa-beat">Hello !</span>
                    </p>
                    <p className={cx('intro', 'text-intro', 'text-main', isLightTheme ? 'light' : 'dark')}>
                        {"I'm "}
                        <span id="name" className={cx(isLightTheme ? 'light' : 'dark')}>
                            {name}
                        </span>
                        .
                    </p>
                    <p className={cx('intro', 'text-intro', 'text-main', isLightTheme ? 'light' : 'dark')}>
                        {'a '}
                        <span id="job" className={cx(isLightTheme ? 'light' : 'dark')}>{job}</span>
                    </p>

                    <AnimationJob isLightTheme={isLightTheme}/>

                    <p id="description" className={cx('des', 'text-des', 'text-main', isLightTheme ? 'light' : 'dark')}>
                        {description}
                    </p>

                    <div className="follow-container">
                        <p className={cx('des', 'text-des', 'text-main', isLightTheme ? 'light' : 'dark')}>Follow Me</p>

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
                <div className={cx('avatar-container', isLightTheme ? 'light' : 'dark')}>
                    <div className={cx('dot-pattern', isLightTheme ? 'light' : 'dark')}></div>
                    <div id="introduce-avatar" className={cx(isLightTheme ? 'light' : 'dark')}>
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
