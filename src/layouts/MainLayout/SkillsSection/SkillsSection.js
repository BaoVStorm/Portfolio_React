import classNames from 'classnames/bind';

import styles from './SkillsSection.scss';
import BoxSkill from './BoxSkill';
import { useCallback, useEffect, useState, useRef } from 'react';
import { useThemeContext } from '~/contexts/ThemeContext';

const cx = classNames.bind(styles);

const highPercent = 88;

const Skills = [
    {
        id: 'programming-language',
        title: 'programming language',
        data: {
            'c, c++': 92,
            'html, css': 88,
            php: 76,
            python: 82,
            java: 75,
            sql: 86,
            javascript: 83,
            'C# With Unity - Game Dev': 85,
        },
    },
    {
        id: 'soft-skill',
        title: 'soft skill',
        data: {
            creativity: 87,
            flexibility: 87,
            communication: 69,
        },
    },
    {
        id: 'hard-skill',
        title: 'hard skill',
        data: {
            'Data Structures & Algorithms': 92,
            'Math & Physics': 97,
            'Design & UI/UX': 90,
        },
    },
];

function SkillsSection() {
    const skillRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const { isLightTheme } = useThemeContext();

    // animation visible bar when scroll on
    useEffect(() => {
        const handleScrollAnimation = () => {
            if (isVisible) return;

            const windowPos = window.scrollY;
            const screenHeight = window.innerHeight;

            if (skillRef.current) {
                const top = skillRef.current.getBoundingClientRect().top + windowPos;

                if (top < windowPos + screenHeight - 400) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScrollAnimation);
        handleScrollAnimation();

        return () => window.removeEventListener('scroll', handleScrollAnimation);
    }, [skillRef.current]);

    const Value = useCallback(
        ({ index }) => {
            let BoxSkills = [];
            let key = 0;
            for (var skill in Skills[index].data) {
                const percent = Skills[index].data[skill];
                BoxSkills.push(
                    <BoxSkill
                        key={key}
                        percent={percent}
                        skill={skill}
                        highPercent={highPercent}
                        isVisible={isVisible}
                    />,
                );
                key++;
            }
            return BoxSkills;
        },
        [isVisible],
    );

    return (
        <section id="skills" className="section">
            <div ref={skillRef} className="elementor-spacer-inner-background">
                <div className={cx('elementor-spacer-inner', 'space2', isLightTheme ? 'light' : 'dark')}></div>
            </div>

            <h1 className={cx('title-section', isLightTheme ? 'light' : 'dark')}>skills</h1>

            <div className="box-skill-1th">
                <div className="head-box-skill">
                    <div>{Skills[0].title}</div>
                </div>
                <div className="body-box-skill body-box-skill-2col" id={cx(Skills[0].id)}>
                    <Value index={0} />
                </div>
            </div>

            <div className="box-skill-1th">
                <div className="box-skill-2th">
                    <div className="head-box-skill">
                        <div>{Skills[1].title}</div>
                    </div>
                    <div className="body-box-skill" id={cx(Skills[1].id)}>
                        <Value index={1} />
                    </div>
                </div>

                <div className="box-skill-2th">
                    <div className="head-box-skill">
                        <div>{Skills[2].title}</div>
                    </div>
                    <div className="body-box-skill" id={cx(Skills[2].id)}>
                        <Value index={2} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
