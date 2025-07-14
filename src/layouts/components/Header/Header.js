import classNames from 'classnames/bind';
import { useGlobalHeaderContext } from '~/contexts/GlobalHeaderContext';
import { useEffect, useState } from 'react';

import styles from './Header.scss';
import SubHeader from './SubHeader';

import { useThemeContext } from '~/contexts/ThemeContext';
import subHeaders from '~/configs/Header/subHeaderConfig';
import LogoHeader from './LogoHeader';

const cx = classNames.bind(styles);

function Header() {
    const { isLightTheme, setIsLightTheme } = useThemeContext();
    const { isMenuOpen, setIsMenuOpen } = useGlobalHeaderContext();
    const [activeSection, setActiveSection] = useState(null);

    // event scroll menu
    useEffect(() => {
        const handleScroll = () => {
            const windowPos = window.scrollY;

            document.querySelectorAll('section').forEach((section) => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                const bottom = height + top;

                if (bottom - height / 2 > windowPos && windowPos >= top - 300) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id='header' className={cx({ 'close-header': isMenuOpen }, isLightTheme ? 'light' : 'dark')}>
            <LogoHeader />

            <ul id={cx('menu')} className={cx('header-content')}>
                {subHeaders.map((subHeader, index) => (
                    <SubHeader key={index} activeSection={activeSection} {...subHeader} />
                ))}
            </ul>
        </header>
    );
}

export default Header;
