import classNames from 'classnames/bind';
import { useGlobalHeaderContext } from '~/contexts/GlobalHeaderContext';
import { useEffect, useState } from 'react';

import styles from './Header.scss';
import './AnimationHeader.scss';
import SubHeader from './SubHeader';

import subHeaders from '~/configs/subHeaderConfig';
import LogoHeader from './LogoHeader';

const cx = classNames.bind(styles);

function Header() {
    const { isMenuOpen, setIsMenuOpen } = useGlobalHeaderContext();
    const [activeSection, setActiveSection] = useState(null);

    // event scroll menu
    useEffect(() => {
        const handleScroll = () => {
            const windowPos = window.scrollY;

            document.querySelectorAll('section').forEach((section) => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                const bottom = height + top / 2;

                if (bottom - height / 2 > windowPos && windowPos >= top - 200) {
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
        <header id={cx('header')} className={cx({ 'close-header': isMenuOpen })}>
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
