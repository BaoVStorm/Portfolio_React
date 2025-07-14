import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { useThemeContext } from '~/contexts/ThemeContext';
import { useGlobalHeaderContext } from '~/contexts/GlobalHeaderContext';
import styles from './BoxBar.scss';

const cx = classNames.bind(styles);

function BoxBar() {
    const { isMenuOpen, setIsMenuOpen } = useGlobalHeaderContext();
    const { isLightTheme, setIsLightTheme } = useThemeContext();

    return (
        <div className={cx('box-bar')}>
            <div className={cx('menu-bar', isLightTheme ? 'light' : 'dark')} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <FontAwesomeIcon className={cx('menu-icon')} icon={faBars} />
            </div>

            <div
                className={cx('dark-light-bar', isLightTheme ? 'switch-light' : 'switch-dark')}
                onClick={() => setIsLightTheme(!isLightTheme)}
            >
                <div className={cx('switch-padding')}>
                    <div className={cx('switch-bar', isLightTheme ? 'switch-light' : 'switch-dark')}>
                        <div className={cx('switch-bar-dark')}></div>
                    </div>
                </div>
                <div className={cx('switch-border')}></div>
            </div>
        </div>
    );
}

export default BoxBar;
