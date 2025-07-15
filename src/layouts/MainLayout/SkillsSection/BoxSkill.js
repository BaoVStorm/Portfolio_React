import cx from 'classnames';

import { useThemeContext } from '~/contexts/ThemeContext';
import { useRef, useEffect, useState } from 'react';

function BoxSkill({ percent, skill, highPercent, isVisible = false }) {
    const { isLightTheme } = useThemeContext();
    const nonsliderRef = useRef(null);
    const [bgColor, setBgColor] = useState(null);

    useEffect(() => {
        if (nonsliderRef.current) {
            const computedColor = window.getComputedStyle(nonsliderRef.current).backgroundColor;
            setBgColor(computedColor);
        }
    }, [nonsliderRef]);

    const percentColor = 50 + ((percent - highPercent) * 50) / (100 - highPercent);

    const mixColor = `color-mix(in srgb, ${bgColor} ${100 - percentColor}%, rgb(255, 34, 34) ${percentColor}%)`;

    return (
        <div className="detail-box-skill">
            <span className={cx('percent-nonslider-skill', isLightTheme ? 'light' : 'dark')}>{percent}</span>
            <div className="content-box-skill">
                <span className={cx('name-detail-box-skill', 'text-main', isLightTheme ? 'light' : 'dark')}>
                    {skill}
                </span>
                <div className="nonslider-skill">
                    <div
                        ref={nonsliderRef}
                        className={cx('nonslider-skill-detail', isLightTheme ? 'light' : 'dark', {
                            'start-nonslider': isVisible,
                        })}
                        style={{ width: `${percent}%`, backgroundColor: bgColor ? mixColor : false }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default BoxSkill;
