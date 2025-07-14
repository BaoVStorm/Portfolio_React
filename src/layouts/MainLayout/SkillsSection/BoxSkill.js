import classNames from 'classnames';

import { useRef, useEffect, useState } from 'react';

function BoxSkill({ percent, skill, highPercent, isVisible = false }) {
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
            <span className="percent-nonslider-skill light">{percent}</span>
            <div className="content-box-skill">
                <span className="name-detail-box-skill text-main">{skill}</span>
                <div className="nonslider-skill">
                    <div
                        ref={nonsliderRef}
                        className={classNames('nonslider-skill-detail', 'light', { 'start-nonslider': isVisible })}
                        style={{ width: `${percent}%`, backgroundColor: bgColor ? mixColor : false }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default BoxSkill;
